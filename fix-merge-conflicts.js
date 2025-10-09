#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Function to fix merge conflicts in a file
function fixMergeConflicts(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Check if file has merge conflict markers
    if (!content.includes('<<<<<<<') && !content.includes('=======') && !content.includes('>>>>>>>')) {
      return false; // No conflicts to fix
    }
    
    console.log(`Fixing merge conflicts in: ${filePath}`);
    
    // Split content by conflict markers
    const lines = content.split('\n');
    const result = [];
    let inConflict = false;
    let keepCurrent = false;
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      
      if (line.startsWith('<<<<<<<')) {
        inConflict = true;
        keepCurrent = true; // Keep the HEAD version by default
        continue;
      } else if (line.startsWith('=======')) {
        keepCurrent = false; // Skip the other version
        continue;
      } else if (line.startsWith('>>>>>>>')) {
        inConflict = false;
        keepCurrent = false;
        continue;
      }
      
      if (!inConflict || keepCurrent) {
        result.push(line);
      }
    }
    
    // Write the cleaned content back
    fs.writeFileSync(filePath, result.join('\n'), 'utf8');
    return true;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

// Function to find all files with merge conflicts
function findFilesWithConflicts(dir) {
  const files = [];
  
  function walkDir(currentPath) {
    const items = fs.readdirSync(currentPath);
    
    for (const item of items) {
      const fullPath = path.join(currentPath, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
        walkDir(fullPath);
      } else if (stat.isFile() && (item.endsWith('.tsx') || item.endsWith('.ts') || item.endsWith('.js') || item.endsWith('.jsx'))) {
        const content = fs.readFileSync(fullPath, 'utf8');
        if (content.includes('<<<<<<<') || content.includes('=======') || content.includes('>>>>>>>')) {
          files.push(fullPath);
        }
      }
    }
  }
  
  walkDir(dir);
  return files;
}

// Main execution
const srcDir = path.join(__dirname, 'src');
console.log('Searching for files with merge conflicts...');

const conflictedFiles = findFilesWithConflicts(srcDir);
console.log(`Found ${conflictedFiles.length} files with merge conflicts`);

let fixedCount = 0;
for (const file of conflictedFiles) {
  if (fixMergeConflicts(file)) {
    fixedCount++;
  }
}

console.log(`Fixed merge conflicts in ${fixedCount} files`);

// Also check for any remaining conflicts
const remainingConflicts = findFilesWithConflicts(srcDir);
if (remainingConflicts.length > 0) {
  console.log(`Warning: ${remainingConflicts.length} files still have conflicts:`, remainingConflicts);
} else {
  console.log('All merge conflicts have been resolved!');
}