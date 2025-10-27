#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Find all .tsx files in the app directory
const tsxFiles = glob.sync('app/**/*.tsx');

let fixedCount = 0;
let totalFiles = tsxFiles.length;

console.log(`Found ${totalFiles} tsx files to process...`);

tsxFiles.forEach(filePath => {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    
    // Check if the file has unused React import
    const lines = content.split('\n');
    let hasUnusedReactImport = false;
    let newLines = [];
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      
      // Check if this is a React import line
      if (line.trim().startsWith("import React from 'react';") || 
          line.trim().startsWith('import React from "react";')) {
        // Check if React is actually used in the file
        const restOfFile = lines.slice(i + 1).join('\n');
        const reactUsagePattern = /\bReact\./;
        
        if (!reactUsagePattern.test(restOfFile)) {
          // React is not used, skip this line
          hasUnusedReactImport = true;
          console.log(`Removing unused React import from: ${filePath}`);
          continue;
        }
      }
      
      newLines.push(line);
    }
    
    if (hasUnusedReactImport) {
      const newContent = newLines.join('\n');
      fs.writeFileSync(filePath, newContent, 'utf8');
      fixedCount++;
    }
    
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
  }
});

console.log(`\nFixed ${fixedCount} files with unused React imports out of ${totalFiles} total files.`);
