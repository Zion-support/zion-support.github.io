#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

console.log('🔧 Starting comprehensive merge conflict resolution...');

// Function to resolve merge conflicts in a file
function resolveMergeConflicts(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Check if file has merge conflict markers
    if (!content.includes('<<<<<<<') && !content.includes('=======') && !content.includes('>>>>>>>')) {
      return false; // No conflicts to resolve
    }
    
    console.log(`📝 Resolving conflicts in: ${filePath}`);
    
    // Split content by merge conflict markers
    const lines = content.split('\n');
    const resolvedLines = [];
    let inConflict = false;
    let conflictType = null;
    let currentSection = [];
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      
      if (line.startsWith('<<<<<<<')) {
        inConflict = true;
        conflictType = 'ours';
        currentSection = [];
        continue;
      } else if (line.startsWith('=======')) {
        conflictType = 'theirs';
        currentSection = [];
        continue;
      } else if (line.startsWith('>>>>>>>')) {
        inConflict = false;
        conflictType = null;
        
        // Choose the "theirs" version (from main branch) as it's more recent
        resolvedLines.push(...currentSection);
        currentSection = [];
        continue;
      }
      
      if (inConflict) {
        currentSection.push(line);
      } else {
        resolvedLines.push(line);
      }
    }
    
    // Write the resolved content back to the file
    const resolvedContent = resolvedLines.join('\n');
    fs.writeFileSync(filePath, resolvedContent, 'utf8');
    
    return true; // Conflicts were resolved
  } catch (error) {
    console.error(`❌ Error resolving conflicts in ${filePath}:`, error.message);
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
      
      if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
        scanDirectory(fullPath);
      } else if (stat.isFile() && (item.endsWith('.tsx') || item.endsWith('.ts') || item.endsWith('.js') || item.endsWith('.jsx'))) {
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
  
  scanDirectory(dir);
  return files;
}

// Main execution
try {
  console.log('🔍 Scanning for files with merge conflicts...');
  const conflictedFiles = findFilesWithConflicts('.');
  
  console.log(`📊 Found ${conflictedFiles.length} files with merge conflicts`);
  
  let resolvedCount = 0;
  let errorCount = 0;
  
  for (const file of conflictedFiles) {
    if (resolveMergeConflicts(file)) {
      resolvedCount++;
    } else {
      errorCount++;
    }
  }
  
  console.log(`✅ Successfully resolved conflicts in ${resolvedCount} files`);
  if (errorCount > 0) {
    console.log(`❌ Failed to resolve conflicts in ${errorCount} files`);
  }
  
  // Run a final check
  console.log('🔍 Running final conflict check...');
  const remainingConflicts = findFilesWithConflicts('.');
  
  if (remainingConflicts.length === 0) {
    console.log('🎉 All merge conflicts have been resolved!');
    
    // Try to build the project to verify everything works
    console.log('🔨 Running build verification...');
    try {
      execSync('npm run build', { stdio: 'inherit' });
      console.log('✅ Build successful! All conflicts resolved and project builds correctly.');
    } catch (error) {
      console.log('⚠️  Build failed, but conflicts were resolved. You may need to fix additional issues.');
    }
  } else {
    console.log(`⚠️  ${remainingConflicts.length} files still have conflicts. Manual intervention may be required.`);
  }
  
} catch (error) {
  console.error('💥 Fatal error during conflict resolution:', error.message);
  process.exit(1);
}