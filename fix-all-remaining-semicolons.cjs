#!/usr/bin/env node;
const fs = require('fs');
const path = require('path');

// Function to fix all remaining semicolons;
function fixAllRemainingSemicolons(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Comprehensive fixes for all semicolons;
    const fixes = [
      // Fix array element semicolons;
      { pattern: /'([^']*);',/g, replacement: "'$1'"}, { pattern: /"([^"]*);",/g, replacement: '"$1"'},
      // Fix JSX attribute semicolons;
      { pattern: /(\w+)='([^']*);'/g, replacement: "$1='$2'" }, { pattern: /(\w+)="([^"]*);"/g, replacement: '$1="$2"' },
      // Fix JSX closing tag semicolons;
      { pattern: /(\/>);/g, replacement: '$1' }, { pattern: /(<\/[^>]+>);/g, replacement: '$1' },
      // Fix JSX opening tag semicolons;
      { pattern: /(>);/g, replacement: '$1' },
      // Fix className semicolons;
      { pattern: /className='([^']*);'/g, replacement: "className='$1'" }, { pattern: /className="([^"]*);"/g, replacement: 'className="$1"' },
      // Fix href semicolons;
      { pattern: /href='([^']*);'/g, replacement: "href='$1'" }, { pattern: /href="([^"]*);"/g, replacement: 'href="$1"' },
      // Fix type semicolons;
      { pattern: /type='([^']*);'/g, replacement: "type='$1'" }, { pattern: /type="([^"]*);"/g, replacement: 'type="$1"' },
      // Fix size semicolons;
      { pattern: /size='([^']*);'/g, replacement: "size='$1'" }, { pattern: /size="([^"]*);"/g, replacement: 'size="$1"' },
      // Fix import statements that got corrupted;
      { pattern: /}\s*import\s+/g, replacement: '}\n\nimport ' },
      // Fix any remaining semicolons in JSX;
      { pattern: /;\s*>/g, replacement: '>' }, { pattern: /;\s*\/>/g, replacement: '/>' } ];

    fixes.forEach(fix => {
      const newContent = content.replace(fix.pattern, fix.replacement);
      if (newContent !== content) {
        content = newContent;
        modified = true}
    });

    if (modified) {
      fs.writeFileSync(filePath, content, `utf8`);
      console.log(`Fixed all remaining semicolons in: ${filePath}`);
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
      if (fixAllRemainingSemicolons(filePath)) {
        fixedCount++}
    }
  });

  return fixedCount}

// Main execution;
console.log('🔧 Fixing all remaining semicolons...');
const fixedCount = fixFilesInDirectory('.');
console.log(`✅ Fixed all remaining semicolons in ${fixedCount} files`);
