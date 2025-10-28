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
    
    // Check if file has commented out Navigation or Footer
    if (content.includes('{/* <Navigation /> */}') || content.includes('{/* <Footer /> */}')) {
      // Remove Navigation import if it's commented out
      if (content.includes('{/* <Navigation /> */}') && content.includes("import Navigation from")) {
        content = content.replace(/import Navigation from ['"][^'"]*['"];\n?/g, '');
        modified = true;
      }
      
      // Remove Footer import if it's commented out
      if (content.includes('{/* <Footer /> */}') && content.includes("import Footer from")) {
        content = content.replace(/import Footer from ['"][^'"]*['"];\n?/g, '');
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

console.log(`Fixed unused imports in ${fixedCount} files`);