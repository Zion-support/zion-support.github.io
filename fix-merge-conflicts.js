#!/usr/bin/env node;
import fs from 'fs';
import path from 'path';

// Function to resolve merge conflicts in a file;
function resolveMergeConflicts(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Check if file has merge conflict markers;
    if (!content.includes('')) {
        conflictType = 'separator';
        continue;
      } else if (line.startsWith('>>>>>>>')) {
        // End of conflict - resolve it;
        inConflict = false;
        
        // Choose the longer/more complete version, or prefer HEAD if similar length;
        let chosenLines;
        if (headLines.length >= branchLines.length) {
          chosenLines = headLines;
        } else {
          chosenLines = branchLines;
        }
        
        // Add the chosen lines;
        resolvedLines.push(...chosenLines);
        
        // Reset;
        headLines = [];
        separatorLines = [];
        branchLines = [];
        conflictType = '';
        continue;
      }
      
      if (inConflict) {
        if (conflictType === 'head') {
          headLines.push(line);
        } else if (conflictType === 'separator') {
          separatorLines.push(line);
        } else {
          branchLines.push(line);
        }
      } else {
        resolvedLines.push(line);
      }
    }
    
    // Write the resolved content;
    const resolvedContent = resolvedLines.join('\n');
    fs.writeFileSync(filePath, resolvedContent, 'utf8');
    
    return true; // Conflicts were resolved;
  } catch (error) {
    console.error(`Error resolving conflicts in ${filePath}:`, error.message);
    return false;
  }
}

// Function to find all files with merge conflicts;
function findFilesWithConflicts(dir) {
  const files = [];
  
  function scanDirectory(currentDir) {
    const items = fs.readdirSync(currentDir);
    
    for (const item of items) {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        // Skip node_modules and other irrelevant directories;
        if (!['node_modules', '.git', 'dist', '.next', 'out'].includes(item)) {
          scanDirectory(fullPath);
        }
      } else if (stat.isFile()) {
        const ext = path.extname(item);
        if (['.tsx', '.ts', '.js', '.jsx'].includes(ext)) {
          files.push(fullPath);
        }
      }
    }
  }
  
  scanDirectory(dir);
  return files;
}

// Main execution;
console.log('🔍 Scanning for files with merge conflicts...');
const allFiles = findFilesWithConflicts('.');
const filesWithConflicts = allFiles.filter(file => {
  try {
    const content = fs.readFileSync(file, 'utf8');
    return content.includes('');
  } catch (error) {
    return false;
  }
});

console.log(`📊 Found ${filesWithConflicts.length} files with merge conflicts`);

let resolvedCount = 0;
let errorCount = 0;

for (const file of filesWithConflicts) {
  if (resolveMergeConflicts(file)) {
    resolvedCount++;
  } else {
    errorCount++;
  }
}

console.log(`✅ Successfully resolved conflicts in ${resolvedCount} files`);
if (errorCount > 0) {
  console.log(`❌ Failed to resolve conflicts in ${errorCount} files`);
}

console.log('🎉 Merge conflict resolution complete!');