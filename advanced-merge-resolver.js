#!/usr/bin/env node

import fs from 'fs';
import path from 'path';

// Advanced merge conflict resolver
function resolveMergeConflicts(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    
    if (!content.includes('<<<<<<< HEAD')) {
      return false;
    }
    
    console.log(`Resolving conflicts in: ${filePath}`);
    
    // Split content by lines
    const lines = content.split('\n');
    const resolvedLines = [];
    let inConflict = false;
    let conflictType = '';
    let headLines = [];
    let otherLines = [];
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      
      if (line.startsWith('<<<<<<< HEAD')) {
        inConflict = true;
        conflictType = 'head';
        headLines = [];
        otherLines = [];
        continue;
      } else if (line.startsWith('=======')) {
        conflictType = 'separator';
        continue;
      } else if (line.startsWith('>>>>>>>')) {
        inConflict = false;
        conflictType = '';
        
        // Smart conflict resolution logic
        const resolved = smartResolveConflict(headLines, otherLines, filePath);
        resolvedLines.push(...resolved);
        
        headLines = [];
        otherLines = [];
        continue;
      }
      
      if (!inConflict) {
        resolvedLines.push(line);
      } else if (conflictType === 'head') {
        headLines.push(line);
      } else if (conflictType === 'separator') {
        otherLines.push(line);
      }
    }
    
    // Write resolved content
    fs.writeFileSync(filePath, resolvedLines.join('\n'));
    return true;
    
  } catch (error) {
    console.error(`Error resolving conflicts in ${filePath}:`, error.message);
    return false;
  }
}

// Smart conflict resolution logic
function smartResolveConflict(headLines, otherLines, filePath) {
  const headContent = headLines.join('\n');
  const otherContent = otherLines.join('\n');
  
  // For package.json, prefer the version with more dependencies
  if (filePath.includes('package.json')) {
    const headDeps = (headContent.match(/"dependencies"/g) || []).length;
    const otherDeps = (otherContent.match(/"dependencies"/g) || []).length;
    return headDeps >= otherDeps ? headLines : otherLines;
  }
  
  // For config files, prefer the more complete version
  if (filePath.includes('config') || filePath.includes('.toml') || filePath.includes('.js')) {
    const headLength = headContent.length;
    const otherLength = otherContent.length;
    return headLength >= otherLength ? headLines : otherLines;
  }
  
  // For TypeScript/React files, prefer the version with more imports/exports
  if (filePath.match(/\.(tsx?|jsx?)$/)) {
    const headImports = (headContent.match(/import|export/g) || []).length;
    const otherImports = (otherContent.match(/import|export/g) || []).length;
    return headImports >= otherImports ? headLines : otherLines;
  }
  
  // Default: prefer HEAD version
  return headLines;
}

// Find all files with merge conflicts
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
          if (!['node_modules', '.git', 'dist', 'build', '.next'].includes(item)) {
            scanDirectory(fullPath);
          }
        } else if (stat.isFile()) {
          try {
            const content = fs.readFileSync(fullPath, 'utf8');
            if (content.includes('<<<<<<< HEAD')) {
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
function main() {
  console.log('🔍 Scanning for merge conflicts...');
  
  const conflictedFiles = findConflictedFiles(process.cwd());
  console.log(`Found ${conflictedFiles.length} files with merge conflicts`);
  
  if (conflictedFiles.length === 0) {
    console.log('✅ No merge conflicts found!');
    return;
  }
  
  let resolvedCount = 0;
  
  for (const file of conflictedFiles) {
    if (resolveMergeConflicts(file)) {
      resolvedCount++;
    }
  }
  
  console.log(`✅ Resolved conflicts in ${resolvedCount} files`);
  
  // Check if there are still conflicts
  const remainingConflicts = findConflictedFiles(process.cwd());
  if (remainingConflicts.length > 0) {
    console.log(`⚠️  ${remainingConflicts.length} files still have conflicts`);
  } else {
    console.log('🎉 All merge conflicts resolved!');
  }
}

main();