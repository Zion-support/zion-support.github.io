#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

// Function to resolve merge conflicts by choosing the newer version (after =======)
function resolveMergeConflicts(content) {
  const lines = content.split('\n');
  const resolvedLines = [];
  let i = 0;
  
  while (i < lines.length) {
    const line = lines[i];
    
    if (line.startsWith('<<<<<<< ')) {
      // Skip until we find =======
      while (i < lines.length && !lines[i].startsWith('=======')) {
        i++;
      }
      // Skip the ======= line
      i++;
      // Keep everything after ======= until >>>>>>> 
      while (i < lines.length && !lines[i].startsWith('>>>>>>> ')) {
        resolvedLines.push(lines[i]);
        i++;
      }
      // Skip the >>>>>>> line
      i++;
    } else {
      resolvedLines.push(line);
      i++;
    }
  }
  
  return resolvedLines.join('\n');
}

// Function to process a single file
function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    
    if (content.includes('<<<<<<< ')) {
      console.log(`Processing: ${filePath}`);
      const resolvedContent = resolveMergeConflicts(content);
      fs.writeFileSync(filePath, resolvedContent, 'utf8');
      console.log(`✓ Fixed merge conflicts in: ${filePath}`);
      return true;
    }
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Function to find all TypeScript/JSX files with merge conflicts
function findFilesWithConflicts(dir) {
  const files = [];
  
  function walkDir(currentPath) {
    const items = fs.readdirSync(currentPath);
    
    for (const item of items) {
      const fullPath = path.join(currentPath, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
        walkDir(fullPath);
      } else if (stat.isFile() && (item.endsWith('.tsx') || item.endsWith('.ts') || item.endsWith('.jsx') || item.endsWith('.js'))) {
        try {
          const content = fs.readFileSync(fullPath, 'utf8');
          if (content.includes('<<<<<<< ')) {
            files.push(fullPath);
          }
        } catch (error) {
          // Skip files that can't be read
        }
      }
    }
  }
  
  walkDir(dir);
  return files;
}

// Main execution
console.log('🔍 Finding files with merge conflicts...');
const filesWithConflicts = findFilesWithConflicts('./app');

console.log(`Found ${filesWithConflicts.length} files with merge conflicts`);

let fixedCount = 0;
for (const file of filesWithConflicts) {
  if (processFile(file)) {
    fixedCount++;
  }
}

console.log(`\n✅ Fixed merge conflicts in ${fixedCount} files`);

// Also check for any remaining conflicts
console.log('\n🔍 Checking for remaining conflicts...');
try {
  const remainingConflicts = execSync('grep -r "^<<<<<<< " app/ --include="*.tsx" --include="*.ts" --include="*.jsx" --include="*.js" | wc -l', { encoding: 'utf8' }).trim();
  console.log(`Remaining conflicts: ${remainingConflicts}`);
} catch (error) {
  console.log('No remaining conflicts found');
}

console.log('\n🎉 Merge conflict resolution complete!');