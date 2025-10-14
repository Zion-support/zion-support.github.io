#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

// Function to find all files with merge conflicts
function findFilesWithConflicts(dir) {
  const files = [];
  
  function searchDirectory(currentDir) {
    const items = fs.readdirSync(currentDir);
    
    for (const item of items) {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        // Skip node_modules and other irrelevant directories
        if (!['node_modules', '.git', 'dist', 'build', '.next'].includes(item)) {
          searchDirectory(fullPath);
        }
      } else if (stat.isFile() && (item.endsWith('.tsx') || item.endsWith('.ts') || item.endsWith('.js') || item.endsWith('.jsx'))) {
        try {
          const content = fs.readFileSync(fullPath, 'utf8');
          if (content.includes('<<<<<<< HEAD') || content.includes('=======') || content.includes('>>>>>>>')) {
            files.push(fullPath);
          }
        } catch (error) {
          console.log(`Error reading file ${fullPath}:`, error.message);
        }
      }
    }
  }
  
  searchDirectory(dir);
  return files;
}

// Function to resolve merge conflicts in a file
function resolveMergeConflicts(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    const originalContent = content;
    
    // Split by merge conflict markers
    const lines = content.split('\n');
    const resolvedLines = [];
    let inConflict = false;
    let conflictType = null;
    let headLines = [];
    let incomingLines = [];
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      
      if (line.trim() === '<<<<<<< HEAD') {
        inConflict = true;
        conflictType = 'head';
        continue;
      } else if (line.trim() === '=======') {
        conflictType = 'incoming';
        continue;
      } else if (line.trim().startsWith('>>>>>>>')) {
        inConflict = false;
        
        // Choose the appropriate version based on context
        let chosenLines = [];
        
        // For most cases, prefer the incoming version (after =======)
        // as it seems to be more complete
        if (incomingLines.length > 0) {
          chosenLines = incomingLines;
        } else if (headLines.length > 0) {
          chosenLines = headLines;
        }
        
        resolvedLines.push(...chosenLines);
        headLines = [];
        incomingLines = [];
        conflictType = null;
        continue;
      }
      
      if (inConflict) {
        if (conflictType === 'head') {
          headLines.push(line);
        } else if (conflictType === 'incoming') {
          incomingLines.push(line);
        }
      } else {
        resolvedLines.push(line);
      }
    }
    
    const resolvedContent = resolvedLines.join('\n');
    
    // Only write if content changed
    if (resolvedContent !== originalContent) {
      fs.writeFileSync(filePath, resolvedContent, 'utf8');
      console.log(`✅ Resolved conflicts in: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`❌ Error resolving conflicts in ${filePath}:`, error.message);
    return false;
  }
}

// Function to clean up common syntax issues after merge resolution
function cleanupFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let changed = false;
    
    // Fix common issues
    const fixes = [
      // Remove duplicate closing braces
      { pattern: /}\s*}\s*$/, replacement: '}' },
      // Fix missing semicolons
      { pattern: /(\w+)\s*$/, replacement: '$1;' },
      // Fix JSX closing tags
      { pattern: /<\/\s*$/, replacement: '</div>' },
      // Remove empty lines at end
      { pattern: /\n\s*\n\s*$/, replacement: '\n' }
    ];
    
    for (const fix of fixes) {
      const newContent = content.replace(fix.pattern, fix.replacement);
      if (newContent !== content) {
        content = newContent;
        changed = true;
      }
    }
    
    if (changed) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`🧹 Cleaned up: ${filePath}`);
    }
    
    return changed;
  } catch (error) {
    console.error(`❌ Error cleaning up ${filePath}:`, error.message);
    return false;
  }
}

// Main execution
console.log('🔍 Searching for files with merge conflicts...');
const conflictedFiles = findFilesWithConflicts(process.cwd());

if (conflictedFiles.length === 0) {
  console.log('✅ No files with merge conflicts found!');
  process.exit(0);
}

console.log(`📁 Found ${conflictedFiles.length} files with merge conflicts:`);
conflictedFiles.forEach(file => console.log(`  - ${file}`));

console.log('\n🔧 Resolving merge conflicts...');
let resolvedCount = 0;
let cleanedCount = 0;

for (const file of conflictedFiles) {
  if (resolveMergeConflicts(file)) {
    resolvedCount++;
  }
  if (cleanupFile(file)) {
    cleanedCount++;
  }
}

console.log(`\n✅ Resolved conflicts in ${resolvedCount} files`);
console.log(`🧹 Cleaned up ${cleanedCount} files`);

// Verify no more conflicts
console.log('\n🔍 Verifying no remaining conflicts...');
const remainingConflicts = findFilesWithConflicts(process.cwd());

if (remainingConflicts.length === 0) {
  console.log('✅ All merge conflicts resolved successfully!');
} else {
  console.log(`❌ ${remainingConflicts.length} files still have conflicts:`);
  remainingConflicts.forEach(file => console.log(`  - ${file}`));
}

console.log('\n🎉 Merge conflict resolution complete!');