#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

// Function to resolve merge conflicts by keeping HEAD version
function resolveMergeConflicts(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Check if file has merge conflict markers
    if (!content.includes('<<<<<<< HEAD')) {
      return false; // No conflicts to resolve
    }
    
    console.log(`Resolving conflicts in: ${filePath}`);
    
    // Split content by merge conflict markers
    const lines = content.split('\n');
    const resolvedLines = [];
    let inConflict = false;
    let keepHead = false;
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      
      if (line.startsWith('<<<<<<< HEAD')) {
        inConflict = true;
        keepHead = true;
        continue;
      } else if (line.startsWith('=======')) {
        keepHead = false;
        continue;
      } else if (line.startsWith('>>>>>>>')) {
        inConflict = false;
        keepHead = false;
        continue;
      }
      
      if (inConflict) {
        if (keepHead) {
          resolvedLines.push(line);
        }
        // Skip lines from other branch
      } else {
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
    const result = execSync('find . -name "*.tsx" -o -name "*.ts" -o -name "*.js" -o -name "*.jsx" | grep -v node_modules | xargs grep -l "<<<<<<< HEAD"', { 
      encoding: 'utf8',
      stdio: 'pipe'
    });
    return result.trim().split('\n').filter(line => line.length > 0);
  } catch (error) {
    console.error('Error finding files with conflicts:', error.message);
    return [];
  }
}

// Main execution
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

// Verify no more conflicts
try {
  const remainingConflicts = execSync('find . -name "*.tsx" -o -name "*.ts" -o -name "*.js" -o -name "*.jsx" | grep -v node_modules | xargs grep -l "<<<<<<< HEAD" | wc -l', { 
    encoding: 'utf8',
    stdio: 'pipe'
  });
  console.log(`\nRemaining files with conflicts: ${remainingConflicts.trim()}`);
} catch (error) {
  console.log('No remaining conflicts found!');
}