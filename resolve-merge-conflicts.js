#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function resolveMergeConflicts(filePath) {
  const fullPath = path.join(__dirname, filePath);
  
  if (!fs.existsSync(fullPath)) {
    console.log(`File not found: ${filePath}`);
    return false;
  }

  let content = fs.readFileSync(fullPath, 'utf8');
  let modified = false;

  // Remove merge conflict markers and keep the HEAD version (main branch)
  const originalContent = content;
  
  // Remove conflict markers and keep HEAD version
  content = content
    .replace(/<<<<<<< HEAD\n([\s\S]*?)=======\n([\s\S]*?)    .replace(/<<<<<<< HEAD\n([\s\S]*?)=======\n([\s\S]*?)    .replace(/<<<<<<< HEAD\n([\s\S]*?)=======\n([\s\S]*?)    .replace(/=======\n([\s\S]*?)    .replace(/=======\n([\s\S]*?)    .replace(/<<<<<<< HEAD\n/g, '')
    .replace(/=======\n/g, '')
    .replace(/    .replace(/
  // Clean up any remaining conflict markers
  content = content
    .replace(/<<<<<<< HEAD[\s\S]*?=======[\s\S]*?    .replace(/<<<<<<< HEAD[\s\S]*?=======[\s\S]*?    .replace(/<<<<<<< HEAD[\s\S]*?=======[\s\S]*?
  // Clean up extra whitespace
  content = content
    .replace(/\n\s*\n\s*\n/g, '\n\n')
    .replace(/^\s*\n/g, '\n')
    .replace(/\n\s*$/g, '\n');

  if (content !== originalContent) {
    fs.writeFileSync(fullPath, content);
    console.log(`Resolved conflicts in: ${filePath}`);
    modified = true;
  }

  return modified;
}

// Find all files with merge conflicts
function findConflictedFiles(dir) {
  const conflictedFiles = [];
  
  function scanDirectory(currentDir) {
    const items = fs.readdirSync(currentDir);
    
    for (const item of items) {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
        scanDirectory(fullPath);
      } else if (stat.isFile() && (item.endsWith('.tsx') || item.endsWith('.ts') || item.endsWith('.js'))) {
        const content = fs.readFileSync(fullPath, 'utf8');
        if (content.includes('<<<<<<< HEAD') || content.includes('=======') || content.includes('>>>>>>>')) {
          conflictedFiles.push(path.relative(__dirname, fullPath));
        }
      }
    }
  }
  
  scanDirectory(__dirname);
  return conflictedFiles;
}

// Find and resolve all conflicted files
const conflictedFiles = findConflictedFiles(__dirname);
console.log(`Found ${conflictedFiles.length} files with merge conflicts`);

let resolvedCount = 0;
conflictedFiles.forEach(file => {
  if (resolveMergeConflicts(file)) {
    resolvedCount++;
  }
});

console.log(`\nResolved conflicts in ${resolvedCount} files`);