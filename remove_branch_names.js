#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

// Get all files with branch names
const filesWithBranchNames = execSync('grep -l "cursor/fix-errors-and-merge-to-main-7271" -r app/ --include="*.tsx" --include="*.ts" --include="*.js" --include="*.jsx"', { encoding: 'utf8' })
  .trim()
  .split('\n')
  .filter(file => file && !file.includes('node_modules') && !file.includes('.git'));

console.log(`Found ${filesWithBranchNames.length} files with branch names`);

function removeBranchNames(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Remove branch names
    content = content.replace(/cursor\/fix-errors-and-merge-to-main-7271\n?/g, '');
    
    // Write cleaned content back to file
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`✅ Cleaned ${filePath}`);
    return true;
    
  } catch (error) {
    console.log(`❌ Error cleaning ${filePath}: ${error.message}`);
    return false;
  }
}

// Clean all files
let cleanedCount = 0;
let errorCount = 0;

filesWithBranchNames.forEach(file => {
  if (removeBranchNames(file)) {
    cleanedCount++;
  } else {
    errorCount++;
  }
});

console.log(`\nCleaning complete:`);
console.log(`✓ Successfully cleaned: ${cleanedCount} files`);
console.log(`✗ Errors: ${errorCount} files`);
