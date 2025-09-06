#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

function resolveMergeConflicts(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Remove all merge conflict markers and keep the content after the last =======
    const lines = content.split('\n');
    const resolvedLines = [];
    let inConflict = false;
    let conflictBuffer = [];
    let hasSeenEquals = false;
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      
      if (line.startsWith('<<<<<<< HEAD')) {
        inConflict = true;
        conflictBuffer = [];
        hasSeenEquals = false;
        continue;
      }
      
      if (line.startsWith('=======')) {
        hasSeenEquals = true;
        conflictBuffer = [];
        continue;
      }
      
      if (line.startsWith('>>>>>>>')) {
        inConflict = false;
        // Keep the content from the last section (after =======)
        resolvedLines.push(...conflictBuffer);
        conflictBuffer = [];
        hasSeenEquals = false;
        continue;
      }
      
      if (inConflict) {
        if (hasSeenEquals) {
          // We're in the section after =======, keep this content
          conflictBuffer.push(line);
        }
        // If we haven't seen ======= yet, we're in the first section, skip it
      } else {
        resolvedLines.push(line);
      }
    }
    
    const resolvedContent = resolvedLines.join('\n');
    
    // Only write if content changed
    if (resolvedContent !== content) {
      fs.writeFileSync(filePath, resolvedContent, 'utf8');
      console.log(`Fixed merge conflicts in: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

function findAndFixConflicts(dir) {
  let fixedCount = 0;
  
  function walkDir(currentPath) {
    const items = fs.readdirSync(currentPath);
    
    for (const item of items) {
      const fullPath = path.join(currentPath, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        // Skip node_modules and other common directories
        if (!['node_modules', '.git', 'dist', 'build', '.next'].includes(item)) {
          walkDir(fullPath);
        }
      } else if (stat.isFile()) {
        const ext = path.extname(item);
        if (['.tsx', '.ts', '.js', '.jsx', '.json', '.css', '.scss'].includes(ext)) {
          if (resolveMergeConflicts(fullPath)) {
            fixedCount++;
          }
        }
      }
    }
  }
  
  walkDir(dir);
  return fixedCount;
}

console.log('Starting merge conflict resolution...');
const fixedCount = findAndFixConflicts('/workspace');
console.log(`Fixed merge conflicts in ${fixedCount} files.`);