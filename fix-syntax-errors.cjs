#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

function fixSyntaxErrors(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let originalContent = content;
    
    // Fix common syntax errors after merge conflict resolution
    
    // Fix missing closing tags
    content = content.replace(/<div([^>]*)>\s*$/gm, '<div$1></div>');
    content = content.replace(/<main([^>]*)>\s*$/gm, '<main$1></main>');
    content = content.replace(/<section([^>]*)>\s*$/gm, '<section$1></section>');
    content = content.replace(/<button([^>]*)>\s*$/gm, '<button$1></button>');
    content = content.replace(/<h1([^>]*)>\s*$/gm, '<h1$1></h1>');
    content = content.replace(/<h2([^>]*)>\s*$/gm, '<h2$1></h2>');
    content = content.replace(/<h3([^>]*)>\s*$/gm, '<h3$1></h3>');
    
    // Fix JSX expressions that need parent elements
    content = content.replace(/(\s*)<div([^>]*)>\s*<div([^>]*)>\s*$/gm, '$1<div$2><div$3></div></div>');
    
    // Fix missing commas in arrays/objects
    content = content.replace(/(\w+)\s*\]/g, '$1]');
    content = content.replace(/(\w+)\s*\}/g, '$1}');
    
    // Fix unterminated strings
    content = content.replace(/"([^"]*?)\s*$/gm, '"$1"');
    content = content.replace(/'([^']*?)\s*$/gm, "'$1'");
    
    // Fix missing semicolons
    content = content.replace(/(\w+)\s*$/gm, '$1;');
    
    // Clean up extra whitespace
    content = content.replace(/\n\s*\n\s*\n/g, '\n\n');
    content = content.replace(/^\s*\n/gm, '');
    
    // Only write if content changed
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content);
      console.log(`Fixed syntax errors in: ${filePath}`);
      return true;
    }
    return false;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

function findAndFixSyntaxErrors(dir) {
  const files = [];
  
  function walkDir(currentPath) {
    const items = fs.readdirSync(currentPath);
    
    for (const item of items) {
      const fullPath = path.join(currentPath, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
        walkDir(fullPath);
      } else if (stat.isFile() && /\.(tsx?|jsx?)$/.test(item)) {
        files.push(fullPath);
      }
    }
  }
  
  walkDir(dir);
  
  let fixedCount = 0;
  for (const file of files) {
    try {
      if (fixSyntaxErrors(file)) {
        fixedCount++;
      }
    } catch (error) {
      // Skip files that can't be read
    }
  }
  
  console.log(`Fixed syntax errors in ${fixedCount} files`);
}

// Start fixing syntax errors
console.log('Starting syntax error resolution...');
findAndFixSyntaxErrors('.');
console.log('Syntax error resolution complete!');
