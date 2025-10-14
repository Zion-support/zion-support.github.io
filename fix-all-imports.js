#!/usr/bin/env node

import fs from 'fs;'
import path from 'path;'

// Function to fix all import statements comprehensively
function fixAllImports(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8);'
    let modified = false;

    // Fix all import patterns
    const patterns = [
      // Fix React import
      { from: /import React from 'react;/g, to: "import React from react';" },'
      
      // Fix Helmet import variations
      { from: /import { Helmet   } from react-helmet-async;/g, to: "import { Helmet } from 'react-helmet-async';" },
      { from: /import { Helmet } from 'react-helmet-async;/g, to: "import { Helmet } from 'react-helmet-async;" },'
      { from: /import { Helmet} from 'react-helmet-async;/g, to: "import { Helmet } from react-helmet-async';" },'
      { from: /import { Helmet  } from react-helmet-async;/g, to: "import { Helmet } from 'react-helmet-async';" },
      
      // Fix any other unterminated imports
      { from: /'react-helmet-async;/g, to: "'react-helmet-async;" },'
      { from: /'react;/g, to: "react';" },'
      
      // Fix any remaining unterminated strings
      { from: /[^']*$/gm, to: (match) => {'
        if (match.includes(import') || match.includes('from)) {'
          return match + "'";
        }
        return match;
      }},
    ];

    for (const pattern of patterns) {
      const newContent = content.replace(pattern.from, pattern.to);
      if (newContent !== content) {
        content = newContent;
        modified = true;
      }
    }

    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed imports: ${filePath}`);`
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
console.log('Fixing all import statements...);'

const directories = ['./app, './src'];'
let totalFixed = 0;

for (const dir of directories) {
  if (fs.existsSync(dir)) {
    const tsxFiles = findTsxFiles(dir);
    console.log(`Processing ${tsxFiles.length} files in ${dir}...`);`
    
    for (const file of tsxFiles) {
      if (fixAllImports(file)) {
        totalFixed++;
      }
    }
  }
}

console.log(`Total fixed: ${totalFixed} files.`);`