#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Function to clean merge conflicts from a file
function cleanMergeConflicts(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Remove merge conflict markers and keep the HEAD version
    const lines = content.split('\n');
    const cleanedLines = [];
    let inConflict = false;
    let keepHead = false;
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      
      if (line.includes('<<<<<<< HEAD')) {
        inConflict = true;
        keepHead = true;
        continue;
      } else if (line.includes('=======')) {
        keepHead = false;
        continue;
      } else if (line.includes('>>>>>>>')) {
        inConflict = false;
        keepHead = false;
        continue;
      }
      
      if (!inConflict || keepHead) {
        cleanedLines.push(line);
      }
    }
    
    const cleanedContent = cleanedLines.join('\n');
    
    // Only write if content changed
    if (cleanedContent !== content) {
      fs.writeFileSync(filePath, cleanedContent, 'utf8');
      console.log(`Cleaned merge conflicts in: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Find all TypeScript and JavaScript files
const patterns = [
  'app/**/*.{ts,tsx,js,jsx}',
  'src/**/*.{ts,tsx,js,jsx}',
  '*.{ts,tsx,js,jsx}'
];

let totalCleaned = 0;

patterns.forEach(pattern => {
  const files = glob.sync(pattern, { ignore: ['node_modules/**', 'dist/**', '.next/**'] });
  
  files.forEach(file => {
    if (cleanMergeConflicts(file)) {
      totalCleaned++;
    }
  });
});

console.log(`\nCleaned merge conflicts in ${totalCleaned} files.`);