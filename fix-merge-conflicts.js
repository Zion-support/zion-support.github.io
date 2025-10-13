#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

// Function to recursively find all files with merge conflicts
function findFilesWithConflicts(dir, fileList = []) {
  const files = fs.readdirSync(dir);
  
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      // Skip node_modules and other common directories
      if (!['node_modules', '.git', 'dist', 'build', '.next'].includes(file)) {
        findFilesWithConflicts(filePath, fileList);
      }
    } else if (stat.isFile()) {
      // Check if file has merge conflict markers
      try {
        const content = fs.readFileSync(filePath, 'utf8');
        if (content.includes('') || content.includes('    
    // Clean up any remaining conflict markers
    content = content.replace(/    content = content.replace(/    
    // Write the cleaned content back
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`✅ Fixed merge conflicts in: ${filePath}`);
    return true;
  } catch (error) {
    console.error(`❌ Error fixing ${filePath}:`, error.message);
    return false;
  }
}

// Main execution
console.log('🔍 Searching for files with merge conflicts...');
const filesWithConflicts = findFilesWithConflicts('/workspace');

console.log(`Found ${filesWithConflicts.length} files with merge conflicts:`);
filesWithConflicts.forEach(file => console.log(`  - ${file}`));

if (filesWithConflicts.length === 0) {
  console.log('✅ No merge conflicts found!');
  process.exit(0);
}

console.log('\n🔧 Resolving merge conflicts...');
let fixedCount = 0;
let errorCount = 0;

filesWithConflicts.forEach(filePath => {
  if (resolveMergeConflicts(filePath)) {
    fixedCount++;
  } else {
    errorCount++;
  }
});

console.log(`\n📊 Summary:`);
console.log(`  ✅ Fixed: ${fixedCount} files`);
console.log(`  ❌ Errors: ${errorCount} files`);

if (errorCount > 0) {
  console.log('\n⚠️  Some files could not be automatically fixed. Manual review may be needed.');
  process.exit(1);
} else {
  console.log('\n🎉 All merge conflicts resolved successfully!');
  process.exit(0);
}