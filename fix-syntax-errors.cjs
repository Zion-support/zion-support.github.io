#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Function to fix syntax errors in a file
function fixSyntaxErrors(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Fix common syntax errors:
    // 1. Remove semicolons after import statements
    content = content.replace(/import\s+[^;]+;\s*;/g, (match) => {
      modified = true;
      return match.replace(/;\s*$/, '');
    });

    // 2. Fix semicolons after function declarations
    content = content.replace(/export\s+default\s+function\s+[^{]+{\s*;/g, (match) => {
      modified = true;
      return match.replace(/{\s*;/, '{');
    });

    // 3. Fix semicolons after JSX elements
    content = content.replace(/<[^>]+>\s*;/g, (match) => {
      modified = true;
      return match.replace(/\s*;/, '');
    });

    // 4. Fix semicolons after object properties
    content = content.replace(/{\s*([^}]+)\s*}\s*;/g, (match, inner) => {
      if (inner.includes(':')) {
        modified = true;
        return match.replace(/\s*;/, '');
      }
      return match;
    });

    // 5. Fix semicolons after array declarations
    content = content.replace(/\[\s*([^\]]+)\s*\]\s*;/g, (match, inner) => {
      if (inner.includes(',')) {
        modified = true;
        return match.replace(/\s*;/, '');
      }
      return match;
    });

    // 6. Fix semicolons after return statements
    content = content.replace(/return\s*\(\s*([^)]+)\s*\)\s*;/g, (match) => {
      modified = true;
      return match.replace(/\s*;/, '');
    });

    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed syntax errors in: ${filePath}`);
      return true;
    }
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Function to recursively find and fix files
function fixFilesInDirectory(dir) {
  const files = fs.readdirSync(dir);
  let fixedCount = 0;

  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory() && !file.startsWith('.') && file !== 'node_modules') {
      fixedCount += fixFilesInDirectory(filePath);
    } else if (file.endsWith('.tsx') || file.endsWith('.ts') || file.endsWith('.jsx') || file.endsWith('.js')) {
      if (fixSyntaxErrors(filePath)) {
        fixedCount++;
      }
    }
  }

  return fixedCount;
}

// Main execution
console.log('Starting syntax error fixes...');
const fixedCount = fixFilesInDirectory('.');
console.log(`Fixed syntax errors in ${fixedCount} files.`);