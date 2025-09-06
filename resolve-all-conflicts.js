#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

console.log('🚀 Starting comprehensive merge conflict resolution...');

// Function to resolve conflicts in a file
function resolveConflictsInFile(filePath) {
  try {
    if (!fs.existsSync(filePath)) {
      console.log(`⚠️  File not found: ${filePath}`);
      return false;
    }

    const content = fs.readFileSync(filePath, 'utf8');
    
    // Skip if no conflicts
    if (!content.includes('<<<<<<< HEAD') || !content.includes('=======') || !content.includes('>>>>>>>')) {
      return false;
    }

    console.log(`🔧 Resolving conflicts in: ${filePath}`);

    // Strategy 1: Keep our changes (HEAD) for most files
    let resolvedContent = content
      .replace(/<<<<<<< HEAD\n([\s\S]*?)\n=======\n([\s\S]*?)\n>>>>>>> [^\n]+/g, '$1')
      .replace(/<<<<<<< HEAD\n([\s\S]*?)\n=======\n([\s\S]*?)\n>>>>>>> [^\n]+/g, '$1');

    // Strategy 2: For specific file types, use different strategies
    if (filePath.includes('package.json') || filePath.includes('package-lock.json')) {
      // For package files, prefer the remote version (newer dependencies)
      resolvedContent = content
        .replace(/<<<<<<< HEAD\n([\s\S]*?)\n=======\n([\s\S]*?)\n>>>>>>> [^\n]+/g, '$2');
    } else if (filePath.includes('.css') || filePath.includes('.scss')) {
      // For CSS files, merge both versions
      resolvedContent = content
        .replace(/<<<<<<< HEAD\n([\s\S]*?)\n=======\n([\s\S]*?)\n>>>>>>> [^\n]+/g, (match, head, remote) => {
          // Remove duplicate rules and merge
          const headLines = head.split('\n').filter(line => line.trim());
          const remoteLines = remote.split('\n').filter(line => line.trim());
          const merged = [...new Set([...headLines, ...remoteLines])];
          return merged.join('\n');
        });
    } else if (filePath.includes('vite.config') || filePath.includes('tsconfig.json')) {
      // For config files, prefer our version but merge important parts
      resolvedContent = content
        .replace(/<<<<<<< HEAD\n([\s\S]*?)\n=======\n([\s\S]*?)\n>>>>>>> [^\n]+/g, '$1');
    }

    // Write resolved content
    fs.writeFileSync(filePath, resolvedContent, 'utf8');
    return true;
  } catch (error) {
    console.error(`❌ Error resolving conflicts in ${filePath}:`, error.message);
    return false;
  }
}

// Function to find all files with conflicts
function findConflictedFiles(dir) {
  const conflictedFiles = [];
  
  function scanDirectory(currentDir) {
    const items = fs.readdirSync(currentDir);
    
    for (const item of items) {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        // Skip certain directories
        if (!['node_modules', '.git', 'dist', 'build', '.next'].includes(item)) {
          scanDirectory(fullPath);
        }
      } else if (stat.isFile()) {
        try {
          const content = fs.readFileSync(fullPath, 'utf8');
          if (content.includes('<<<<<<< HEAD') && content.includes('=======') && content.includes('>>>>>>>')) {
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

// Main resolution process
try {
  console.log('🔍 Scanning for conflicted files...');
  const conflictedFiles = findConflictedFiles('.');
  
  console.log(`📊 Found ${conflictedFiles.length} files with conflicts`);
  
  let resolvedCount = 0;
  let errorCount = 0;
  
  for (const file of conflictedFiles) {
    if (resolveConflictsInFile(file)) {
      resolvedCount++;
    } else {
      errorCount++;
    }
  }
  
  console.log(`✅ Successfully resolved conflicts in ${resolvedCount} files`);
  if (errorCount > 0) {
    console.log(`⚠️  Failed to resolve ${errorCount} files`);
  }
  
  // Check if there are still conflicts
  const remainingConflicts = findConflictedFiles('.');
  if (remainingConflicts.length === 0) {
    console.log('🎉 All conflicts resolved! Attempting to commit...');
    
    try {
      execSync('git add .', { stdio: 'inherit' });
      execSync('git commit -m "Resolve all merge conflicts automatically"', { stdio: 'inherit' });
      console.log('✅ Successfully committed resolved conflicts');
    } catch (error) {
      console.log('⚠️  Conflicts resolved but commit failed:', error.message);
    }
  } else {
    console.log(`⚠️  Still have ${remainingConflicts.length} files with conflicts`);
    console.log('Remaining conflicted files:', remainingConflicts.slice(0, 10));
  }
  
} catch (error) {
  console.error('❌ Error during conflict resolution:', error.message);
  process.exit(1);
}