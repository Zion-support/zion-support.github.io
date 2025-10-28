#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Function to fix unused imports in a file
function fixUnusedImports(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Check if file has React imports but doesn't use them properly
    const hasReactImport = content.includes("import React");
    const hasUnusedImports = content.includes("import {") && !content.includes("React.");
    
    if (hasUnusedImports) {
      // Replace specific unused import patterns
      content = content.replace(/import\s*{\s*Component\s*,\s*ErrorInfo\s*,\s*ReactNode\s*}\s*from\s*['"]react['"];?\s*/g, 'import React from \'react\';\n');
      content = content.replace(/import\s*{\s*Component\s*,\s*ErrorInfo\s*}\s*from\s*['"]react['"];?\s*/g, 'import React from \'react\';\n');
      content = content.replace(/import\s*{\s*ReactNode\s*}\s*from\s*['"]react['"];?\s*/g, 'import React from \'react\';\n');
      
      // Check if we made changes
      const newContent = fs.readFileSync(filePath, 'utf8');
      if (newContent !== content) {
        modified = true;
      }
    }
    
    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed unused imports in: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error fixing imports in ${filePath}:`, error.message);
    return false;
  }
}

// Function to find all TypeScript files
function findTSFiles(dir) {
  const files = [];
  
  function traverse(currentDir) {
    const items = fs.readdirSync(currentDir);
    
    for (const item of items) {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
        traverse(fullPath);
      } else if (stat.isFile() && (item.endsWith('.tsx') || item.endsWith('.ts'))) {
        files.push(fullPath);
      }
    }
  }
  
  traverse(dir);
  return files;
}

// Main execution
const workspaceDir = '/workspace';
const tsFiles = findTSFiles(workspaceDir);

console.log(`Found ${tsFiles.length} TypeScript files`);

let fixedCount = 0;
for (const file of tsFiles) {
  if (fixUnusedImports(file)) {
    fixedCount++;
  }
}

console.log(`Fixed unused imports in ${fixedCount} files`);