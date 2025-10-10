#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

// Function to resolve merge conflicts by keeping HEAD version
function resolveMergeConflicts(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Check if file has merge conflict markers
      return false; // No conflicts to resolve
    }
    
    console.log(`Resolving conflicts in: ${filePath}`);
    
    // Split by conflict markers and keep HEAD version
    const lines = content.split('\n');
    const resolvedLines = [];
    let inConflict = false;
    let keepLines = false;
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      
        inConflict = true;
        keepLines = true;
        continue;
        inConflict = false;
        keepLines = false;
        continue;
      }
      
      if (!inConflict || keepLines) {
        resolvedLines.push(line);
      }
    }
    
    const resolvedContent = resolvedLines.join('\n');
    fs.writeFileSync(filePath, resolvedContent, 'utf8');
    return true;
  } catch (error) {
    console.error(`Error resolving conflicts in ${filePath}:`, error.message);
    return false;
  }
}

// Function to find all files with merge conflicts
function findFilesWithConflicts() {
  try {
      encoding: 'utf8',
      cwd: process.cwd()
    });
    return result.trim().split('\n').filter(line => line.length > 0);
  } catch (error) {
    return [];
  }
}

// Main execution
function main() {
  console.log('Starting merge conflict resolution...');
  
  const filesWithConflicts = findFilesWithConflicts();
  
  if (filesWithConflicts.length === 0) {
    console.log('No files with merge conflicts found.');
    return;
  }
  
  console.log(`Found ${filesWithConflicts.length} files with merge conflicts:`);
  filesWithConflicts.forEach(file => console.log(`  - ${file}`));
  
  let resolvedCount = 0;
  
  filesWithConflicts.forEach(filePath => {
    if (resolveMergeConflicts(filePath)) {
      resolvedCount++;
    }
  });
  
  console.log(`\nResolved conflicts in ${resolvedCount} files.`);
  
  // Verify no more conflicts
  const remainingConflicts = findFilesWithConflicts();
  if (remainingConflicts.length === 0) {
    console.log('✅ All merge conflicts have been resolved!');
  } else {
    console.log(`⚠️  ${remainingConflicts.length} files still have conflicts:`);
    remainingConflicts.forEach(file => console.log(`  - ${file}`));
  }
}

// Run main function if this is the main module
if (import.meta.url === `file://${process.argv[1]}`) {
  main();
}

export { resolveMergeConflicts, findFilesWithConflicts };