#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

console.log('Starting merge conflict resolution...');

// Function to resolve merge conflicts in a file
function resolveMergeConflicts(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let originalContent = content;
    
    // Remove merge conflict markers and keep HEAD version
    content = content.replace(/\n?/g, '');
    content = content.replace(/.*?\n?/g, '');
    content = content.replace(/    
    // Clean up any remaining conflict artifacts
    content = content.replace(/    content = content.replace(/\n?/g, '');
    content = content.replace(/    
    // Remove any empty lines that might have been left behind
    content = content.replace(/\n\s*\n\s*\n/g, '\n\n');
    
    // Only write if content changed
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`✓ Resolved conflicts in: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`✗ Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Function to find all files with merge conflicts
function findFilesWithConflicts() {
  try {
    const result = execSync('find . -name "*.tsx" -o -name "*.ts" -o -name "*.js" -o -name "*.jsx" | xargs grep -l "" 2>/dev/null || true', { 
      encoding: 'utf8',
      cwd: process.cwd()
    });
    
    return result.trim().split('\n').filter(file => file && !file.includes('node_modules'));
  } catch (error) {
    console.error('Error finding files with conflicts:', error.message);
    return [];
  }
}

// Main execution
function main() {
  console.log('Finding files with merge conflicts...');
  const filesWithConflicts = findFilesWithConflicts();
  
  console.log(`Found ${filesWithConflicts.length} files with merge conflicts`);
  
  let resolvedCount = 0;
  let errorCount = 0;
  
  filesWithConflicts.forEach(file => {
    if (resolveMergeConflicts(file)) {
      resolvedCount++;
    } else {
      errorCount++;
    }
  });
  
  console.log(`\nResolution complete:`);
  console.log(`✓ Successfully resolved: ${resolvedCount} files`);
  console.log(`✗ Errors: ${errorCount} files`);
  
  // Verify no conflicts remain
  try {
    const remainingConflicts = execSync('grep -r "" . --include="*.tsx" --include="*.ts" --include="*.js" --include="*.jsx" 2>/dev/null | wc -l || echo "0"', { 
      encoding: 'utf8',
      cwd: process.cwd()
    });
    
    const count = parseInt(remainingConflicts.trim());
    if (count === 0) {
      console.log('🎉 All merge conflicts resolved!');
    } else {
      console.log(`⚠️  ${count} merge conflicts still remain`);
    }
  } catch (error) {
    console.log('Could not verify remaining conflicts');
  }
}

main();