#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function fixMergeConflicts(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Check if file has merge conflicts
    if (!content.includes('<<<<<<< HEAD')) {
      return false;
    }
    
    console.log(`Fixing merge conflicts in: ${filePath}`);
    
    // Remove merge conflict markers and keep the latest version (after =======)
    let lines = content.split('\n');
    let result = [];
    let inConflict = false;
    let keepLines = false;
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      
      if (line.includes('<<<<<<< HEAD')) {
        inConflict = true;
        keepLines = false;
        continue;
      }
      
      if (line.includes('=======')) {
        keepLines = true;
        continue;
      }
      
      if (line.includes('>>>>>>>')) {
        inConflict = false;
        keepLines = false;
        continue;
      }
      
      if (inConflict) {
        if (keepLines) {
          result.push(line);
        }
      } else {
        result.push(line);
      }
    }
    
    // Write the cleaned content back
    fs.writeFileSync(filePath, result.join('\n'), 'utf8');
    return true;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

function findTsxFiles(dir) {
  const files = [];
  
  function traverse(currentDir) {
    const items = fs.readdirSync(currentDir);
    
    for (const item of items) {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        traverse(fullPath);
      } else if (item.endsWith('.tsx') || item.endsWith('.ts')) {
        files.push(fullPath);
      }
    }
  }
  
  traverse(dir);
  return files;
}

// Main execution
const appDir = path.join(__dirname, 'app');
const files = findTsxFiles(appDir);

let fixedCount = 0;
let totalConflicts = 0;

for (const file of files) {
  if (fixMergeConflicts(file)) {
    fixedCount++;
  }
  
  // Count total conflicts
  const content = fs.readFileSync(file, 'utf8');
  const conflicts = (content.match(/<<<<<<< HEAD/g) || []).length;
  totalConflicts += conflicts;
}

console.log(`\nFixed merge conflicts in ${fixedCount} files`);
console.log(`Total conflicts found: ${totalConflicts}`);

if (totalConflicts > 0) {
  console.log('Some files may still have conflicts. Please check manually.');
}