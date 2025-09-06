const fs = require('fs');
const path = require('path');

console.log('🔧 Fixing final syntax errors...');

let fixedFiles = 0;
let totalFiles = 0;

function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let originalContent = content;
    
    // Fix missing React import for motion
    if (content.includes('<motion.') && !content.includes("import { motion }")) {
      content = content.replace(
        /import React[^;]*;/,
        (match) => match + '\nimport { motion } from \'framer-motion\';'
      );
    }
    
    // Fix malformed JSX fragments and return statements
    content = content.replace(/return\s*\(\s*<>\s*\{/g, 'return (\n    <>\n      {');
    content = content.replace(/return\s*\(\s*<>\s*<div/g, 'return (\n    <>\n      <div');
    
    // Fix semicolon issues in JSX
    content = content.replace(/;\s*<\/div>\s*\)\s*;/g, '</div>);');
    content = content.replace(/;\s*<\/>\s*\)\s*;/g, '</>);');
    
    // Fix malformed object properties
    content = content.replace(/(\w+):\s*(\w+)\s*</g, '$1: $2 <');
    
    // Fix missing semicolons in object literals
    content = content.replace(/(\w+)\s*}\s*$/gm, '$1\n};');
    
    // Fix malformed JSX attributes
    content = content.replace(/key=\{([^}]+)\};\s*className=/g, 'key={$1}\n          className=');
    
    // Fix missing closing tags
    content = content.replace(/<(\w+)([^>]*?)(?<!\/)>\s*$/gm, '<$1$2></$1>');
    
    // Fix malformed function calls
    content = content.replace(/\(\s*<>\s*\{/g, '(\n    <>\n      {');
    
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content, 'utf8');
      return true;
    }
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
  }
  return false;
}

function processDirectory(dir) {
  const items = fs.readdirSync(dir);
  
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
      processDirectory(fullPath);
    } else if (item.endsWith('.tsx') || item.endsWith('.ts') || item.endsWith('.jsx') || item.endsWith('.js')) {
      totalFiles++;
      if (fixFile(fullPath)) {
        fixedFiles++;
        console.log(`✅ Fixed: ${fullPath}`);
      }
    }
  }
}

// Process components directory
processDirectory('/workspace/components');

console.log(`\n🎉 Fixed ${fixedFiles} out of ${totalFiles} files`);