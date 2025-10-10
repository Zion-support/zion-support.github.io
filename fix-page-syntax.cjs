#!/usr/bin/env node

const fs = require('fs');

// Function to fix specific syntax issues in page.tsx
function fixPageSyntax(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Fix the specific pattern: "Text; </" -> "Text"
    const pattern = /([^<>\s][^<>]*);\s*<\/\s*$/gm;
    const newContent = content.replace(pattern, '$1');
    
    if (newContent !== content) {
      content = newContent;
      modified = true;
    }
    
    // Fix patterns like "Text; </" -> "Text"
    const pattern2 = /([^<>\s][^<>]*);\s*<\/\s*<([^>]+)>/g;
    const newContent2 = content.replace(pattern2, '$1\n          </$2>');
    
    if (newContent2 !== content) {
      content = newContent2;
      modified = true;
    }
    
    // Fix orphaned closing tags
    const orphanedPattern = /^\s*<\/[^>]+>\s*$/gm;
    const newContent3 = content.replace(orphanedPattern, '');
    
    if (newContent3 !== content) {
      content = newContent3;
      modified = true;
    }
    
    // Write back if modified
    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error fixing syntax in ${filePath}:`, error.message);
    return false;
  }
}

// Main execution
console.log('Starting page syntax fixes...');

const filesToFix = [
  './app/page.tsx',
  './app/about/page.tsx',
  './app/accessibility/page.tsx'
];

let fixedCount = 0;

filesToFix.forEach(filePath => {
  if (fixPageSyntax(filePath)) {
    console.log(`Fixed syntax errors in: ${filePath}`);
    fixedCount++;
  }
});

console.log(`\nPage syntax fix complete:`);
console.log(`- Files processed: ${filesToFix.length}`);
console.log(`- Files fixed: ${fixedCount}`);