#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Function to resolve merge conflicts by keeping the HEAD version
function resolveMergeConflicts(content) {
  const lines = content.split('\n');
  const resolvedLines = [];
  let inConflict = false;
  let conflictType = null;
  
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    
    if (line.startsWith('<<<<<<< HEAD')) {
      inConflict = true;
      conflictType = 'head';
      continue;
    } else if (line.startsWith('=======')) {
      conflictType = 'separator';
      continue;
    } else if (line.startsWith('>>>>>>> ')) {
      inConflict = false;
      conflictType = null;
      continue;
    }
    
    if (inConflict) {
      if (conflictType === 'head') {
        resolvedLines.push(line);
      }
      // Skip lines from other branches
    } else {
      resolvedLines.push(line);
    }
  }
  
  return resolvedLines.join('\n');
}

// Function to find all files with merge conflicts
function findFilesWithConflicts(dir) {
  const files = [];
  
  function scanDirectory(currentDir) {
    const items = fs.readdirSync(currentDir);
    
    for (const item of items) {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        // Skip node_modules and other common directories
        if (!['node_modules', '.git', 'dist', 'build', '.next'].includes(item)) {
          scanDirectory(fullPath);
        }
      } else if (stat.isFile()) {
        const ext = path.extname(item);
        if (['.tsx', '.ts', '.js', '.jsx'].includes(ext)) {
          const content = fs.readFileSync(fullPath, 'utf8');
          if (content.includes('<<<<<<< HEAD') || content.includes('=======') || content.includes('>>>>>>> ')) {
            files.push(fullPath);
          }
        }
      }
    }
  }
  
  scanDirectory(dir);
  return files;
}

// Main function
function main() {
  const workspaceDir = process.cwd();
  console.log('🔍 Scanning for files with merge conflicts...');
  
  const conflictedFiles = findFilesWithConflicts(workspaceDir);
  console.log(`Found ${conflictedFiles.length} files with merge conflicts`);
  
  for (const filePath of conflictedFiles) {
    try {
      console.log(`🔧 Fixing: ${filePath}`);
      const content = fs.readFileSync(filePath, 'utf8');
      const resolvedContent = resolveMergeConflicts(content);
      fs.writeFileSync(filePath, resolvedContent, 'utf8');
      console.log(`✅ Fixed: ${filePath}`);
    } catch (error) {
      console.error(`❌ Error fixing ${filePath}:`, error.message);
    }
  }
  
  console.log('🎉 Merge conflict resolution complete!');
}

main();