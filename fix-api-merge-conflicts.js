#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('🔧 Fixing merge conflicts in API files...');

// Find all files with merge conflicts
const findConflictedFiles = () => {
  try {
    
    // Clean up any remaining conflict markers
    content = content.replace(/[^\n]+\n?/g, '');
    const result = execSync('grep -r "" pages/api/ --include="*.ts" --include="*.js" | cut -d: -f1 | sort -u', { encoding: 'utf8' });
    return result.trim().split('\n').filter(file => file);
  } catch (error) {
    return [];
  }
};

const fixMergeConflicts = (filePath) => {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Remove merge conflict markers and keep the main branch content
    content = content.replace(/\n([\s\S]*?)\n([\s\S]*?)
    
    // Clean up any remaining conflict markers
    content = content.replace(/\n?/g, '');
    content = content.replace(/\n?/g, '');
    content = content.replace(/
    
    // Fix common syntax issues
    content = content.replace(/,\s*;/g, ';'); // Remove trailing commas before semicolons
    content = content.replace(/import\s+([^;]+),\s*;/g, 'import $1;'); // Fix import statements
    
    fs.writeFileSync(filePath, content);
    console.log(`✅ Fixed: ${filePath}`);
    return true;
  } catch (error) {
    console.log(`❌ Failed to fix: ${filePath} - ${error.message}`);
    return false;
  }
};

const main = () => {
  const conflictedFiles = findConflictedFiles();
  
  if (conflictedFiles.length === 0) {
    console.log('✅ No merge conflicts found in API files');
    return;
  }
  
  console.log(`Found ${conflictedFiles.length} files with merge conflicts:`);
  conflictedFiles.forEach(file => console.log(`  - ${file}`));
  
  let fixed = 0;
  conflictedFiles.forEach(file => {
    if (fixMergeConflicts(file)) {
      fixed++;
    }
  });
  
  console.log(`\n🎉 Fixed ${fixed}/${conflictedFiles.length} files`);
};

main();