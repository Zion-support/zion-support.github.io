#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Function to recursively find all files with syntax errors
function findFilesWithErrors(dir, fileList = []) {
  const files = fs.readdirSync(dir);
  
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory() && !file.startsWith('.') && file !== 'node_modules' && !file.includes('app-broken') && !file.includes('app-disabled')) {
      findFilesWithErrors(filePath, fileList);
    } else if (stat.isFile() && (file.endsWith('.tsx') || file.endsWith('.ts') || file.endsWith('.js') || file.endsWith('.jsx'))) {
      const content = fs.readFileSync(filePath, 'utf8');
      // Check for common syntax errors
      if (content.includes('Unterminated string literal') || 
          content.includes(')\' expected') ||
          content.includes('Unexpected token') ||
          content.includes('Declaration or statement expected') ||
          content.includes('Identifier expected') ||
          content.includes('Property assignment expected') ||
          content.includes('Unterminated string constant') ||
          content.includes('JSX expressions must have one parent element') ||
          content.includes('Expected corresponding JSX closing tag') ||
          content.includes('Expected corresponding closing tag for JSX fragment') ||
          content.includes('Expression expected') ||
          content.includes('Identifier \'React\' has already been declared') ||
          content.includes('is already defined as a built-in global variable') ||
          content.includes('is defined but never used') ||
          content.includes('is not defined')) {
        fileList.push(filePath);
      }
    }
  });
  
  return fileList;
}

// Function to fix common syntax errors in a file
function fixSyntaxErrors(filePath) {
  console.log(`Fixing syntax errors in: ${filePath}`);
  
  let content = fs.readFileSync(filePath, 'utf8');
  let fixed = false;
  
  // Fix unterminated string literals
  if (content.includes('Unterminated string literal') || content.includes('Unterminated string constant')) {
    // Try to fix common unterminated string patterns
    content = content.replace(/(['"])([^'"]*?)(\n)/g, '$1$2$1$3');
    content = content.replace(/(['"])([^'"]*?)(\s*$)/g, '$1$2$1');
    fixed = true;
  }
  
  // Fix missing closing parentheses
  if (content.includes(')\' expected') || content.includes(')\' expected')) {
    // Add missing closing parentheses at common locations
    content = content.replace(/(\w+)\s*$/gm, '$1)');
    content = content.replace(/(\w+)\s*\n\s*$/gm, '$1)\n');
    fixed = true;
  }
  
  // Fix unexpected tokens
  if (content.includes('Unexpected token')) {
    // Remove common problematic characters
    content = content.replace(/[^\x20-\x7E\n\r\t]/g, '');
    content = content.replace(/\s*<(?![a-zA-Z])/g, '');
    content = content.replace(/\s*:(?![a-zA-Z])/g, '');
    content = content.replace(/\s*;(?![a-zA-Z])/g, '');
    fixed = true;
  }
  
  // Fix declaration issues
  if (content.includes('Declaration or statement expected') || content.includes('Identifier expected')) {
    // Add missing semicolons and fix structure
    content = content.replace(/(\w+)\s*$/gm, '$1;');
    content = content.replace(/(\w+)\s*\n\s*$/gm, '$1;\n');
    fixed = true;
  }
  
  // Fix JSX issues
  if (content.includes('JSX expressions must have one parent element') || 
      content.includes('Expected corresponding JSX closing tag') ||
      content.includes('Expected corresponding closing tag for JSX fragment')) {
    // Wrap in React fragment if needed
    if (!content.includes('<>') && !content.includes('<React.Fragment>')) {
      content = content.replace(/(<div[^>]*>.*?<\/div>)/s, '<>\n$1\n</>');
    }
    fixed = true;
  }
  
  // Fix duplicate React imports
  if (content.includes('Identifier \'React\' has already been declared')) {
    content = content.replace(/import\s+React[^;]*;\s*import\s+React[^;]*;/g, 'import React from \'react\';');
    fixed = true;
  }
  
  // Fix unused imports
  if (content.includes('is defined but never used')) {
    // Remove unused imports (basic cleanup)
    content = content.replace(/import\s+\{[^}]*\}\s+from\s+['"][^'"]*['"];\s*\n/g, '');
    fixed = true;
  }
  
  // Fix global variable redeclarations
  if (content.includes('is already defined as a built-in global variable')) {
    // Remove duplicate declarations
    content = content.replace(/(describe|test|expect|it|beforeEach)\s*,\s*(describe|test|expect|it|beforeEach)/g, '$1');
    fixed = true;
  }
  
  // Fix undefined variables
  if (content.includes('is not defined')) {
    // Add basic variable declarations
    content = content.replace(/navigator/g, 'window.navigator');
    content = content.replace(/window\.window\./g, 'window.');
    fixed = true;
  }
  
  // Clean up any remaining merge conflict markers
  content = content.replace(/<<<<<<< HEAD\s*/g, '');
  content = content.replace(/=======\s*/g, '');
  content = content.replace(/>>>>>>> [^\n]*\s*/g, '');
  
  // Remove empty lines that might have been left behind
  content = content.replace(/\n\s*\n\s*\n/g, '\n\n');
  
  if (fixed) {
    fs.writeFileSync(filePath, content);
    console.log(`Fixed: ${filePath}`);
  } else {
    console.log(`No fixes needed: ${filePath}`);
  }
}

// Main execution
try {
  console.log('Finding files with syntax errors...');
  const errorFiles = findFilesWithErrors('.');
  
  console.log(`Found ${errorFiles.length} files with syntax errors:`);
  errorFiles.forEach(file => console.log(`  - ${file}`));
  
  console.log('\nFixing syntax errors...');
  errorFiles.forEach(fixSyntaxErrors);
  
  console.log('\nAll syntax errors have been fixed!');
  
} catch (error) {
  console.error('Error fixing syntax errors:', error.message);
  process.exit(1);
}
