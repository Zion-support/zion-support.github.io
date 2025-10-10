#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Function to resolve merge conflicts by keeping HEAD version
function resolveMergeConflicts(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Check if file has merge conflicts
    if (!content.includes('<<<<<<< HEAD')) {
      return false; // No conflicts to resolve
    }
    
    console.log(`Resolving merge conflicts in: ${filePath}`);
    
    // Split by merge conflict markers and keep HEAD version
    const lines = content.split('\n');
    const resolvedLines = [];
    let inConflict = false;
    let keepCurrent = false;
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      
      if (line.startsWith('<<<<<<< HEAD')) {
        inConflict = true;
        keepCurrent = true;
        continue;
      } else if (line.startsWith('=======')) {
        keepCurrent = false;
        continue;
      } else if (line.startsWith('>>>>>>>')) {
        inConflict = false;
        keepCurrent = false;
        continue;
      }
      
      if (!inConflict || keepCurrent) {
        resolvedLines.push(line);
      }
    }
    
    const resolvedContent = resolvedLines.join('\n');
    fs.writeFileSync(filePath, resolvedContent, 'utf8');
    return true;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Get all files with merge conflicts
const { execSync } = require('child_process');

try {
  const filesWithConflicts = execSync('grep -r "<<<<<<< HEAD" app/ --include="*.tsx" --include="*.ts" | cut -d: -f1 | sort | uniq', { encoding: 'utf8' })
    .trim()
    .split('\n')
    .filter(file => file.length > 0);
  
  console.log(`Found ${filesWithConflicts.length} files with merge conflicts`);
  
  let resolvedCount = 0;
  for (const file of filesWithConflicts) {
    if (resolveMergeConflicts(file)) {
      resolvedCount++;
    }
  }
  
  console.log(`Resolved merge conflicts in ${resolvedCount} files`);
  
  // Verify no more conflicts
  const remainingConflicts = execSync('grep -r "<<<<<<< HEAD" app/ --include="*.tsx" --include="*.ts" | wc -l', { encoding: 'utf8' }).trim();
  console.log(`Remaining conflicts: ${remainingConflicts}`);
  
} catch (error) {
  console.error('Error:', error.message);
  process.exit(1);
}