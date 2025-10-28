#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function fixUnusedImports(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Remove duplicate React imports
    const reactImportRegex = /import\s+React\s+from\s+['"]react['"];?\s*\n/g;
    const reactImports = content.match(reactImportRegex);
    
    if (reactImports && reactImports.length > 1) {
      // Keep only the first React import
      content = content.replace(reactImportRegex, '');
      content = "import React from 'react';\n" + content;
      modified = true;
    }
    
    // Remove unused named imports from React
    const namedImportRegex = /import\s*{\s*([^}]+)\s*}\s*from\s*['"]react['"];?\s*\n/g;
    const namedImports = content.match(namedImportRegex);
    
    if (namedImports) {
      for (const importLine of namedImports) {
        const imports = importLine.match(/\{\s*([^}]+)\s*\}/)?.[1];
        if (imports) {
          const importList = imports.split(',').map(imp => imp.trim());
          const usedImports = [];
          
          for (const imp of importList) {
            if (content.includes(imp) && !content.includes(`import ${imp}`)) {
              usedImports.push(imp);
            }
          }
          
          if (usedImports.length === 0) {
            // Remove the entire import line
            content = content.replace(importLine, '');
            modified = true;
          } else if (usedImports.length < importList.length) {
            // Replace with only used imports
            const newImport = `import { ${usedImports.join(', ')} } from 'react';\n`;
            content = content.replace(importLine, newImport);
            modified = true;
          }
        }
      }
    }
    
    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed imports in: ${filePath}`);
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
  if (fixUnusedImports(file)) {
    fixedCount++;
  }
}

console.log(`Fixed imports in ${fixedCount} files`);