#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Function to fix merge conflicts in a file
function fixMergeConflicts(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Check if file has merge conflict markers
    if (!content.includes('<<<<<<< HEAD') && !content.includes('=======') && !content.includes('>>>>>>>')) {
      return false; // No conflicts to fix
    }
    
    console.log(`Fixing merge conflicts in: ${filePath}`);
    
    // Split by conflict markers
    const lines = content.split('\n');
    const result = [];
    let inConflict = false;
    let conflictType = '';
    let conflictContent = [];
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      
      if (line.startsWith('<<<<<<< HEAD')) {
        inConflict = true;
        conflictType = 'head';
        conflictContent = [];
        continue;
      }
      
      if (line.startsWith('=======')) {
        if (inConflict && conflictType === 'head') {
          conflictType = 'incoming';
          conflictContent = [];
          continue;
        }
      }
      
      if (line.startsWith('>>>>>>>')) {
        if (inConflict) {
          // Choose the incoming version (after =======) as it's usually more complete
          if (conflictType === 'incoming' && conflictContent.length > 0) {
            result.push(...conflictContent);
          }
          inConflict = false;
          conflictType = '';
          conflictContent = [];
          continue;
        }
      }
      
      if (inConflict) {
        if (conflictType === 'incoming') {
          conflictContent.push(line);
        }
      } else {
        result.push(line);
      }
    }
    
    // Write the fixed content
    fs.writeFileSync(filePath, result.join('\n'));
    return true;
    
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

// Function to recursively find all TypeScript/JavaScript files
function findSourceFiles(dir) {
  const files = [];
  
  function traverse(currentDir) {
    const items = fs.readdirSync(currentDir);
    
    for (const item of items) {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
        traverse(fullPath);
      } else if (stat.isFile() && /\.(ts|tsx|js|jsx)$/.test(item)) {
        files.push(fullPath);
      }
    }
  }
  
  traverse(dir);
  return files;
}

// Main execution
console.log('Starting merge conflict resolution...');

const srcDir = path.join(__dirname, 'src');
const files = findSourceFiles(srcDir);

let fixedCount = 0;
let totalConflicts = 0;

for (const file of files) {
  if (fixMergeConflicts(file)) {
    fixedCount++;
    totalConflicts++;
  }
}

console.log(`\nMerge conflict resolution complete!`);
console.log(`Files processed: ${files.length}`);
console.log(`Files with conflicts fixed: ${fixedCount}`);
console.log(`Total conflicts resolved: ${totalConflicts}`);