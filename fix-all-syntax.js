#!/usr/bin/env node

import fs from 'fs';
import path from 'path';

// Function to fix all syntax errors in a file
function fixAllSyntaxErrors(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Fix all patterns systematically
    const patterns = [
      // Fix stray semicolons in JSX
      { from: />;/g, to: '>' },
      
      // Fix stray quotes after closing parentheses
      { from: /\);'/g, to: ');' },
      
      // Fix unterminated string literals in JSX
      { from: /'>/g, to: '>' },
      
      // Fix stray quotes in JSX text content
      { from: /<\/p>';/g, to: '</p>' },
      { from: /<\/div>';/g, to: '</div>' },
      { from: /<\/React.Fragment>';/g, to: '</React.Fragment>' },
      { from: /<\/h1>';/g, to: '</h1>' },
      { from: /<\/h2>';/g, to: '</h2>' },
      { from: /<\/h3>';/g, to: '</h3>' },
      { from: /<\/span>';/g, to: '</span>' },
      
      // Fix function names that start with numbers
      { from: /export default function 404\(\)/g, to: 'export default function NotFound()' },
      
      // Fix missing closing braces
      { from: /return null;\s*$/gm, to: 'return null;\n}' },
      
      // Fix stray quotes at end of return statements
      { from: /\s+\)';$/gm, to: '\n  );' },
      
      // Fix any remaining stray quotes in JSX
      { from: /';\s*$/gm, to: ';' },
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
console.log('Starting comprehensive syntax error fixes...');

const directories = ['./app', './src'];
let totalFixed = 0;

for (const dir of directories) {
  if (fs.existsSync(dir)) {
    const tsxFiles = findTsxFiles(dir);
    console.log(`Processing ${tsxFiles.length} files in ${dir}...`);
    
    for (const file of tsxFiles) {
      if (fixAllSyntaxErrors(file)) {
        totalFixed++;
      }
    }
  }
}

console.log(`Total fixed: ${totalFixed} files.`);