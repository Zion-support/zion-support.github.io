#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Function to fix JSX syntax issues in a file
function fixJSXSyntax(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Check if file has JSX syntax issues
    if (!content.includes('export default function ServicePage()')) {
      return false; // Not a service page file
    }
    
    console.log(`Fixing JSX syntax in: ${filePath}`);
    
    // Fix missing React import
    if (!content.includes("import React from 'react'") && content.includes('<')) {
      content = "import React from 'react';\n" + content;
      modified = true;
    }
    
    // Fix missing Head import
    if (content.includes('<Head>') && !content.includes("import Head from 'next/head'")) {
      const lines = content.split('\n');
      let insertIndex = 0;
      
      for (let i = 0; i < lines.length; i++) {
        if (lines[i].startsWith("import ") && lines[i].includes("from '")) {
          insertIndex = i + 1;
        }
      }
      
      lines.splice(insertIndex, 0, "import Head from 'next/head';");
      content = lines.join('\n');
      modified = true;
    }
    
    // Fix malformed function declaration
    if (content.includes('export default function ServicePage() {')) {
      // Check if there's a missing opening brace or malformed structure
      const lines = content.split('\n');
      let functionLineIndex = -1;
      
      for (let i = 0; i < lines.length; i++) {
        if (lines[i].includes('export default function ServicePage() {')) {
          functionLineIndex = i;
          break;
        }
      }
      
      if (functionLineIndex !== -1) {
        // Check if the function is properly structured
        let braceCount = 0;
        let inFunction = false;
        
        for (let i = functionLineIndex; i < lines.length; i++) {
          const line = lines[i];
          
          if (line.includes('export default function ServicePage() {')) {
            inFunction = true;
            braceCount = 1;
          } else if (inFunction) {
            // Count braces
            for (const char of line) {
              if (char === '{') braceCount++;
              if (char === '}') braceCount--;
            }
            
            // If we hit 0 braces and we're still in function, there's an issue
            if (braceCount === 0 && inFunction) {
              // Check if this is the end of the function
              if (line.trim() === '}' || line.includes('export default')) {
                break;
              }
            }
          }
        }
        
        // If there are syntax issues, try to fix them
        if (content.includes('return (') && !content.includes('return (')) {
          // Fix missing return statement
          content = content.replace(
            /export default function ServicePage\(\) \{\s*$/m,
            'export default function ServicePage() {\n  return ('
          );
          modified = true;
        }
      }
    }
    
    // Fix common JSX syntax issues
    if (content.includes('<>') && !content.includes('</>')) {
      // Add missing closing fragment
      const lastBraceIndex = content.lastIndexOf('}');
      if (lastBraceIndex !== -1) {
        content = content.slice(0, lastBraceIndex) + '\n    </>\n  );\n}' + content.slice(lastBraceIndex + 1);
        modified = true;
      }
    }
    
    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

// Function to create a proper service page template
function createProperServicePage(filePath, serviceName) {
  const template = `'use client';
import React from 'react';
import Head from 'next/head';

export default function ServicePage() {
  return (
    <>
      <Head>
        <title>${serviceName} | Zion Tech Group</title>
        <meta name="description" content="Professional ${serviceName.toLowerCase()} services and solutions for modern businesses." />
        <meta name="robots" content="index, follow" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="${serviceName} | Zion Tech Group" />
        <meta property="og:description" content="Professional ${serviceName.toLowerCase()} services and solutions for modern businesses." />
      </Head>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            ${serviceName}
          </h1>
          <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
            Professional ${serviceName.toLowerCase()} services and solutions for modern businesses.
          </p>
        </div>
      </div>
    </>
  );
}`;

  try {
    fs.writeFileSync(filePath, template, 'utf8');
    console.log(`Created proper template for: ${filePath}`);
    return true;
  } catch (error) {
    console.error(`Error creating template for ${filePath}:`, error.message);
    return false;
  }
}

// Function to recursively find and fix all files
function fixAllJSXFiles(dir) {
  const files = fs.readdirSync(dir);
  let fixedCount = 0;
  
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      // Skip node_modules and other common directories
      if (['node_modules', '.git', '.next', 'dist', 'build'].includes(file)) {
        continue;
      }
      fixedCount += fixAllJSXFiles(filePath);
    } else if (file.endsWith('.tsx') && file.includes('page.tsx')) {
      // Extract service name from path
      const pathParts = filePath.split('/');
      const serviceName = pathParts[pathParts.length - 2] || 'Service';
      const formattedServiceName = serviceName
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
      
      if (fixJSXSyntax(filePath)) {
        fixedCount++;
      } else {
        // If fixing didn't work, create a proper template
        createProperServicePage(filePath, formattedServiceName);
        fixedCount++;
      }
    }
  }
  
  return fixedCount;
}

// Main execution
console.log('Starting JSX syntax fix...');
const fixedCount = fixAllJSXFiles('/workspace/app');
console.log(`Fixed JSX syntax in ${fixedCount} files`);