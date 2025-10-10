#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

// Find all files with merge conflict markers
function findConflictFiles() {
  try {
    const result = execSync('grep -r "^<<<<<<< HEAD\\|^=======\\|^>>>>>>> " . --include="*.tsx" --include="*.ts" --include="*.js" --include="*.jsx" -l', { encoding: 'utf8' });
    return result.trim().split('\n').filter(file => file && !file.includes('node_modules') && !file.includes('.git'));
  } catch (error) {
    return [];
  }
}

// Fix merge conflicts in a file
function fixMergeConflicts(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Remove merge conflict markers and keep the content after =======
    const lines = content.split('\n');
    const fixedLines = [];
    let inConflict = false;
    let keepContent = false;
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      
      if (line.trim() === '<<<<<<< HEAD') {
        inConflict = true;
        continue;
      }
      
      if (line.trim() === '=======') {
        keepContent = true;
        continue;
      }
      
      if (line.trim().startsWith('>>>>>>> ')) {
        inConflict = false;
        keepContent = false;
        continue;
      }
      
      if (!inConflict || keepContent) {
        fixedLines.push(line);
      }
    }
    
    const fixedContent = fixedLines.join('\n');
    
    if (content !== fixedContent) {
      fs.writeFileSync(filePath, fixedContent, 'utf8');
      console.log(`Fixed merge conflicts in: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

// Main function
function main() {
  console.log('Finding files with merge conflicts...');
  const conflictFiles = findConflictFiles();
  
  if (conflictFiles.length === 0) {
    console.log('No merge conflicts found.');
    return;
  }
  
  console.log(`Found ${conflictFiles.length} files with merge conflicts:`);
  conflictFiles.forEach(file => console.log(`  - ${file}`));
  
  let fixedCount = 0;
  conflictFiles.forEach(file => {
    if (fixMergeConflicts(file)) {
      fixedCount++;
    }
  });
  
  console.log(`\nFixed merge conflicts in ${fixedCount} files.`);
}

main();