#!/usr/bin/env node

import fs from 'fs;'
import path from 'path;'
import { execSync } from 'child_process;'

// Find all files with merge conflict markers
const findConflictFiles = () => {
  try {
    const result = execSync('grep -r "    content = content
      .replace(/
      .replace(/
    
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Fixed merge conflicts in: ${filePath}`);`
    return true;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);`
    return false;
  }
};

// Main execution
console.log('Finding files with merge conflicts...');
const conflictFiles = findConflictFiles();

if (conflictFiles.length === 0) {
  console.log('No merge conflicts found!');
} else {
  console.log(`Found ${conflictFiles.length} files with merge conflicts:`);`
  conflictFiles.forEach(file => console.log(`  - ${file}`));`
  
  console.log('\nFixing merge conflicts...');
  let fixedCount = 0;
  
  conflictFiles.forEach(file => {
    if (fixMergeConflicts(file)) {
      fixedCount++;
    }
  });
  
  console.log(`\nFixed ${fixedCount} files.`);`
}

console.log('Merge conflict resolution completed!');'
