#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/**
 * Resolve merge conflicts by accepting the current branch changes (ours)
 */

function resolveConflicts(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Check if file has merge conflict markers
    if (!content.includes('<<<<<<<') && !content.includes('=======') && !content.includes('>>>>>>>')) {
      return false; // No conflicts
    }
    
    console.log(`Resolving conflicts in: ${filePath}`);
    
    // For TypeScript/JavaScript files, prefer our version (the syntax-fixed version)
    // Remove conflict markers and keep our version
    let resolvedContent = '';
    const lines = content.split('\n');
    let inConflict = false;
    let conflictType = '';
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      
      if (line.startsWith('<<<<<<<')) {
        inConflict = true;
        conflictType = 'ours';
        continue;
      }
      
      if (line.startsWith('=======')) {
        conflictType = 'theirs';
        continue;
      }
      
      if (line.startsWith('>>>>>>>')) {
        inConflict = false;
        conflictType = '';
        continue;
      }
      
      if (!inConflict) {
        resolvedContent += line + '\n';
      } else if (conflictType === 'ours') {
        resolvedContent += line + '\n';
      }
      // Skip lines from 'theirs' section
    }
    
    // Remove trailing newline if it was added
    resolvedContent = resolvedContent.replace(/\n$/, '');
    
    fs.writeFileSync(filePath, resolvedContent, 'utf8');
    return true;
  } catch (error) {
    console.error(`Error resolving conflicts in ${filePath}:`, error.message);
    return false;
  }
}

function walkDirectory(dir, extensions = ['.ts', '.tsx', '.js', '.jsx']) {
  const files = [];
  
  function walk(currentDir) {
    const items = fs.readdirSync(currentDir);
    
    for (const item of items) {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
        walk(fullPath);
      } else if (stat.isFile() && extensions.some(ext => item.endsWith(ext))) {
        files.push(fullPath);
      }
    }
  }
  
  walk(dir);
  return files;
}

// Main execution
const srcDir = path.join(__dirname, 'src');
const files = walkDirectory(srcDir);

console.log(`Checking ${files.length} files for merge conflicts...`);

let resolvedCount = 0;
for (const file of files) {
  if (resolveConflicts(file)) {
    resolvedCount++;
  }
}

console.log(`\nResolved conflicts in ${resolvedCount} files.`);