#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

// Get all files with merge conflicts
const filesWithConflicts = execSync('grep -l "<<<<<<< HEAD" -r . --include="*.tsx" --include="*.ts" --include="*.js" --include="*.jsx"', { encoding: 'utf8' })
  .trim()
  .split('\n')
  .filter(file => file && !file.includes('node_modules') && !file.includes('.git'));

console.log(`Found ${filesWithConflicts.length} files with merge conflicts`);

function resolveMergeConflicts(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Check if file has merge conflicts
    if (!content.includes('<<<<<<< HEAD')) {
      return false;
    }
    
    // Split by conflict markers
    const parts = content.split(/<<<<<<< HEAD\n/);
    let resolvedContent = parts[0];
    
    for (let i = 1; i < parts.length; i++) {
      const part = parts[i];
      const separatorIndex = part.indexOf('=======');
      const endIndex = part.indexOf('>>>>>>>');
      
      if (separatorIndex === -1 || endIndex === -1) {
        console.log(`⚠️  Invalid conflict format in ${filePath}`);
        continue;
      }
      
      // Keep the "origin" version (after =======)
      const originContent = part.substring(separatorIndex + 8, endIndex).trim();
      const remainingContent = part.substring(endIndex + 8).trim();
      
      resolvedContent += originContent + '\n' + remainingContent;
    }
    
    // Write resolved content back to file
    fs.writeFileSync(filePath, resolvedContent, 'utf8');
    console.log(`✅ Resolved conflicts in ${filePath}`);
    return true;
    
  } catch (error) {
    console.log(`❌ Error resolving conflicts in ${filePath}: ${error.message}`);
    return false;
  }
}

// Resolve conflicts in all files
let resolvedCount = 0;
let errorCount = 0;

filesWithConflicts.forEach(file => {
  if (resolveMergeConflicts(file)) {
    resolvedCount++;
  } else {
    errorCount++;
  }
});

console.log(`\nResolution complete:`);
console.log(`✓ Successfully resolved: ${resolvedCount} files`);
console.log(`✗ Errors: ${errorCount} files`);

// Verify no more conflicts
const remainingConflicts = execSync('grep -l "<<<<<<< HEAD" -r . --include="*.tsx" --include="*.ts" --include="*.js" --include="*.jsx" 2>/dev/null || true', { encoding: 'utf8' })
  .trim();

if (remainingConflicts) {
  console.log(`\n⚠️  Remaining conflicts in:`);
  console.log(remainingConflicts);
} else {
  console.log(`\n🎉 All merge conflicts resolved!`);
}
