#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

console.log('🔧 Starting comprehensive merge conflict resolution...');

// Function to resolve merge conflicts in a file
function resolveMergeConflicts(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    const lines = content.split('\n');
    const resolvedLines = [];
    let inConflict = false;
    let keepLines = false;
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      
      if (line.startsWith('<<<<<<<')) {
        inConflict = true;
        modified = true;
        continue;
      }
      
        keepLines = true;
        continue;
      }
      
        inConflict = false;
        keepLines = false;
        continue;
      }
      
      if (inConflict) {
        if (keepLines) {
          resolvedLines.push(line);
        }
      } else {
        resolvedLines.push(line);
      }
    }
    
    const resolvedContent = resolvedLines.join('\n');
    
    if (content !== resolvedContent) {
      fs.writeFileSync(filePath, resolvedContent, 'utf8');
      console.log(`✅ Resolved conflicts in: ${filePath}`);
      modified = true;
    }
    
    return modified;
  } catch (error) {
    console.error(`❌ Error processing ${filePath}:`, error.message);
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
        const stat = fs.statSync(fullPath);
        
        if (stat.isDirectory()) {
          // Skip node_modules, .git, and other common directories
          if (!['node_modules', '.git', 'dist', 'build', '.next', 'out'].includes(item)) {
            scanDirectory(fullPath);
          }
        } else if (stat.isFile() && (item.endsWith('.js') || item.endsWith('.ts') || item.endsWith('.tsx') || item.endsWith('.jsx') || item.endsWith('.json') || item.endsWith('.cjs'))) {
          try {
            const content = fs.readFileSync(fullPath, 'utf8');
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
  const conflictFiles = findFilesWithConflicts('.');
  
  if (conflictFiles.length === 0) {
    console.log('✅ No merge conflicts found!');
  } else {
    console.log(`📁 Found ${conflictFiles.length} files with merge conflicts:`);
    
    let resolvedCount = 0;
    for (const file of conflictFiles) {
      console.log(`🔧 Processing: ${file}`);
      if (resolveMergeConflicts(file)) {
        resolvedCount++;
      }
    }
    
    console.log(`\n🎉 Resolved conflicts in ${resolvedCount} files!`);
    
    // Add all resolved files to git
    try {
      console.log('📝 Adding resolved files to git...');
      execSync('git add .', { stdio: 'inherit' });
      console.log('✅ All resolved files added to git!');
    } catch (error) {
      console.error('❌ Error adding files to git:', error.message);
    }
  }
} catch (error) {
  console.error('❌ Fatal error:', error.message);
  process.exit(1);
}

console.log('🎯 Merge conflict resolution completed!');