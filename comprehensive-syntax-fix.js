#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Find all TypeScript/TSX files
function findAllTsxFiles() {
  try {
    const result = execSync('find . -name "*.tsx" -o -name "*.ts" | grep -v node_modules | head -100', { 
      encoding: 'utf8',
      cwd: '/workspace'
    });
    return result.trim().split('\n').filter(file => file.length > 0);
  } catch (error) {
    console.log('Error finding files:', error.message);
    return [];
  }
}

// Fix common syntax errors in a file
function fixFileSyntax(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Fix 1: Missing closing div tags
    const openDivs = (content.match(/<div/g) || []).length;
    const closeDivs = (content.match(/<\/div>/g) || []).length;
    if (openDivs > closeDivs) {
      content += '</div>'.repeat(openDivs - closeDivs);
      modified = true;
    }

    // Fix 2: Fix malformed imports with extra braces
    content = content.replace(/import\s+(\w+)\s+\}\s+from\s+['"]([^'"]+)['"]/g, 'import $1 from \'$2\'');
    modified = true;

    // Fix 3: Fix missing equals signs in JSX props
    content = content.replace(/(\w+)\s+(\w+)(?=\s*[>}])/g, '$1=$2');
    modified = true;

    // Fix 4: Fix missing commas in object literals
    content = content.replace(/(\w+):\s*([^,}\n]+)(?=\s*[}\n])/g, '$1: $2,');
    modified = true;

    // Fix 5: Fix unterminated string literals
    content = content.replace(/(['"])([^'"]*)(?=\n|$)/g, '$1$2$1');
    modified = true;

    // Fix 6: Fix missing semicolons at end of statements
    content = content.replace(/([^;}])\n/g, '$1;\n');
    modified = true;

    // Fix 7: Fix JSX fragment issues
    content = content.replace(/<>([^<]*(?:<[^/][^>]*>[^<]*)*)(?!<\/>)/g, '<>$1</>');
    modified = true;

    // Fix 8: Fix missing closing braces
    const openBraces = (content.match(/\{/g) || []).length;
    const closeBraces = (content.match(/\}/g) || []).length;
    if (openBraces > closeBraces) {
      content += '}'.repeat(openBraces - closeBraces);
      modified = true;
    }

    // Fix 9: Fix missing closing parentheses
    const openParens = (content.match(/\(/g) || []).length;
    const closeParens = (content.match(/\)/g) || []).length;
    if (openParens > closeParens) {
      content += ')'.repeat(openParens - closeParens);
      modified = true;
    }

    // Fix 10: Fix malformed className attributes
    content = content.replace(/className="([^"]*)\s+([^"]*)"/g, 'className="$1 $2"');
    modified = true;

    // Fix 11: Fix missing quotes in JSX attributes
    content = content.replace(/(\w+)=([^"'\s][^>\s]*)/g, '$1="$2"');
    modified = true;

    // Fix 12: Fix duplicate React imports
    const reactImports = content.match(/import\s+React[^;]*;/g);
    if (reactImports && reactImports.length > 1) {
      content = content.replace(/import\s+React[^;]*;\s*/g, '');
      content = 'import React from \'react\';\n' + content;
      modified = true;
    }

    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed syntax in: ${filePath}`);
      return true;
    }
    return false;
  } catch (error) {
    console.error(`Error fixing file ${filePath}:`, error.message);
    return false;
  }
}

// Main execution
function main() {
  console.log('Finding TypeScript/TSX files...');
  const files = findAllTsxFiles();
  
  if (files.length === 0) {
    console.log('No files found.');
    return;
  }

  console.log(`Found ${files.length} files to check.`);
  
  let fixedCount = 0;
  files.forEach(file => {
    if (fixFileSyntax(file)) {
      fixedCount++;
    }
  });

  console.log(`Fixed syntax in ${fixedCount} files.`);
}

main();