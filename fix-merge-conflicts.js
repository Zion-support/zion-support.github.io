#!/usr/bin/env node
import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';
// Function to recursively find all files with merge conflict markers
function findFilesWithMergeConflicts(dir, fileList = []) {
  try {
    const files = fs.readdirSync(dir);
    for (const file of files) {
      const filePath = path.join(dir, file);
      try {
        const stat = fs.statSync(filePath);
        if (stat.isDirectory()) {
          // Skip node_modules, .git, and other common directories
          if (!['node_modules', '.git', '.next', 'dist', 'build'].includes(file)) {
            findFilesWithMergeConflicts(filePath, fileList);
          }
        } else if (stat.isFile()) {
          // Check if file contains merge conflict markers
          try {
            const content = fs.readFileSync(filePath, 'utf8');
            if (content.includes('                content.includes('') || 
                content.includes('')) {
              fileList.push(filePath);
            }
          } catch (error) {
            // Skip files that can't be read
            console.log(`Skipping file: ${filePath} (${error.message})`);
          }
        }
      } catch (error) {
        // Skip files/directories that can't be accessed (broken symlinks, etc.)
        console.log(`Skipping path: ${filePath} (${error.message})`);
      }
    }
  } catch (error) {
    console.log(`Skipping directory: ${dir} (${error.message})`);
  }
  return fileList;
}
// Function to fix merge conflicts in a file
function fixMergeConflicts(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let originalContent = content;
    // Remove merge conflict markers and keep the HEAD version
    content = content.replace(/\n?/g, '');
    content = content.replace(/\n?/g, '');
    content = content.replace(/>>>>>>> origin\/[^\n]*\n?/g, '');
    // Clean up any remaining artifacts
    content = content.replace(/\n{3,}/g, '\n\n'); // Replace multiple newlines with double newlines
    content = content.replace(/^\s*\n/gm, ''); // Remove empty lines at start of lines
    // Only write if content changed
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed merge conflicts in: ${filePath}`);
      return true;
    }
    return false;
  } catch (error) {
    console.error(`Error fixing ${filePath}: ${error.message}`);
    return false;
  }
}
// Main execution
console.log('Finding files with merge conflict markers...');
const filesWithConflicts = findFilesWithMergeConflicts('.');
console.log(`Found ${filesWithConflicts.length} files with merge conflicts`);
let fixedCount = 0;
for (const file of filesWithConflicts) {
  if (fixMergeConflicts(file)) {
    fixedCount++;
  }
}
console.log(`Fixed merge conflicts in ${fixedCount} files`);
// Run TypeScript check to see remaining errors
console.log('\nRunning TypeScript check...');
try {
  execSync('npx tsc --noEmit --skipLibCheck', { stdio: 'inherit' });
  console.log('TypeScript check passed!');
} catch (error) {
  console.log('TypeScript check found some issues, but continuing...');
}
console.log('\nMerge conflict fixing complete!');