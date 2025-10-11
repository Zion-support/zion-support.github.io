#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

// Function to resolve merge conflicts in a file
function resolveMergeConflicts(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Check if file has merge conflicts
    if (!content.includes('<<<<<<< HEAD')) {
      return false; // No conflicts to resolve
    }
    
    console.log(`Resolving conflicts in: ${filePath}`);
    
    // Split content into lines
    const lines = content.split('\n');
    const resolvedLines = [];
    let inConflict = false;
    let conflictBuffer = [];
    let currentVersion = '';
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      
      if (line.startsWith('<<<<<<< HEAD')) {
        inConflict = true;
        conflictBuffer = [];
        currentVersion = '';
        continue;
      }
      
      if (line.startsWith('=======')) {
        currentVersion = conflictBuffer.join('\n');
        conflictBuffer = [];
        continue;
      }
      
      if (line.startsWith('>>>>>>> ')) {
        inConflict = false;
        // Use the last version (after =======)
        if (currentVersion.trim()) {
          resolvedLines.push(currentVersion);
        }
        conflictBuffer = [];
        currentVersion = '';
        continue;
      }
      
      if (inConflict) {
        conflictBuffer.push(line);
      } else {
        resolvedLines.push(line);
      }
    }
    
    // Write resolved content
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
    const result = execSync('find . -name "*.tsx" -o -name "*.ts" -o -name "*.js" -o -name "*.jsx" | grep -v node_modules | xargs grep -l "<<<<<<< HEAD" 2>/dev/null', { 
      encoding: 'utf8',
      cwd: process.cwd()
    });
    return result.trim().split('\n').filter(line => line.trim());
  } catch (error) {
    console.error('Error finding files with conflicts:', error.message);
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
  console.log(`- Total files processed: ${filesWithConflicts.length}`);
  
  // Verify no conflicts remain
  const remainingConflicts = findFilesWithConflicts();
  if (remainingConflicts.length === 0) {
    console.log('\n✅ All merge conflicts have been resolved!');
  } else {
    console.log(`\n⚠️  ${remainingConflicts.length} files still have conflicts:`);
    remainingConflicts.forEach(file => console.log(`  - ${file}`));
  }
}

// Run main function if this is the main module
if (import.meta.url === `file://${process.argv[1]}`) {
  main();
}

export { resolveMergeConflicts, findFilesWithConflicts };