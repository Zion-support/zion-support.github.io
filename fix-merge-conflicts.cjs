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
    
    console.log(`Fixing merge conflicts in: ${filePath}`);
    
    // Remove merge conflict markers and keep the newer version (after =======)
    const lines = content.split('\n');
    const newLines = [];
    let inConflict = false;
    let keepLines = false;
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      
      if (line.startsWith('<<<<<<< HEAD')) {
        inConflict = true;
        keepLines = false;
        continue;
      }
      
      if (line.startsWith('=======')) {
        keepLines = true;
        continue;
      }
      
      if (line.startsWith('>>>>>>>')) {
        inConflict = false;
        keepLines = false;
        continue;
      }
      
      if (!inConflict || keepLines) {
        newLines.push(line);
      }
    }
    
    const newContent = newLines.join('\n');
    fs.writeFileSync(filePath, newContent, 'utf8');
    return true;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

// Get all files with merge conflicts
const { execSync } = require('child_process');
const files = execSync('find /workspace/app -name "*.tsx" -exec grep -l "<<<<<<< HEAD" {} \\;', { encoding: 'utf8' })
  .trim()
  .split('\n')
  .filter(f => f.length > 0);

console.log(`Found ${files.length} files with merge conflicts`);

let fixedCount = 0;
files.forEach(file => {
  if (fixMergeConflicts(file)) {
    fixedCount++;
  }
});

console.log(`Fixed merge conflicts in ${fixedCount} files`);
