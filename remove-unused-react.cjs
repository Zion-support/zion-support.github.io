#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Function to remove unused React imports
function removeUnusedReactImports(content) {
  // Check if React is imported but not used
  if (content.includes('import React') && !content.includes('<React.') && !content.includes('React.')) {
    // Check if React is used in JSX (which doesn't require explicit React import in modern React)
    const jsxPattern = /<[A-Z][a-zA-Z0-9]*/g;
    const hasJsx = jsxPattern.test(content);
    
    if (!hasJsx) {
      // Remove React import
      content = content.replace(/import React[^;]+;/g, '');
    }
  }
  
  return content;
}

// Function to fix a file
function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    const originalContent = content;
    
    // Remove unused React imports
    content = removeUnusedReactImports(content);
    
    // Clean up multiple empty lines
    content = content.replace(/\n\s*\n\s*\n/g, '\n\n');
    
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content);
      console.log(`Removed unused React import from: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

// Find all TypeScript/TSX files
const files = glob.sync('app/**/*.{ts,tsx}', { cwd: process.cwd() });

console.log(`Checking ${files.length} TypeScript files for unused React imports...`);

let fixedCount = 0;
for (const file of files) {
  if (fixFile(file)) {
    fixedCount++;
  }
}

console.log(`Fixed ${fixedCount} files`);