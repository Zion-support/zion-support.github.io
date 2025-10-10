#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

function fixMergeConflicts(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Remove merge conflict markers and keep the HEAD version
    const lines = content.split('\n');
    const fixedLines = [];
    let inConflict = false;
    let keepHead = false;
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      
      if (line.startsWith('<<<<<<< HEAD')) {
        inConflict = true;
        keepHead = true;
        modified = true;
        continue;
      }
      
      if (line.startsWith('=======')) {
        keepHead = false;
        continue;
      }
      
      if (line.startsWith('>>>>>>> ')) {
        inConflict = false;
        keepHead = false;
        continue;
      }
      
      if (inConflict && !keepHead) {
        continue;
      }
      
      fixedLines.push(line);
    }
    
    if (modified) {
      fs.writeFileSync(filePath, fixedLines.join('\n'));
      console.log(`Fixed merge conflicts in: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

function findFilesWithConflicts(dir) {
  const files = [];
  
  function walkDir(currentPath) {
    const items = fs.readdirSync(currentPath);
    
    for (const item of items) {
      const fullPath = path.join(currentPath, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        // Skip node_modules and .git directories
        if (item !== 'node_modules' && item !== '.git' && !item.startsWith('.')) {
          walkDir(fullPath);
        }
      } else if (stat.isFile()) {
        const ext = path.extname(item);
        if (['.ts', '.tsx', '.js', '.jsx'].includes(ext)) {
          files.push(fullPath);
        }
      }
    }
  }
  
  walkDir(dir);
  return files;
}

function main() {
  console.log('Starting merge conflict resolution...');
  
  const files = findFilesWithConflicts('.');
  let fixedCount = 0;
  
  for (const file of files) {
    if (fixMergeConflicts(file)) {
      fixedCount++;
    }
  }
  
  console.log(`Fixed merge conflicts in ${fixedCount} files`);
}

if (require.main === module) {
  main();
}

module.exports = { fixMergeConflicts, findFilesWithConflicts };