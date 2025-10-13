#!/usr/bin/env node

import fs from 'fs';
import path from 'path';

// Get current directory (unused but kept for reference)
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

function fixMergeConflicts(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    if (content.includes('<<<<<<< HEAD') || content.includes('=======') || content.includes('>>>>>>>')) {
      console.log(`Found merge conflicts in: ${filePath}`);
      return true;
    }
    return false;
  } catch (error) {
    console.error('Error:', error);
    return false;
  }
}

function findFiles(dir, extensions = ['.ts', '.tsx', '.js', '.jsx']) {
  const files = [];
  
  function traverse(currentDir) {
    try {
      const items = fs.readdirSync(currentDir);
      
      for (const item of items) {
        const fullPath = path.join(currentDir, item);
        const stat = fs.statSync(fullPath);
        
        if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
          traverse(fullPath);
        } else if (stat.isFile()) {
          const ext = path.extname(item);
          if (extensions.includes(ext)) {
            files.push(fullPath);
          }
        }
      }
    } catch {
      // Skip directories we can't read
    }
  }
  
  traverse(dir);
  return files;
}

const appDir = 'app';
const files = findFiles(appDir);

console.log(`Checking ${files.length} files for merge conflicts...`);

let conflictCount = 0;
for (const file of files) {
  if (fixMergeConflicts(file)) {
    conflictCount++;
  }
}

console.log(`Found merge conflicts in ${conflictCount} files.`);