#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

// Function to fix merge conflicts in a file
function fixMergeConflicts(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Skip if no merge conflicts
    // This is a simple approach - in practice you might want more sophisticated logic
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
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

// Function to recursively find and fix merge conflicts
function fixAllMergeConflicts(dir) {
  const items = fs.readdirSync(dir);
  let fixedCount = 0;
  
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      // Skip node_modules and other common directories
      if (['node_modules', '.git', 'dist', 'build', '.next'].includes(item)) {
        continue;
      }
      fixedCount += fixAllMergeConflicts(fullPath);
    } else if (stat.isFile()) {
      // Only process certain file types
      if (['.ts', '.tsx', '.js', '.jsx', '.json', '.css', '.html'].some(ext => item.endsWith(ext))) {
        if (fixMergeConflicts(fullPath)) {
          fixedCount++;
        }
      }
    }
  }
  
  return fixedCount;
}

// Main execution
console.log('Starting merge conflict resolution...');
const fixedCount = fixAllMergeConflicts(process.cwd());
console.log(`Fixed merge conflicts in ${fixedCount} files.`);

// Run git add to stage the changes
try {
  execSync('git add .', { stdio: 'inherit' });
  console.log('Staged all changes.');
} catch (error) {
  console.error('Error staging changes:', error.message);
}