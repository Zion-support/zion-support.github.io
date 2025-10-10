#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

// Function to fix merge conflicts in a file
function fixMergeConflicts(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Check if file has merge conflict markers
    if (!content.includes('<<<<<<<') && !content.includes('=======') && !content.includes('>>>>>>>')) {
      return false; // No conflicts to fix
    }
    
    console.log(`Fixing merge conflicts in: ${filePath}`);
    
    // Split content by merge conflict markers
    const lines = content.split('\n');
    const result = [];
    let inConflict = false;
    let conflictType = null;
    let headContent = [];
    let branchContent = [];
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      
      if (line.startsWith('<<<<<<<')) {
        inConflict = true;
        conflictType = 'head';
        continue;
      } else if (line.startsWith('=======')) {
        conflictType = 'branch';
        continue;
      } else if (line.startsWith('>>>>>>>')) {
        inConflict = false;
        conflictType = null;
        
        // Choose the HEAD version (first part) by default
        result.push(...headContent);
        headContent = [];
        branchContent = [];
        continue;
      }
      
      if (inConflict) {
        if (conflictType === 'head') {
          headContent.push(line);
        } else if (conflictType === 'branch') {
          branchContent.push(line);
        }
      } else {
        result.push(line);
      }
    }
    
    // Write the fixed content back
    fs.writeFileSync(filePath, result.join('\n'));
    return true;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
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
console.log('🔍 Scanning for files with merge conflicts...');
const conflictedFiles = findFilesWithConflicts('/workspace');

if (conflictedFiles.length === 0) {
  console.log('✅ No files with merge conflicts found.');
  process.exit(0);
}

console.log(`📁 Found ${conflictedFiles.length} files with merge conflicts:`);
conflictedFiles.forEach(file => console.log(`  - ${file}`));

console.log('\n🔧 Fixing merge conflicts...');
let fixedCount = 0;

for (const file of conflictedFiles) {
  if (fixMergeConflicts(file)) {
    fixedCount++;
  }
}

console.log(`\n✅ Fixed merge conflicts in ${fixedCount} files.`);

// Run linting to check for remaining issues
console.log('\n🔍 Running linting to check for remaining issues...');
try {
  execSync('npm run lint', { stdio: 'inherit', cwd: '/workspace' });
  console.log('✅ Linting passed!');
} catch (error) {
  console.log('⚠️  Linting found issues, but merge conflicts have been resolved.');
}

console.log('\n🎉 Merge conflict resolution complete!');