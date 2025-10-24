#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Function to fix JSX syntax in a file
function fixJSXSyntax(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Check if file has 'use client' but missing proper React structure
    if (content.includes("'use client';") && content.includes('<div>') && !content.includes('import React')) {
      console.log(`Fixing ${filePath}`);
      
      // Add proper React import after 'use client'
      content = content.replace(
        "'use client';",
        "'use client';\nimport React from 'react';"
      );
      
      // Write the fixed content back
      fs.writeFileSync(filePath, content, 'utf8');
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Find all TSX files in the app directory
const pattern = 'app/**/*.tsx';
const files = glob.sync(pattern);

console.log(`Found ${files.length} TSX files to process`);

let fixedCount = 0;
files.forEach(file => {
  if (fixJSXSyntax(file)) {
    fixedCount++;
  }
});

console.log(`Fixed ${fixedCount} files`);