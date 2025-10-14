#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { glob } from 'glob';

// Function to fix common syntax errors in a file
function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Fix malformed import statements
    if (content.includes("import React from  from 'react';")) {
      content = content.replace(/import React from  from 'react';/g, "import React from 'react';");
      modified = true;
    }

    // Fix 'use client' placement
    if (content.includes("'use client'\nexport default")) {
      content = content.replace(/'use client'\nexport default/g, "'use client';\nimport React from 'react';\n\nexport default");
      modified = true;
    }

    // Fix malformed closing tags and extra characters
    content = content.replace(/\s*}\s*''\s*$/, '');
    content = content.replace(/\s*}\s*\);\s*}\s*''\s*$/, '');
    content = content.replace(/\s*\);\s*}\s*''\s*$/, '');
    content = content.replace(/\s*}\s*\);\s*}\s*$/, '');
    content = content.replace(/\s*\);\s*}\s*$/, '');
    
    // Fix extra closing tags after proper component end
    content = content.replace(/\s*}\s*<\/button><\/div><\/div><\/div><\/div>\s*\);\s*}\s*''\s*$/, '');
    content = content.replace(/\s*}\s*<\/button><\/div><\/div><\/div><\/div>\s*\);\s*}\s*$/, '');
    
    // Fix unterminated string literals with extra quotes
    content = content.replace(/(\w+):\s*"([^"]*)"\s*,"/g, '$1: "$2",');
    content = content.replace(/(\w+):\s*"([^"]*)"\s*"}/g, '$1: "$2"');
    
    // Fix duplicate property assignments
    content = content.replace(/(\w+):\s*"([^"]*)",\s*\1:\s*"([^"]*)"\s*}/g, '$1: "$2"');
    
    // Fix CSS class typos
    content = content.replace(/bg-gray-90o0/g, 'bg-gray-900');
    content = content.replace(/text-gray-30o0/g, 'text-gray-300');
    
    // Fix semicolon issues
    content = content.replace(/This page is under development\.;/g, 'This page is under development.');
    
    // Fix malformed JSX
    content = content.replace(/Get Started Today;/g, 'Get Started Today');
    
    // Remove extra empty lines at the end
    content = content.replace(/\n\s*\n\s*$/, '\n');

    if (modified || content !== fs.readFileSync(filePath, 'utf8')) {
      fs.writeFileSync(filePath, content);
      console.log(`Fixed: ${filePath}`);
      return true;
    }
    return false;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

// Main function
async function main() {
  // Get all TypeScript/JavaScript files in the app directory
  const files = await glob('app/**/*.{ts,tsx,js,jsx}', { cwd: process.cwd() });

  console.log(`Found ${files.length} files to check...`);

  let fixedCount = 0;
  for (const file of files) {
    if (fixFile(path.join(process.cwd(), file))) {
      fixedCount++;
    }
  }

  console.log(`Fixed ${fixedCount} files.`);
}

main().catch(console.error);