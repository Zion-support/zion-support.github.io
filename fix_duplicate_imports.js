#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Function to fix duplicate imports in a file
function fixDuplicateImports(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Check for duplicate React imports
    const reactImportPattern = /import\s+React\s+from\s+['"]react['"];?\s*\n\s*import\s+React\s*,\s*{([^}]+)}\s+from\s+['"]react['"];?/g;
    const match = content.match(reactImportPattern);
    
    if (match) {
      // Replace duplicate React imports with single import
      content = content.replace(reactImportPattern, (match, hooks) => {
        return `import React, {${hooks}} from 'react';`;
      });
      modified = true;
    }
    
    // Check for other duplicate imports
    const lines = content.split('\n');
    const importLines = lines.filter(line => line.trim().startsWith('import'));
    const uniqueImports = new Set();
    const duplicateLines = [];
    
    for (let i = 0; i < importLines.length; i++) {
      const line = importLines[i];
      const normalizedLine = line.replace(/\s+/g, ' ').trim();
      
      if (uniqueImports.has(normalizedLine)) {
        duplicateLines.push(i);
      } else {
        uniqueImports.add(normalizedLine);
      }
    }
    
    if (duplicateLines.length > 0) {
      // Remove duplicate lines
      const newLines = lines.filter((line, index) => {
        const lineIndex = importLines.indexOf(line);
        return lineIndex === -1 || !duplicateLines.includes(lineIndex);
      });
      
      content = newLines.join('\n');
      modified = true;
    }
    
    if (modified) {
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
  if (fixDuplicateImports(file)) {
    fixedCount++;
  }
}

console.log(`Fixed duplicate imports in ${fixedCount} files`);