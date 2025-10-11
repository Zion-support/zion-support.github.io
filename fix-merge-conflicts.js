#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

// Get all files with merge conflicts
const getFilesWithConflicts = () => {
  try {
    const result = execSync('grep -l "^<<<<<<<\\|^=======\\|^>>>>>>>" -r . --include="*.tsx" --include="*.ts" --include="*.js" --include="*.jsx"', { encoding: 'utf8' });
    return result.trim().split('\n').filter(file => file && !file.includes('.original'));
  } catch (error) {
    return [];
  }
};

// Fix merge conflicts in a file
const fixMergeConflicts = (filePath) => {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Remove merge conflict markers and keep HEAD version
    content = content.replace(/<<<<<<< HEAD\n([\s\S]*?)\n=======\n([\s\S]*?)\n>>>>>>> [^\n]+\n?/g, '$1');
    
    // Clean up any remaining conflict markers
    content = content.replace(/<<<<<<< [^\n]+\n?/g, '');
    content = content.replace(/=======\n?/g, '');
    content = content.replace(/>>>>>>> [^\n]+\n?/g, '');
    
    // Fix common syntax issues
    content = content.replace(/\}\s*\]\s*;\s*$/gm, '}];');
    content = content.replace(/\}\s*\)\s*;\s*$/gm, '});');
    
    fs.writeFileSync(filePath, content);
    console.log(`Fixed merge conflicts in: ${filePath}`);
    return true;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
};

// Main execution
const main = () => {
  console.log('Finding files with merge conflicts...');
  const files = getFilesWithConflicts();
  
  if (files.length === 0) {
    console.log('No files with merge conflicts found.');
    return;
  }
  
  console.log(`Found ${files.length} files with merge conflicts.`);
  
  let fixedCount = 0;
  files.forEach(file => {
    if (fixMergeConflicts(file)) {
      fixedCount++;
    }
  });
  
  console.log(`Fixed merge conflicts in ${fixedCount} files.`);
};

main();