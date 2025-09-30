#!/usr/bin/env node;
const fs = require('fs');
const path = require('path');

// Function to fix all semicolons in JSX attributes;
function fixAllJSXSemicolons(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // More comprehensive fixes for JSX semicolons;
    const fixes = [
      // Fix className semicolons;
      { pattern: /className='([^']*);'/g, replacement: "className='$1'" }, { pattern: /className="([^"]*);"/g, replacement: 'className="$1"' },
      // Fix any attribute semicolons;
      { pattern: /(\w+)='([^']*);'/g, replacement: "$1='$2'" }, { pattern: /(\w+)="([^"]*);"/g, replacement: '$1="$2"' },
      // Fix JSX closing tag semicolons;
      { pattern: /(\/>);/g, replacement: '$1' }, { pattern: /(<\/[^>]+>);/g, replacement: '$1' },
      // Fix JSX opening tag semicolons;
      { pattern: /(>);/g, replacement: '$1' },
      // Fix text content semicolons;
      { pattern: /(>[^<]*);/g, replacement: '$1' },
      // Fix array element semicolons;
      { pattern: /'([^']*);',/g, replacement: "'$1'"}, { pattern: /"([^"]*);",/g, replacement: '"$1"'},
      // Fix object property semicolons;
      { pattern: /(\w+):\s*'([^']*);'/g, replacement: "$1: '$2'" }, { pattern: /(\w+):\s*"([^"]*);"/g, replacement: '$1: "$2"' } ];

    fixes.forEach(fix => {
      const newContent = content.replace(fix.pattern, fix.replacement);
      if (newContent !== content) {
        content = newContent;
        modified = true}
    });

    if (modified) {
      fs.writeFileSync(filePath, content, `utf8`);
      console.log(`Fixed JSX semicolons in: ${filePath}`);
      return true}
    return false} catch (error) { 
    console.error(`Error fixing ${filePath }:`, error.message);
    return false}
}

// Function to recursively find and fix files;
function fixFilesInDirectory(dir) {
  const files = fs.readdirSync(dir);
  let fixedCount = 0;

  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (
      stat.isDirectory() &&
      !file.startsWith(`.`) &&
      file !== 'node_modules'
    ) {
      fixedCount += fixFilesInDirectory(filePath)} else if (stat.isFile() && /\.(tsx|jsx)$/.test(file)) {
      if (fixAllJSXSemicolons(filePath)) {
        fixedCount++}
    }
  });

  return fixedCount}

// Main execution;
console.log('🔧 Fixing all JSX semicolons...');
const fixedCount = fixFilesInDirectory('.');
console.log(`✅ Fixed JSX semicolons in ${fixedCount} files`);
