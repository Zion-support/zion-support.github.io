#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

function fixSpecificFiles() {
  const filesToFix = [
    '/workspace/pages/[slug].tsx',
    '/workspace/pages/_app.tsx',
    '/workspace/pages/_document.tsx',
    '/workspace/pages/about.tsx',
    '/workspace/pages/accessibility-scanner.tsx'
  ];
  
  filesToFix.forEach(filePath => {
    if (fs.existsSync(filePath)) {
      console.log(`Fixing ${filePath}`);
      let content = fs.readFileSync(filePath, 'utf8');
      
      // Fix import statements with trailing commas and semicolons
      content = content.replace(/import\s+([^;]+),\s*;$/gm, 'import $1;');
      
      // Fix JSX with semicolons
      content = content.replace(/return\s*\(\s*;/gm, 'return (');
      content = content.replace(/<\w+[^>]*>\s*;/gm, (match) => match.replace(';', ''));
      content = content.replace(/<\/\w+>\s*;/gm, (match) => match.replace(';', ''));
      
      // Fix function declarations with semicolons
      content = content.replace(/function\s+\w+[^{]*\{\s*;/gm, (match) => match.replace(';', ''));
      
      // Fix export statements
      content = content.replace(/export\s+default\s+function[^{]*\{\s*;/gm, (match) => match.replace(';', ''));
      
      fs.writeFileSync(filePath, content);
      console.log(`✅ Fixed ${filePath}`);
    }
  });
}

fixSpecificFiles();
console.log('🎉 Fixed specific syntax errors!');