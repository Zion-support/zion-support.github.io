#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('🔧 Starting comprehensive merge conflict resolution...');

// Function to resolve merge conflicts in a file
function resolveMergeConflicts(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Check if file has merge conflicts
    if (!content.includes('<<<<<<< HEAD') && !content.includes('=======') && !content.includes('>>>>>>> ')) {
      return false;
    }
    
    console.log(`📝 Fixing merge conflicts in: ${filePath}`);
    
    // Strategy: Keep the newer version (after =======) for most cases
    // But for package.json, be more careful
    if (filePath.endsWith('package.json')) {
      // For package.json, prefer the newer versions
      content = content.replace(/<<<<<<< HEAD\n([\s\S]*?)\n=======\n([\s\S]*?)\n>>>>>>> [a-f0-9]+/g, (match, headContent, newContent) => {
        // For version conflicts, prefer the newer version
        if (headContent.includes('"') && newContent.includes('"')) {
          return newContent.trim();
        }
        return newContent.trim();
      });
    } else {
      // For other files, use a more general approach
      content = content.replace(/<<<<<<< HEAD\n([\s\S]*?)\n=======\n([\s\S]*?)\n>>>>>>> [a-f0-9]+/g, (match, headContent, newContent) => {
        // Prefer the newer content (after =======)
        return newContent.trim();
      });
    }
    
    // Clean up any remaining conflict markers
    content = content.replace(/<<<<<<< HEAD[\s\S]*?>>>>>>> [a-f0-9]+/g, '');
    content = content.replace(/=======[\s\S]*?>>>>>>> [a-f0-9]+/g, '');
    
    fs.writeFileSync(filePath, content);
    return true;
  } catch (error) {
    console.error(`❌ Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Function to find all files with merge conflicts
function findConflictedFiles(dir) {
  const conflictedFiles = [];
  
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
          // Check for merge conflict markers
          try {
            const content = fs.readFileSync(fullPath, 'utf8');
            if (content.includes('<<<<<<< HEAD') || content.includes('=======') || content.includes('>>>>>>> ')) {
              conflictedFiles.push(fullPath);
            }
          } catch (err) {
            // Skip files that can't be read
          }
        }
      }
    } catch (error) {
      // Skip directories that can't be read
    }
  }
  
  scanDirectory(dir);
  return conflictedFiles;
}

// Main execution
try {
  console.log('🔍 Scanning for files with merge conflicts...');
  const conflictedFiles = findConflictedFiles('.');
  
  console.log(`📊 Found ${conflictedFiles.length} files with merge conflicts`);
  
  let fixedCount = 0;
  for (const file of conflictedFiles) {
    if (resolveMergeConflicts(file)) {
      fixedCount++;
    }
  }
  
  console.log(`✅ Fixed merge conflicts in ${fixedCount} files`);
  
  // Verify no more conflicts
  const remainingConflicts = findConflictedFiles('.');
  if (remainingConflicts.length === 0) {
    console.log('🎉 All merge conflicts resolved!');
  } else {
    console.log(`⚠️  ${remainingConflicts.length} files still have conflicts:`);
    remainingConflicts.forEach(file => console.log(`   - ${file}`));
  }
  
} catch (error) {
  console.error('❌ Error during merge conflict resolution:', error);
  process.exit(1);
}