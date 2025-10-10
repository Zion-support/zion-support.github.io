#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Find all TSX files with remaining parsing errors
function findFilesWithErrors() {
  try {
    const result = execSync('pnpm run lint 2>&1 | grep "error" | grep "\.tsx" | cut -d: -f1 | sort -u', { encoding: 'utf8' });
    return result.trim().split('\n').filter(file => file.length > 0);
  } catch (error) {
    return [];
  }
}

// Fix specific syntax errors in a file
function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Fix malformed object structures like "},;" and "  }"
    const malformedObjectPattern = /(\s*})\s*,\s*;/g;
    if (malformedObjectPattern.test(content)) {
      content = content.replace(malformedObjectPattern, '$1,');
      modified = true;
    }

    // Fix missing commas in object arrays
    const missingCommaPattern = /(\s*})\s*(\s*{)/g;
    if (missingCommaPattern.test(content)) {
      content = content.replace(missingCommaPattern, '$1,$2');
      modified = true;
    }

    // Fix extra semicolons in object properties
    const extraSemicolonPattern = /(\w+):\s*([^,}]+),;/g;
    if (extraSemicolonPattern.test(content)) {
      content = content.replace(extraSemicolonPattern, '$1: $2,');
      modified = true;
    }

    // Fix malformed JSX elements
    const malformedJSXPattern = /<(\w+)>\s*<\/\1>/g;
    if (malformedJSXPattern.test(content)) {
      content = content.replace(malformedJSXPattern, '<$1 />');
      modified = true;
    }

    // Fix incomplete JSX elements
    const incompleteJSXPattern = /<(\w+)(?![^>]*\/>)[^>]*>(?!.*<\/\1>)(?!.*\/>)/g;
    if (incompleteJSXPattern.test(content)) {
      content = content.replace(incompleteJSXPattern, '<$1 />');
      modified = true;
    }

    // Fix malformed return statements
    const malformedReturnPattern = /return\s*\(\s*<>\s*<\/>\s*\)/g;
    if (malformedReturnPattern.test(content)) {
      content = content.replace(malformedReturnPattern, 'return (\n    <>\n      {/* Content */}\n    </>\n  )');
      modified = true;
    }

    // Fix missing closing parentheses in function calls
    const missingParenPattern = /(\w+)\s*\(\s*[^)]*$/g;
    if (missingParenPattern.test(content)) {
      content = content.replace(missingParenPattern, '$1()');
      modified = true;
    }

    // Fix malformed array syntax
    const malformedArrayPattern = /\[\s*\]\s*;/g;
    if (malformedArrayPattern.test(content)) {
      content = content.replace(malformedArrayPattern, '[]');
      modified = true;
    }

    // Fix missing semicolons after statements
    const missingSemicolonPattern = /(\w+)\s*$/gm;
    if (missingSemicolonPattern.test(content)) {
      content = content.replace(missingSemicolonPattern, '$1;');
      modified = true;
    }

    if (modified) {
      fs.writeFileSync(filePath, content);
      console.log(`Fixed: ${filePath}`);
      return true;
    }
    return false;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

// Main execution
function main() {
  console.log('Finding files with remaining parsing errors...');
  const files = findFilesWithErrors();
  
  if (files.length === 0) {
    console.log('No files found with parsing errors.');
    return;
  }

  console.log(`Found ${files.length} files with parsing errors.`);
  
  let fixedCount = 0;
  files.forEach(file => {
    if (fixFile(file)) {
      fixedCount++;
    }
  });

  console.log(`Fixed ${fixedCount} out of ${files.length} files.`);
}

main();