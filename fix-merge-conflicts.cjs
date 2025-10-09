#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Function to resolve merge conflicts in a file
function resolveMergeConflicts(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Check if file has merge conflict markers
    if (!content.includes('<<<<<<< HEAD') && !content.includes('=======') && !content.includes('>>>>>>>')) {
      return false; // No conflicts to resolve
    }
    
    console.log(`Resolving merge conflicts in: ${filePath}`);
    
    // Split content by lines
    const lines = content.split('\n');
    const resolvedLines = [];
    let inConflict = false;
    let keepHead = true;
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      
      if (line.startsWith('<<<<<<< HEAD')) {
        inConflict = true;
        keepHead = true;
        continue; // Skip the marker line
      } else if (line.startsWith('=======')) {
        keepHead = false;
        continue; // Skip the separator line
      } else if (line.startsWith('>>>>>>>')) {
        inConflict = false;
        continue; // Skip the end marker line
      } else if (inConflict) {
        // Only keep lines from HEAD section
        if (keepHead) {
          resolvedLines.push(line);
        }
        // Skip lines from other branch
      } else {
        // Normal line, keep it
        resolvedLines.push(line);
      }
    }
    
    // Write resolved content back to file
    const resolvedContent = resolvedLines.join('\n');
    fs.writeFileSync(filePath, resolvedContent, 'utf8');
    
    return true; // Conflicts were resolved
  } catch (error) {
    console.error(`Error resolving conflicts in ${filePath}:`, error.message);
    return false;
  }
}

// Function to find all files with merge conflicts
function findFilesWithConflicts(dir) {
  const filesWithConflicts = [];
  
  function searchDirectory(currentDir) {
    const items = fs.readdirSync(currentDir);
    
    for (const item of items) {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        // Skip node_modules and other common directories
        if (!['node_modules', '.git', '.next', 'dist', 'out'].includes(item)) {
          searchDirectory(fullPath);
        }
      } else if (stat.isFile()) {
        // Check if file has merge conflict markers
        try {
          const content = fs.readFileSync(fullPath, 'utf8');
          if (content.includes('<<<<<<< HEAD') || content.includes('=======') || content.includes('>>>>>>>')) {
            filesWithConflicts.push(fullPath);
          }
        } catch (error) {
          // Skip files that can't be read
        }
      }
    }
  }
  
  searchDirectory(dir);
  return filesWithConflicts;
}

// Main execution
console.log('🔍 Searching for files with merge conflicts...');
const conflictedFiles = findFilesWithConflicts(process.cwd());

if (conflictedFiles.length === 0) {
  console.log('✅ No files with merge conflicts found.');
  process.exit(0);
}

console.log(`📋 Found ${conflictedFiles.length} files with merge conflicts:`);
conflictedFiles.forEach(file => console.log(`  - ${file}`));

console.log('\n🔧 Resolving merge conflicts...');
let resolvedCount = 0;

for (const file of conflictedFiles) {
  if (resolveMergeConflicts(file)) {
    resolvedCount++;
  }
}

console.log(`\n✅ Successfully resolved conflicts in ${resolvedCount} out of ${conflictedFiles.length} files.`);

if (resolvedCount === conflictedFiles.length) {
  console.log('🎉 All merge conflicts have been resolved!');
} else {
  console.log('⚠️  Some files could not be resolved automatically.');
  process.exit(1);
}