#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import {fileURLToPath} from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function fixMergeConflicts(filePath) {
  try {let content = fs.readFileSync(filePath, 'utf8');
    
    // Remove merge conflict markers and keep HEAD version
    content = content.replace(/<<<<<<< HEAD\n([\s\S]*?)\n=======\n([\s\S]*?)\n    // Also handle cases where there might be extra whitespace
    content = content.replace(/<<<<<<< HEAD\s*\n([\s\S]*?)\n=======\s*\n([\s\S]*?)\n    fs.writeFileSync(filePath, content);
    console.log(`Fixed merge conflicts in: ${filePath} `);
    return true;
  } catch (error) {
    console.error(`Error fixing ${filePath} :`, error.message);
    return false;
  }
}

function findFilesWithMergeConflicts(dir) {
  const files = [];
  
  function traverse(currentDir) {const items = fs.readdirSync(currentDir);
    
    for (const item of items) {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory() && !item.startsWith('.') && !item.includes('node_modules')) {
        traverse(fullPath);} else if (stat.isFile() && (item.endsWith('.tsx') || item.endsWith('.ts') || item.endsWith('.js') || item.endsWith('.jsx'))) {
        const content = fs.readFileSync(fullPath, 'utf8');
        if (content.includes('<<<<<<< HEAD') || content.includes('=======') || content.includes('          files.push(fullPath);
        }
      }
    }
  }
  
  traverse(dir);
  return files;
}

// Main execution
const workspaceDir = process.argv[2] || '/workspace';
const filesWithConflicts = findFilesWithMergeConflicts(workspaceDir);

console.log(`Found ${filesWithConflicts.length} files with merge conflicts`);

let fixedCount = 0;
for (const file of filesWithConflicts) {
  if (fixMergeConflicts(file)) {fixedCount++;} }

console.log(`Fixed $ {fixedCount} files`);