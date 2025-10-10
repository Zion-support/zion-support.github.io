#!/usr/bin/env node;
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);


// Find all TypeScript and JavaScript files;
const findFiles = (dir, extensions = ['.ts', '.tsx', '.js', '.jsx']) => {
  let files = [];
  const items = fs.readdirSync(dir);
  
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
      files = files.concat(findFiles(fullPath, extensions));
    } else if (extensions.some(ext => item.endsWith(ext))) {
      files.push(fullPath);
    }
  }
  
  return files;
};

// Fix merge conflicts;
const fixMergeConflicts = (filePath) => {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    const originalContent = content;
    
    // Remove merge conflict markers and keep the HEAD version;
    const mergeConflictRegex = /\n([\s\S]*?)\n([\s\S]*?)    content = content.replace(mergeConflictRegex, '$1');
    
    // Remove any remaining merge conflict markers;
    const conflictMarkers = /(||    content = content.replace(conflictMarkers, '');
    
    // Clean up extra whitespace;
    content = content.replace(/\n\s*\n\s*\n/g, '\n\n');
    
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content, 'utf8');

      return true;
    }
    
    return false;
  } catch (error) {

    return false;
  }
};

// Main execution;
const srcDir = path.join(__dirname, '..', 'src');
const appDir = path.join(__dirname, '..', 'app');

// Find all files;
const srcFiles = findFiles(srcDir);
const appFiles = findFiles(appDir);
const allFiles = [...srcFiles, ...appFiles];

let fixedCount = 0;
for (const file of allFiles) {
  if (fixMergeConflicts(file)) {
    fixedCount++;
  }
}

