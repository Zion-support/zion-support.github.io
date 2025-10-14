#!/usr/bin/env node

import fs from 'fs';
import path from 'path';

// Function to fix $1 replacements
function fixDollarOnes(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Fix $1 replacements
    if (content.includes('export default $1;')) {
      content = content.replace(/export default \$1;/g, 'export default PagePage;');
      modified = true;
    }

    // Clean up any remaining stray quotes
    content = content.replace(/';\s*'$/gm, ';');
    content = content.replace(/';\s*'$/gm, ';');

    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed: ${filePath}`);
      return true;
    }
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
  return false;
}

// Function to find all TSX/TS files
function findTsxFiles(dir) {
  const files = [];
  
  function traverse(currentDir) {
    try {
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
    } catch (error) {
      // Skip directories we can't read
    }
  }
  
  traverse(dir);
  return files;
}

// Main execution
console.log('Fixing $1 replacements...');

const directories = ['./app', './src'];
let totalFixed = 0;

for (const dir of directories) {
  if (fs.existsSync(dir)) {
    const tsxFiles = findTsxFiles(dir);
    console.log(`Processing ${tsxFiles.length} files in ${dir}...`);
    
    for (const file of tsxFiles) {
      if (fixDollarOnes(file)) {
        totalFixed++;
      }
    }
  }
}

console.log(`Total fixed: ${totalFixed} files.`);