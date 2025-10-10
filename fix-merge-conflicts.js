#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

// Function to fix merge conflicts in a file
function fixMergeConflicts(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let hasConflicts = false;
    
    // Check if file has merge conflict markers
    if (content.includes('') || content.includes('') || content.includes('>>>>>>>')) {
      hasConflicts = true;
      console.log(`Fixing merge conflicts in: ${filePath}`);
      
      // Remove merge conflict markers and keep the HEAD version
      content = content.replace(/\n?/g, '');
      content = content.replace(/\n?/g, '');
      content = content.replace(/      
      // Clean up any remaining conflict artifacts
      content = content.replace(/^<<<<<<< .*$/gm, '');
      content = content.replace(/^.*$/gm, '');
      content = content.replace(/^      
      // Remove empty lines that might be left behind
      content = content.replace(/\n\s*\n\s*\n/g, '\n\n');
      
      // Write the cleaned content back
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`✓ Fixed merge conflicts in: ${filePath}`);
    }
    
    return hasConflicts;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Function to find all files with merge conflicts
function findFilesWithConflicts() {
  try {
    const result = execSync('find /workspace -name "*.tsx" -o -name "*.ts" -o -name "*.js" -o -name "*.jsx" | xargs grep -l "" 2>/dev/null || true', { encoding: 'utf8' });
    return result.trim().split('\n').filter(line => line.trim() && !line.includes('node_modules'));
  } catch (error) {
    console.log('No files with merge conflicts found or error occurred');
    return [];
  }
}

// Main execution
console.log('🔍 Searching for files with merge conflicts...');
const filesWithConflicts = findFilesWithConflicts();

if (filesWithConflicts.length === 0) {
  console.log('✅ No files with merge conflicts found');
  process.exit(0);
}

console.log(`📁 Found ${filesWithConflicts.length} files with merge conflicts`);

let fixedCount = 0;
let errorCount = 0;

filesWithConflicts.forEach(filePath => {
  if (filePath.trim()) {
    const fixed = fixMergeConflicts(filePath);
    if (fixed) {
      fixedCount++;
    } else {
      errorCount++;
    }
  }
});

console.log(`\n📊 Summary:`);
console.log(`✅ Fixed: ${fixedCount} files`);
console.log(`❌ Errors: ${errorCount} files`);
console.log(`📁 Total processed: ${filesWithConflicts.length} files`);

if (fixedCount > 0) {
  console.log('\n🎉 Merge conflicts have been resolved!');
} else {
  console.log('\n⚠️  No merge conflicts were fixed');
}