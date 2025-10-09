#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

// Get list of files with merge conflicts
function getFilesWithConflicts() {
  try {
    const result = execSync('git grep -l ")
    content = content.replace(/<<<<<<< HEAD[\s\S]*?=======([\s\S]*?)
    
    // Remove any remaining conflict markers
    content = content.replace(/[\s\S]*?
    
    // Clean up any double newlines that might have been created
    content = content.replace(/\n\n\n+/g, '\n\n');
    
    fs.writeFileSync(filePath, content);
    console.log(`Fixed merge conflicts in: ${filePath}`);
    return true;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

// Main function
function main() {
  console.log('Starting merge conflict resolution...');
  
  const files = getFilesWithConflicts();
  
  if (files.length === 0) {
    console.log('No files with merge conflicts found.');
    return;
  }
  
  console.log(`Found ${files.length} files with merge conflicts`);
  
  let fixedCount = 0;
  let errorCount = 0;
  
  files.forEach(file => {
    if (fixMergeConflicts(file)) {
      fixedCount++;
    } else {
      errorCount++;
    }
  });
  
  console.log(`\nResolution complete:`);
  console.log(`- Files fixed: ${fixedCount}`);
  console.log(`- Files with errors: ${errorCount}`);
  
  if (fixedCount > 0) {
    console.log('\nRunning lint check to verify fixes...');
    try {
      execSync('npm run lint', { stdio: 'inherit' });
      console.log('Lint check passed!');
    } catch (error) {
      console.log('Lint check failed, but conflicts were resolved.');
    }
  }
}

main();