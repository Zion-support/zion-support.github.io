#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Function to fix merge conflicts in a file
function fixMergeConflicts(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Check if file has merge conflicts
    if (!content.includes('<<<<<<<') && !content.includes('=======') && !content.includes('>>>>>>>')) {
      return false;
    }
    
    console.log(`Fixing merge conflicts in: ${filePath}`);
    
    // Split by merge conflict markers
    const lines = content.split('\n');
    const fixedLines = [];
    let inConflict = false;
    let conflictType = null;
    let headContent = [];
    let separatorFound = false;
    let endMarkerFound = false;
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      
      if (line.startsWith('<<<<<<<')) {
        inConflict = true;
        conflictType = 'head';
        continue;
      } else if (line.startsWith('=======')) {
        separatorFound = true;
        conflictType = 'separator';
        continue;
      } else if (line.startsWith('>>>>>>>')) {
        endMarkerFound = true;
        inConflict = false;
        
        // Choose the content after ======= (usually the newer version)
        if (separatorFound) {
          // Use the content after ======= (the newer version)
          fixedLines.push(...headContent);
        } else {
          // If no separator, use the head content
          fixedLines.push(...headContent);
        }
        
        // Reset
        headContent = [];
        separatorFound = false;
        endMarkerFound = false;
        continue;
      }
      
      if (inConflict) {
        if (conflictType === 'head') {
          headContent.push(line);
        } else if (conflictType === 'separator') {
          // Skip content between ======= and >>>>>>>
          continue;
        }
      } else {
        fixedLines.push(line);
      }
    }
    
    // Write the fixed content
    const fixedContent = fixedLines.join('\n');
    fs.writeFileSync(filePath, fixedContent, 'utf8');
    
    return true;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

// Function to find all files with merge conflicts
function findFilesWithConflicts() {
  try {
    const result = execSync('find . -name "*.tsx" -o -name "*.ts" -o -name "*.js" -o -name "*.jsx" | grep -v node_modules | xargs grep -l "^<<<<<<<\\|^=======\\|^>>>>>>>"', { encoding: 'utf8' });
    return result.trim().split('\n').filter(file => file.trim());
  } catch (error) {
    return [];
  }
}

// Main function
function main() {
  console.log('Starting merge conflict resolution...');
  
  const filesWithConflicts = findFilesWithConflicts();
  
  if (filesWithConflicts.length === 0) {
    console.log('No files with merge conflicts found.');
    return;
  }
  
  console.log(`Found ${filesWithConflicts.length} files with merge conflicts:`);
  filesWithConflicts.forEach(file => console.log(`  - ${file}`));
  
  let fixedCount = 0;
  
  filesWithConflicts.forEach(file => {
    if (fixMergeConflicts(file)) {
      fixedCount++;
    }
  });
  
  console.log(`\nFixed merge conflicts in ${fixedCount} files.`);
  
  // Verify no more conflicts
  const remainingConflicts = findFilesWithConflicts();
  if (remainingConflicts.length === 0) {
    console.log('All merge conflicts have been resolved!');
  } else {
    console.log(`Warning: ${remainingConflicts.length} files still have conflicts:`);
    remainingConflicts.forEach(file => console.log(`  - ${file}`));
  }
}

if (require.main === module) {
  main();
}

module.exports = { fixMergeConflicts, findFilesWithConflicts };