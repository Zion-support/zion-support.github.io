#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

console.log('Starting merge conflict resolution...');

// Function to resolve merge conflicts by choosing remote version
function resolveMergeConflicts(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
        separatorFound = true;
        conflictType = 'separator';
        continue;
        inConflict = false;
        conflictType = '';
        separatorFound = false;
        continue;
      }
      
      if (inConflict) {
        if (conflictType === 'head') {
          // Skip HEAD content, we want remote
          continue;
        } else if (conflictType === 'separator') {
          // This is the separator, continue to collect remote content
          continue;
        } else if (separatorFound) {
          // This is remote content, keep it
          remoteContent.push(line);
        }
      } else {
        result.push(line);
      }
    }
    
    // Add any remaining remote content
    if (inConflict && remoteContent.length > 0) {
      result.push(...remoteContent);
    }
    
    fs.writeFileSync(filePath, result.join('\n'));
    return true;
  } catch (error) {
    console.error(`Error resolving conflicts in ${filePath}:`, error.message);
    return false;
  }
}

// Function to find all files with merge conflicts
function findConflictedFiles() {
  try {
    const output = execSync('git diff --name-only --diff-filter=U', { encoding: 'utf8' });
    return output.trim().split('\n').filter(file => file.length > 0);
  } catch (error) {
    console.error('Error finding conflicted files:', error.message);
    return [];
  }
}

// Main execution
try {
  const conflictedFiles = findConflictedFiles();
  
  if (conflictedFiles.length === 0) {
    console.log('No merge conflicts found.');
    process.exit(0);
  }
  
  console.log(`Found ${conflictedFiles.length} files with merge conflicts`);
  
  let resolvedCount = 0;
  for (const file of conflictedFiles) {
    if (resolveMergeConflicts(file)) {
      resolvedCount++;
    }
  }
  
  console.log(`Resolved conflicts in ${resolvedCount} files`);
  
  // Stage the resolved files
  if (resolvedCount > 0) {
    execSync('git add .', { stdio: 'inherit' });
    console.log('Staged resolved files');
  }
  
} catch (error) {
  console.error('Error during merge conflict resolution:', error.message);
  process.exit(1);
}