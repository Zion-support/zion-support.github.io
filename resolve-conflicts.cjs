#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('🔧 Starting comprehensive merge conflict resolution...');

// Function to resolve merge conflicts in a file
function resolveMergeConflicts(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    const originalContent = content;
    
    // Remove all merge conflict markers and keep the main branch version (after )
    content = content.replace(/[\s\S]*?([\s\S]*?)
    
    // Handle incomplete conflicts (missing closing markers)
    content = content.replace(/[\s\S]*?([\s\S]*?)(?=\n|$)/g, '$1');
    
    // Clean up any remaining conflict markers
    content = content.replace(/[\s\S]*?[\s\S]*?
    content = content.replace(/[\s\S]*?[\s\S]*?
    
    // Remove any remaining conflict markers
    content = content.replace(/[\s\S]*?[\s\S]*?
    content = content.replace(/[\s\S]*?[\s\S]*?
    
    // Clean up multiple newlines
    content = content.replace(/\n{3,}/g, '\n\n');
    
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
function findConflictedFiles() {
  try {
    const result = execSync('git diff --name-only --diff-filter=U', { encoding: 'utf8' });
    return result.trim().split('\n').filter(file => file.length > 0);
  } catch (error) {
    console.log('No merge conflicts found or not in a merge state');
    return [];
  }
}

// Function to find files with conflict markers
function findFilesWithConflictMarkers() {
  const conflictedFiles = [];
  
  function searchDirectory(dir) {
    const items = fs.readdirSync(dir);
    
    for (const item of items) {
      const fullPath = path.join(dir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        // Skip node_modules and other common directories
        if (!['node_modules', '.git', 'dist', 'build', '.next'].includes(item)) {
          searchDirectory(fullPath);
        }
      } else if (stat.isFile() && (item.endsWith('.js') || item.endsWith('.ts') || item.endsWith('.tsx') || item.endsWith('.jsx') || item.endsWith('.md') || item.endsWith('.json'))) {
        try {
          const content = fs.readFileSync(fullPath, 'utf8');
          if (content.includes('') || content.includes('') || content.includes('
            conflictedFiles.push(fullPath);
          }
        } catch (error) {
          // Skip files that can't be read
        }
      }
    }
  }
  
  searchDirectory('.');
  return conflictedFiles;
}

// Main execution
function main() {
  console.log('🔍 Searching for files with merge conflicts...');
  
  // First, try to get conflicted files from git
  let conflictedFiles = findConflictedFiles();
  
  // If no git conflicts, search for files with conflict markers
  if (conflictedFiles.length === 0) {
    conflictedFiles = findFilesWithConflictMarkers();
  }
  
  if (conflictedFiles.length === 0) {
    console.log('✅ No merge conflicts found!');
    return;
  }
  
  console.log(`📁 Found ${conflictedFiles.length} files with conflicts:`);
  conflictedFiles.forEach(file => console.log(`  - ${file}`));
  
  let resolvedCount = 0;
  
  for (const file of conflictedFiles) {
    if (resolveMergeConflicts(file)) {
      resolvedCount++;
    }
  }
  
  console.log(`\n🎉 Resolution complete!`);
  console.log(`✅ Resolved conflicts in ${resolvedCount} files`);
  
  if (resolvedCount > 0) {
    console.log('\n📝 Next steps:');
    console.log('1. Review the resolved files');
    console.log('2. Test the application');
    console.log('3. Commit the changes');
    console.log('4. Complete the merge');
  }
}

// Run the script
main();