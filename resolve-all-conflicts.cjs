#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('🔧 Starting comprehensive merge conflict resolution...\n');

// Function to resolve merge conflicts in a file
function resolveMergeConflicts(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Check if file has merge conflicts
    if (!content.includes('<<<<<<< HEAD')) {
      return false;
    }
    
    console.log(`📝 Resolving conflicts in: ${filePath}`);
    
    // Strategy: Keep the incoming changes (after =======)
    // Remove conflict markers and keep the incoming version
    let resolved = content
      .replace(/<<<<<<< HEAD[\s\S]*?=======\n?/, '')
      .replace(/>>>>>>> [^\n]+/g, '')
      .replace(/=======\n?[\s\S]*?>>>>>>> [^\n]+/g, '');
    
    // Clean up any remaining conflict markers
    resolved = resolved
      .replace(/<<<<<<< [^\n]+/g, '')
      .replace(/=======/g, '')
      .replace(/>>>>>>> [^\n]+/g, '');
    
    // Write the resolved content
    fs.writeFileSync(filePath, resolved);
    console.log(`✅ Resolved conflicts in: ${filePath}`);
    return true;
  } catch (error) {
    console.error(`❌ Error resolving ${filePath}:`, error.message);
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
          if (!['node_modules', '.git', 'dist', 'build', '.next'].includes(item)) {
            scanDirectory(fullPath);
          }
        } else if (stat.isFile() && (item.endsWith('.js') || item.endsWith('.ts') || item.endsWith('.tsx') || item.endsWith('.jsx') || item.endsWith('.json') || item.endsWith('.md') || item.endsWith('.sh') || item.endsWith('.cjs'))) {
          try {
            const content = fs.readFileSync(fullPath, 'utf8');
            if (content.includes('<<<<<<< HEAD')) {
              conflictedFiles.push(fullPath);
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
  return conflictedFiles;
}

// Main execution
try {
  console.log('🔍 Scanning for files with merge conflicts...\n');
  
  const conflictedFiles = findConflictedFiles('.');
  console.log(`Found ${conflictedFiles.length} files with merge conflicts\n`);
  
  if (conflictedFiles.length === 0) {
    console.log('✅ No merge conflicts found!');
    process.exit(0);
  }
  
  let resolvedCount = 0;
  let errorCount = 0;
  
  for (const file of conflictedFiles) {
    if (resolveMergeConflicts(file)) {
      resolvedCount++;
    } else {
      errorCount++;
    }
  }
  
  console.log(`\n📊 Resolution Summary:`);
  console.log(`✅ Successfully resolved: ${resolvedCount} files`);
  console.log(`❌ Failed to resolve: ${errorCount} files`);
  
  if (resolvedCount > 0) {
    console.log('\n🔄 Attempting to stage resolved files...');
    try {
      execSync('git add .', { stdio: 'inherit' });
      console.log('✅ Files staged successfully');
    } catch (error) {
      console.log('⚠️  Could not stage files:', error.message);
    }
  }
  
  console.log('\n🎉 Merge conflict resolution completed!');
  
} catch (error) {
  console.error('💥 Fatal error:', error.message);
  process.exit(1);
}