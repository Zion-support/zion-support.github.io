#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Fix syntax errors caused by the previous script
function fixSyntaxErrors(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Fix broken variable declarations
    const patterns = [
      // Fix broken const declarations
      {
        regex: /\/\/\s*const\s+(_[a-zA-Z_][a-zA-Z0-9_]*)\s*=\s*\/\/\s*Unused\s*\[/g,
        replacement: 'const $1 = ['
      },
      
      // Fix broken let/var declarations
      {
        regex: /\/\/\s*(let|var)\s+(_[a-zA-Z_][a-zA-Z0-9_]*)\s*=\s*\/\/\s*Unused\s*\[/g,
        replacement: '$1 $2 = ['
      },
      
      // Fix broken function declarations
      {
        regex: /\/\/\s*(const|let|var)\s+([A-Z][a-zA-Z0-9_]*)\s*=\s*\([^)]*\)\s*=>\s*\{\s*\/\/\s*Unused/g,
        replacement: '$1 $2 = () => {'
      }
    ];
    
    patterns.forEach(pattern => {
      const newContent = content.replace(pattern.regex, pattern.replacement);
      if (newContent !== content) {
        content = newContent;
        modified = true;
      }
    });
    
    if (modified) {
      fs.writeFileSync(filePath, content);
      console.log(`Fixed syntax errors in: ${filePath}`);
    }
    
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
}

// Get all TypeScript/JavaScript files in src directory
function getAllFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir);
  
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      getAllFiles(filePath, fileList);
    } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
      fileList.push(filePath);
    }
  });
  
  return fileList;
}

// Main execution
const srcDir = path.join(__dirname, 'src');
const files = getAllFiles(srcDir);

console.log(`Found ${files.length} files to check for syntax errors...`);

files.forEach(file => {
  fixSyntaxErrors(file);
});

console.log('Done fixing syntax errors!');