#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

// Function to fix merge conflicts in a file
function fixMergeConflicts(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Check if file has merge conflict markers
      return false; // No conflicts to fix
    }
    
    console.log(`Fixing merge conflicts in: ${filePath}`);
    
    // Split content by conflict markers
    const lines = content.split('\n');
    const fixedLines = [];
    let inConflict = false;
    let conflictType = '';
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      
        inConflict = true;
        conflictType = 'head';
        continue;
        inConflict = false;
        conflictType = '';
        continue;
      }
      
      if (inConflict) {
        if (conflictType === 'head') {
          fixedLines.push(line);
        }
      } else {
        fixedLines.push(line);
      }
    }
    
    // Write the fixed content back
    fs.writeFileSync(filePath, fixedLines.join('\n'));
    return true;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
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
      
      if (stat.isDirectory()) {
        // Skip node_modules and other irrelevant directories
        if (!['node_modules', '.git', 'dist', '.next', 'out'].includes(item)) {
          scanDirectory(fullPath);
        }
      } else if (stat.isFile() && (item.endsWith('.tsx') || item.endsWith('.ts') || item.endsWith('.js') || item.endsWith('.jsx'))) {
        try {
          const content = fs.readFileSync(fullPath, 'utf8');
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

// Main execution
console.log('🔍 Scanning for files with merge conflicts...');
const conflictedFiles = findConflictedFiles(process.cwd());

if (conflictedFiles.length === 0) {
  console.log('✅ No merge conflicts found!');
  process.exit(0);
}

console.log(`📋 Found ${conflictedFiles.length} files with merge conflicts:`);
conflictedFiles.forEach(file => console.log(`  - ${file}`));

console.log('\n🔧 Fixing merge conflicts...');
let fixedCount = 0;

for (const file of conflictedFiles) {
  if (fixMergeConflicts(file)) {
    fixedCount++;
  }
}

console.log(`\n✅ Fixed ${fixedCount} out of ${conflictedFiles.length} files`);

// Try to build after fixing conflicts
console.log('\n🏗️  Attempting to build...');
try {
  execSync('npm run build', { stdio: 'inherit' });
  console.log('✅ Build successful!');
} catch (error) {
  console.log('❌ Build failed. Checking for remaining issues...');
  
  // Check for any remaining conflict markers
  const remainingConflicts = findConflictedFiles(process.cwd());
  if (remainingConflicts.length > 0) {
    console.log(`⚠️  ${remainingConflicts.length} files still have conflicts:`);
    remainingConflicts.forEach(file => console.log(`  - ${file}`));
  }
}