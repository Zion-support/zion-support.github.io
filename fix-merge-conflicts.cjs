#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Find all files with merge conflicts
function findFilesWithConflicts() {
  try {
    const result = execSync('find /workspace -name "*.tsx" -o -name "*.ts" | grep -v node_modules | xargs grep -l "<<<<<<< HEAD\\|=======\\|>>>>>>> " 2>/dev/null', { encoding: 'utf8' });
    return result.trim().split('\n').filter(line => line.trim());
  } catch (error) {
    return [];
  }
}

// Fix merge conflicts in a file
function fixMergeConflicts(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Pattern 1: Empty HEAD section with content after =======
    content = content.replace(/<<<<<<< HEAD\s*\n\s*\n=======\n(.*?)>>>>>>> [^\n]+/gs, '$1');
    
    // Pattern 2: Content in HEAD section with empty after =======
    content = content.replace(/<<<<<<< HEAD\s*\n(.*?)\n=======\s*\n\s*>>>>>>> [^\n]+/gs, '$1');
    
    // Pattern 3: Both sections have content - choose HEAD
    content = content.replace(/<<<<<<< HEAD\s*\n(.*?)\n=======\s*\n(.*?)>>>>>>> [^\n]+/gs, '$1');
    
    // Pattern 4: Simple empty conflicts
    content = content.replace(/<<<<<<< HEAD\s*\n\s*=======\s*\n\s*>>>>>>> [^\n]+/g, '');
    
    // Clean up any remaining conflict markers
    content = content.replace(/<<<<<<< HEAD\s*\n.*?>>>>>>> [^\n]+/gs, '');
    content = content.replace(/=======\s*\n.*?>>>>>>> [^\n]+/gs, '');
    
    // Remove any remaining conflict markers
    content = content.replace(/<<<<<<< HEAD\s*\n/g, '');
    content = content.replace(/=======\s*\n/g, '');
    content = content.replace(/>>>>>>> [^\n]+\n/g, '');
    
    // Clean up multiple empty lines
    content = content.replace(/\n\s*\n\s*\n/g, '\n\n');
    
    fs.writeFileSync(filePath, content);
    console.log(`✅ Fixed merge conflicts in: ${filePath}`);
    return true;
  } catch (error) {
    console.error(`❌ Error fixing ${filePath}:`, error.message);
    return false;
  }
}

// Main function
function main() {
  console.log('🔍 Finding files with merge conflicts...');
  const files = findFilesWithConflicts();
  
  if (files.length === 0) {
    console.log('✅ No files with merge conflicts found!');
    return;
  }
  
  console.log(`📁 Found ${files.length} files with merge conflicts:`);
  files.forEach(file => console.log(`  - ${file}`));
  
  console.log('\n🔧 Fixing merge conflicts...');
  let fixed = 0;
  let failed = 0;
  
  files.forEach(file => {
    if (fixMergeConflicts(file)) {
      fixed++;
    } else {
      failed++;
    }
  });
  
  console.log(`\n📊 Summary:`);
  console.log(`  ✅ Fixed: ${fixed} files`);
  console.log(`  ❌ Failed: ${failed} files`);
  
  if (fixed > 0) {
    console.log('\n🎉 Merge conflicts fixed! Running lint check...');
    try {
      execSync('cd /workspace && pnpm run lint', { stdio: 'inherit' });
    } catch (error) {
      console.log('⚠️  Lint check completed with some issues remaining');
    }
  }
}

main();