#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

// Function to fix common syntax errors in TSX files
function fixSyntaxErrors(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Fix stray semicolons in JSX
    if (content.includes('>;')) {
      content = content.replace(/>;/g, '>');
      modified = true;
    }

    // Fix stray quotes after closing parentheses
    if (content.includes(");'")) {
      content = content.replace(/\);'/g, ');');
      modified = true;
    }

    // Fix unterminated string literals in JSX
    if (content.includes("'>")) {
      content = content.replace(/'>/g, '>');
      modified = true;
    }

    // Fix stray quotes in JSX text content
    if (content.includes("</p>';")) {
      content = content.replace(/<\/p>';/g, '</p>');
      modified = true;
    }

    // Fix stray quotes after closing divs
    if (content.includes("</div>';")) {
      content = content.replace(/<\/div>';/g, '</div>');
      modified = true;
    }

    // Fix stray quotes after closing fragments
    if (content.includes("</React.Fragment>';")) {
      content = content.replace(/<\/React.Fragment>';/g, '</React.Fragment>');
      modified = true;
    }

    // Fix function names that start with numbers
    if (content.includes('export default function 404()')) {
      content = content.replace('export default function 404()', 'export default function NotFound()');
      modified = true;
    }

    // Fix missing closing braces
    if (content.includes('return null;') && !content.includes('}')) {
      content = content.replace('return null;', 'return null;\n}');
      modified = true;
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

// Function to find all TSX files
function findTsxFiles(dir) {
  const files = [];
  
  function traverse(currentDir) {
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
  }
  
  traverse(dir);
  return files;
}

// Main execution
console.log('Starting syntax error fixes...');

const tsxFiles = findTsxFiles('./app');
let fixedCount = 0;

for (const file of tsxFiles) {
  if (fixSyntaxErrors(file)) {
    fixedCount++;
  }
}

console.log(`Fixed ${fixedCount} files.`);

// Also fix files in src directory
const srcFiles = findTsxFiles('./src');
for (const file of srcFiles) {
  if (fixSyntaxErrors(file)) {
    fixedCount++;
  }
}

console.log(`Total fixed: ${fixedCount} files.`);