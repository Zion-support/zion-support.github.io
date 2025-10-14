#!/usr/bin/env node

import fs from 'fs';
import path from 'path';

// Function to fix all remaining syntax issues
function fixFinalSyntax(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Fix all patterns
    const patterns = [
      // Fix stray quotes at end of export statements
      { from: /export default \w+;'$/gm, to: (match) => match.replace("';", ';') },
      { from: /export default \w+;'\s*'$/gm, to: (match) => match.replace(/;'.*$/, ';') },
      
      // Fix stray quotes in array declarations
      { from: /const \w+ = \['$/gm, to: (match) => match.replace("['", '[') },
      
      // Fix any remaining unterminated strings
      { from: /'[^']*$/gm, to: (match) => {
        if (match.includes('export') || match.includes('const') || match.includes('=')) {
          return match.replace(/'$/, '');
        }
        return match;
      }},
      
      // Fix any remaining stray quotes
      { from: /';\s*'$/gm, to: ';' },
      { from: /';\s*'$/gm, to: ';' },
      
      // Clean up extra newlines and empty lines
      { from: /\n\s*\n\s*\n/g, to: '\n\n' },
    ];

    for (const pattern of patterns) {
      const newContent = content.replace(pattern.from, pattern.to);
      if (newContent !== content) {
        content = newContent;
        modified = true;
      }
    }

    // Clean up the file
    content = content.trim() + '\n';

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
console.log('Fixing final syntax issues...');

const directories = ['./app', './src'];
let totalFixed = 0;

for (const dir of directories) {
  if (fs.existsSync(dir)) {
    const tsxFiles = findTsxFiles(dir);
    console.log(`Processing ${tsxFiles.length} files in ${dir}...`);
    
    for (const file of tsxFiles) {
      if (fixFinalSyntax(file)) {
        totalFixed++;
      }
    }
  }
}

console.log(`Total fixed: ${totalFixed} files.`);