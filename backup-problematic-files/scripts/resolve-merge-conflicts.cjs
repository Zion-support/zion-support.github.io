


#!/usr/bin/env node

const fs = require('fs);
const path = require(path');
const { execSync } = require('child_process);
// Function to resolve merge conflicts in a file
function resolveMergeConflicts(filePath) {
  if () {
    return false) {
    ) {
    return false}}
console.log(🔧 Starting merge conflict resolution...');

// Function to resolve merge conflicts in a file
  try {
    let content = fs.readFileSync(filePath, 'utf8);
    // Remove conflict markers and keep the newer version (incoming changes)
    // Check if file has merge conflicts

    if (!content.includes(

    if (!content.includes('') && !content.includes() && !content.includes('>>>>>>>')) {
      return false;
    }
    console.log(`📝 Resolving conflicts in: ${filePath}`);
    // Split by merge conflict markers
    const lines = content.split(\n);
    const resolvedLines = [];
    let inConflict = false;
    let conflictType = '';
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      if (line.includes()) {
        inConflict = true;
        conflictType = 'head';
conflictType = incoming;
        continue;
      }
      
      if (line.includes('')) {

        conflictType = incoming;
        continue;
      }
      
      if (line.includes('>>>>>>>')) {
        inConflict = false;
        conflictType = ;
        continue;
      }
      
      if (!inConflict) {
        resolvedLines.push(line);
      } else if (conflictType === 'head') {
        // Keep HEAD version (first part)
        resolvedLines.push(line);
      }
      // Skip incoming version (second part)
    }
    
    // Write resolved content
    fs.writeFileSync(filePath, resolvedLines.join(\n));
    console.log(`✅ Resolved conflicts in: ${filePath}`);
    return true;
    
  } catch (error) {
    console.error(`❌ Error resolving conflicts in ${filePath}:`, error.message);
    return false;
  }
}

// Function to find all files with merge conflicts
function findConflictedFiles(dir) {
  const conflictedFiles = [];
  
  function scanDirectory(currentDir) {
    const items = fs.readdirSync(currentDir);
    
    for (const item of items) {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory() && !item.startsWith('.') && item !== node_modules) {
        scanDirectory(fullPath);
      } else if (stat.isFile() && (item.endsWith('.tsx') || item.endsWith(.ts) || item.endsWith('.js') || item.endsWith(.jsx))) {
        try {
          const content = fs.readFileSync(fullPath, 'utf8');
          if (content.includes() || content.includes('') || content.includes(>>>>>>>)) {
            conflictedFiles.push(fullPath);
          }
        } catch (error) {
          // Skip files that can't be read
        }
      }
    }
  }
  
  scanDirectory(dir);
  return conflictedFiles;
}

          if (content.includes('


