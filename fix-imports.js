#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { glob } from 'glob';

// Pattern to match malformed import statements
const malformedImportPattern = /import\s+([^,]+),\s*\n\s*import\s+([^,]+),\s*\n\s*import\s+([^,]+),\s*\n\s*import\s+([^,]+),\s*\n\s*import\s+([^,]+),\s*\n\s*import\s+([^,]+),\s*\n\s*import\s+([^,]+),\s*\n\s*import\s+([^,]+);/g;

// Pattern to match single malformed import with comma
const singleMalformedImportPattern = /import\s+([^,]+),\s*\n\s*import\s+([^,]+);/g;

// Pattern to match import statements that end with comma instead of semicolon
const commaEndingImportPattern = /import\s+([^,]+),\s*$/gm;

function fixImportsInFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Fix malformed import statements
    const originalContent = content;

    // Fix imports that end with comma instead of semicolon
    content = content.replace(commaEndingImportPattern, (match, importStatement) => {
      modified = true;
      return `import ${importStatement};`;
    });

    // Fix single malformed import patterns
    content = content.replace(singleMalformedImportPattern, (match, import1, import2) => {
      modified = true;
      return `import ${import1};\nimport ${import2};`;
    });

    // Fix complex malformed import patterns
    content = content.replace(malformedImportPattern, (match, ...imports) => {
      modified = true;
      return imports.map(imp => `import ${imp};`).join('\n');
    });

    // Fix specific patterns found in the codebase
    content = content.replace(/import\s+([^,]+),\s*\n\s*import\s+([^,]+),\s*\n\s*import\s+([^,]+),\s*\n\s*import\s+([^,]+),\s*\n\s*import\s+([^,]+),\s*\n\s*import\s+([^,]+),\s*\n\s*import\s+([^,]+),\s*\n\s*import\s+([^,]+);/g, (match, ...imports) => {
      modified = true;
      return imports.map(imp => `import ${imp};`).join('\n');
    });

    // Fix imports that have multiple lines with commas
    content = content.replace(/import\s+([^,]+),\s*\n\s*import\s+([^,]+),\s*\n\s*import\s+([^,]+),\s*\n\s*import\s+([^,]+),\s*\n\s*import\s+([^,]+),\s*\n\s*import\s+([^,]+),\s*\n\s*import\s+([^,]+),\s*\n\s*import\s+([^,]+);/g, (match, ...imports) => {
      modified = true;
      return imports.map(imp => `import ${imp};`).join('\n');
    });

    // Fix imports that have multiple lines with commas (shorter version)
    content = content.replace(/import\s+([^,]+),\s*\n\s*import\s+([^,]+),\s*\n\s*import\s+([^,]+),\s*\n\s*import\s+([^,]+),\s*\n\s*import\s+([^,]+),\s*\n\s*import\s+([^,]+),\s*\n\s*import\s+([^,]+),\s*\n\s*import\s+([^,]+);/g, (match, ...imports) => {
      modified = true;
      return imports.map(imp => `import ${imp};`).join('\n');
    });

    // Fix specific pattern: import statement followed by comma and newline
    content = content.replace(/import\s+([^,]+),\s*\n\s*import\s+([^,]+),\s*\n\s*import\s+([^,]+),\s*\n\s*import\s+([^,]+),\s*\n\s*import\s+([^,]+),\s*\n\s*import\s+([^,]+),\s*\n\s*import\s+([^,]+),\s*\n\s*import\s+([^,]+);/g, (match, ...imports) => {
      modified = true;
      return imports.map(imp => `import ${imp};`).join('\n');
    });

    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed imports in: ${filePath}`);
      return true;
    }

    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Find all TypeScript and JavaScript files
const files = await glob('app/**/*.{ts,tsx,js,jsx}', { cwd: process.cwd() });

console.log(`Found ${files.length} files to process...`);

let fixedCount = 0;
for (const file of files) {
  if (fixImportsInFile(file)) {
    fixedCount++;
  }
}

console.log(`Fixed imports in ${fixedCount} files.`);