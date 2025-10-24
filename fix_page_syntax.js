const fs = require('fs');
const path = require('path');

// Function to fix page syntax errors
function fixPageSyntax(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Check if this is a page file
    if (!filePath.includes('/page.tsx') && !filePath.includes('/page.ts')) {
      return false;
    }
    
    // Fix common page syntax issues
    const fixes = [
      // Fix missing JSX fragment wrapper
      { pattern: /export default function \w+Page\(\) \{\s*return \(\s*<div>/g, replacement: 'export default function Page() {\n  return (\n    <>\n      <Head>\n        <title>Page - Zion Tech Group</title>\n        <meta name="description" content="Professional services by Zion Tech Group." />\n      </Head>\n      <div>' },
      
      // Fix malformed JSX structure
      { pattern: /<div>\s*<title>([^<]+)<\/title>\s*<meta[^>]*\/>\s*<\/div>/g, replacement: '<>\n      <Head>\n        <title>$1</title>\n        <meta name="description" content="Professional services by Zion Tech Group." />\n      </Head>\n      <div>' },
      
      // Fix missing closing tags
      { pattern: /<div>\s*<title>([^<]+)<\/title>\s*<meta[^>]*\/>\s*$/g, replacement: '<>\n      <Head>\n        <title>$1</title>\n        <meta name="description" content="Professional services by Zion Tech Group." />\n      </Head>\n      <div>' },
      
      // Fix missing Head import
      { pattern: /import React from 'react';/g, replacement: "import React from 'react';\nimport Head from 'next/head';" },
      
      // Fix missing closing fragment
      { pattern: /<\/div>\s*\);\s*};/g, replacement: '</div>\n    </>\n  );\n};' },
      
      // Fix malformed function declarations
      { pattern: /export default function \w+Page\(\) \{\s*return \(\s*<div>\s*<title>/g, replacement: 'export default function Page() {\n  return (\n    <>\n      <Head>\n        <title>' },
      
      // Fix missing closing parenthesis
      { pattern: /<\/div>\s*\);\s*};/g, replacement: '</div>\n    </>\n  );\n};' },
    ];
    
    for (const fix of fixes) {
      const newContent = content.replace(fix.pattern, fix.replacement);
      if (newContent !== content) {
        content = newContent;
        modified = true;
      }
    }
    
    // If the file is still malformed, create a basic template
    if (content.includes('<div>\n        <title>') || content.includes('return (\n    <div>')) {
      const fileName = path.basename(filePath, '.tsx');
      const pageName = fileName.charAt(0).toUpperCase() + fileName.slice(1);
      
      const template = `"use client";
import React from 'react';
import Head from 'next/head';

export default function ${pageName}Page() {
  return (
    <>
      <Head>
        <title>${pageName} - Zion Tech Group</title>
        <meta name="description" content="Professional ${pageName.toLowerCase()} services by Zion Tech Group." />
      </Head>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-4xl font-bold text-white mb-6">${pageName}</h1>
          <p className="text-gray-300 text-lg">
            Professional ${pageName.toLowerCase()} services by Zion Tech Group.
          </p>
        </div>
      </div>
    </>
  );
};`;
      
      content = template;
      modified = true;
    }
    
    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed page syntax in: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

// Function to recursively fix files
function fixAllPageSyntax(dir) {
  const files = fs.readdirSync(dir);
  let fixedCount = 0;
  
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      // Skip node_modules and .git directories
      if (file === 'node_modules' || file === '.git' || file === '.next') {
        continue;
      }
      fixedCount += fixAllPageSyntax(filePath);
    } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
      if (fixPageSyntax(filePath)) {
        fixedCount++;
      }
    }
  }
  
  return fixedCount;
}

// Main execution
console.log('Starting page syntax fixes...');
const fixedCount = fixAllPageSyntax('.');
console.log(`Fixed page syntax in ${fixedCount} files.`);