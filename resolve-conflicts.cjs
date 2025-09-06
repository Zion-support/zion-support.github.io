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
        // Keep the content from conflictBuffer (after =======)
        resolvedLines.push(...conflictBuffer);
        continue;
      }
      
      if (inConflict) {
        if (hasSeenEquals) {
          conflictBuffer.push(line);
        }
      } else {
        resolvedLines.push(line);
      }
    }
    
    const resolvedContent = resolvedLines.join('\n');
    
    if (content !== resolvedContent) {
      fs.writeFileSync(filePath, resolvedContent, 'utf8');
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

function processDirectory(dirPath) {
  let processedCount = 0;
  
  try {
    const items = fs.readdirSync(dirPath);
    
    for (const item of items) {
      const fullPath = path.join(dirPath, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        // Skip node_modules and .git directories
        if (item === 'node_modules' || item === '.git' || item === 'dist') {
          continue;
        }
        processedCount += processDirectory(fullPath);
      } else if (stat.isFile()) {
        // Process files with common extensions
        const ext = path.extname(item);
        if (['.js', '.jsx', '.ts', '.tsx', '.json', '.css', '.html', '.md', '.yml', '.yaml'].includes(ext)) {
          if (resolveMergeConflicts(fullPath)) {
            processedCount++;
            console.log(`Resolved conflicts in: ${fullPath}`);
          }
        }
      }
    }
  } catch (error) {
    console.error(`Error processing directory ${dirPath}:`, error.message);
  }
  
  return processedCount;
}

console.log('Starting merge conflict resolution...');
const totalProcessed = processDirectory('/workspace');
console.log(`Resolved conflicts in ${totalProcessed} files.`);