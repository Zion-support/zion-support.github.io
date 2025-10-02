#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

console.log('🔧 Resolving all merge conflicts...');

// Find all files with merge conflicts
const conflictFiles = execSync('grep -r "<<<<<<< HEAD" src/ --include="*.tsx" --include="*.ts" --include="*.js" --include="*.jsx" -l', { encoding: 'utf8' })
  .split('\n')
  .filter(file => file.trim());

console.log(`Found ${conflictFiles.length} files with conflicts`);

function resolveConflicts(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Remove all conflict markers and keep HEAD version
    content = content
      .replace(/<<<<<<< HEAD\n/g, '')
      .replace(/=======\n.*?\n>>>>>>> [^\n]+\n/g, '')
      .replace(/<<<<<<< HEAD\n.*?\n=======\n/g, '')
      .replace(/>>>>>>> [^\n]+\n/g, '')
      .replace(/<<<<<<< HEAD\n.*?\n=======\n.*?\n>>>>>>> [^\n]+\n/g, '')
      // Clean up any remaining syntax issues
      .replace(/,\s*,/g, ',')
      .replace(/;\s*;/g, ';')
      .replace(/\{\s*,/g, '{')
      .replace(/,\s*\}/g, '}')
      .replace(/\(\s*,/g, '(')
      .replace(/,\s*\)/g, ')')
      .replace(/\s+/g, ' ')
      .replace(/\n\s*\n\s*\n/g, '\n\n');
    
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`✅ Resolved conflicts in ${filePath}`);
    return true;
  } catch (error) {
    console.error(`❌ Error resolving ${filePath}:`, error.message);
    return false;
  }
}

let resolvedCount = 0;
let failedCount = 0;

conflictFiles.forEach(file => {
  if (file.trim()) {
    if (resolveConflicts(file)) {
      resolvedCount++;
    } else {
      failedCount++;
    }
  }
});

console.log(`\n📊 Conflict Resolution Summary:`);
console.log(`  Files processed: ${conflictFiles.length}`);
console.log(`  Successfully resolved: ${resolvedCount}`);
console.log(`  Failed: ${failedCount}`);

// Verify no conflicts remain
const remainingConflicts = execSync('grep -r "<<<<<<< HEAD" src/ --include="*.tsx" --include="*.ts" --include="*.js" --include="*.jsx" -l', { encoding: 'utf8' })
  .split('\n')
  .filter(file => file.trim());

if (remainingConflicts.length === 0) {
  console.log('🎉 All merge conflicts resolved!');
} else {
  console.log(`⚠️  ${remainingConflicts.length} files still have conflicts:`);
  remainingConflicts.forEach(file => console.log(`  - ${file}`));
}