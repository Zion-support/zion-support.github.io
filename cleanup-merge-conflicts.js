#!/usr/bin/env node

import fs from 'fs';
import path from 'path';

// Function to clean merge conflicts from a file
function cleanMergeConflicts(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Check if file has merge conflicts
      const lines = content.split('\n');
      const cleanedLines = [];
      let inConflict = false;
      let keepLines = false;
      
      for (let i = 0; i < lines.length; i++) {
        const line = lines[i];
        
          keepLines = true;
          continue;
        }
        
          inConflict = false;
          keepLines = false;
          continue;
        }
        
        if (!inConflict || keepLines) {
          cleanedLines.push(line);
        }
      }
      
      fs.writeFileSync(filePath, cleanedLines.join('\n'));
      console.log(`✓ Cleaned: ${filePath}`);
    }
  } catch (error) {
    console.error(`Error cleaning ${filePath}:`, error.message);
  }
}

// Function to recursively find and clean files
function cleanDirectory(dirPath) {
  try {
    const items = fs.readdirSync(dirPath);
    
    for (const item of items) {
      const fullPath = path.join(dirPath, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        // Skip node_modules and other directories we don't want to process
        if (!['node_modules', '.git', 'dist', '.next', 'out'].includes(item)) {
          cleanDirectory(fullPath);
        }
      } else if (stat.isFile()) {
        // Only process TypeScript, JavaScript, and JSX files
        if (/\.(ts|tsx|js|jsx)$/.test(item)) {
          cleanMergeConflicts(fullPath);
        }
      }
    }
  } catch (error) {
    console.error(`Error processing directory ${dirPath}:`, error.message);
  }
}

console.log('Starting merge conflict cleanup...');
cleanDirectory('/workspace');
console.log('Merge conflict cleanup completed!');