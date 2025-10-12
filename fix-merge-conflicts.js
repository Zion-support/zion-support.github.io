#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

// Function to resolve merge conflicts in a file
function resolveMergeConflicts(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Check if file has merge conflicts
    if (!content.includes('
    resolved = resolved.replace(/
    
    // Handle cases where there might be multiple conflict sections
    // Remove any remaining conflict markers
    resolved = resolved.replace(/
    resolved = resolved.replace(/
    
    // Clean up any remaining conflict markers
    resolved = resolved.replace(/
    
    // Write the resolved content back
    fs.writeFileSync(filePath, resolved, 'utf8');
    
    return true;
  } catch (error) {
    console.error(`Error resolving conflicts in ${filePath}:`, error.message);
    return false;
  }
}

// Function to find all files with merge conflicts
function findFilesWithConflicts() {
  try {
    const result = execSync('find . -name "*.tsx" -o -name "*.ts" -o -name "*.js" -o -name "*.jsx" | grep -v node_modules | xargs grep -l "" 2>/dev/null', { 
      encoding: 'utf8',
      cwd: process.cwd()
    });
    return result.trim().split('\n').filter(f => f.length > 0);
  } catch (error) {
    return [];
  }
}

// Main execution
function main() {
  console.log('Starting merge conflict resolution...');
  
  const filesWithConflicts = findFilesWithConflicts();
  console.log(`Found ${filesWithConflicts.length} files with merge conflicts`);
  
  let resolvedCount = 0;
  let errorCount = 0;
  
  for (const filePath of filesWithConflicts) {
    if (resolveMergeConflicts(filePath)) {
      resolvedCount++;
    } else {
      errorCount++;
    }
  }
  
  console.log(`\nResolution complete:`);
  console.log(`- Files resolved: ${resolvedCount}`);
  console.log(`- Files with errors: ${errorCount}`);
  
  // Verify no more conflicts
  const remainingConflicts = findFilesWithConflicts();
  if (remainingConflicts.length === 0) {
    console.log('✅ All merge conflicts resolved!');
  } else {
    console.log(`⚠️  ${remainingConflicts.length} files still have conflicts:`);
    remainingConflicts.forEach(f => console.log(`  - ${f}`));
  }
}

// Run main function
main();

export { resolveMergeConflicts, findFilesWithConflicts };
