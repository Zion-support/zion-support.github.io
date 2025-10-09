#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Function to resolve merge conflicts in a file
function resolveMergeConflicts(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Pattern to match merge conflict blocks - more flexible
    const conflictPattern = /<<<<<<< HEAD\n(.*?)\n=======\n(.*?)\n>>>>>>> cursor\/fix-errors-and-merge-to-main-[a-f0-9]+/gs;
    
    // Replace merge conflicts with the HEAD version (first part)
    let resolvedContent = content.replace(conflictPattern, (match, headContent, cursorContent) => {
      modified = true;
      // Clean up any extra whitespace and newlines
      return headContent.replace(/^\s+|\s+$/g, '').replace(/\n\s*\n/g, '\n');
    });
    
    // Handle nested conflicts with multiple HEAD sections
    const nestedConflictPattern = /<<<<<<< HEAD\n(.*?)\n<<<<<<< HEAD\n(.*?)\n=======\n(.*?)\n>>>>>>> cursor\/fix-errors-and-merge-to-main-[a-f0-9]+\n=======\n(.*?)\n>>>>>>> cursor\/fix-errors-and-merge-to-main-[a-f0-9]+/gs;
    
    resolvedContent = resolvedContent.replace(nestedConflictPattern, (match, head1, head2, cursor1, cursor2) => {
      modified = true;
      // For nested conflicts, prefer the first HEAD version
      return head1.replace(/^\s+|\s+$/g, '').replace(/\n\s*\n/g, '\n');
    });
    
    // Handle simple conflicts without branch names
    const simpleConflictPattern = /<<<<<<< HEAD\n(.*?)\n=======\n(.*?)\n>>>>>>> [^\n]+/gs;
    
    resolvedContent = resolvedContent.replace(simpleConflictPattern, (match, headContent, cursorContent) => {
      modified = true;
      return headContent.replace(/^\s+|\s+$/g, '').replace(/\n\s*\n/g, '\n');
    });
    
    // Handle conflicts that start with just <<<<<<< without HEAD
    const noHeadConflictPattern = /<<<<<<< [^\n]*\n(.*?)\n=======\n(.*?)\n>>>>>>> [^\n]+/gs;
    
    const finalContent = resolvedContent.replace(noHeadConflictPattern, (match, headContent, cursorContent) => {
      modified = true;
      return headContent.replace(/^\s+|\s+$/g, '').replace(/\n\s*\n/g, '\n');
    });
    
    if (modified) {
      fs.writeFileSync(filePath, finalContent, 'utf8');
      console.log(`✅ Resolved merge conflicts in: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`❌ Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Function to find all TypeScript/JavaScript files with merge conflicts
function findFilesWithConflicts() {
  try {
    const result = execSync('grep -r "^<<<<<<< HEAD" src/ --include="*.ts" --include="*.tsx" --include="*.js" --include="*.jsx" -l', { encoding: 'utf8' });
    return result.trim().split('\n').filter(file => file.length > 0);
  } catch (error) {
    console.log('No files with merge conflicts found or grep failed');
    return [];
  }
}

// Main function
function main() {
  console.log('🔍 Searching for files with merge conflicts...');
  
  const filesWithConflicts = findFilesWithConflicts();
  
  if (filesWithConflicts.length === 0) {
    console.log('✅ No files with merge conflicts found!');
    return;
  }
  
  console.log(`📁 Found ${filesWithConflicts.length} files with merge conflicts:`);
  filesWithConflicts.forEach(file => console.log(`  - ${file}`));
  
  console.log('\n🔧 Resolving merge conflicts...');
  
  let resolvedCount = 0;
  let errorCount = 0;
  
  filesWithConflicts.forEach(file => {
    if (resolveMergeConflicts(file)) {
      resolvedCount++;
    } else {
      errorCount++;
    }
  });
  
  console.log(`\n📊 Summary:`);
  console.log(`  ✅ Successfully resolved: ${resolvedCount} files`);
  console.log(`  ❌ Errors: ${errorCount} files`);
  
  if (resolvedCount > 0) {
    console.log('\n🎉 Merge conflicts resolved! Running lint check...');
    try {
      execSync('pnpm run lint', { stdio: 'inherit' });
      console.log('✅ Lint check passed!');
    } catch (error) {
      console.log('⚠️  Lint check failed, but merge conflicts are resolved');
    }
  }
}

// Run the script
main();