#!/usr/bin/env node

const fs = require('fs');
const glob = require('glob');

// Function to fix specific syntax errors
function fixSpecificErrors(content) {
  return content
    // Fix metadata object syntax
    .replace(/export const metadata: Metadata = ,{/g, 'export const metadata: Metadata = {')
    .replace(/title: '([^']*),',/g, "title: '$1',")
    .replace(/description: '([^']*),',/g, "description: '$1',")
    .replace(/keywords: '([^']*),',/g, "keywords: '$1',")
    // Fix function declarations
    .replace(/export default function (\w+)\(\$2: any\): any ,{/g, 'export default function $1() {')
    // Fix JSX syntax
    .replace(/return\(/g, 'return (')
    .replace(/<div>\s*<\/di>/g, '<div></div>')
    .replace(/<\/Navigation>/g, '</>')
    // Fix missing closing tags
    .replace(/<(\w+)>\s*<\/di>/g, '<$1></$1>')
    // Fix malformed JSX fragments
    .replace(/<>\s*<Navigation \/>\s*<\/Navigation>/g, '<>\n      <Navigation />')
    // Fix missing closing braces
    .replace(/}\s*$/gm, '}\n')
    // Fix missing semicolons
    .replace(/(\w+)\s*$/gm, '$1;')
    // Fix trailing commas
    .replace(/,(\s*[}\]])/g, '$1');
}

// Main function to process files
function processFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    const originalContent = content;
    
    // Apply fixes
    content = fixSpecificErrors(content);
    
    // Only write if content changed
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Get all TypeScript and JavaScript files
const patterns = [
  'app/**/*.tsx',
  'app/**/*.ts',
  'app/**/*.js',
  'app/**/*.jsx'
];

let totalFiles = 0;
let fixedFiles = 0;

patterns.forEach(pattern => {
  const files = glob.sync(pattern, { cwd: process.cwd() });
  totalFiles += files.length;
  
  files.forEach(file => {
    if (processFile(file)) {
      fixedFiles++;
    }
  });
});

console.log(`\nProcessed ${totalFiles} files, fixed ${fixedFiles} files.`);