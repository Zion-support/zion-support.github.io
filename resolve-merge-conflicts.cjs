#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Function to resolve merge conflicts in a file
function resolveMergeConflicts(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Check if file has merge conflicts
    if (!content.includes('<<<<<<< HEAD')) {
      return false; // No conflicts to resolve
    }
    
    console.log(`Resolving merge conflicts in: ${filePath}`);
    
    // Split content by merge conflict markers
    const lines = content.split('\n');
    const resolvedLines = [];
    let inConflict = false;
    let inHead = false;
    let inSeparator = false;
    let inOther = false;
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      
      if (line.startsWith('<<<<<<< HEAD')) {
        inConflict = true;
        inHead = true;
        inSeparator = false;
        inOther = false;
        continue;
      } else if (line.startsWith('=======')) {
        inHead = false;
        inSeparator = true;
        inOther = true;
        continue;
      } else if (line.startsWith('>>>>>>>')) {
        inConflict = false;
        inHead = false;
        inSeparator = false;
        inOther = false;
        continue;
      }
      
      if (inConflict) {
        if (inHead) {
          resolvedLines.push(line);
        }
        // Skip lines from other branch (inOther)
      } else {
        resolvedLines.push(line);
      }
    }
    
    const resolvedContent = resolvedLines.join('\n');
    fs.writeFileSync(filePath, resolvedContent, 'utf8');
    return true;
  } catch (error) {
    console.error(`Error resolving conflicts in ${filePath}:`, error.message);
    return false;
  }
}

// Function to find all files with merge conflicts
function findFilesWithConflicts(dir) {
  const files = [];
  
  function searchDirectory(currentDir) {
    try {
      const items = fs.readdirSync(currentDir);
      
      for (const item of items) {
        const fullPath = path.join(currentDir, item);
        const stat = fs.statSync(fullPath);
        
        if (stat.isDirectory()) {
          // Skip certain directories
          if (!['node_modules', '.git', 'dist', '.next', 'out'].includes(item)) {
            searchDirectory(fullPath);
          }
        } else if (stat.isFile()) {
          // Check if it's a source file
          if (item.match(/\.(ts|tsx|js|jsx|json)$/)) {
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
    } catch (error) {
      // Skip directories that can't be read
    }
  }
  
  searchDirectory(dir);
  return files;
}

// Main execution
console.log('Starting merge conflict resolution...');

const filesWithConflicts = findFilesWithConflicts('/workspace');
console.log(`Found ${filesWithConflicts.length} files with merge conflicts`);

let resolvedCount = 0;
for (const filePath of filesWithConflicts) {
  if (resolveMergeConflicts(filePath)) {
    resolvedCount++;
  }
}

console.log(`Resolved merge conflicts in ${resolvedCount} files`);

// Run git add to stage the resolved files
try {
  execSync('git add .', { cwd: '/workspace', stdio: 'inherit' });
  console.log('Staged resolved files');
} catch (error) {
  console.error('Error staging files:', error.message);
}

console.log('Merge conflict resolution complete!');