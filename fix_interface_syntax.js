#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function fixInterfaceSyntax(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Fix malformed interface properties
    const malformedPropertyRegex = /(\w+)\s*=\s*['"][^'"]*['"]\?\s*:\s*any;/g;
    const matches = content.match(malformedPropertyRegex);
    
    if (matches) {
      for (const match of matches) {
        const propertyName = match.match(/(\w+)\s*=/)?.[1];
        if (propertyName) {
          const fixedProperty = `${propertyName}?: string;`;
          content = content.replace(match, fixedProperty);
          modified = true;
        }
      }
    }
    
    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed interface syntax in: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error fixing interface in ${filePath}:`, error.message);
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
  if (fixInterfaceSyntax(file)) {
    fixedCount++;
  }
}

console.log(`Fixed interface syntax in ${fixedCount} files`);