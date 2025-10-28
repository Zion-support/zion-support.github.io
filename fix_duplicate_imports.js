#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function fixDuplicateImports(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Fix duplicate React imports
    const lines = content.split('\n');
    const newLines = [];
    let hasReactImport = false;
    let reactImportLine = '';
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      
      if (line.includes("import React") && line.includes("from 'react'")) {
        if (!hasReactImport) {
          hasReactImport = true;
          reactImportLine = line;
          newLines.push(line);
        } else {
          // Skip duplicate React import
          modified = true;
        }
      } else {
        newLines.push(line);
      }
    }
    
    if (modified) {
      content = newLines.join('\n');
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed duplicate imports in: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error fixing imports in ${filePath}:`, error.message);
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
      
      if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
        traverse(fullPath);
      } else if (stat.isFile() && item.endsWith('.tsx')) {
        files.push(fullPath);
      }
    }
  }
  
  traverse(dir);
  return files;
}

// Main execution
const workspaceDir = '/workspace/app';
const tsxFiles = findTsxFiles(workspaceDir);

console.log(`Found ${tsxFiles.length} TSX files to check`);

let fixedCount = 0;
for (const file of tsxFiles) {
  if (fixDuplicateImports(file)) {
    fixedCount++;
  }
}

console.log(`Fixed duplicate imports in ${fixedCount} files`);