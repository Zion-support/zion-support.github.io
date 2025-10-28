#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

// Function to fix merge conflicts in a file
function fixMergeConflicts(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let fixed = false;
    
    // Remove merge conflict markers and keep the content after =======
    const lines = content.split('\n');
    const newLines = [];
    let inConflict = false;
    let keepContent = false;
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      
      if (line.startsWith('<<<<<<<')) {
        inConflict = true;
        keepContent = false;
        continue;
      }
      
      if (line.startsWith('=======')) {
        keepContent = true;
        continue;
      }
      
      if (line.startsWith('>>>>>>>')) {
        inConflict = false;
        keepContent = false;
        continue;
      }
      
      if (!inConflict || keepContent) {
        newLines.push(line);
      }
    }
    
    const newContent = newLines.join('\n');
    
    if (content !== newContent) {
      fs.writeFileSync(filePath, newContent, 'utf8');
      fixed = true;
    }
    
    return fixed;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Function to find all TypeScript/TSX files with merge conflicts
function findFilesWithConflicts() {
  try {
    const result = execSync('grep -r -l "^<<<<<<<\\|^=======\\|^>>>>>>>" . --include="*.tsx" --include="*.ts"', { 
      encoding: 'utf8',
      cwd: '/workspace'
    });
    return result.trim().split('\n').filter(f => f);
  } catch (error) {
    return [];
  }
}

// Main execution
console.log('Starting merge conflict cleanup...');

const filesWithConflicts = findFilesWithConflicts();
console.log(`Found ${filesWithConflicts.length} files with merge conflicts`);

let fixedCount = 0;
let errorCount = 0;

for (const filePath of filesWithConflicts) {
  if (fixMergeConflicts(filePath)) {
    fixedCount++;
    console.log(`Fixed: ${filePath}`);
  } else {
    errorCount++;
    console.log(`Error: ${filePath}`);
  }
}

console.log(`\nCleanup complete:`);
console.log(`- Files fixed: ${fixedCount}`);
console.log(`- Files with errors: ${errorCount}`);
console.log(`- Total processed: ${filesWithConflicts.length}`);