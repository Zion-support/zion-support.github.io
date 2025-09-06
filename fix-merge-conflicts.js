#!/usr/bin/env node

import fs from 'fs';
import path from 'path';

function resolveMergeConflicts(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Check if file has merge conflicts
    const lines = content.split('\n');
    const resolvedLines = [];
    let inConflict = false;
    let keepNewer = false;
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      
        keepNewer = true;
        continue;
      }
      
        inConflict = false;
        keepNewer = false;
        continue;
      }
      
      if (inConflict && !keepNewer) {
        continue;
      }
      
      resolvedLines.push(line);
    }
    
    const resolvedContent = resolvedLines.join('\n');
    fs.writeFileSync(filePath, resolvedContent, 'utf8');
    return true;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

function findFilesWithMergeConflicts(dir) {
  const files = [];
  
  function traverse(currentDir) {
    const items = fs.readdirSync(currentDir);
    
    for (const item of items) {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        // Skip certain directories
        if (['node_modules', '.git', '.next', 'dist', 'build', 'out'].includes(item)) {
          continue;
        }
        traverse(fullPath);
      } else if (stat.isFile()) {
        const ext = path.extname(item);
        if (['.js', '.jsx', '.ts', '.tsx', '.json'].includes(ext)) {
          files.push(fullPath);
        }
      }
    }
  }
  
  traverse(dir);
  return files;
}

// Main execution
const files = findFilesWithMergeConflicts('.');
let fixedCount = 0;

console.log(`Found ${files.length} files to check for merge conflicts...`);

for (const file of files) {
  if (resolveMergeConflicts(file)) {
    fixedCount++;
  }
}

console.log(`\nFixed merge conflicts in ${fixedCount} files.`);