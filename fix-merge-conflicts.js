#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

// Function to fix merge conflicts in a file
function fixMergeConflicts(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Remove merge conflict markers and keep the HEAD version
    const lines = content.split('\n');
    const newLines = [];
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
          newLines.push(line);
        }
        // Skip lines from other branches
      } else {
        newLines.push(line);
      }
    }
    
    const newContent = newLines.join('\n');
    
    if (content !== newContent) {
      fs.writeFileSync(filePath, newContent, 'utf8');
      console.log(`Fixed merge conflicts in: ${filePath}`);
      modified = true;
    }
    
    return modified;
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
      
      if (stat.isDirectory()) {
        // Skip node_modules and other irrelevant directories
        if (!['node_modules', '.git', 'dist', '.next', 'out'].includes(item)) {
          walkDir(fullPath);
        }
      } else if (stat.isFile()) {
        const ext = path.extname(item);
        if (['.tsx', '.ts', '.js', '.jsx', '.json'].includes(ext)) {
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
  }
  
  walkDir(dir);
  return files;
}

// Main function
function main() {
  console.log('🔍 Searching for files with merge conflicts...');
  
  const conflictedFiles = findFilesWithConflicts('.');
  console.log(`Found ${conflictedFiles.length} files with merge conflicts`);
  
  let fixedCount = 0;
  
  for (const file of conflictedFiles) {
    if (fixMergeConflicts(file)) {
      fixedCount++;
    }
  }
  
  console.log(`✅ Fixed merge conflicts in ${fixedCount} files`);
  
  // Also fix any remaining syntax issues
  console.log('🔧 Running additional cleanup...');
  
  // Fix common syntax issues
  const additionalFiles = [
    './app/page.tsx',
    './app/5g-solutions/page.tsx',
    './app/ai-automation-platform/page.tsx',
    './app/ai-services/page.tsx',
    './app/blog/page.tsx',
    './app/components/ErrorBoundary.tsx',
    './app/components/Footer.tsx',
    './app/components/Navigation.tsx',
    './app/components/AccessibilityEnhancer.tsx',
    './app/contact/page.tsx',
    './app/demo/page.tsx',
    './app/it-solutions/page.tsx',
    './app/micro-saas-solutions/page.tsx',
    './app/pages/HomePage.tsx',
    './app/services/page.tsx',
    './app/support/page.tsx'
  ];
  
  for (const file of additionalFiles) {
    if (fs.existsSync(file)) {
      fixMergeConflicts(file);
    }
  }
  
  console.log('🎉 Merge conflict cleanup completed!');
}

if (import.meta.url === `file://${process.argv[1]}`) {
  main();
}

export { fixMergeConflicts, findFilesWithConflicts };