#!/usr/bin/env node

import fs from 'fs';
import path from 'path';

// Function to recursively find all TypeScript/JavaScript files
function findSourceFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir);
  
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory() && !file.startsWith('.') && file !== 'node_modules') {
      findSourceFiles(filePath, fileList);
    } else if (file.match(/\.(ts|tsx|js|jsx)$/)) {
      fileList.push(filePath);
    }
  });
  
  return fileList;
}

// Function to remove commit hashes from a file
function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    const lines = content.split('\n');
    const fixedLines = [];
    let hasChanges = false;
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      // Check if line is a 40-character hex string (git commit hash)
      if (line.match(/^[0-9a-f]{40}$/)) {
        hasChanges = true;
        console.log(`Removing commit hash from ${filePath}:${i + 1}: ${line}`);
        // Skip this line (don't add it to fixedLines)
        continue;
      }
      fixedLines.push(line);
    }
    
    if (hasChanges) {
      fs.writeFileSync(filePath, fixedLines.join('\n'), 'utf8');
      console.log(`Fixed: ${filePath}`);
    }
    
    return hasChanges;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Main execution
console.log('Starting to fix commit hashes in source files...');

const sourceFiles = findSourceFiles('/workspace/app');
let fixedCount = 0;

sourceFiles.forEach(file => {
  if (fixFile(file)) {
    fixedCount++;
  }
});

console.log(`\nFixed ${fixedCount} files.`);
console.log('Done!');