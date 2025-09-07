#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('🔧 Fixing import syntax errors...');

// Find all TypeScript and JavaScript files
const findFiles = (dir, extensions = ['.ts', '.tsx', '.js', '.jsx']) => {
  let files = [];
  const items = fs.readdirSync(dir);
  
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
      files = files.concat(findFiles(fullPath, extensions));
    } else if (stat.isFile() && extensions.some(ext => item.endsWith(ext))) {
      files.push(fullPath);
    }
  }
  
  return files;
};

// Fix import syntax in a file
const fixImportSyntax = (filePath) => {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Fix import statements with commas instead of semicolons
    const importRegex = /^import\s+.*?,\s*$/gm;
    const matches = content.match(importRegex);
    
    if (matches) {
      content = content.replace(importRegex, (match) => {
        // Replace trailing comma with semicolon
        return match.replace(/,\s*$/, ';');
      });
      modified = true;
    }
    
    // Fix other common syntax issues
    const fixes = [
      // Fix object property syntax errors like "prop: e: value"
      { pattern: /(\w+):\s*e:\s*/g, replacement: '$1: ' },
      // Fix function parameter syntax errors
      { pattern: /(\w+):\s*n:\s*/g, replacement: '$1: ' },
      // Fix array syntax errors
      { pattern: /(\w+):\s*s:\s*/g, replacement: '$1: ' },
      // Fix other common syntax errors
      { pattern: /(\w+):\s*t:\s*/g, replacement: '$1: ' },
      { pattern: /(\w+):\s*d:\s*/g, replacement: '$1: ' },
      { pattern: /(\w+):\s*p:\s*/g, replacement: '$1: ' },
      { pattern: /(\w+):\s*y:\s*/g, replacement: '$1: ' },
      { pattern: /(\w+):\s*h:\s*/g, replacement: '$1: ' },
      { pattern: /(\w+):\s*m:\s*/g, replacement: '$1: ' },
      { pattern: /(\w+):\s*r:\s*/g, replacement: '$1: ' },
    ];
    
    fixes.forEach(({ pattern, replacement }) => {
      if (pattern.test(content)) {
        content = content.replace(pattern, replacement);
        modified = true;
      }
    });
    
    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`✅ Fixed: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`❌ Error fixing ${filePath}:`, error.message);
    return false;
  }
};

// Main execution
const main = () => {
  const files = findFiles(process.cwd());
  let fixedCount = 0;
  
  console.log(`Found ${files.length} files to check...`);
  
  for (const file of files) {
    if (fixImportSyntax(file)) {
      fixedCount++;
    }
  }
  
  console.log(`\n🎉 Fixed ${fixedCount} files`);
  
  // Try to build after fixing
  console.log('\n🏗️ Attempting build...');
  try {
    execSync('npm run build', { stdio: 'inherit' });
    console.log('✅ Build successful!');
  } catch (error) {
    console.log('❌ Build still has issues, but syntax fixes applied');
  }
};

main();