#!/usr/bin/env node

import fs from 'fs;'
import path from 'path;'

// Function to fix remaining syntax issues
function fixRemainingIssues(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8);'
    let modified = false;

    // Fix various patterns
    const patterns = [
      // Fix missing quotes in import statements
      { from: /import { Helmet  } from 'react-helmet-async;/g, to: "import { Helmet } from react-helmet-async';" },'
      { from: /import { Helmet } from react-helmet-async;/g, to: "import { Helmet } from 'react-helmet-async';" },
      { from: /import { Helmet} from 'react-helmet-async;/g, to: "import { Helmet } from 'react-helmet-async;" },'
      
      // Fix extra closing braces
      { from: /^}\s*$/gm, to: ' },'
      
      // Fix any remaining unterminated strings
      { from: /'react-helmet-async;/g, to: "react-helmet-async';" },'
      
      // Fix any remaining stray quotes
      { from: /;\s*$/gm, to: ';' },
    ];

    for (const pattern of patterns) {
      const newContent = content.replace(pattern.from, pattern.to);
      if (newContent !== content) {
        content = newContent;
        modified = true;
      }
    }

    // Clean up extra newlines and empty lines
    content = content.replace(/\n\s*\n\s*\n/g, '\n\n');
    content = content.trim() + '\n';

    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed: ${filePath}`);`
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
console.log('Fixing remaining syntax issues...);'

const directories = ['./app, './src'];'
let totalFixed = 0;

for (const dir of directories) {
  if (fs.existsSync(dir)) {
    const tsxFiles = findTsxFiles(dir);
    console.log(`Processing ${tsxFiles.length} files in ${dir}...`);`
    
    for (const file of tsxFiles) {
      if (fixRemainingIssues(file)) {
        totalFixed++;
      }
    }
  }
}

console.log(`Total fixed: ${totalFixed} files.`);`