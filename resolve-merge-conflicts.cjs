#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');



// Get list of conflicted files
const conflictedFiles = execSync('git diff --name-only --diff-filter=U', { "encoding": 'utf8' })
  .trim()
  .split('\n')
  .filter(file => file.length > 0);



// Function to resolve conflicts by accepting feature branch changes
function resolveConflicts(filePath) {
  try {
    if (!fs.existsSync(filePath)) {
      
      return false;
    }

    let content = fs.readFileSync(filePath, 'utf8');
    
    // Check if file has merge conflicts
    const lines = content.split('\n');
    const resolvedLines = [];
    let inConflict = false;
    let acceptChanges = false;

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      
        acceptChanges = true;
        continue;
      }
      
        inConflict = false;
        acceptChanges = false;
        continue;
      }
      
      if (inConflict && !acceptChanges) {
        // Skip lines from HEAD
        continue;
      }
      
      if (inConflict && acceptChanges) {
        // Accept lines from feature branch
        resolvedLines.push(line);
        continue;
      }
      
      // Normal lines outside conflicts
      resolvedLines.push(line);
    }

    const resolvedContent = resolvedLines.join('\n');
    fs.writeFileSync(filePath, resolvedContent, 'utf8');
    
    return true;
  } catch (error) {
    console.error(`❌ Error resolving ${filePath}:`, error.message);
    return false;
  }
}

// Resolve conflicts for all files
let resolvedCount = 0;
let failedCount = 0;

for (const file of conflictedFiles) {
  if (resolveConflicts(file)) {
    resolvedCount++;
  } else {
    failedCount++;
  }
}





if (resolvedCount > 0) {
  
  try {
    execSync('git add .', { "stdio": 'inherit' });
    
  } catch (error) {
    console.error('❌ Error adding files to "git": ', error.message);
  }
}

