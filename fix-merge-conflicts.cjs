#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Function to remove merge conflict markers and keep the main branch version
function fixMergeConflicts(content) {
  // Remove all merge conflict markers and keep the main branch version (after =======)
  const lines = content.split('\n');
  const result = [];
  let inConflict = false;
  let keepLines = false;
  
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    
    if (line.includes('<<<<<<< HEAD')) {
      inConflict = true;
      keepLines = false;
      continue;
    }
    
    if (line.includes('=======')) {
      keepLines = true;
      continue;
    }
    
    if (line.includes('>>>>>>>')) {
      inConflict = false;
      keepLines = false;
      continue;
    }
    
    if (!inConflict || keepLines) {
      result.push(line);
    }
  }
  
  return result.join('\n');
}

// Function to recursively find and fix files with merge conflicts
function fixFilesInDirectory(dir) {
  const files = fs.readdirSync(dir);
  
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      // Skip certain directories
      if (['node_modules', '.git', '.next', 'dist', 'build'].includes(file)) {
        continue;
      }
      fixFilesInDirectory(filePath);
    } else if (file.match(/\.(tsx?|jsx?|css|json)$/)) {
      try {
        const content = fs.readFileSync(filePath, 'utf8');
        
        if (content.includes('<<<<<<< HEAD')) {
          console.log(`Fixing merge conflicts in: ${filePath}`);
          const fixedContent = fixMergeConflicts(content);
          fs.writeFileSync(filePath, fixedContent, 'utf8');
        }
      } catch (error) {
        console.error(`Error processing ${filePath}:`, error.message);
      }
    }
  }
}

// Main execution
console.log('Starting merge conflict resolution...');
fixFilesInDirectory('./src');
fixFilesInDirectory('./pages');
fixFilesInDirectory('./components');
console.log('Merge conflict resolution completed!');