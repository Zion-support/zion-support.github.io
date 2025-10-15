#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('🔧 Starting comprehensive merge conflict resolution...');

// Function to resolve merge conflicts in a file
function resolveMergeConflicts(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let originalContent = content;
    
    // Check if file has merge conflicts
    if (!content.includes('') && !content.includes('>>>>>>>')) {
      return false;
    }
    
    console.log(`📝 Processing: ${filePath}`);
    
    // Strategy 1: Keep the newer version (after =======)
    if (content.includes('=======')) {
      const parts = content.split('=======');
      if (parts.length === 2) {
        const beforeEquals = parts[0];
        const afterEquals = parts[1];
        
        // Remove the HEAD marker and keep the newer version
        const cleanBefore = beforeEquals.replace(/)
        content = cleanBefore + '\n\n' + cleanAfter;
      }
    }
    
    // Strategy 2: If still has conflicts, try to merge intelligently
    if (content.includes('/g, '')
        .replace(/
        .replace(/\n\s*\n\s*\n/g, '\n\n') // Clean up multiple newlines
        .trim();
    }
    
    // Clean up any remaining artifacts
    content = content
      .replace(/\n\s*\n\s*\n/g, '\n\n')
      .replace(/^\s*\n/g, '')
      .replace(/\n\s*$/g, '\n');
    
    // Only write if content changed
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`✅ Fixed: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`❌ Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Function to find all files with merge conflicts
function findFilesWithConflicts(dir) {
  const files = [];
  
  function scanDirectory(currentDir) {
    try {
      const items = fs.readdirSync(currentDir);
      
      for (const item of items) {
        const fullPath = path.join(currentDir, item);
        const stat = fs.statSync(fullPath);
        
        if (stat.isDirectory()) {
          // Skip node_modules, dist, .git, etc.
          if (!['node_modules', 'dist', '.git', '.next', 'build'].includes(item)) {
            scanDirectory(fullPath);
          }
        } else if (stat.isFile()) {
          // Check for TypeScript, JavaScript, and JSX files
          if (/\.(ts|tsx|js|jsx)$/.test(item)) {
            try {
              const content = fs.readFileSync(fullPath, 'utf8');
              if (content.includes('') || content.includes('>>>>>>>')) {
                files.push(fullPath);
              }
            } catch (error) {
              // Skip files that can't be read
            }
          }
        }
      }
    } catch (error) {
      // Skip directories that can't be read
    }
  }
  
  scanDirectory(dir);
  return files;
}

// Main execution
try {
  console.log('🔍 Scanning for files with merge conflicts...');
  const conflictedFiles = findFilesWithConflicts('/workspace');
  
  console.log(`📊 Found ${conflictedFiles.length} files with merge conflicts`);
  
  let fixedCount = 0;
  let errorCount = 0;
  
  for (const file of conflictedFiles) {
    try {
      if (resolveMergeConflicts(file)) {
        fixedCount++;
      }
    } catch (error) {
      console.error(`❌ Failed to fix ${file}:`, error.message);
      errorCount++;
    }
  }
  
  console.log('\n📈 Resolution Summary:');
  console.log(`✅ Successfully fixed: ${fixedCount} files`);
  console.log(`❌ Errors: ${errorCount} files`);
  console.log(`📁 Total processed: ${conflictedFiles.length} files`);
  
  // Verify no more conflicts
  console.log('\n🔍 Verifying no remaining conflicts...');
  const remainingConflicts = findFilesWithConflicts('/workspace');
  
  if (remainingConflicts.length === 0) {
    console.log('🎉 All merge conflicts resolved successfully!');
  } else {
    console.log(`⚠️  ${remainingConflicts.length} files still have conflicts:`);
    remainingConflicts.forEach(file => console.log(`   - ${file}`));
  }
  
} catch (error) {
  console.error('💥 Fatal error:', error.message);
  process.exit(1);
}