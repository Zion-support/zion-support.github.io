#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('🧹 Starting merge conflict cleanup...');

// Function to clean merge conflicts from a file
function cleanMergeConflicts(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Check if file has merge conflicts
    if (!content.includes('')) {
      return false; // No conflicts to clean
    }
    
    console.log(`🔧 Cleaning conflicts in: ${filePath}`);
    
    // Remove merge conflict markers and keep the HEAD version
    content = content
      .replace(/\n/g, '')
      .replace(/      .replace(/      .replace(//g, '')
      .replace(/      .replace(/    
    // Clean up any remaining conflict markers
    content = content
      .replace(/^$/gm, '')
      .replace(/^      .replace(/^    
    // Remove empty lines that might have been left
    content = content.replace(/\n\s*\n\s*\n/g, '\n\n');
    
    fs.writeFileSync(filePath, content);
    return true;
  } catch (error) {
    console.error(`❌ Error cleaning ${filePath}:`, error.message);
    return false;
  }
}

// Find all files with merge conflicts
function findConflictedFiles(dir) {
  const conflictedFiles = [];
  
  function searchDirectory(currentDir) {
    try {
      const files = fs.readdirSync(currentDir);
      
      for (const file of files) {
        const filePath = path.join(currentDir, file);
        const stat = fs.statSync(filePath);
        
        if (stat.isDirectory() && !file.startsWith('.') && file !== 'node_modules') {
          searchDirectory(filePath);
        } else if (stat.isFile() && (file.endsWith('.js') || file.endsWith('.cjs') || file.endsWith('.ts') || file.endsWith('.tsx'))) {
          try {
            const content = fs.readFileSync(filePath, 'utf8');
            if (content.includes('')) {
              conflictedFiles.push(filePath);
            }
          } catch (error) {
            // Skip files that can't be read
          }
        }
      }
    } catch (error) {
      // Skip directories that can't be read
    }
  }
  
  searchDirectory(dir);
  return conflictedFiles;
}

// Main cleanup process
const conflictedFiles = findConflictedFiles('.');
console.log(`📋 Found ${conflictedFiles.length} files with merge conflicts`);

let cleanedCount = 0;
for (const file of conflictedFiles) {
  if (cleanMergeConflicts(file)) {
    cleanedCount++;
  }
}

console.log(`✅ Cleaned ${cleanedCount} files with merge conflicts`);

// Verify no more conflicts exist
const remainingConflicts = findConflictedFiles('.');
if (remainingConflicts.length === 0) {
  console.log('🎉 All merge conflicts have been resolved!');
} else {
  console.log(`⚠️ ${remainingConflicts.length} files still have conflicts:`);
  remainingConflicts.forEach(file => console.log(`  - ${file}`));
}

console.log('🏁 Merge conflict cleanup completed');