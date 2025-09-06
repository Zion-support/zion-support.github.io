#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('🔧 Starting merge conflict resolution...');

// Function to resolve merge conflicts in a file
function resolveMergeConflicts(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Check if file has merge conflicts
    if (!content.includes('') && !content.includes('>>>>>>>')) {
      return false;
    }
    
    console.log(`📝 Fixing merge conflicts in: ${filePath}`);
    
    // Remove merge conflict markers and keep HEAD version
    content = content
      .replace(/\n?/g, '')
      .replace(/\n?/g, '')
      .replace(/      .replace(/:.*\n?/g, '')
      .replace(/    
    // Clean up any remaining conflict markers
    content = content
      .replace(/^<<<<<<< .*$/gm, '')
      .replace(/^.*$/gm, '')
      .replace(/^    
    // Remove empty lines that might be left behind
    content = content.replace(/\n\s*\n\s*\n/g, '\n\n');
    
    fs.writeFileSync(filePath, content);
    console.log(`✅ Fixed merge conflicts in: ${filePath}`);
    return true;
  } catch (error) {
    console.error(`❌ Error fixing ${filePath}:`, error.message);
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
        let stat;
        
        try {
          stat = fs.statSync(fullPath);
        } catch (error) {
          // Skip broken symlinks or inaccessible files
          continue;
        }
        
        if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
          scanDirectory(fullPath);
        } else if (stat.isFile() && (item.endsWith('.js') || item.endsWith('.cjs') || item.endsWith('.ts') || item.endsWith('.tsx'))) {
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
  for (const file of conflictedFiles) {
    if (resolveMergeConflicts(file)) {
      fixedCount++;
    }
  }
  
  console.log(`✅ Successfully fixed ${fixedCount} files`);
  console.log('🎉 Merge conflict resolution completed!');
  
} catch (error) {
  console.error('❌ Error during merge conflict resolution:', error);
  process.exit(1);
}