#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Find all TSX files with syntax errors
function findFilesWithErrors() {
  try {
    const result = execSync('find /workspace/app -name "*.tsx" -exec grep -l "icon:.*,;" {} \\;', { encoding: 'utf8' });
    return result.trim().split('\n').filter(file => file.length > 0);
  } catch (error) {
    return [];
  }
}

// Fix common syntax errors in a file
function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Fix semicolons after object properties
    const semicolonPattern = /(\w+):\s*([^,}]+),;/g;
    if (semicolonPattern.test(content)) {
      content = content.replace(semicolonPattern, '$1: $2,');
      modified = true;
    }

    // Fix extra semicolons in arrays
    const arraySemicolonPattern = /(\w+),;/g;
    if (arraySemicolonPattern.test(content)) {
      content = content.replace(arraySemicolonPattern, '$1,');
      modified = true;
    }

    // Fix malformed JSX
    const malformedJSXPattern = /<(\w+)>\s*<\/\1>/g;
    if (malformedJSXPattern.test(content)) {
      content = content.replace(malformedJSXPattern, '<$1 />');
      modified = true;
    }

    // Fix missing closing tags
    const unclosedTags = content.match(/<(\w+)(?![^>]*\/>)[^>]*>(?!.*<\/\1>)/g);
    if (unclosedTags) {
      unclosedTags.forEach(tag => {
        const tagName = tag.match(/<(\w+)/)[1];
        if (!content.includes(`</${tagName}>`)) {
          content = content.replace(tag, tag.replace('>', ' />'));
          modified = true;
        }
      });
    }

    // Fix merge conflict markers
    const conflictPattern = /<<<<<<< HEAD[\s\S]*?=======[\s\S]*?>>>>>>> [^\n]+/g;
    if (conflictPattern.test(content)) {
      content = content.replace(conflictPattern, '');
      modified = true;
    }

    // Fix malformed return statements
    const malformedReturnPattern = /return\s*\(\s*<>\s*<\/>\s*\)/g;
    if (malformedReturnPattern.test(content)) {
      content = content.replace(malformedReturnPattern, 'return (\n    <>\n      {/* Content */}\n    </>\n  )');
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
  console.log('Finding files with syntax errors...');
  const files = findFilesWithErrors();
  
  if (files.length === 0) {
    console.log('No files found with syntax errors.');
    return;
  }

  console.log(`Found ${files.length} files with syntax errors.`);
  
  let fixedCount = 0;
  files.forEach(file => {
    if (fixFile(file)) {
      fixedCount++;
    }
  });

  console.log(`Fixed ${fixedCount} out of ${files.length} files.`);
}

main();