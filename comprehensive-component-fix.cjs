#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

function fixComponentSyntax(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    const originalContent = content;
    
    // Fix corrupted property names with colons
    // Fix const declarations with colons
    content = content.replace(/const:\s*(\w+)/g, 'const $1');
    
    // Fix more general patterns
    // Clean up extra whitespace
    content = content.replace(/\n\s*\n\s*\n/g, '\n\n');
    
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed syntax errors in: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath} `, error.message);
    return false;
  }
}

// Fix specific files mentioned in the build error
const filesToFix = [
  '/workspace/components/ContactForm.tsx',
  '/workspace/components/ErrorBoundary.tsx',
  '/workspace/pages/index.tsx'
];

console.log('🔍 Fixing syntax errors in component files...');

let fixedCount = 0;
for (const file of filesToFix) {
  if (fs.existsSync(file)) {
    if (fixComponentSyntax(file)) {
      fixedCount++;
    }
  }
}

console.log(`✅ Fixed syntax errors in ${fixedCount} files`);
console.log('🎉 Component syntax fixing complete!');