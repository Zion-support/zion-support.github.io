#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

// Function to find all files with merge conflicts
function findFilesWithConflicts(dir) {
  const files = [];
  
  function searchDirectory(currentDir) {
    const items = fs.readdirSync(currentDir);
    
    for (const item of items) {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
        searchDirectory(fullPath);
      } else if (stat.isFile() && (item.endsWith('.tsx') || item.endsWith('.ts') || item.endsWith('.js') || item.endsWith('.jsx'))) {
        try {
          const content = fs.readFileSync(fullPath, 'utf8');
          if (content.includes('<<<<<<< HEAD') || content.includes('=======') || content.includes('>>>>>>>')) {
            files.push(fullPath);
          }
        } catch (error) {
          // Skip files that can't be read
        }
      }
    }
  }
  
  searchDirectory(dir);
  return files;
}

// Function to resolve merge conflicts by choosing the more complete version
function resolveMergeConflicts(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Check if file has merge conflicts
    if (!content.includes('<<<<<<< HEAD')) {
      return false;
    }
    
    console.log(`Resolving conflicts in: ${filePath}`);
    
    // Split by merge conflict markers
    const parts = content.split(/<<<<<<< HEAD[\s\S]*?=======/);
    
    if (parts.length < 2) {
      console.log(`  - No valid merge conflict found, skipping`);
      return false;
    }
    
    // Get the content after =======
    const afterEquals = content.split('=======')[1];
    if (!afterEquals) {
      console.log(`  - No content after =======, skipping`);
      return false;
    }
    
    // Remove the >>>>>>> marker and everything after it
    const resolvedContent = afterEquals.split(/>>>>>>>.*$/)[0];
    
    if (!resolvedContent.trim()) {
      console.log(`  - No valid content after =======, skipping`);
      return false;
    }
    
    // Write the resolved content
    fs.writeFileSync(filePath, resolvedContent.trim() + '\n', 'utf8');
    console.log(`  - Resolved conflicts successfully`);
    return true;
    
  } catch (error) {
    console.error(`Error resolving conflicts in ${filePath}:`, error.message);
    return false;
  }
}

// Main function
function main() {
  console.log('🔍 Searching for files with merge conflicts...');
  
  const conflictedFiles = findFilesWithConflicts('./src');
  console.log(`Found ${conflictedFiles.length} files with merge conflicts`);
  
  if (conflictedFiles.length === 0) {
    console.log('✅ No merge conflicts found!');
    return;
  }
  
  let resolvedCount = 0;
  
  for (const file of conflictedFiles) {
    if (resolveMergeConflicts(file)) {
      resolvedCount++;
    }
  }
  
  console.log(`\n✅ Resolved conflicts in ${resolvedCount} out of ${conflictedFiles.length} files`);
  
  // Verify no more conflicts exist
  const remainingConflicts = findFilesWithConflicts('./src');
  if (remainingConflicts.length === 0) {
    console.log('🎉 All merge conflicts have been resolved!');
  } else {
    console.log(`⚠️  ${remainingConflicts.length} files still have conflicts:`);
    remainingConflicts.forEach(file => console.log(`  - ${file}`));
  }
}

// Run the script
main();