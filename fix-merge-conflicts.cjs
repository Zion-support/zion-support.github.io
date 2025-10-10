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
    
    // Remove merge conflict markers and keep HEAD version
    // This regex removes everything between <<<<<<< HEAD and =======, 
    // and everything between ======= and >>>>>>> branch-name
    content = content.replace(/<<<<<<< HEAD\n([\s\S]*?)\n=======\n([\s\S]*?)\n>>>>>>> [^\n]+\n?/g, '$1');
    
    // Remove any remaining merge conflict markers
    content = content.replace(/<<<<<<< HEAD\n?/g, '');
    content = content.replace(/=======\n?/g, '');
    content = content.replace(/>>>>>>> [^\n]+\n?/g, '');
    
    // Clean up any double newlines that might have been created
    content = content.replace(/\n\n\n+/g, '\n\n');
    
    // Write the cleaned content back
    fs.writeFileSync(filePath, content, 'utf8');
    return true;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

// Function to find all files with merge conflicts
function findFilesWithConflicts() {
  try {
    const result = execSync('find . -name "*.tsx" -o -name "*.ts" -o -name "*.js" -o -name "*.jsx" | grep -v node_modules | xargs grep -l "<<<<<<< HEAD"', { 
      encoding: 'utf8',
      cwd: process.cwd()
    });
    return result.trim().split('\n').filter(line => line.trim());
  } catch (error) {
    console.log('No files with merge conflicts found or error occurred');
    return [];
  }
}

// Main function
function main() {
  console.log('Starting merge conflict resolution...');
  
  const filesWithConflicts = findFilesWithConflicts();
  console.log(`Found ${filesWithConflicts.length} files with merge conflicts`);
  
  let fixedCount = 0;
  let errorCount = 0;
  
  filesWithConflicts.forEach(filePath => {
    if (fixMergeConflicts(filePath)) {
      fixedCount++;
    } else {
      errorCount++;
    }
  });
  
  console.log(`\nMerge conflict resolution complete:`);
  console.log(`- Files fixed: ${fixedCount}`);
  console.log(`- Files with errors: ${errorCount}`);
  console.log(`- Total files processed: ${filesWithConflicts.length}`);
}

// Run the script
main();