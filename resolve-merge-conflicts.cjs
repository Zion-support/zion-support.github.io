#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Get all files with merge conflicts
function getFilesWithConflicts() {
  try {
    const result = execSync('find . -name "*.tsx" -o -name "*.ts" -o -name "*.js" -o -name "*.jsx" | grep -v node_modules | xargs grep -l "<<<<<<< HEAD" 2>/dev/null', { encoding: 'utf8' });
    return result.trim().split('\n').filter(file => file && !file.includes('node_modules'));
  } catch (error) {
    console.log('No files with merge conflicts found or error occurred:', error.message);
    return [];
  }
}

// Resolve merge conflicts by keeping HEAD version
function resolveMergeConflicts(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Remove merge conflict markers and keep HEAD version
    // Pattern 1: <<<<<<< HEAD ... ======= ... >>>>>>> branch
    content = content.replace(/<<<<<<< HEAD\n([\s\S]*?)=======\n([\s\S]*?)>>>>>>> [^\n]+\n/g, '$1');
    
    // Pattern 2: <<<<<<< HEAD ... >>>>>>> branch (no =======)
    content = content.replace(/<<<<<<< HEAD\n([\s\S]*?)>>>>>>> [^\n]+\n/g, '$1');
    
    // Clean up any remaining conflict markers
    content = content.replace(/<<<<<<< HEAD\n?/g, '');
    content = content.replace(/=======\n?/g, '');
    content = content.replace(/>>>>>>> [^\n]+\n?/g, '');
    
    // Write the cleaned content back
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`✓ Resolved merge conflicts in: ${filePath}`);
    return true;
  } catch (error) {
    console.error(`✗ Error resolving conflicts in ${filePath}:`, error.message);
    return false;
  }
}

// Main function
function main() {
  console.log('🔍 Searching for files with merge conflicts...');
  
  const filesWithConflicts = getFilesWithConflicts();
  
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
    console.log('\n🎉 Merge conflicts resolved! You can now run linting and build checks.');
  }
}

main();