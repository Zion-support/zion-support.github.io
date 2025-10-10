#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

// Function to fix merge conflicts in a file
function fixMergeConflicts(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Check if file has merge conflicts
    if (!content.includes('<<<<<<< HEAD') && !content.includes('=======') && !content.includes('>>>>>>> ')) {
      return false; // No conflicts to fix
    }
    
    console.log(`Fixing merge conflicts in: ${filePath}`);
    
    // Split content by merge conflict markers
    const lines = content.split('\n');
    const fixedLines = [];
    let inConflict = false;
    let conflictType = '';
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      
      if (line.startsWith('<<<<<<< HEAD')) {
        inConflict = true;
        conflictType = 'head';
        continue;
      } else if (line.startsWith('=======')) {
        conflictType = 'separator';
        continue;
      } else if (line.startsWith('>>>>>>> ')) {
        inConflict = false;
        conflictType = '';
        continue;
      }
      
      if (inConflict) {
        // During conflict, prefer the HEAD version (before =======)
        if (conflictType === 'head') {
          fixedLines.push(line);
        }
        // Skip lines from the other branch (after =======)
      } else {
        fixedLines.push(line);
      }
    }
    
    // Write the fixed content back
    const fixedContent = fixedLines.join('\n');
    fs.writeFileSync(filePath, fixedContent, 'utf8');
    
    return true;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

// Function to find all files with merge conflicts
function findFilesWithConflicts() {
  try {
    const result = execSync('grep -l "^<<<<<<< HEAD\\|^=======\\|^>>>>>>> " app/ai-*/*.tsx src/**/*.tsx app/**/*.tsx 2>/dev/null || true', { encoding: 'utf8' });
    return result.trim().split('\n').filter(file => file.length > 0);
  } catch (error) {
    return [];
  }
}

// Main function
function main() {
  console.log('Starting merge conflict resolution...');
  
  const filesWithConflicts = findFilesWithConflicts();
  console.log(`Found ${filesWithConflicts.length} files with merge conflicts`);
  
  let fixedCount = 0;
  
  filesWithConflicts.forEach(filePath => {
    if (fixMergeConflicts(filePath)) {
      fixedCount++;
    }
  });
  
  console.log(`Fixed merge conflicts in ${fixedCount} files`);
  
  // Check if there are still conflicts
  const remainingConflicts = findFilesWithConflicts();
  if (remainingConflicts.length > 0) {
    console.log(`Warning: ${remainingConflicts.length} files still have conflicts:`);
    remainingConflicts.forEach(file => console.log(`  - ${file}`));
  } else {
    console.log('All merge conflicts have been resolved!');
  }
}

main();