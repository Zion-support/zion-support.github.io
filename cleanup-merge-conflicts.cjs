#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

function cleanMergeConflicts(content) {
  // Remove merge conflict markers and keep the content after =======
  const lines = content.split('\n');
  const cleanedLines = [];
  let inConflict = false;
  let keepContent = false;
  
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    
    if (line.includes('<<<<<<< HEAD')) {
      inConflict = true;
      keepContent = false;
      continue;
    }
    
    if (line.includes('=======')) {
      keepContent = true;
      continue;
    }
    
    if (line.includes('>>>>>>>')) {
      inConflict = false;
      keepContent = false;
      continue;
    }
    
    if (!inConflict || keepContent) {
      cleanedLines.push(line);
    }
  }
  
  return cleanedLines.join('\n');
}

function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const cleanedContent = cleanMergeConflicts(content);
    
    if (content !== cleanedContent) {
      fs.writeFileSync(filePath, cleanedContent);
      console.log(`Cleaned merge conflicts in: ${filePath}`);
    }
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
  }
}

function findFilesWithMergeConflicts(dir) {
  const files = [];
  
  function walkDir(currentPath) {
    const items = fs.readdirSync(currentPath);
    
    for (const item of items) {
      const fullPath = path.join(currentPath, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
        walkDir(fullPath);
      } else if (stat.isFile() && (item.endsWith('.tsx') || item.endsWith('.ts') || item.endsWith('.js'))) {
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
const filesToProcess = findFilesWithMergeConflicts('.');
console.log(`Found ${filesToProcess.length} files with merge conflicts`);

for (const file of filesToProcess) {
  processFile(file);
}

console.log('Merge conflict cleanup completed!');