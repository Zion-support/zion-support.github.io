#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function fixMergeConflicts(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Remove merge conflict markers and keep HEAD version
    content = content.replace(/\n?/g, '');
    content = content.replace(/    content = content.replace(/    
    // Clean up any remaining conflict markers
    content = content.replace(/    content = content.replace(/    
    // Remove duplicate imports and clean up
    const lines = content.split('\n');
    const seenImports = new Set();
    const cleanedLines = [];
    
    for (const line of lines) {
      const trimmedLine = line.trim();
      
      // Skip empty lines after conflict resolution
      if (trimmedLine === '' && cleanedLines[cleanedLines.length - 1]?.trim() === '') {
        continue;
      }
      
      // Handle duplicate imports
      if (trimmedLine.startsWith('import ')) {
        const importKey = trimmedLine.replace(/\s+from\s+.*$/, '');
        if (seenImports.has(importKey)) {
          continue;
        }
        seenImports.add(importKey);
      }
      
      cleanedLines.push(line);
    }
    
    content = cleanedLines.join('\n');
    
    // Write the cleaned content back
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Fixed merge conflicts in: ${filePath}`);
    return true;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

function findFilesWithConflicts(dir) {
  const files = [];
  
  function walkDir(currentPath) {
    const items = fs.readdirSync(currentPath);
    
    for (const item of items) {
      const fullPath = path.join(currentPath, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
        walkDir(fullPath);
      } else if (stat.isFile() && /\.(tsx?|jsx?)$/.test(item)) {
        const content = fs.readFileSync(fullPath, 'utf8');
        if (content.includes('')) {
          files.push(fullPath);
        }
      }
    }
  }
  
  walkDir(dir);
  return files;
}

// Main execution
const filesWithConflicts = findFilesWithConflicts('.');
console.log(`Found ${filesWithConflicts.length} files with merge conflicts`);

let fixedCount = 0;
for (const file of filesWithConflicts) {
  if (fixMergeConflicts(file)) {
    fixedCount++;
  }
}

console.log(`Fixed merge conflicts in ${fixedCount} files`);