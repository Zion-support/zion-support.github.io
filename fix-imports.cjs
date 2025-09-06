#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const glob = require('glob');

function fixImports(content) {
  // Fix import statements with missing commas
  content = content.replace(
    /import\s*{\s*([^}]+)\s*}\s*from\s*['"][^'"]+['"];?/g,
    (match, imports) => {
      // Split by semicolons and fix each part
      const parts = imports.split(';').map(part => {
        // Remove any existing commas at the end and add proper commas
        return part.trim().replace(/,$/, '').split(',').map(item => item.trim()).join(', ');
      });
      
      // Join all parts with commas
      const fixedImports = parts.join(', ');
      
      // Reconstruct the import statement
      const fromPart = match.match(/from\s*['"][^'"]+['"];?/);
      return `import { ${fixedImports} } ${fromPart}`;
    }
  );
  
  return content;
}

function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    const originalContent = content;
    
    content = fixImports(content);
    
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed imports in: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

function main() {
  const patterns = [
    'components/**/*.tsx',
    'components/**/*.ts',
    'pages/**/*.tsx',
    'pages/**/*.ts',
    'src/**/*.tsx',
    'src/**/*.ts'
  ];
  
  let totalFixed = 0;
  
  patterns.forEach(pattern => {
    const files = glob.sync(pattern, { cwd: process.cwd() });
    files.forEach(file => {
      if (fixFile(file)) {
        totalFixed++;
      }
    });
  });
  
  console.log(`\nTotal files fixed: ${totalFixed}`);
}

if (require.main === module) {
  main();
}

module.exports = { fixFile, fixImports };