#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('🔧 Starting conflict resolution...');

// Function to resolve merge conflicts in a file
function resolveConflicts(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Check if file has merge conflicts
      console.log(`📝 Resolving conflicts in: ${filePath}`);
      
          inConflict = true;
          keepLines = true;
          continue;
        }
          inConflict = false;
          keepLines = true;
          continue;
        }
        
        if (!inConflict || keepLines) {
          resolvedLines.push(line);
        }
      }
      
      fs.writeFileSync(filePath, resolvedLines.join('\n'));
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
          if (!['node_modules', '.git', '.next', 'dist', 'out'].includes(item)) {
            scanDirectory(fullPath);
          }
        } else if (stat.isFile() && (item.endsWith('.js') || item.endsWith('.ts') || item.endsWith('.tsx') || item.endsWith('.cjs') || item.endsWith('.mjs'))) {
          try {
            const content = fs.readFileSync(fullPath, 'utf8');
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
  console.log('🔍 Scanning for files with merge conflicts...');
  const conflictedFiles = findConflictedFiles('.');
  
  console.log(`📊 Found ${conflictedFiles.length} files with conflicts`);
  
  let resolvedCount = 0;
  for (const file of conflictedFiles) {
    if (resolveConflicts(file)) {
      resolvedCount++;
    }
  }
  
  console.log(`✅ Successfully resolved conflicts in ${resolvedCount} files`);
  console.log('🎉 Conflict resolution completed!');
  
} catch (error) {
  console.error('❌ Error during conflict resolution:', error.message);
  process.exit(1);
}