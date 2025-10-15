const fs = require('fs');
const path = require('path');

// Function to fix unused React imports
function fixUnusedImports(content) {
  // Remove unused React imports
  content = content.replace(/import React from 'react';\n/g, '');
  content = content.replace(/import React, { ([^}]+) } from 'react';\n/g, 'import { $1 } from "react";\n');
  
  return content;
}

// Function to fix a single file
function fixFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const fixedContent = fixUnusedImports(content);
    
    if (content !== fixedContent) {
      fs.writeFileSync(filePath, fixedContent);
      console.log(`Fixed: ${filePath}`);
    }
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
}

// Find all TypeScript/JavaScript files
function findFiles(dir) {
  const files = [];
  
  function traverse(currentDir) {
    try {
      const items = fs.readdirSync(currentDir);
      
      for (const item of items) {
        const fullPath = path.join(currentDir, item);
        const stat = fs.statSync(fullPath);
        
        if (stat.isDirectory()) {
          traverse(fullPath);
        } else if (item.endsWith('.tsx') || item.endsWith('.ts')) {
          files.push(fullPath);
        }
      }
    } catch (error) {
      // Skip directories that can't be read
    }
  }
  
  traverse(dir);
  return files;
}

// Fix all files
const appDir = '/workspace/app';
const files = findFiles(appDir);

console.log(`Found ${files.length} files to check`);

files.forEach(file => {
  fixFile(file);
});

console.log('Unused imports fixed!');
