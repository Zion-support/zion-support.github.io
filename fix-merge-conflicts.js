#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Function to resolve merge conflicts in a file
function resolveMergeConflicts(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let lines = content.split('\n');
    let resolvedLines = [];
    let inConflict = false;
    let conflictStart = -1;
    let conflictEnd = -1;
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      
      if (line.startsWith('<<<<<<<')) {
        inConflict = true;
        conflictStart = i;
        continue;
      }
      
      if (line.startsWith('=======')) {
        continue;
      }
      
      if (line.startsWith('>>>>>>>')) {
        inConflict = false;
        conflictEnd = i;
        continue;
      }
      
      if (!inConflict) {
        resolvedLines.push(line);
      }
    }
    
    const resolvedContent = resolvedLines.join('\n');
    
    // Only write if content changed
    if (resolvedContent !== content) {
      fs.writeFileSync(filePath, resolvedContent, 'utf8');
      console.log(`Resolved conflicts in: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Function to find all TypeScript/TSX files with merge conflicts
function findFilesWithConflicts(dir) {
  const files = [];
  
  function scanDirectory(currentDir) {
    const items = fs.readdirSync(currentDir);
    
    for (const item of items) {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        scanDirectory(fullPath);
      } else if (item.endsWith('.tsx') || item.endsWith('.ts')) {
        const content = fs.readFileSync(fullPath, 'utf8');
        if (content.includes('<<<<<<<') || content.includes('=======') || content.includes('>>>>>>>')) {
          files.push(fullPath);
        }
      }
    }
  }
  
  scanDirectory(dir);
  return files;
}

// Main execution
const appDir = path.join(__dirname, 'app');
const filesWithConflicts = findFilesWithConflicts(appDir);

console.log(`Found ${filesWithConflicts.length} files with merge conflicts`);

let resolvedCount = 0;
for (const file of filesWithConflicts) {
  if (resolveMergeConflicts(file)) {
    resolvedCount++;
  }
}

console.log(`Resolved conflicts in ${resolvedCount} files`);
console.log('Merge conflict resolution complete!');