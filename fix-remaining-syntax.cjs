#!/usr/bin/env node

const fs = require('fs');
const glob = require('glob');

// Function to fix remaining syntax errors
function fixRemainingSyntax(content) {
  return content
    // Fix double semicolons
    .replace(/;;/g, ';')
    // Fix semicolons in JSX attributes
    .replace(/href="([^"]*);"/g, 'href="$1"')
    .replace(/className="([^"]*);"/g, 'className="$1"')
    // Fix semicolons in JSX closing tags
    .replace(/;>/g, '>')
    .replace(/;<\//g, '</')
    // Fix semicolons in object properties
    .replace(/(\w+):\s*([^;]+);/g, '$1: $2,')
    // Fix semicolons in metadata objects
    .replace(/export const metadata: Metadata = ;{;/g, 'export const metadata: Metadata = {')
    .replace(/title: '([^']*);',;/g, "title: '$1',")
    .replace(/description: '([^']*);',;/g, "description: '$1',")
    .replace(/keywords: '([^']*);',;/g, "keywords: '$1',")
    // Fix semicolons in function calls
    .replace(/\(([^)]*);\)/g, '($1)')
    // Fix semicolons in array literals
    .replace(/\[([^\]]*);\]/g, '[$1]')
    // Fix semicolons in template literals
    .replace(/`([^`]*);`/g, '`$1`')
    // Fix stray semicolons
    .replace(/;\s*$/gm, '')
    // Fix malformed JSX
    .replace(/<(\w+)([^>]*);>/g, '<$1$2>')
    .replace(/<\/(\w+)>/g, '</$1>')
    // Fix missing closing tags
    .replace(/<(\w+)([^>]*)>(?!.*<\/\1>)/gs, (match, tag, attrs) => {
      const lines = match.split('\n');
      const lastLine = lines[lines.length - 1];
      if (lastLine.trim() && !lastLine.includes(`</${tag}>`)) {
        return match + `\n    </${tag}>`;
      }
      return match;
    });
}

// Main function to process files
function processFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    const originalContent = content;
    
    // Apply fixes
    content = fixRemainingSyntax(content);
    
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