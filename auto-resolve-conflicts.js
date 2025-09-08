#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

console.log('🚀 Starting automatic merge conflict resolution...');

// Function to resolve merge conflicts in a file
function resolveMergeConflicts(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Check if file has merge conflict markers
    if (!content.includes('<<<<<<<') && !content.includes('=======') && !content.includes('>>>>>>>')) {
      return false; // No conflicts in this file
    }
    
    console.log(`🔧 Resolving conflicts in: ${filePath}`);
    
    // Remove all merge conflict markers and keep the incoming changes (after =======)
    let resolvedContent = content;
    
    // Pattern 1: Conflicts with file paths
    resolvedContent = resolvedContent.replace(/<<<<<<< HEAD:[^\n]*\n.*?\n=======\n(.*?)\n>>>>>>> [^\n]*\n?/gs, '$1\n');
    
    // Pattern 2: Simple conflicts without file paths
    resolvedContent = resolvedContent.replace(/<<<<<<< HEAD\n.*?\n=======\n(.*?)\n>>>>>>> [^\n]*\n?/gs, '$1\n');
    
    // Clean up any remaining conflict markers
    resolvedContent = resolvedContent.replace(/<<<<<<<[^\n]*\n.*?\n=======\n.*?\n>>>>>>>[^\n]*\n?/gs, '');
    
    // Write resolved content back to file
    fs.writeFileSync(filePath, resolvedContent);
    console.log(`✅ Resolved conflicts in: ${filePath}`);
    return true;
  } catch (error) {
    console.error(`❌ Error resolving conflicts in ${filePath}:`, error.message);
    return false;
  }
}

// Function to find all files with merge conflicts
function findConflictFiles(dir) {
  const conflictFiles = [];
  
  function scanDirectory(currentDir) {
    try {
      const items = fs.readdirSync(currentDir);
      
      for (const item of items) {
        const fullPath = path.join(currentDir, item);
        const stat = fs.statSync(fullPath);
        
        if (stat.isDirectory()) {
          // Skip certain directories
          if (!['node_modules', '.git', 'dist', 'build', '.next', 'out'].includes(item)) {
            scanDirectory(fullPath);
          }
        } else if (stat.isFile()) {
          // Check if file has merge conflict markers
          try {
            const content = fs.readFileSync(fullPath, 'utf8');
            if (content.includes('<<<<<<<') || content.includes('=======') || content.includes('>>>>>>>')) {
              conflictFiles.push(fullPath);
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
  
  scanDirectory(dir);
  return conflictFiles;
}

// Main execution
try {
  console.log('🔍 Scanning for files with merge conflicts...');
  const conflictFiles = findConflictFiles('/workspace');
  
  console.log(`📊 Found ${conflictFiles.length} files with merge conflicts`);
  
  let resolvedCount = 0;
  for (const file of conflictFiles) {
    if (resolveMergeConflicts(file)) {
      resolvedCount++;
    }
  }
  
  console.log(`✅ Successfully resolved conflicts in ${resolvedCount} files`);
  console.log('🎉 Merge conflict resolution completed!');
  
} catch (error) {
  console.error('❌ Error during conflict resolution:', error.message);
  process.exit(1);
}