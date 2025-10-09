#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Function to resolve merge conflicts in a file
function resolveMergeConflicts(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Check if file has merge conflict markers
    if (!content.includes('<<<<<<<') && !content.includes('=======') && !content.includes('>>>>>>>')) {
      return false; // No conflicts to resolve
    }
    
    console.log(`Resolving conflicts in: ${filePath}`);
    
    // Split content by conflict markers
    const lines = content.split('\n');
    const resolvedLines = [];
    let inConflict = false;
    let conflictStart = -1;
    let conflictMiddle = -1;
    let conflictEnd = -1;
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      
      if (line.trim().startsWith('<<<<<<<')) {
        inConflict = true;
        conflictStart = i;
      } else if (line.trim().startsWith('=======')) {
        conflictMiddle = i;
      } else if (line.trim().startsWith('>>>>>>>')) {
        conflictEnd = i;
        
        // Keep the version after ======= (the "incoming" version)
        if (conflictStart >= 0 && conflictMiddle >= 0 && conflictEnd >= 0) {
          // Add lines before conflict
          for (let j = 0; j < conflictStart; j++) {
            resolvedLines.push(lines[j]);
          }
          
          // Add lines after ======= and before >>>>>>>
          for (let j = conflictMiddle + 1; j < conflictEnd; j++) {
            resolvedLines.push(lines[j]);
          }
          
          // Skip the conflict markers
          i = conflictEnd;
        }
        
        // Reset conflict tracking
        inConflict = false;
        conflictStart = -1;
        conflictMiddle = -1;
        conflictEnd = -1;
      } else if (!inConflict) {
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
  const files = [];
  
  function scanDirectory(currentDir) {
    const items = fs.readdirSync(currentDir);
    
    for (const item of items) {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        // Skip node_modules and other common directories
        if (!['node_modules', '.git', 'dist', 'build', '.next'].includes(item)) {
          scanDirectory(fullPath);
        }
      } else if (stat.isFile()) {
        // Check if it's a TypeScript/JavaScript file
        if (item.match(/\.(ts|tsx|js|jsx)$/)) {
          try {
            const content = fs.readFileSync(fullPath, 'utf8');
            if (content.includes('<<<<<<<') || content.includes('=======') || content.includes('>>>>>>>')) {
              files.push(fullPath);
            }
          } catch (error) {
            // Skip files that can't be read
          }
        }
      }
    }
  }
  
  scanDirectory(dir);
  return files;
}

// Main execution
console.log('🔍 Scanning for files with merge conflicts...');
const conflictedFiles = findFilesWithConflicts('/workspace');

console.log(`📁 Found ${conflictedFiles.length} files with merge conflicts`);

let resolvedCount = 0;
let errorCount = 0;

for (const filePath of conflictedFiles) {
  if (resolveMergeConflicts(filePath)) {
    resolvedCount++;
  } else {
    errorCount++;
  }
}

console.log(`✅ Successfully resolved conflicts in ${resolvedCount} files`);
if (errorCount > 0) {
  console.log(`❌ Failed to resolve conflicts in ${errorCount} files`);
}

console.log('🎉 Merge conflict resolution complete!');