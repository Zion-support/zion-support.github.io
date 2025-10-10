#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Pattern to find all TypeScript/JSX files in the app directory
const files = glob.sync('app/**/*.tsx', { cwd: __dirname });

console.log(`Found ${files.length} files to process...`);

let fixedCount = 0;

files.forEach(file => {
  const filePath = path.join(__dirname, file);
  let content = fs.readFileSync(filePath, 'utf8');
  let modified = false;

  // Fix object property syntax errors (remove semicolons after property names)
  const propertyPattern = /(\w+):\s*([^,}]+),;/g;
  if (propertyPattern.test(content)) {
    content = content.replace(propertyPattern, '$1: $2,');
    modified = true;
  }

  // Fix object closing syntax errors
  const objectClosePattern = /}\s*},;/g;
  if (objectClosePattern.test(content)) {
    content = content.replace(objectClosePattern, '},');
    modified = true;
  }

  // Fix array closing syntax errors
  const arrayClosePattern = /]\s*},;/g;
  if (arrayClosePattern.test(content)) {
    content = content.replace(arrayClosePattern, '],');
    modified = true;
  }

  // Fix malformed JSX return statements
  const jsxReturnPattern = /return\s*\(\s*<>\s*<\/>\s*<([^>]+)>/g;
  if (jsxReturnPattern.test(content)) {
    content = content.replace(jsxReturnPattern, 'return (\n    <>\n      <$1>');
    modified = true;
  }

  // Fix missing closing tags in JSX
  const unclosedTagPattern = /<meta[^>]*>(?!\s*<\/meta>)/g;
  if (unclosedTagPattern.test(content)) {
    content = content.replace(unclosedTagPattern, (match) => {
      if (!match.includes('/>')) {
        return match.replace('>', ' />');
      }
      return match;
    });
    modified = true;
  }

  // Fix malformed object literals with extra semicolons
  const malformedObjectPattern = /{\s*(\w+):\s*([^,}]+),;\s*}/g;
  if (malformedObjectPattern.test(content)) {
    content = content.replace(malformedObjectPattern, '{\n      $1: $2\n    }');
    modified = true;
  }

  // Fix array syntax with extra semicolons
  const malformedArrayPattern = /\[\s*{\s*(\w+):\s*([^,}]+),;\s*}\s*\],;/g;
  if (malformedArrayPattern.test(content)) {
    content = content.replace(malformedArrayPattern, '[\n    {\n      $1: $2\n    }\n  ],');
    modified = true;
  }

  if (modified) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Fixed: ${file}`);
    fixedCount++;
  }
});

console.log(`\nFixed ${fixedCount} files out of ${files.length} total files.`);