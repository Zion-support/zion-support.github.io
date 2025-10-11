#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

// Function to fix merge conflicts in a file
function fixMergeConflicts(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Remove merge conflict markers and keep the content after 
    const conflictRegex = /\n(.*?)\n\n(.*?)\n
    content = content.replace(conflictRegex, (match, headContent, mainContent) => {
      modified = true;
      // Keep the main content (after )
      return mainContent.trim();
    });

    // Remove any remaining merge conflict markers
    const remainingMarkers = /||
    if (remainingMarkers.test(content)) {
      content = content.replace(remainingMarkers, '');
      modified = true;
    }

    // Clean up extra whitespace and empty lines
    content = content.replace(/\n\s*\n\s*\n/g, '\n\n');
    content = content.replace(/^\s*\n/g, '');
    content = content.replace(/\n\s*$/g, '');

    if (modified) {
      fs.writeFileSync(filePath, content);
      console.log(`Fixed merge conflicts in: ${filePath}`);
      return true;
    }
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Function to find all TypeScript/JavaScript files
function findSourceFiles(dir, extensions = ['.ts', '.tsx', '.js', '.jsx']) {
  const files = [];
  
  function traverse(currentDir) {
    const items = fs.readdirSync(currentDir);
    
    for (const item of items) {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        // Skip node_modules, .git, and other common directories
        if (!['node_modules', '.git', '.next', 'dist', 'build', 'out'].includes(item)) {
          traverse(fullPath);
        }
      } else if (stat.isFile()) {
        const ext = path.extname(item);
        if (extensions.includes(ext)) {
          files.push(fullPath);
        }
      }
    }
  }
  
  traverse(dir);
  return files;
}

// Main function
function main() {
  console.log('Starting merge conflict resolution...');
  
  const sourceFiles = findSourceFiles(process.cwd());
  let fixedCount = 0;
  
  for (const file of sourceFiles) {
    if (fixMergeConflicts(file)) {
      fixedCount++;
    }
  }
  
  console.log(`\nFixed merge conflicts in ${fixedCount} files.`);
  
  // Run type check to see if there are still errors
  try {
    console.log('\nRunning type check...');
    execSync('pnpm run type-check', { stdio: 'inherit' });
    console.log('Type check passed!');
  } catch (error) {
    console.log('Type check failed, but merge conflicts have been resolved.');
  }
}

main();