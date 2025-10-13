#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

// Function to find all files with merge conflicts
function findFilesWithConflicts(dir) {
  const files = [];
  
  function traverse(currentDir) {
    const items = fs.readdirSync(currentDir);
    
    for (const item of items) {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
        traverse(fullPath);
      } else if (stat.isFile() && /\.(tsx?|jsx?)$/.test(item)) {
        try {
          const content = fs.readFileSync(fullPath, 'utf8');
          if (content.includes('') || content.includes('    
    // Clean up any remaining conflict markers
    content = content.replace(/    content = content.replace(/    
    // Clean up multiple empty lines
    content = content.replace(/\n\s*\n\s*\n/g, '\n\n');
    
    // Write the cleaned content back
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`✅ Fixed merge conflicts in: ${filePath}`);
    return true;
  } catch (error) {
    console.error(`❌ Error fixing ${filePath}:`, error.message);
    return false;
  }
}

// Main function
function main() {
  console.log('🔍 Searching for files with merge conflicts...');
  
  const filesWithConflicts = findFilesWithConflicts('.');
  
  if (filesWithConflicts.length === 0) {
    console.log('✅ No files with merge conflicts found!');
    return;
  }
  
  console.log(`📁 Found ${filesWithConflicts.length} files with merge conflicts:`);
  filesWithConflicts.forEach(file => console.log(`  - ${file}`));
  
  console.log('\n🔧 Resolving merge conflicts...');
  
  let successCount = 0;
  let failCount = 0;
  
  for (const file of filesWithConflicts) {
    if (resolveMergeConflicts(file)) {
      successCount++;
    } else {
      failCount++;
    }
  }
  
  console.log(`\n📊 Summary:`);
  console.log(`  ✅ Successfully fixed: ${successCount} files`);
  console.log(`  ❌ Failed to fix: ${failCount} files`);
  
  if (successCount > 0) {
    console.log('\n🎉 Merge conflicts resolved! Running type check...');
    try {
      execSync('pnpm run type-check', { stdio: 'inherit' });
      console.log('✅ Type check passed!');
    } catch (error) {
      console.log('⚠️  Type check failed, but merge conflicts are resolved.');
    }
  }
}

main();