#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Function to resolve merge conflicts by keeping HEAD version
function resolveMergeConflicts(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Check if file has merge conflicts
    if (!content.includes('<<<<<<< HEAD')) {
      return false; // No conflicts to resolve
    }
    
    console.log(`Resolving conflicts in: ${filePath}`);
    
    // Split content by conflict markers
    const lines = content.split('\n');
    const resolvedLines = [];
    let inConflict = false;
    let keepCurrent = false;
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      
      if (line.trim() === '<<<<<<< HEAD') {
        inConflict = true;
        keepCurrent = true;
        continue;
      } else if (line.trim() === '=======') {
        keepCurrent = false;
        continue;
      } else if (line.trim() === '>>>>>>>') {
        inConflict = false;
        keepCurrent = false;
        continue;
      } else if (line.includes('>>>>>>>')) {
        // Handle case where conflict marker is on same line as content
        const parts = line.split('>>>>>>>');
        if (keepCurrent && parts[0].trim()) {
          resolvedLines.push(parts[0].trim());
        }
        inConflict = false;
        keepCurrent = false;
        continue;
      }
      
      if (inConflict) {
        if (keepCurrent) {
          resolvedLines.push(line);
        }
        // Skip lines in the other branch
      } else {
        resolvedLines.push(line);
      }
    }
    
    // Write resolved content back to file
    const resolvedContent = resolvedLines.join('\n');
    fs.writeFileSync(filePath, resolvedContent, 'utf8');
    
    return true; // Conflicts were resolved
  } catch (error) {
    console.error(`Error resolving conflicts in ${filePath}:`, error.message);
    return false;
  }
}

// Function to find all files with merge conflicts
function findFilesWithConflicts() {
  try {
    const result = execSync(
      'find . -name "*.tsx" -o -name "*.ts" -o -name "*.js" -o -name "*.jsx" | grep -v node_modules | xargs grep -l "<<<<<<< HEAD"',
      { encoding: 'utf8' }
    );
    return result.trim().split('\n').filter(file => file.trim());
  } catch (error) {
    console.log('No files with merge conflicts found or error occurred');
    return [];
  }
}

// Main execution
console.log('Starting merge conflict resolution...');

const filesWithConflicts = findFilesWithConflicts();
console.log(`Found ${filesWithConflicts.length} files with merge conflicts`);

let resolvedCount = 0;
let errorCount = 0;

filesWithConflicts.forEach(filePath => {
  if (resolveMergeConflicts(filePath)) {
    resolvedCount++;
  } else {
    errorCount++;
  }
});

console.log(`\nResolution complete:`);
console.log(`- Files processed: ${filesWithConflicts.length}`);
console.log(`- Successfully resolved: ${resolvedCount}`);
console.log(`- Errors: ${errorCount}`);

// Verify no conflicts remain
console.log('\nVerifying no conflicts remain...');
try {
  const remainingConflicts = execSync(
    'find . -name "*.tsx" -o -name "*.ts" -o -name "*.js" -o -name "*.jsx" | grep -v node_modules | xargs grep -l "<<<<<<< HEAD" | wc -l',
    { encoding: 'utf8' }
  );
  console.log(`Remaining files with conflicts: ${remainingConflicts.trim()}`);
} catch (error) {
  console.log('No remaining conflicts found!');
}