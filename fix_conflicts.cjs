#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

function fixMergeConflicts(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Check if file has merge conflicts
    if (!content.includes('<<<<<<< HEAD')) {
      return false;
    }
    
    console.log(`Fixing conflicts in: ${filePath}`);
    
    // Split by conflict markers and keep only HEAD content
    const lines = content.split('\n');
    const result = [];
    let inConflict = false;
    let keepContent = false;
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      
      if (line.startsWith('<<<<<<< HEAD')) {
        inConflict = true;
        keepContent = true;
        continue;
      } else if (line.startsWith('=======')) {
        keepContent = false;
        continue;
      } else if (line.startsWith('>>>>>>>')) {
        inConflict = false;
        keepContent = false;
        continue;
      }
      
      if (!inConflict || keepContent) {
        result.push(line);
      }
    }
    
    fs.writeFileSync(filePath, result.join('\n'));
    return true;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Get all files with merge conflicts
const { execSync } = require('child_process');
const files = execSync('find . -name "*.tsx" -o -name "*.ts" -o -name "*.js" | grep -v node_modules', { encoding: 'utf8' })
  .split('\n')
  .filter(file => file.trim() && fs.existsSync(file));

let fixedCount = 0;

files.forEach(file => {
  if (fixMergeConflicts(file)) {
    fixedCount++;
  }
});

console.log(`\nFixed conflicts in ${fixedCount} files`);