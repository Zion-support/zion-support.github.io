#!/usr/bin/env node

import fs from 'fs';
import path from 'path';

function fixCssConflicts(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Check if file has merge conflict markers
    if (!content.includes('<<<<<<< HEAD') && !content.includes('=======') && !content.includes('>>>>>>> ')) {
      return false; // No conflicts to fix
    }
    
    console.log(`Fixing CSS merge conflicts in: ${filePath}`);
    
    // Split by conflict markers and keep HEAD version
    const lines = content.split('\n');
    const result = [];
    let inConflict = false;
    let keepLines = false;
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      
      if (line.trim() === '<<<<<<< HEAD') {
        inConflict = true;
        keepLines = true;
        continue;
      }
      
      if (line.trim() === '=======') {
        keepLines = false;
        continue;
      }
      
      if (line.trim().startsWith('>>>>>>> ')) {
        inConflict = false;
        keepLines = false;
        continue;
      }
      
      if (!inConflict || keepLines) {
        result.push(line);
      }
    }
    
    // Write the cleaned content back
    fs.writeFileSync(filePath, result.join('\n'));
    return true;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

// Fix CSS files
const cssFiles = [
  '/workspace/app/styles/futuristic.css',
  '/workspace/app/styles/globals.css',
  '/workspace/app/styles/accessibility.css'
];

let fixedCount = 0;

for (const file of cssFiles) {
  if (fs.existsSync(file)) {
    if (fixCssConflicts(file)) {
      fixedCount++;
    }
  }
}

console.log(`Fixed CSS merge conflicts in ${fixedCount} files.`);