#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

// Function to recursively find all files with merge conflicts
function findFilesWithConflicts(dir, fileList = []) {
  const files = fs.readdirSync(dir);
  
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      // Skip node_modules and other directories we don't want to process
      if (!['node_modules', '.git', '.next', 'dist', 'out'].includes(file)) {
        findFilesWithConflicts(filePath, fileList);
      }
    } else if (stat.isFile()) {
      // Check if file contains merge conflict markers
      try {
        const content = fs.readFileSync(filePath, 'utf8');
        if (content.includes('') || content.includes('') || content.includes('          fileList.push(filePath);
        }
      } catch (error) {
        // Skip files that can't be read
        console.log(`Skipping file: ${filePath} (${error.message})`);
      }
    }
  });
  
  return fileList;
}

// Function to clean merge conflicts from a file
function cleanMergeConflicts(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    const originalContent = content;
    
    // Remove merge conflict markers and keep the HEAD version (first part)
    content = content.replace(/\n([\s\S]*?)\n\n([\s\S]*?)\n    
    // Remove any remaining conflict markers
    content = content.replace(/\n?/g, '');
    content = content.replace(/\n?/g, '');
    content = content.replace(/    
    // Only write if content changed
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Cleaned: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error cleaning ${filePath}:`, error.message);
    return false;
  }
}

// Main execution
console.log('Starting merge conflict cleanup...');

const filesWithConflicts = findFilesWithConflicts('.');
console.log(`Found ${filesWithConflicts.length} files with merge conflicts`);

let cleanedCount = 0;
filesWithConflicts.forEach(filePath => {
  if (cleanMergeConflicts(filePath)) {
    cleanedCount++;
  }
});

console.log(`Cleaned ${cleanedCount} files`);

// Also clean up any .original files that might be left over
console.log('Cleaning up .original files...');
try {
  execSync('find . -name "*.original" -type f -delete', { stdio: 'inherit' });
  console.log('Removed .original files');
} catch (error) {
  console.log('No .original files to remove or error occurred');
}

console.log('Merge conflict cleanup completed!');