#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Function to fix common syntax errors
function fixSyntaxErrors(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Fix common syntax issues
    const fixes = [
      // Fix missing semicolons after imports
      { pattern: /import\s+.*from\s+['"][^'"]+['"]\s*$/gm, replacement: (match) => match + ';' },
      
      // Fix missing semicolons after variable declarations
      { pattern: /(const|let|var)\s+\w+\s*=.*[^;]\s*$/gm, replacement: (match) => match + ';' },
      
      // Fix missing semicolons after function declarations
      { pattern: /function\s+\w+\([^)]*\)\s*\{[^}]*\}\s*$/gm, replacement: (match) => match + ';' },
      
      // Fix missing semicolons after return statements
      { pattern: /return\s+[^;]+$/gm, replacement: (match) => match + ';' },
      
      // Fix missing semicolons after object properties
      { pattern: /(\w+):\s*[^,}\n]+$/gm, replacement: (match) => match + ',' },
      
      // Fix missing commas in object literals
      { pattern: /(\w+):\s*[^,}\n]+(?=\s*\w+:)/gm, replacement: (match) => match + ',' },
      
      // Fix missing commas in function parameters
      { pattern: /(\w+):\s*[^,)]+(?=\s*\w+:)/gm, replacement: (match) => match + ',' },
      
      // Fix missing braces
      { pattern: /if\s*\([^)]+\)\s*[^{]\s*$/gm, replacement: (match) => match + ' {}' },
      
      // Fix missing parentheses
      { pattern: /if\s+[^{]+\s*$/gm, replacement: (match) => match.replace(/if\s+([^{]+)/, 'if ($1)') },
    ];

    fixes.forEach(fix => {
      const newContent = content.replace(fix.pattern, fix.replacement);
      if (newContent !== content) {
        content = newContent;
        modified = true;
      }
    });

    if (modified) {
      fs.writeFileSync(filePath, content);
      console.log(`Fixed syntax errors in: ${filePath}`);
      return true;
    }
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
  return false;
}

// Function to recursively find and fix TypeScript/JavaScript files
function fixFilesInDirectory(dir) {
  const files = fs.readdirSync(dir);
  let fixedCount = 0;

  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      // Skip node_modules and other common directories
      if (!['node_modules', '.git', '.next', 'dist', 'build'].includes(file)) {
        fixedCount += fixFilesInDirectory(filePath);
      }
    } else if (file.endsWith('.ts') || file.endsWith('.tsx') || file.endsWith('.js') || file.endsWith('.jsx')) {
      if (fixSyntaxErrors(filePath)) {
        fixedCount++;
      }
    }
  });

  return fixedCount;
}

// Main execution
console.log('Starting syntax error fixes...');
const fixedCount = fixFilesInDirectory('./components/api');
console.log(`Fixed syntax errors in ${fixedCount} files.`);

// Also fix lib directory
const libFixedCount = fixFilesInDirectory('./lib');
console.log(`Fixed syntax errors in ${libFixedCount} lib files.`);

console.log('Syntax error fixing completed!');