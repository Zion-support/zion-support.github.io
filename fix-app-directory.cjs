#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

console.log('🔧 Fixing app directory syntax errors...');

function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Remove merge conflict markers
    content = content
      .replace(/<<<<<<< HEAD\n([\s\S]*?)=======\n([\s\S]*?)>>>>>>> [^\n]+/g, '$2')
      .replace(/^<<<<<<< HEAD$/gm, '')
      .replace(/^=======$/gm, '')
      .replace(/^>>>>>>> [^\n]+$/gm, '');
    
    // Fix common syntax errors
    content = content
      .replace(/function\s+\w+\s*\(\s*[^)]*\)\s*\{[^}]*\}\s*function\s+\w+\s*\(\s*[^)]*\)\s*\{/g, (match) => {
        // Remove duplicate function definitions
        const functions = match.split('function');
        return 'function' + functions[functions.length - 1];
      })
      .replace(/,\s*\)/g, ')') // Remove trailing commas before closing parentheses
      .replace(/,\s*}/g, '}') // Remove trailing commas before closing braces
      .replace(/,\s*]/g, ']') // Remove trailing commas before closing brackets
      .replace(/;\s*;/g, ';') // Remove double semicolons
      .replace(/\n\s*\n\s*\n/g, '\n\n'); // Remove excessive newlines
    
    fs.writeFileSync(filePath, content);
    console.log(`✅ Fixed ${filePath}`);
    return true;
  } catch (error) {
    console.log(`❌ Error fixing ${filePath}: ${error.message}`);
    return false;
  }
}

function walkDirectory(dir) {
  const files = fs.readdirSync(dir);
  let fixedCount = 0;
  
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      fixedCount += walkDirectory(filePath);
    } else if (file.endsWith('.tsx') || file.endsWith('.ts') || file.endsWith('.jsx') || file.endsWith('.js')) {
      if (fixFile(filePath)) {
        fixedCount++;
      }
    }
  }
  
  return fixedCount;
}

try {
  const fixedCount = walkDirectory('app');
  console.log(`✅ Fixed ${fixedCount} files in app directory`);
} catch (error) {
  console.log('❌ Error walking app directory:', error.message);
}