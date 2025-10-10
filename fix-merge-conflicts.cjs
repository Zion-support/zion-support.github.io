#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Function to fix merge conflicts in a file
function fixMergeConflicts(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Check if file has merge conflicts
    if (!content.includes('<<<<<<< HEAD')) {
      return false;
    }
    
    console.log(`Fixing merge conflicts in: ${filePath}`);
    
    // Split content by merge conflict markers
    const lines = content.split('\n');
    const result = [];
    let inConflict = false;
    let conflictBuffer = [];
    let currentVersion = '';
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      
      if (line.startsWith('<<<<<<< HEAD')) {
        inConflict = true;
        conflictBuffer = [];
        currentVersion = 'HEAD';
        continue;
      } else if (line.startsWith('=======')) {
        currentVersion = 'OTHER';
        continue;
      } else if (line.startsWith('>>>>>>> ')) {
        inConflict = false;
        // Use the HEAD version (first part) by default
        result.push(...conflictBuffer.filter(l => l.trim() !== ''));
        conflictBuffer = [];
        currentVersion = '';
        continue;
      }
      
      if (inConflict) {
        if (currentVersion === 'HEAD') {
          conflictBuffer.push(line);
        }
        // Skip lines from other versions
      } else {
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

// Function to find all files with merge conflicts
function findFilesWithConflicts(dir) {
  const files = [];
  
  function walkDir(currentPath) {
    const items = fs.readdirSync(currentPath);
    
    for (const item of items) {
      const fullPath = path.join(currentPath, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        // Skip node_modules and other common directories
        if (!['node_modules', '.git', 'dist', 'build', '.next'].includes(item)) {
          walkDir(fullPath);
        }
      } else if (stat.isFile()) {
        const ext = path.extname(item);
        if (['.tsx', '.ts', '.js', '.jsx'].includes(ext)) {
          try {
            const content = fs.readFileSync(fullPath, 'utf8');
            if (content.includes('<<<<<<< HEAD')) {
              files.push(fullPath);
            }
          } catch (error) {
            // Skip files that can't be read
          }
        }
      }
    }
  }
  
  walkDir(dir);
  return files;
}

// Main execution
console.log('🔍 Finding files with merge conflicts...');
const filesWithConflicts = findFilesWithConflicts('./app');

console.log(`Found ${filesWithConflicts.length} files with merge conflicts`);

let fixedCount = 0;
for (const file of filesWithConflicts) {
  if (fixMergeConflicts(file)) {
    fixedCount++;
  }
}

console.log(`✅ Fixed merge conflicts in ${fixedCount} files`);

// Also fix any remaining files in the root directory
const rootFiles = findFilesWithConflicts('.');
const appFiles = new Set(filesWithConflicts);
const remainingFiles = rootFiles.filter(f => !appFiles.has(f));

console.log(`Found ${remainingFiles.length} additional files with conflicts`);

for (const file of remainingFiles) {
  if (fixMergeConflicts(file)) {
    fixedCount++;
  }
}

console.log(`✅ Total files fixed: ${fixedCount}`);