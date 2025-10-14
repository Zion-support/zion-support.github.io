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
    
    // Split content by merge conflict markers
    const lines = content.split('\n');
    const resolvedLines = [];
    let inConflict = false;
    let conflictType = null; // 'head', 'separator', 'incoming'
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      
      if (line.startsWith('<<<<<<<')) {
        inConflict = true;
        conflictType = 'head';
        continue; // Skip the conflict marker
      } else if (line.startsWith('=======')) {
        conflictType = 'separator';
        continue; // Skip the separator
      } else if (line.startsWith('>>>>>>>')) {
        inConflict = false;
        conflictType = null;
        continue; // Skip the end marker
      }
      
      if (inConflict) {
        // Only keep HEAD version (before =======)
        if (conflictType === 'head') {
          resolvedLines.push(line);
        }
        // Skip incoming version (after =======)
      } else {
        resolvedLines.push(line);
      }
    }
    
    // Write the resolved content back to the file
    fs.writeFileSync(filePath, resolvedLines.join('\n'), 'utf8');
    return true;
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
        if (!['node_modules', '.git', 'dist', 'build', '.next', 'out'].includes(item)) {
          scanDirectory(fullPath);
        }
      } else if (stat.isFile()) {
        // Check if it's a source file
        if (item.match(/\.(ts|tsx|js|jsx|css|html|json)$/)) {
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
function main() {
  console.log('Starting merge conflict resolution...');
  
  const workspaceDir = process.cwd();
  const conflictedFiles = findFilesWithConflicts(workspaceDir);
  
  console.log(`Found ${conflictedFiles.length} files with merge conflicts`);
  
  let resolvedCount = 0;
  let errorCount = 0;
  
  for (const file of conflictedFiles) {
    if (resolveMergeConflicts(file)) {
      resolvedCount++;
    } else {
      errorCount++;
    }
  }
  
  console.log(`\nResolution complete:`);
  console.log(`- Files resolved: ${resolvedCount}`);
  console.log(`- Files with errors: ${errorCount}`);
  
  if (resolvedCount > 0) {
    console.log('\nRunning git add to stage resolved files...');
    try {
      execSync('git add .', { cwd: workspaceDir, stdio: 'inherit' });
      console.log('Files staged successfully');
    } catch (error) {
      console.error('Error staging files:', error.message);
    }
  }
}

if (require.main === module) {
  main();
}

module.exports = { resolveMergeConflicts, findFilesWithConflicts };