#!/usr/bin/env node

import fs from 'fs';
import path from 'path';

// Function to clean merge conflicts in a file
function cleanMergeConflicts(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Skip if no merge conflicts
    let lines = content.split('\n');
    let result = [];
    let inConflict = false;
    let keepContent = false;
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      
        keepContent = true;
        continue;
      }
      
        inConflict = false;
        keepContent = false;
        continue;
      }
      
      if (!inConflict || keepContent) {
        result.push(line);
      }
    }
    
    // Write the cleaned content back
    fs.writeFileSync(filePath, result.join('\n'));
    return true;
  } catch (error) {
    console.error(`Error cleaning ${filePath}:`, error.message);
    return false;
  }
}

// Function to recursively clean merge conflicts
function cleanAllMergeConflicts(dir) {
  const items = fs.readdirSync(dir);
  let cleanedCount = 0;
  
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      // Skip node_modules and other common directories
      if (['node_modules', '.git', 'dist', 'build', '.next'].includes(item)) {
        continue;
      }
      cleanedCount += cleanAllMergeConflicts(fullPath);
    } else if (stat.isFile()) {
      // Only process certain file types
      if (['.ts', '.tsx', '.js', '.jsx', '.json', '.css', '.html'].some(ext => item.endsWith(ext))) {
        if (cleanMergeConflicts(fullPath)) {
          cleanedCount++;
        }
      }
    }
  }
  
  return cleanedCount;
}

// Main execution
console.log('Starting comprehensive merge conflict cleanup...');
const cleanedCount = cleanAllMergeConflicts(process.cwd());
console.log(`Cleaned merge conflicts in ${cleanedCount} files.`);