#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

console.log('🔧 Fixing syntax errors in API files...');

const fixFile = (filePath) => {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Fix common syntax issues
    content = content.replace(/,\s*$/gm, ''); // Remove trailing commas
    content = content.replace(/,\s*}/g, '}'); // Remove trailing commas before closing braces
    content = content.replace(/,\s*]/g, ']'); // Remove trailing commas before closing brackets
    content = content.replace(/,\s*\)/g, ')'); // Remove trailing commas before closing parentheses
    
    // Fix missing semicolons
    content = content.replace(/([^;}])\n(\s*[a-zA-Z])/g, '$1;\n$2');
    
    // Fix import statements
    content = content.replace(/import\s+([^;]+),\s*;/g, 'import $1;');
    
    // Fix function declarations
    content = content.replace(/export default function\s+(\w+)\s*\([^)]*\)\s*{/g, 'export default function $1($2) {');
    
    fs.writeFileSync(filePath, content);
    console.log(`✅ Fixed: ${filePath}`);
    return true;
  } catch (error) {
    console.log(`❌ Failed to fix: ${filePath} - ${error.message}`);
    return false;
  }
};

const main = () => {
  const apiDir = 'pages/api';
  const files = [];
  
  const walkDir = (dir) => {
    const items = fs.readdirSync(dir);
    for (const item of items) {
      const fullPath = path.join(dir, item);
      const stat = fs.statSync(fullPath);
      if (stat.isDirectory()) {
        walkDir(fullPath);
      } else if (item.endsWith('.ts') || item.endsWith('.js')) {
        files.push(fullPath);
      }
    }
  };
  
  walkDir(apiDir);
  
  let fixed = 0;
  files.forEach(file => {
    if (fixFile(file)) {
      fixed++;
    }
  });
  
  console.log(`\n🎉 Fixed ${fixed}/${files.length} files`);
};

main();