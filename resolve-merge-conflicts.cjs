#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('🔧 Starting automatic merge conflict resolution...');

// Function to resolve merge conflicts in a file
function resolveMergeConflicts(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    
    // Check if file has merge conflicts
      return false;
    }
    
    console.log(`📝 Resolving conflicts in: ${filePath}`);
    
    // For test files, prefer the incoming changes (from the PR)
    if (filePath.includes('__tests__') || filePath.includes('.test.') || filePath.includes('.spec.')) {
      const lines = content.split('\n');
      let resolved = [];
      let inConflict = false;
      let conflictType = 'incoming'; // Prefer incoming changes for test files
      
      for (let i = 0; i < lines.length; i++) {
        const line = lines[i];
        
          inConflict = true;
          conflictType = 'incoming'; // Prefer incoming changes
          continue;
        }
        
          conflictType = 'incoming'; // Switch to incoming changes
          continue;
        }
        
          inConflict = false;
          continue;
        }
        
        if (!inConflict) {
          resolved.push(line);
        } else if (conflictType === 'incoming') {
          resolved.push(line);
        }
      }
      
      fs.writeFileSync(filePath, resolved.join('\n'));
      return true;
    }
    
    // For package files, prefer the current version
    if (filePath.includes('package-lock.json') || filePath.includes('yarn.lock')) {
      const lines = content.split('\n');
      let resolved = [];
      let inConflict = false;
      let conflictType = 'current'; // Prefer current changes for package files
      
      for (let i = 0; i < lines.length; i++) {
        const line = lines[i];
        
          inConflict = true;
          conflictType = 'current'; // Prefer current changes
          continue;
        }
        
          conflictType = 'incoming'; // Switch to incoming changes
          continue;
        }
        
          inConflict = false;
          continue;
        }
        
        if (!inConflict) {
          resolved.push(line);
        } else if (conflictType === 'current') {
          resolved.push(line);
        }
      }
      
      fs.writeFileSync(filePath, resolved.join('\n'));
      return true;
    }
    
    // For other files, prefer incoming changes
    const lines = content.split('\n');
    let resolved = [];
    let inConflict = false;
    let conflictType = 'incoming'; // Prefer incoming changes
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      
        inConflict = true;
        conflictType = 'incoming'; // Prefer incoming changes
        continue;
      }
      
        conflictType = 'incoming'; // Switch to incoming changes
        continue;
      }
      
        inConflict = false;
        continue;
      }
      
      if (!inConflict) {
        resolved.push(line);
      } else if (conflictType === 'incoming') {
        resolved.push(line);
      }
    }
    
    fs.writeFileSync(filePath, resolved.join('\n'));
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
    const files = fs.readdirSync(currentDir);
    
    for (const file of files) {
      const filePath = path.join(currentDir, file);
      const stat = fs.statSync(filePath);
      
      if (stat.isDirectory() && !file.startsWith('.') && file !== 'node_modules') {
        scanDirectory(filePath);
      } else if (stat.isFile()) {
        try {
          if (fs.existsSync(filePath)) {
            const content = fs.readFileSync(filePath, 'utf8');
              conflictedFiles.push(filePath);
            }
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

// Main execution
try {
  const conflictedFiles = findConflictedFiles('.');
  console.log(`🔍 Found ${conflictedFiles.length} files with merge conflicts`);
  
  let resolvedCount = 0;
  for (const file of conflictedFiles) {
    if (resolveMergeConflicts(file)) {
      resolvedCount++;
    }
  }
  
  console.log(`✅ Successfully resolved conflicts in ${resolvedCount} files`);
  
  // Check if there are still conflicts
  const remainingConflicts = findConflictedFiles('.');
  if (remainingConflicts.length > 0) {
    console.log(`⚠️  ${remainingConflicts.length} files still have conflicts:`);
    remainingConflicts.forEach(file => console.log(`   - ${file}`));
  } else {
    console.log('🎉 All merge conflicts resolved!');
  }
  
} catch (error) {
  console.error('❌ Error during conflict resolution:', error.message);
  process.exit(1);
}