#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Function to resolve merge conflicts by choosing the appropriate version
function resolveMergeConflicts(content) {
  const lines = content.split('\n');
  const resolved = [];
  let i = 0;
  
  while (i < lines.length) {
    const line = lines[i];
    
    if (line.startsWith('<<<<<<< HEAD')) {
      // Skip the HEAD marker
      i++;
      
      // Collect HEAD content until we hit =======
      const headContent = [];
      while (i < lines.length && !lines[i].startsWith('=======')) {
        headContent.push(lines[i]);
        i++;
      }
      
      // Skip the ======= marker
      if (i < lines.length) i++;
      
      // Skip the other branch content until we hit >>>>>>>
      while (i < lines.length && !lines[i].startsWith('>>>>>>>')) {
        i++;
      }
      
      // Skip the >>>>>>> marker
      if (i < lines.length) i++;
      
      // Use HEAD content (usually the more recent/stable version)
      resolved.push(...headContent);
    } else {
      resolved.push(line);
      i++;
    }
  }
  
  return resolved.join('\n');
}

// Function to process a single file
function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    
    if (content.includes('<<<<<<< HEAD')) {
      console.log(`Processing: ${filePath}`);
      const resolved = resolveMergeConflicts(content);
      fs.writeFileSync(filePath, resolved);
      console.log(`Fixed: ${filePath}`);
      return true;
    }
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Function to find all files with merge conflicts
function findConflictedFiles(dir) {
  const files = [];
  
  function walkDir(currentPath) {
    const items = fs.readdirSync(currentPath);
    
    for (const item of items) {
      const fullPath = path.join(currentPath, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
        walkDir(fullPath);
      } else if (stat.isFile() && /\.(tsx?|jsx?)$/.test(item)) {
        try {
          const content = fs.readFileSync(fullPath, 'utf8');
          if (content.includes('<<<<<<< HEAD')) {
            files.push(fullPath);
          }
        } catch (error) {
          // Skip files that can't be read
        }
      }
    }
  }
  
  walkDir(dir);
  return files;
}

// Main execution
const conflictedFiles = findConflictedFiles('.');
console.log(`Found ${conflictedFiles.length} files with merge conflicts`);

let fixedCount = 0;
for (const file of conflictedFiles) {
  if (processFile(file)) {
    fixedCount++;
  }
}

console.log(`Fixed ${fixedCount} files`);