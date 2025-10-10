const fs = require('fs');
const path = require('path');

// Function to fix syntax errors in a file
function fixSyntaxErrors(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Fix common syntax errors
    content = content
      // Remove semicolons after JSX elements
      .replace(/;\s*$/gm, '')
      // Fix merge conflict markers
      .replace(/^<<<<<<< HEAD.*$/gm, '')
      .replace(/^=======.*$/gm, '')
      .replace(/^>>>>>>> .*$/gm, '')
      // Fix malformed JSX
      .replace(/;\s*{/g, ' {')
      .replace(/;\s*}/g, ' }')
      .replace(/;\s*\(/g, ' (')
      .replace(/;\s*\)/g, ' )')
      // Fix import statements
      .replace(/import\s+React\s+from\s+'react';\s*import\s+React/g, 'import React')
      // Clean up extra semicolons
      .replace(/;;+/g, ';')
      .replace(/;\s*;/g, ';')
      // Fix function declarations
      .replace(/const\s+(\w+):\s*React\.FC\s*=\s*\(\)\s*=>\s*{;/g, 'const $1: React.FC = () => {')
      // Fix object properties
      .replace(/{\s*;/g, '{')
      .replace(/;\s*}/g, '}')
      // Fix array elements
      .replace(/\[\s*;/g, '[')
      .replace(/;\s*\]/g, ']')
      // Clean up multiple newlines
      .replace(/\n\s*\n\s*\n/g, '\n\n');
    
    fs.writeFileSync(filePath, content);
    console.log(`Fixed: ${filePath}`);
    return true;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

// Function to find and fix all problematic files
function fixAllFiles() {
  const appDir = path.join(__dirname, 'app');
  const files = [];
  
  function findFiles(dir) {
    const items = fs.readdirSync(dir);
    for (const item of items) {
      const fullPath = path.join(dir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        findFiles(fullPath);
      } else if (item.endsWith('.tsx') && !item.includes('App.tsx')) {
        files.push(fullPath);
      }
    }
  }
  
  findFiles(appDir);
  
  let fixedCount = 0;
  for (const file of files) {
    if (fixSyntaxErrors(file)) {
      fixedCount++;
    }
  }
  
  console.log(`Fixed ${fixedCount} out of ${files.length} files`);
}

// Run the fix
fixAllFiles();