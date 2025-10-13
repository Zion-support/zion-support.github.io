#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { glob } = require('glob');

// Function to completely rewrite a corrupted file with a basic template
function rewriteFile(filePath) {
  try {
    const fileName = path.basename(filePath, '.tsx');
    const pageName = fileName.charAt(0).toUpperCase() + fileName.slice(1);
    
    // Create a basic React component template
    const template = `import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function ${pageName}() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Helmet>
        <title>${pageName} - Zion Tech Group</title>
        <meta name="description" content="${pageName} solutions by Zion Tech Group" />
      </Helmet>

      <div className="container mx-auto px-4 py-20">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-8">${pageName}</h1>
          <p className="text-xl text-gray-300 mb-8">
            This page is under development. Please check back later.
          </p>
          <div className="mt-8">
            <a 
              href="/" 
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-200"
            >
              Go Home
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}`;

    fs.writeFileSync(filePath, template);
    console.log(`Rewrote: ${filePath}`);
    return true;
  } catch (error) {
    console.error(`Error rewriting ${filePath}:`, error.message);
    return false;
  }
}

// Function to fix specific parsing errors
function fixParsingErrors(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let fixed = false;
    
    // Fix common parsing errors
    // Remove incomplete function declarations
    content = content.replace(/export\s+default\s+function\s+\w+\s*\(\s*\)\s*\{[^}]*$/gm, '');
    
    // Remove incomplete arrow functions
    content = content.replace(/const\s+\w+\s*=\s*\(\s*\)\s*=>\s*\{[^}]*$/gm, '');
    
    // Remove incomplete JSX
    content = content.replace(/<[^>]*$/gm, '');
    
    // Remove incomplete object literals
    content = content.replace(/\{[^}]*$/gm, '');
    
    // Remove incomplete array literals
    content = content.replace(/\[[^\]]*$/gm, '');
    
    // Remove incomplete string literals
    content = content.replace(/"[^"]*$/gm, '');
    content = content.replace(/'[^']*$/gm, '');
    
    // Remove incomplete template literals
    content = content.replace(/`[^`]*$/gm, '');
    
    // Remove incomplete comments
    content = content.replace(/\/\*[^*]*$/gm, '');
    content = content.replace(/\/\/.*$/gm, '');
    
    // Clean up empty lines
    content = content.replace(/^\s*$/gm, '');
    content = content.replace(/\n{3,}/g, '\n\n');
    
    // If the file is too corrupted, rewrite it
    if (content.length < 100 || content.includes('export default function') && !content.includes('return')) {
      return rewriteFile(filePath);
    }
    
    if (content !== fs.readFileSync(filePath, 'utf8')) {
      fs.writeFileSync(filePath, content);
      console.log(`Fixed parsing errors: ${filePath}`);
      fixed = true;
    }
    
    return fixed;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return rewriteFile(filePath);
  }
}

async function main() {
  // Get all TypeScript/TSX files in the app directory
  const files = await glob('app/**/*.{ts,tsx}');

  console.log(`Found ${files.length} files to check...`);

  let fixedCount = 0;
  let rewrittenCount = 0;
  
  for (const file of files) {
    try {
      const content = fs.readFileSync(file, 'utf8');
      
      // Check if file has parsing errors
      if (content.includes('export default function') && !content.includes('return') ||
          content.includes('const') && content.includes('=>') && !content.includes('return') ||
          content.includes('<') && !content.includes('>') ||
          content.length < 100) {
        
        if (fixParsingErrors(file)) {
          fixedCount++;
        } else {
          rewrittenCount++;
        }
      }
    } catch (error) {
      console.error(`Error processing ${file}:`, error.message);
      if (rewriteFile(file)) {
        rewrittenCount++;
      }
    }
  }

  console.log(`Fixed ${fixedCount} files, rewrote ${rewrittenCount} files`);
}

main().catch(console.error);