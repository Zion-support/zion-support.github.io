<<<<<<< HEAD
=======


>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
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
<<<<<<< HEAD
<<<<<<< HEAD
=======

    if (!content.includes('

>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
=======
    if (!content.includes('') && !content.includes('') && !content.includes('>>>>>>>')) {
      return false;
    }
    console.log(`📝 Resolving conflicts in: ${filePath}`);
    // Split by merge conflict markers
    const lines = content.split('\n');
    const resolvedLines = [];
    let inConflict = false;
    let conflictType = '';
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      if (line.includes('')) {
        inConflict = true;
        conflictType = 'head';
conflictType = 'incoming';
        continue;
      }
      
      if (line.includes('')) {
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-961d
        conflictType = 'incoming';
        continue;
      }
      
      if (line.includes('>>>>>>>')) {
        inConflict = false;
        conflictType = '';
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
    fs.writeFileSync(filePath, resolvedLines.join('\n'));
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
      
      if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
        scanDirectory(fullPath);
      } else if (stat.isFile() && (item.endsWith('.tsx') || item.endsWith('.ts') || item.endsWith('.js') || item.endsWith('.jsx'))) {
        try {
          const content = fs.readFileSync(fullPath, 'utf8');
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
          if (content.includes('') || content.includes('') || content.includes('>>>>>>>')) {
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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-961d

          if (content.includes('

>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
