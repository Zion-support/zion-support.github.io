#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Function to recursively find all files with merge conflicts
function findFilesWithConflicts(dir, fileList = []) {
  const files = fs.readdirSync(dir);
  
  files.forEach(file => {
    const filePath = path.join(dir, file);
    
    try {
      const stat = fs.statSync(filePath);
      
      if (stat.isDirectory()) {
        // Skip certain directories
        if (!['node_modules', '.git', '.next', 'dist', 'build'].includes(file)) {
          findFilesWithConflicts(filePath, fileList);
        }
      } else {
        // Check if file contains merge conflict markers
        try {
          const content = fs.readFileSync(filePath, 'utf8');
          if (content.includes('') || content.includes('') || content.includes('>>>>>>>')) {
            fileList.push(filePath);
          }
        } catch (error) {
          // Skip files that can't be read
          console.log(`Skipping file: ${filePath} (${error.message})`);
        }
      }
    } catch (error) {
      // Skip files/directories that can't be accessed (broken symlinks, etc.)
      console.log(`Skipping: ${filePath} (${error.message})`);
    }
  });
  
  return fileList;
}

// Function to resolve merge conflicts by keeping the HEAD version
function resolveMergeConflicts(content) {
  // Remove all merge conflict markers and keep only the HEAD version
  let resolved = content;
  
  // Pattern to match merge conflicts
  const conflictPattern = /\n([\s\S]*?)\n([\s\S]*?)>>>>>>> [a-f0-9]+/g;
  
  resolved = resolved.replace(conflictPattern, (match, headContent, otherContent) => {
    // Keep the HEAD version (first part)
    return headContent.trim();
  });
  
  // Clean up any remaining conflict markers
  resolved = resolved.replace(/\n?/g, '');
  resolved = resolved.replace(/\n?/g, '');
  resolved = resolved.replace(/>>>>>>> [a-f0-9]+\n?/g, '');
  
  return resolved;
}

// Main function
function main() {
  console.log('🔍 Searching for files with merge conflicts...');
  
  const filesWithConflicts = findFilesWithConflicts('.');
  
  if (filesWithConflicts.length === 0) {
    console.log('✅ No merge conflicts found!');
    return;
  }
  
  console.log(`📁 Found ${filesWithConflicts.length} files with merge conflicts:`);
  filesWithConflicts.forEach(file => console.log(`  - ${file}`));
  
  console.log('\n🔧 Resolving merge conflicts...');
  
  let resolvedCount = 0;
  let errorCount = 0;
  
  filesWithConflicts.forEach(filePath => {
    try {
      const originalContent = fs.readFileSync(filePath, 'utf8');
      const resolvedContent = resolveMergeConflicts(originalContent);
      
      if (originalContent !== resolvedContent) {
        fs.writeFileSync(filePath, resolvedContent, 'utf8');
        console.log(`✅ Resolved: ${filePath}`);
        resolvedCount++;
      } else {
        console.log(`⚠️  No changes needed: ${filePath}`);
      }
    } catch (error) {
      console.error(`❌ Error processing ${filePath}: ${error.message}`);
      errorCount++;
    }
  });
  
  console.log(`\n📊 Summary:`);
  console.log(`  - Files processed: ${filesWithConflicts.length}`);
  console.log(`  - Successfully resolved: ${resolvedCount}`);
  console.log(`  - Errors: ${errorCount}`);
  
  if (resolvedCount > 0) {
    console.log('\n✨ Merge conflicts resolved! You can now commit the changes.');
  }
}

if (require.main === module) {
  main();
}

module.exports = { findFilesWithConflicts, resolveMergeConflicts };