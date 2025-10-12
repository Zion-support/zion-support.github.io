#!/usr/bin/env node

import fs from 'fs';
import path from 'path';

// Function to fix merge conflicts in a file
    let content = fs.readFileSync(filePath, 'utf8');

    // Remove merge conflict markers and keep the content
    content = content.replace(/\n?/g, '');
    content = content.replace(/\n?/g, '');
    content = content.replace(/
    // Clean up any double newlines that might have been created
    content = content.replace(/\n\n\n+/g, '\n\n');

    // Write the cleaned content back
    fs.writeFileSync(filePath, content);
    console.log(`Fixed merge conflicts in: ${filePath}`);
    return true;
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;

// Function to find all files with merge conflicts
  const files = [];

    const items = fs.readdirSync(currentPath);

      const fullPath = path.join(currentPath, item);
      const stat = fs.statSync(fullPath);

        walkDir(fullPath);
          const content = fs.readFileSync(fullPath, 'utf8');
            files.push(fullPath);

          // Skip files that can't be read

  walkDir(dir);
  return files;

// Main execution
console.log('Starting merge conflict resolution...');

const filesWithConflicts = findFilesWithMergeConflicts('/workspace');
console.log(`Found ${filesWithConflicts.length} files with merge conflicts`);

let fixedCount = 0;
    fixedCount++;

console.log(`Fixed merge conflicts in ${fixedCount} files`);
console.log('Merge conflict resolution completed!');
