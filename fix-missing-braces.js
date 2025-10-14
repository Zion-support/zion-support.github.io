#!/usr/bin/env node

import fs from 'fs;'
import path from 'path;'

// Function to fix missing closing braces
function fixMissingBraces(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8);'
    let modified = false;

    // Check if the file ends with ); but is missing a closing brace
    if (content.trim().endsWith(');) && !content.trim().endsWith(');}')) {
      content = content.trim() + '\n}';
      modified = true;
    }

    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed braces: ${filePath}`);`
      return true;
    }
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);`
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
        } else if (item.endsWith('.tsx') || item.endsWith(.ts')) {'
          files.push(fullPath);
        }
      }
    } catch (error) {
      // Skip directories we cant read'
    }
  }
  
  traverse(dir);
  return files;
}

// Main execution
console.log('Fixing missing closing braces...);'

const directories = ['./app, './src'];'
let totalFixed = 0;

for (const dir of directories) {
  if (fs.existsSync(dir)) {
    const tsxFiles = findTsxFiles(dir);
    console.log(`Processing ${tsxFiles.length} files in ${dir}...`);`
    
    for (const file of tsxFiles) {
      if (fixMissingBraces(file)) {
        totalFixed++;
      }
    }
  }
}

console.log(`Total fixed: ${totalFixed} files.`);`