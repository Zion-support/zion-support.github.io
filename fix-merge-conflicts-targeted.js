#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function fixMergeConflicts(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Only fix merge conflict markers, keep everything else as is
    if (content.includes('')) {
      // Remove merge conflict markers and keep HEAD version
      content = content.replace(/\n([\s\S]*?)\n([\s\S]*?)      
      // Remove any remaining conflict markers
      content = content.replace(/\n?/g, '');
      content = content.replace(/\n?/g, '');
      content = content.replace(/      
      // Clean up any double newlines that might have been created
      content = content.replace(/\n\n\n+/g, '\n\n');
      
      modified = true;
    }
    
    if (modified) {
      fs.writeFileSync(filePath, content);
      console.log(`Fixed merge conflicts in: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

function findFilesWithConflicts(dir) {
  const files = [];
  
  function searchDir(currentDir) {
    const items = fs.readdirSync(currentDir);
    
    for (const item of items) {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
        searchDir(fullPath);
      } else if (stat.isFile() && /\.(tsx?|jsx?)$/.test(item)) {
        try {
          const content = fs.readFileSync(fullPath, 'utf8');
          if (content.includes('')) {
            files.push(fullPath);
          }
        } catch (error) {
          // Skip files that can't be read
        }
      }
    }
  }
  
  searchDir(dir);
  return files;
}

// Main execution
const workspaceDir = process.cwd();
const conflictFiles = findFilesWithConflicts(workspaceDir);

console.log(`Found ${conflictFiles.length} files with merge conflicts`);

let fixedCount = 0;
for (const file of conflictFiles) {
  if (fixMergeConflicts(file)) {
    fixedCount++;
  }
}

console.log(`Fixed merge conflicts in ${fixedCount} files`);