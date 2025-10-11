#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

console.log('🔧 Starting merge conflict resolution...');

// Find all files with merge conflicts
const findConflictedFiles = () => {
  try {
    const result = execSync(
      'find /workspace -name "*.tsx" -o -name "*.ts" -o -name "*.js" -o -name "*.jsx" | grep -v node_modules | xargs grep -l "" 2>/dev/null',
      { encoding: 'utf8' }
    );
    return result.trim().split('\n').filter(file => file.trim());
  } catch (error) {
    return [];
  }
};

// Resolve merge conflicts by keeping HEAD version
const resolveMergeConflicts = (filePath) => {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Remove merge conflict markers and keep HEAD version
    content = content.replace(/\n?/g, '');
    content = content.replace(/.*?\n?/g, '');
    content = content.replace(/    
    // Clean up any remaining conflict artifacts
    content = content.replace(/    content = content.replace(/.*?\n?/g, '');
    content = content.replace(/    
    // Remove any duplicate empty lines that might have been created
    content = content.replace(/\n\s*\n\s*\n/g, '\n\n');
    
    fs.writeFileSync(filePath, content, 'utf8');
    return true;
  } catch (error) {
    console.error(`❌ Error processing ${filePath}:`, error.message);
    return false;
  }
};

// Main execution
const conflictedFiles = findConflictedFiles();
console.log(`📁 Found ${conflictedFiles.length} files with merge conflicts`);

let resolvedCount = 0;
let errorCount = 0;

conflictedFiles.forEach(filePath => {
  if (resolveMergeConflicts(filePath)) {
    resolvedCount++;
    console.log(`✅ Resolved: ${filePath}`);
  } else {
    errorCount++;
  }
});

console.log(`\n🎉 Merge conflict resolution complete!`);
console.log(`✅ Successfully resolved: ${resolvedCount} files`);
console.log(`❌ Errors: ${errorCount} files`);

// Verify no more conflicts
const remainingConflicts = findConflictedFiles();
if (remainingConflicts.length === 0) {
  console.log('🎯 All merge conflicts have been resolved!');
} else {
  console.log(`⚠️  ${remainingConflicts.length} files still have conflicts:`);
  remainingConflicts.forEach(file => console.log(`   - ${file}`));
}