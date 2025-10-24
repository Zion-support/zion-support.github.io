#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

function fixFooterImports(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Fix incorrect Footer import paths
    if (content.includes("import Footer from '../components/Footer'")) {
      // Count the depth of the file from app directory
      const relativePath = path.relative('app', filePath);
      const depth = relativePath.split('/').length - 1;
      
      // Generate the correct import path
      const correctPath = '../'.repeat(depth) + 'components/Footer';
      content = content.replace("import Footer from '../components/Footer'", `import Footer from '${correctPath}'`);
      modified = true;
    }
    
    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed Footer import in: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

function findPageFiles(dir) {
  const files = [];
  
  function traverse(currentDir) {
    const items = fs.readdirSync(currentDir);
    
    for (const item of items) {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
        traverse(fullPath);
      } else if (item === 'page.tsx' && fullPath.includes('/app/')) {
        files.push(fullPath);
      }
    }
  }
  
  traverse(dir);
  return files;
}

// Main execution
const workspaceDir = process.cwd();
const pageFiles = findPageFiles(workspaceDir);

console.log(`Checking ${pageFiles.length} page files for Footer import issues...`);

let fixedCount = 0;
for (const file of pageFiles) {
  if (fixFooterImports(file)) {
    fixedCount++;
  }
}

console.log(`Fixed Footer imports in ${fixedCount} files.`);