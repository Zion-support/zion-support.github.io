#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function cleanMergeConflicts(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Check if file has merge conflicts
    if (!content.includes('<<<<<<< HEAD')) {
      return false;
    }

    console.log(`Cleaning merge conflicts in: ${filePath}`);
    
    // Remove merge conflict markers and keep the HEAD version
    content = content
      .replace(/<<<<<<< HEAD\n/g, '')
      .replace(/=======\n[\s\S]*?>>>>>>> [^\n]+\n/g, '')
      .replace(/=======\n[\s\S]*?>>>>>>> [^\n]+/g, '');
    
    // Clean up any remaining conflict markers
    content = content
      .replace(/<<<<<<< HEAD/g, '')
      .replace(/=======/g, '')
      .replace(/>>>>>>> [^\n]+/g, '');
    
    // Clean up extra whitespace
    content = content
      .replace(/\n\s*\n\s*\n/g, '\n\n')
      .replace(/^\s*\n/g, '')
      .trim();
    
    fs.writeFileSync(filePath, content);
    return true;
  } catch (error) {
    console.error(`Error cleaning ${filePath}:`, error.message);
    return false;
  }
}

function findTsxFiles(dir) {
  const files = [];
  
  function traverse(currentDir) {
    const items = fs.readdirSync(currentDir);
    
    for (const item of items) {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        traverse(fullPath);
      } else if (item.endsWith('.tsx') || item.endsWith('.ts')) {
        files.push(fullPath);
      }
    }
  }
  
  traverse(dir);
  return files;
}

// Clean all TypeScript/React files
const appDir = path.join(__dirname, 'app');
const files = findTsxFiles(appDir);

console.log(`Found ${files.length} TypeScript/React files to check`);

let cleanedCount = 0;
for (const file of files) {
  if (cleanMergeConflicts(file)) {
    cleanedCount++;
  }
}

console.log(`Cleaned merge conflicts in ${cleanedCount} files`);