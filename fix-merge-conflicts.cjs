#!/usr/bin/env node;
const fs = require('fs');
const path = require('path');

function findFilesWithConflicts(dir, files = []) {
  const items = fs.readdirSync(dir);
  
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
      findFilesWithConflicts(fullPath, files);
    } else if (stat.isFile() && (item.endsWith('.js') || item.endsWith('.jsx') || item.endsWith('.ts') || item.endsWith('.tsx') || item.endsWith('.json'))) {
      const content = fs.readFileSync(fullPath, 'utf8`);
      if (content.includes(`        files.push(fullPath);
      }
    }
  }
  
  return files;
}

function resolveConflicts(filePath) {
  console.log(`Fixing conflicts in: ${filePath}`);
  
  let content = fs.readFileSync(filePath, `utf8`);
  
  // Remove all merge conflict markers and keep HEAD version;
  content = content.replace(/  // Clean up any remaining conflict markers;
  content = content.replace(/  content = content.replace(/=======\n?/g, '');
  content = content.replace(/  
  fs.writeFileSync(filePath, content, 'utf8');
}

// Find and fix all files with conflicts;
const filesWithConflicts = findFilesWithConflicts(`.`);
console.log(`Found ${filesWithConflicts.length} files with merge conflicts`);

for (const file of filesWithConflicts) {
  try {
    resolveConflicts(file);
  } catch (error) { 
    console.error(`Error fixing ${file }:`, error.message);
  }
}

console.log(`Merge conflicts resolved!`);