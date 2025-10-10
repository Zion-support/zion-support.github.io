#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Function to fix merge conflicts in a file
function fixMergeConflicts(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Check if file has merge conflicts
    if (!content.includes('<<<<<<< HEAD') && !content.includes('=======') && !content.includes('>>>>>>> ')) {
      return false; // No conflicts to fix
    }
    
    console.log(`Fixing merge conflicts in: ${filePath}`);
    
    // Split content into lines
    const lines = content.split('\n');
    const fixedLines = [];
    let inConflict = false;
    let headLines = [];
    let separatorFound = false;
    let branchLines = [];
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      
      if (line.startsWith('<<<<<<< HEAD')) {
        inConflict = true;
        headLines = [];
        separatorFound = false;
        branchLines = [];
        continue;
      }
      
      if (line.startsWith('=======')) {
        separatorFound = true;
        continue;
      }
      
      if (line.startsWith('>>>>>>> ')) {
        inConflict = false;
        // Use HEAD version (first part) by default
        fixedLines.push(...headLines);
        headLines = [];
        branchLines = [];
        separatorFound = false;
        continue;
      }
      
      if (inConflict) {
        if (!separatorFound) {
          headLines.push(line);
        } else {
          branchLines.push(line);
        }
      } else {
        fixedLines.push(line);
      }
    }
    
    // Write fixed content back to file
    fs.writeFileSync(filePath, fixedLines.join('\n'), 'utf8');
    return true;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

// Function to recursively find and fix merge conflicts
function fixAllMergeConflicts(dir) {
  const files = fs.readdirSync(dir);
  let fixedCount = 0;
  
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      // Skip node_modules and other directories we don't want to process
      if (file === 'node_modules' || file === '.git' || file === 'dist' || file === '.next') {
        continue;
      }
      fixedCount += fixAllMergeConflicts(filePath);
    } else if (file.endsWith('.tsx') || file.endsWith('.ts') || file.endsWith('.js') || file.endsWith('.jsx')) {
      if (fixMergeConflicts(filePath)) {
        fixedCount++;
      }
    }
  }
  
  return fixedCount;
}

// Main execution
console.log('Starting merge conflict resolution...');
const fixedCount = fixAllMergeConflicts('/workspace');
console.log(`Fixed merge conflicts in ${fixedCount} files.`);