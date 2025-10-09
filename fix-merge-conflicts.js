#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Function to resolve merge conflicts by keeping HEAD version
function resolveMergeConflicts(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Check if file has merge conflict markers
    if (!content.includes('<<<<<<< HEAD') && !content.includes('=======') && !content.includes('>>>>>>> ')) {
      return false; // No conflicts to resolve
    }
    
    console.log(`Resolving conflicts in: ${filePath}`);
    
    // Split content into lines
    const lines = content.split('\n');
    const resolvedLines = [];
    let inConflict = false;
    let conflictDepth = 0;
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      
      if (line.trim() === '<<<<<<< HEAD') {
        inConflict = true;
        conflictDepth++;
        continue; // Skip the conflict marker
      } else if (line.trim() === '=======') {
        if (inConflict) {
          // Skip everything until the end marker
          continue;
        }
      } else if (line.trim().startsWith('>>>>>>> ')) {
        inConflict = false;
        conflictDepth--;
        continue; // Skip the conflict marker
      } else if (!inConflict) {
        // Keep the line if we're not in a conflict
        resolvedLines.push(line);
      }
      // Skip lines that are in the "other" branch of the conflict
    }
    
    // Write the resolved content back
    const resolvedContent = resolvedLines.join('\n');
    fs.writeFileSync(filePath, resolvedContent, 'utf8');
    
    return true; // Conflicts were resolved
  } catch (error) {
    console.error(`Error resolving conflicts in ${filePath}:`, error.message);
    return false;
  }
}

// Function to find all files with merge conflicts
function findFilesWithConflicts(dir) {
  const files = [];
  
  function scanDirectory(currentDir) {
    const items = fs.readdirSync(currentDir);
    
    for (const item of items) {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        // Skip node_modules and other common directories
        if (!['node_modules', '.git', 'dist', 'build', '.next'].includes(item)) {
          scanDirectory(fullPath);
        }
      } else if (stat.isFile() && (item.endsWith('.tsx') || item.endsWith('.ts') || item.endsWith('.js') || item.endsWith('.jsx'))) {
        const content = fs.readFileSync(fullPath, 'utf8');
        if (content.includes('<<<<<<< HEAD') || content.includes('=======') || content.includes('>>>>>>> ')) {
          files.push(fullPath);
        }
      }
    }
  }
  
  scanDirectory(dir);
  return files;
}

// Main execution
console.log('Starting merge conflict resolution...');

const srcDir = path.join(__dirname, 'src');
const appDir = path.join(__dirname, 'app');
const filesWithConflicts = [...findFilesWithConflicts(srcDir), ...findFilesWithConflicts(appDir)];

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

if (resolvedCount > 0) {
  console.log('\nMerge conflicts have been resolved by keeping the HEAD version.');
  console.log('Please review the changes and test the application.');
}