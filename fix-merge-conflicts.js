#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

// Function to resolve merge conflicts by keeping HEAD version
function resolveMergeConflicts(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Check if file has merge conflicts
      console.log(`Resolving merge conflicts in: ${filePath}`);
      
      // Split by merge conflict markers and keep HEAD version
      const lines = content.split('\n');
      const resolvedLines = [];
      let inConflict = false;
      let keepLines = false;
      
      for (let i = 0; i < lines.length; i++) {
        const line = lines[i];
        
          inConflict = true;
          keepLines = true;
          continue;
          inConflict = false;
          keepLines = false;
          continue;
        }
        
        if (!inConflict || keepLines) {
          resolvedLines.push(line);
        }
      }
      
      const resolvedContent = resolvedLines.join('\n');
      fs.writeFileSync(filePath, resolvedContent, 'utf8');
      console.log(`✓ Resolved merge conflicts in: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Function to find all files with merge conflicts
function findFilesWithConflicts(dir) {
  const files = [];
  
  function walkDir(currentPath) {
    const items = fs.readdirSync(currentPath);
    
    for (const item of items) {
      const fullPath = path.join(currentPath, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
        walkDir(fullPath);
      } else if (stat.isFile() && (item.endsWith('.tsx') || item.endsWith('.ts') || item.endsWith('.js') || item.endsWith('.jsx'))) {
        try {
          const content = fs.readFileSync(fullPath, 'utf8');
            files.push(fullPath);
          }
        } catch (error) {
          // Skip files that can't be read
        }
      }
    }
  }
  
  walkDir(dir);
  return files;
}

// Main execution
console.log('🔍 Searching for files with merge conflicts...');
const conflictedFiles = findFilesWithConflicts('/workspace');

console.log(`Found ${conflictedFiles.length} files with merge conflicts:`);
conflictedFiles.forEach(file => console.log(`  - ${file}`));

console.log('\n🔧 Resolving merge conflicts...');
let resolvedCount = 0;

for (const file of conflictedFiles) {
  if (resolveMergeConflicts(file)) {
    resolvedCount++;
  }
}

console.log(`\n✅ Resolved merge conflicts in ${resolvedCount} files`);

// Also clean up any remaining git merge state
try {
  execSync('git add .', { cwd: '/workspace' });
  console.log('✓ Staged resolved files');
} catch (error) {
  console.log('Note: Could not stage files automatically');
}