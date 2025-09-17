#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('🚀 Starting comprehensive merge conflict resolution...');

// Function to resolve conflicts in a file
function resolveConflictsInFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let originalContent = content;
    
    // Remove all merge conflict markers and keep the latest version (after =======)
    content = content.replace(/<<<<<<< HEAD[\s\S]*?=======([\s\S]*?)>>>>>>> [^\n]+/g, '$1');
    
    // Remove any remaining conflict markers
    content = content.replace(/<<<<<<< HEAD[\s\S]*?=======[\s\S]*?>>>>>>> [^\n]+/g, '');
    content = content.replace(/<<<<<<< [^\n]+[\s\S]*?=======[\s\S]*?>>>>>>> [^\n]+/g, '');
    
    // Clean up any orphaned markers
    content = content.replace(/<<<<<<< [^\n]+/g, '');
    content = content.replace(/=======/g, '');
    content = content.replace(/>>>>>>> [^\n]+/g, '');
    
    // Only write if content changed
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`✅ Resolved conflicts in: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`❌ Error processing ${filePath}:`, error.message);
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
          if (!['node_modules', '.git', 'dist', 'build', '.next', 'coverage'].includes(item)) {
            scanDirectory(fullPath);
          }
        } else if (stat.isFile()) {
          // Check if file contains conflict markers
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
  let errorCount = 0;
  
  for (const file of conflictFiles) {
    if (resolveConflictsInFile(file)) {
      resolvedCount++;
    } else {
      errorCount++;
    }
  }
  
  console.log(`\n📈 Resolution Summary:`);
  console.log(`✅ Successfully resolved: ${resolvedCount} files`);
  console.log(`❌ Errors: ${errorCount} files`);
  console.log(`📁 Total processed: ${conflictFiles.length} files`);
  
  // Try to commit the resolved conflicts
  try {
    console.log('\n🔄 Attempting to commit resolved conflicts...');
    execSync('git add .', { cwd: '/workspace', stdio: 'inherit' });
    execSync('git commit -m "Resolve all merge conflicts automatically"', { cwd: '/workspace', stdio: 'inherit' });
    console.log('✅ Successfully committed resolved conflicts');
  } catch (error) {
    console.log('⚠️  Could not commit automatically, manual intervention may be needed');
  }
  
  console.log('\n🎉 Merge conflict resolution completed!');
  
} catch (error) {
  console.error('💥 Fatal error during conflict resolution:', error.message);
  process.exit(1);
}