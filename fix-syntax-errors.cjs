#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Function to fix syntax errors in a file
function fixSyntaxErrors(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let originalContent = content;
    
    // Fix import statements with extra semicolons and quotes
    content = content.replace(/import\s+([^;]+);';';/g, 'import $1;');
    content = content.replace(/import\s+([^;]+);';/g, 'import $1;');
    content = content.replace(/from\s+['"]([^'"]+)['"];';';/g, 'from "$1";');
    content = content.replace(/from\s+['"]([^'"]+)['"];';/g, 'from "$1";');
    
    // Fix function declarations
    content = content.replace(/export\s+default\s+function\s+(\w+)\s*export\s*{\s*\w+\s*}\s*\(/g, 'export default function $1(');
    
    // Fix variable declarations with extra semicolons
    content = content.replace(/const\s+([^=]+)=([^;]+);';';/g, 'const $1=$2;');
    content = content.replace(/const\s+([^=]+)=([^;]+);';/g, 'const $1=$2;');
    content = content.replace(/let\s+([^=]+)=([^;]+);';';/g, 'let $1=$2;');
    content = content.replace(/let\s+([^=]+)=([^;]+);';/g, 'let $1=$2;');
    content = content.replace(/var\s+([^=]+)=([^;]+);';';/g, 'var $1=$2;');
    content = content.replace(/var\s+([^=]+)=([^;]+);';/g, 'var $1=$2;');
    
    // Fix useEffect and other hooks
    content = content.replace(/useEffect\s*\(\s*\(\s*\)\s*=>\s*\{';/g, 'useEffect(() => {');
    content = content.replace(/useState\s*\(\s*([^)]+)\s*\);';';/g, 'useState($1);');
    content = content.replace(/useState\s*\(\s*([^)]+)\s*\);';/g, 'useState($1);');
    
    // Fix object method calls
    content = content.replace(/\.([a-zA-Z_][a-zA-Z0-9_]*)\s*\(\s*\);';';/g, '.$1();');
    content = content.replace(/\.([a-zA-Z_][a-zA-Z0-9_]*)\s*\(\s*\);';/g, '.$1();');
    
    // Fix array and object syntax
    content = content.replace(/\[\s*';';/g, '[');
    content = content.replace(/\[\s*';/g, '[');
    content = content.replace(/\]\s*';';/g, ']');
    content = content.replace(/\]\s*';/g, ']');
    content = content.replace(/\{\s*';';/g, '{');
    content = content.replace(/\{\s*';/g, '{');
    content = content.replace(/\}\s*';';/g, '}');
    content = content.replace(/\}\s*';/g, '}');
    
    // Fix string literals
    content = content.replace(/'\s*';';/g, "'");
    content = content.replace(/'\s*';/g, "'");
    content = content.replace(/"\s*";';';/g, '"');
    content = content.replace(/"\s*";';/g, '"');
    
    // Fix template literals
    content = content.replace(/`\s*';';/g, '`');
    content = content.replace(/`\s*';/g, '`');
    
    // Fix return statements
    content = content.replace(/return\s+([^;]+);';';/g, 'return $1;');
    content = content.replace(/return\s+([^;]+);';/g, 'return $1;');
    
    // Fix conditional statements
    content = content.replace(/if\s*\(\s*([^)]+)\s*\)\s*\{';/g, 'if ($1) {');
    content = content.replace(/else\s*\{';/g, 'else {');
    content = content.replace(/switch\s*\(\s*([^)]+)\s*\)\s*\{';/g, 'switch ($1) {');
    content = content.replace(/case\s+([^:]+):';/g, 'case $1:');
    content = content.replace(/default:';/g, 'default:');
    
    // Fix try-catch blocks
    content = content.replace(/try\s*\{';/g, 'try {');
    content = content.replace(/catch\s*\(\s*([^)]+)\s*\)\s*\{';/g, 'catch ($1) {');
    content = content.replace(/finally\s*\{';/g, 'finally {');
    
    // Fix arrow functions
    content = content.replace(/\(\s*\)\s*=>\s*\{';/g, '() => {');
    content = content.replace(/\(\s*([^)]+)\s*\)\s*=>\s*\{';/g, '($1) => {');
    
    // Fix class definitions
    content = content.replace(/class\s+(\w+)\s*\{';/g, 'class $1 {');
    content = content.replace(/extends\s+(\w+)\s*\{';/g, 'extends $1 {');
    
    // Fix interface definitions
    content = content.replace(/interface\s+(\w+)\s*\{';/g, 'interface $1 {');
    content = content.replace(/type\s+(\w+)\s*=\s*\{';/g, 'type $1 = {');
    
    // Fix JSX
    content = content.replace(/<\s*(\w+)\s*([^>]*)\s*>\s*';/g, '<$1$2>');
    content = content.replace(/<\s*\/\s*(\w+)\s*>\s*';/g, '</$1>');
    
    // Remove standalone semicolons and quotes
    content = content.replace(/^';';?\s*$/gm, '');
    content = content.replace(/^';\s*$/gm, '');
    
    // Fix multiple consecutive semicolons
    content = content.replace(/;+;+/g, ';');
    
    // Fix multiple consecutive quotes
    content = content.replace(/['"]+['"]+/g, '"');
    
    // Write the fixed content back
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed syntax errors in: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

// Function to recursively find and fix files
function fixFilesInDirectory(dirPath) {
  const files = fs.readdirSync(dirPath);
  let fixedCount = 0;
  
  for (const file of files) {
    const filePath = path.join(dirPath, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      fixedCount += fixFilesInDirectory(filePath);
    } else if (file.endsWith('.js') || file.endsWith('.jsx') || file.endsWith('.ts') || file.endsWith('.tsx')) {
      if (fixSyntaxErrors(filePath)) {
        fixedCount++;
      }
    }
  }
  
  return fixedCount;
}

// Main execution
console.log('Starting syntax error fixing...');
const fixedCount = fixFilesInDirectory('./src');
console.log(`Fixed ${fixedCount} files with syntax errors.`);