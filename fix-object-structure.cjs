#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Fix object structure issues in a file
function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Fix malformed object structures like "  }" followed by "},;"
    const malformedObjectPattern = /(\s*})\s*,\s*;/g;
    if (malformedObjectPattern.test(content)) {
      content = content.replace(malformedObjectPattern, '$1,');
      modified = true;
    }

    // Fix missing commas between objects in arrays
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

    // Fix malformed array syntax
    const malformedArrayPattern = /\[\s*\]\s*;/g;
    if (malformedArrayPattern.test(content)) {
      content = content.replace(malformedArrayPattern, '[]');
      modified = true;
    }

    // Fix missing closing brackets
    const missingBracketPattern = /(\w+)\s*\(\s*[^)]*$/g;
    if (missingBracketPattern.test(content)) {
      content = content.replace(missingBracketPattern, '$1()');
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

// Get list of files with errors from linter output
function getFilesWithErrors() {
  const { execSync } = require('child_process');
  try {
    const result = execSync('pnpm run lint 2>&1 | grep "error" | grep "\.tsx" | cut -d: -f1 | sort -u', { encoding: 'utf8' });
    return result.trim().split('\n').filter(file => file.length > 0);
  } catch (error) {
    return [];
  }
}

// Main execution
function main() {
  console.log('Finding files with object structure errors...');
  const files = getFilesWithErrors();
  
  if (files.length === 0) {
    console.log('No files found with errors.');
    return;
  }

  console.log(`Found ${files.length} files with errors.`);
  
  let fixedCount = 0;
  files.forEach(file => {
    if (fixFile(file)) {
      fixedCount++;
    }
  });

  console.log(`Fixed ${fixedCount} out of ${files.length} files.`);
}

main();