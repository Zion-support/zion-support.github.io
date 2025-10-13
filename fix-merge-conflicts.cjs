#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

function fixMergeConflicts(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Remove merge conflict markers and keep the content after the last =======
    const lines = content.split('\n');
    const fixedLines = [];
    let inConflict = false;
    let conflictContent = [];
    let currentBranch = '';
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      
      if (line.startsWith('<<<<<<< HEAD')) {
        inConflict = true;
        conflictContent = [];
        currentBranch = 'HEAD';
        continue;
      } else if (line.startsWith('=======')) {
        currentBranch = 'other';
        continue;
      } else if (line.startsWith('>>>>>>> ')) {
        inConflict = false;
        // Use the content from the other branch (after =======)
        fixedLines.push(...conflictContent);
        conflictContent = [];
        currentBranch = '';
        continue;
      }
      
      if (inConflict) {
        if (currentBranch === 'other') {
          conflictContent.push(line);
        }
      } else {
        fixedLines.push(line);
      }
    }
    
    const fixedContent = fixedLines.join('\n');
    
    if (fixedContent !== content) {
      fs.writeFileSync(filePath, fixedContent);
      console.log(`Fixed merge conflicts in: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

function findTsxFiles(dir) {
  const files = [];
  
  function traverse(currentDir) {
    const items = fs.readdirSync(currentDir);
    
    for (const item of items) {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
        traverse(fullPath);
      } else if (item.endsWith('.tsx') || item.endsWith('.ts') || item.endsWith('.js')) {
        files.push(fullPath);
      }
    }
  }
  
  traverse(dir);
  return files;
}

// Main execution
const appDir = path.join(__dirname, 'app');
const files = findTsxFiles(appDir);

console.log(`Found ${files.length} files to process...`);

let fixedCount = 0;
for (const file of files) {
  if (fixMergeConflicts(file)) {
    fixedCount++;
  }
}

console.log(`Fixed merge conflicts in ${fixedCount} files.`);

// Also fix the main App.tsx file
if (fixMergeConflicts(path.join(__dirname, 'App.tsx'))) {
  console.log('Fixed merge conflicts in App.tsx');
}

console.log('Merge conflict cleanup completed!');