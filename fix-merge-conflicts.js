#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

// Function to fix merge conflicts in a file
function fixMergeConflicts(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Check if file has merge conflict markers
    if (content.includes('<<<<<<< HEAD') || content.includes('=======') || content.includes('>>>>>>>')) {
      console.log(`Fixing merge conflicts in: ${filePath}`);
      
      // Split by merge conflict markers and keep the HEAD version (first part)
      const lines = content.split('\n');
      const fixedLines = [];
      let inConflict = false;
      let keepHead = false;
      
      for (let i = 0; i < lines.length; i++) {
        const line = lines[i];
        
        if (line.includes('<<<<<<< HEAD')) {
          inConflict = true;
          keepHead = true;
          continue;
        } else if (line.includes('=======')) {
          keepHead = false;
          continue;
        } else if (line.includes('>>>>>>>')) {
          inConflict = false;
          keepHead = false;
          continue;
        }
        
        if (!inConflict || keepHead) {
          fixedLines.push(line);
        }
      }
      
      const fixedContent = fixedLines.join('\n');
      fs.writeFileSync(filePath, fixedContent, 'utf8');
      console.log(`✓ Fixed merge conflicts in: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

// Function to recursively find and fix merge conflicts
function findAndFixConflicts(dir) {
  const files = fs.readdirSync(dir);
  let fixedCount = 0;
  
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      // Skip node_modules and other common directories
      if (!['node_modules', '.git', 'dist', '.next', 'out'].includes(file)) {
        fixedCount += findAndFixConflicts(filePath);
      }
    } else if (file.endsWith('.tsx') || file.endsWith('.ts') || file.endsWith('.jsx') || file.endsWith('.js')) {
      if (fixMergeConflicts(filePath)) {
        fixedCount++;
      }
    }
  }
  
  return fixedCount;
}

// Main execution
console.log('🔧 Starting merge conflict resolution...');
const fixedCount = findAndFixConflicts('./src');
console.log(`✅ Fixed merge conflicts in ${fixedCount} files`);

// Also check root level files
const rootFiles = ['App.tsx', 'page.tsx', 'layout.tsx'];
let rootFixedCount = 0;

for (const file of rootFiles) {
  const filePath = path.join('./src', file);
  if (fs.existsSync(filePath)) {
    if (fixMergeConflicts(filePath)) {
      rootFixedCount++;
    }
  }
}

console.log(`✅ Fixed merge conflicts in ${rootFixedCount} root files`);
console.log(`🎉 Total files fixed: ${fixedCount + rootFixedCount}`);