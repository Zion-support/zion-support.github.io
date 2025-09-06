#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('🧹 Starting comprehensive cleanup and merge conflict resolution...');

// Function to remove backup files
function removeBackupFiles(dir) {
  let removedCount = 0;
  
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
          // Remove backup files
          if (item.includes('.backup.') || item.endsWith('.backup') || item.includes('.disabled')) {
            try {
              fs.unlinkSync(fullPath);
              removedCount++;
              console.log(`🗑️  Removed: ${fullPath}`);
            } catch (err) {
              console.log(`⚠️  Could not remove: ${fullPath}`);
            }
          }
        }
      }
    } catch (error) {
      // Skip directories that can't be read
    }
  }
  
  scanDirectory(dir);
  return removedCount;
}

// Function to resolve merge conflicts in a file
function resolveMergeConflicts(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Check if file has merge conflicts
<<<<<<< HEAD
=======
    if (!content.includes('
      return false;
    }
    
    console.log(`📝 Fixing merge conflicts in: ${filePath}`);
    
    // Strategy: Keep the newer version (after ) for most cases
    content = content.replace(/
      // For version conflicts, prefer the newer version
      if (headContent.includes('"') && newContent.includes('"')) {
        return newContent.trim();
      }
      return newContent.trim();
    });
    
    // Clean up any remaining conflict markers
    content = content.replace(/
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
    
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
<<<<<<< HEAD
=======
            if (content.includes('
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
  console.log('🗑️  Removing backup files...');
  const removedCount = removeBackupFiles('.');
  console.log(`✅ Removed ${removedCount} backup files`);
  
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
    remainingConflicts.slice(0, 10).forEach(file => console.log(`   - ${file}`));
    if (remainingConflicts.length > 10) {
      console.log(`   ... and ${remainingConflicts.length - 10} more`);
    }
  }
  
} catch (error) {
  console.error('❌ Error during cleanup:', error);
  process.exit(1);
}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
