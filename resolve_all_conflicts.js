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
    
    // Pattern to match merge conflict blocks
    const conflictPattern = /<<<<<<< HEAD[\s\S]*?=======([\s\S]*?)>>>>>>> origin\/[^\n]+/g;
    
    // Replace conflicts with the content from the origin branch (after =======)
    content = content.replace(conflictPattern, (match, originContent) => {
      return originContent.trim();
    });
    
    // Also handle cases where there's no content before =======
    const emptyConflictPattern = /<<<<<<< HEAD\s*=======([\s\S]*?)>>>>>>> origin\/[^\n]+/g;
    content = content.replace(emptyConflictPattern, (match, originContent) => {
      return originContent.trim();
    });
    
    // Write the resolved content back
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`✓ Resolved conflicts in ${filePath}`);
    return true;
  } catch (error) {
    console.error(`✗ Error resolving ${filePath}:`, error.message);
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