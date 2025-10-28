#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function fixPagePageNaming(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Check if file has PagePage component
    if (content.includes('const PagePage: React.FC = () => {')) {
      // Extract directory name to create proper component name
      const pathParts = filePath.split('/');
      const fileName = path.basename(filePath, '.tsx');
      const parentDir = pathParts[pathParts.length - 2];
      
      // Create proper component name
      let componentName = parentDir;
      if (parentDir === 'page') {
        // For pages in root app directory, use the parent directory
        componentName = pathParts[pathParts.length - 3];
      }
      
      // Convert kebab-case to PascalCase
      componentName = componentName
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join('') + 'Page';
      
      // Replace PagePage with proper component name
      content = content.replace(/const PagePage: React.FC = \(\) => \{/g, `const ${componentName}: React.FC = () => {`);
      modified = true;
    }
    
    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed PagePage naming in: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error fixing PagePage in ${filePath}:`, error.message);
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
  if (fixPagePageNaming(file)) {
    fixedCount++;
  }
}

console.log(`Fixed PagePage naming in ${fixedCount} files`);