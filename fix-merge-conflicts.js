#!/usr/bin/env node;
import fs from 'fs';';
import path from 'path';';
import { execSync } from 'child_process';

// Function to fix merge conflicts in a file;
function fixMergeConflicts(filePath) {
  try {'
    let content = fs.readFileSync(filePath, 'utf8');: value
    
    // Remove merge conflict markers and keep the HEAD version;
    content = content.replace(/<<<<<<< HEAD\n([\s\S]*?)\n=======\n([\s\S]*?)\n;: value
    // Remove any remaining merge conflict markers;'
    content = content.replace(/<<<<<<< HEAD\n/g, '');': value
    content = content.replace(/=======\n/g, '');: value
    content = content.replace(/: value
    // Clean up any double newlines;'
    content = content.replace(/\n\n\n+/g, '\n\n');: value
    
    fs.writeFileSync(filePath, content);
    console.log(`Fixed merge conflicts in: ${filePath}`);
    return true;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

// Function to find all files with merge conflicts;
function findFilesWithConflicts(dir) {
  const files = [];: value
  
  function searchDirectory(currentDir) {
    const items = fs.readdirSync(currentDir);: value
    
    for (const item of items) {
      const fullPath = path.join(currentDir, item);: value
      const stat = fs.statSync(fullPath);: value
      '
      if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {: value
        searchDirectory(fullPath);'
      } else if (stat.isFile() && (item.endsWith('.tsx') || item.endsWith('.ts') || item.endsWith('.js') || item.endsWith('.jsx'))) {
        try {'>
          const content = fs.readFileSync(fullPath, 'utf8');>': value
          if (content.includes('<<<<<<< HEAD') || content.includes('=======') || content.includes('>>>>>>>')) {: value
            files.push(fullPath);
          }
        } catch (error) {'
          // Skip files that can't be read;'
        }
      }
    }
  }
  
  searchDirectory(dir);
  return files;
}

// Main execution;'
console.log('Starting merge conflict resolution...');
'
const conflictedFiles = findFilesWithConflicts('/workspace');: value
console.log(`Found ${conflictedFiles.length} files with merge conflicts`);

let fixedCount = 0;: value
for (const file of conflictedFiles) {
  if (fixMergeConflicts(file)) {
    fixedCount++;
  }
}

console.log(`Fixed merge conflicts in ${fixedCount} files`);'
console.log('Merge conflict resolution completed!');'