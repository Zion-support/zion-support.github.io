#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Function to fix PagePage naming issues
function fixPagePageNaming(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Check if file has PagePage component
    if (content.includes('const PagePage: React.FC')) {
      // Extract the directory name to create proper component name
      const pathParts = filePath.split('/');
      const fileName = pathParts[pathParts.length - 1];
      const directoryName = pathParts[pathParts.length - 2];
      
      // Create proper component name based on directory or file
      let componentName;
      if (fileName === 'page.tsx') {
        // Use directory name for page components
        componentName = directoryName
          .split('-')
          .map(word => word.charAt(0).toUpperCase() + word.slice(1))
          .join('') + 'Page';
      } else {
        // Use file name for other components
        componentName = fileName
          .replace('.tsx', '')
          .split('-')
          .map(word => word.charAt(0).toUpperCase() + word.slice(1))
          .join('');
      }
      
      // Replace PagePage with proper component name
      content = content.replace(/const PagePage: React.FC/g, `const ${componentName}: React.FC`);
      content = content.replace(/export default PagePage/g, `export default ${componentName}`);
      
      modified = true;
    }
    
    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed PagePage naming in: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error fixing PagePage naming in ${filePath}:`, error.message);
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
  if (fixPagePageNaming(file)) {
    fixedCount++;
  }
}

console.log(`Fixed PagePage naming in ${fixedCount} files`);