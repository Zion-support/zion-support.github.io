#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function fixMergeConflicts(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Check if file has merge conflict markers
    if (!content.includes('')) {
      return false;
    }
    
    console.log(`Fixing merge conflicts in: ${filePath}`);
    
    // Remove merge conflict markers and keep HEAD version
    let fixed = content
      // Remove the entire conflict block and keep only HEAD version
      .replace(/\n([\s\S]*?)\n\n([\s\S]*?)\n      // Remove any remaining conflict markers
      .replace(/\n?/g, '')
      .replace(/\n?/g, '')
      .replace(/      // Clean up any double newlines
      .replace(/\n\n\n+/g, '\n\n');
    
    // Write the fixed content back
    fs.writeFileSync(filePath, fixed, 'utf8');
    return true;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

function findAndFixConflicts(dir) {
  const files = [];
  
  function walkDir(currentPath) {
    const items = fs.readdirSync(currentPath);
    
    for (const item of items) {
      const fullPath = path.join(currentPath, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        // Skip node_modules and other irrelevant directories
        if (!['node_modules', '.git', 'dist', 'build', '.next'].includes(item)) {
          walkDir(fullPath);
        }
      } else if (stat.isFile()) {
        const ext = path.extname(item);
        if (['.tsx', '.ts', '.js', '.jsx'].includes(ext)) {
          files.push(fullPath);
        }
      }
    }
  }
  
  walkDir(dir);
  
  let fixedCount = 0;
  for (const file of files) {
    if (fixMergeConflicts(file)) {
      fixedCount++;
    }
  }
  
  console.log(`Fixed merge conflicts in ${fixedCount} files`);
  return fixedCount;
}

// Run the fix
const workspaceDir = process.argv[2] || '/workspace';
console.log(`Fixing merge conflicts in: ${workspaceDir}`);
const fixed = findAndFixConflicts(workspaceDir);
process.exit(fixed > 0 ? 0 : 1);