#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Function to fix remaining syntax errors
function fixSyntaxErrors(text) {
  let fixed = text;

  // Fix import statements that got corrupted
  fixed = fixed.replace(
    /import\s*\{([^}]+)\}\s*from\s*['"]([^'"]+)['"];?/g,
    (match, imports, module) => {
      // Clean up the imports by removing extra commas and spaces
      const cleanImports = imports
        .replace(/,\s*,/g, ',')
        .replace(/\s*,\s*/g, ', ')
        .trim();
      return `import { ${cleanImports} } from '${module}';`;
    },
  );

  // Fix React import statements
  fixed = fixed.replace(
    /import\s*React,\s*\{([^}]+)\}\s*from\s*['"]react['"];?/g,
    (match, imports) => {
      const cleanImports = imports
        .replace(/,\s*,/g, ',')
        .replace(/\s*,\s*/g, ', ')
        .trim();
      return `import React, { ${cleanImports} } from 'react';`;
    },
  );

  // Fix function declarations that got corrupted
  fixed = fixed.replace(
    /export\s*default\s*function\s*([a-zA-Z_$][a-zA-Z0-9_$]*)\s*\(/g,
    'export default function $1(',
  );
  fixed = fixed.replace(
    /const\s*([a-zA-Z_$][a-zA-Z0-9_$]*)\s*=\s*\(/g,
    'const $1 = (',
  );
  fixed = fixed.replace(
    /function\s*([a-zA-Z_$][a-zA-Z0-9_$]*)\s*\(/g,
    'function $1(',
  );

  // Fix interface declarations
  fixed = fixed.replace(
    /interface\s*([a-zA-Z_$][a-zA-Z0-9_$]*)\s*\{/g,
    'interface $1 {',
  );

  // Fix type declarations
  fixed = fixed.replace(/type\s*([a-zA-Z_$][a-zA-Z0-9_$]*)\s*=/g, 'type $1 =');

  // Fix JSX component declarations
  fixed = fixed.replace(
    /const\s*([A-Z][a-zA-Z0-9_$]*)\s*:\s*React\.FC/g,
    'const $1: React.FC',
  );
  fixed = fixed.replace(
    /const\s*([A-Z][a-zA-Z0-9_$]*)\s*=\s*\(/g,
    'const $1 = (',
  );

  // Fix object property syntax
  fixed = fixed.replace(
    /\{\s*([a-zA-Z_$][a-zA-Z0-9_$]*)\s*:\s*([^,}]+),\s*([a-zA-Z_$][a-zA-Z0-9_$]*)\s*:\s*([^,}]+)\s*\}/g,
    '{ $1: $2, $3: $4 }',
  );

  // Fix array syntax
  fixed = fixed.replace(/\[\s*([^[\]]+)\s*\]/g, '[$1]');

  // Fix function calls
  fixed = fixed.replace(
    /([a-zA-Z_$][a-zA-Z0-9_$]*)\s*\(\s*([^)]*)\s*\)/g,
    '$1($2)',
  );

  // Fix arrow functions
  fixed = fixed.replace(/\([^)]*\)\s*=>\s*\{/g, match => {
    return match.replace(/\s+/g, ' ').trim();
  });

  // Fix JSX syntax
  fixed = fixed.replace(/<([A-Z][a-zA-Z0-9_$]*)\s*([^>]*)\s*>/g, '<$1 $2>');
  fixed = fixed.replace(/<\/\s*([A-Z][a-zA-Z0-9_$]*)\s*>/g, '</$1>');

  // Fix string literals
  fixed = fixed.replace(/['"]([^'"]*),\s*([^'"]*)['"]/g, '"$1$2"');

  // Fix template literals
  fixed = fixed.replace(/`([^`]*),\s*([^`]*)`/g, '`$1$2`');

  // Fix variable declarations
  fixed = fixed.replace(
    /const\s*([a-zA-Z_$][a-zA-Z0-9_$]*)\s*=\s*([^;]+);?/g,
    'const $1 = $2;',
  );
  fixed = fixed.replace(
    /let\s*([a-zA-Z_$][a-zA-Z0-9_$]*)\s*=\s*([^;]+);?/g,
    'let $1 = $2;',
  );
  fixed = fixed.replace(
    /var\s*([a-zA-Z_$][a-zA-Z0-9_$]*)\s*=\s*([^;]+);?/g,
    'var $1 = $2;',
  );

  // Fix return statements
  fixed = fixed.replace(/return\s*([^;]+);?/g, 'return $1;');

  // Fix if statements
  fixed = fixed.replace(/if\s*\(\s*([^)]+)\s*\)\s*\{/g, 'if ($1) {');

  // Fix for loops
  fixed = fixed.replace(
    /for\s*\(\s*([^;]+);\s*([^;]+);\s*([^)]+)\s*\)\s*\{/g,
    'for ($1; $2; $3) {',
  );

  // Fix while loops
  fixed = fixed.replace(/while\s*\(\s*([^)]+)\s*\)\s*\{/g, 'while ($1) {');

  // Fix try-catch blocks
  fixed = fixed.replace(/try\s*\{/g, 'try {');
  fixed = fixed.replace(/catch\s*\(\s*([^)]+)\s*\)\s*\{/g, 'catch ($1) {');

  // Fix class declarations
  fixed = fixed.replace(
    /class\s*([a-zA-Z_$][a-zA-Z0-9_$]*)\s*extends\s*([a-zA-Z_$][a-zA-Z0-9_$]*)\s*\{/g,
    'class $1 extends $2 {',
  );
  fixed = fixed.replace(
    /class\s*([a-zA-Z_$][a-zA-Z0-9_$]*)\s*\{/g,
    'class $1 {',
  );

  // Fix method declarations
  fixed = fixed.replace(
    /([a-zA-Z_$][a-zA-Z0-9_$]*)\s*\(\s*([^)]*)\s*\)\s*\{/g,
    '$1($2) {',
  );

  // Fix property access
  fixed = fixed.replace(
    /([a-zA-Z_$][a-zA-Z0-9_$]*)\s*\.\s*([a-zA-Z_$][a-zA-Z0-9_$]*)/g,
    '$1.$2',
  );

  // Fix array access
  fixed = fixed.replace(
    /([a-zA-Z_$][a-zA-Z0-9_$]*)\s*\[\s*([^\]]+)\s*\]/g,
    '$1[$2]',
  );

  // Fix ternary operators
  fixed = fixed.replace(
    /([^?]+)\s*\?\s*([^:]+)\s*:\s*([^;]+)/g,
    '$1 ? $2 : $3',
  );

  // Fix logical operators
  fixed = fixed.replace(/([^&]+)\s*&&\s*([^&]+)/g, '$1 && $2');
  fixed = fixed.replace(/([^|]+)\s*\|\|\s*([^|]+)/g, '$1 || $2');

  // Fix comparison operators
  fixed = fixed.replace(/([^=]+)\s*===\s*([^=]+)/g, '$1 === $2');
  fixed = fixed.replace(/([^=]+)\s*==\s*([^=]+)/g, '$1 == $2');
  fixed = fixed.replace(/([^!]+)\s*!==\s*([^!]+)/g, '$1 !== $2');
  fixed = fixed.replace(/([^!]+)\s*!=\s*([^!]+)/g, '$1 != $2');

  // Fix assignment operators
  fixed = fixed.replace(
    /([a-zA-Z_$][a-zA-Z0-9_$]*)\s*=\s*([^;]+);?/g,
    '$1 = $2;',
  );

  // Fix semicolons
  fixed = fixed.replace(/;\s*;/g, ';');
  fixed = fixed.replace(/,\s*,/g, ',');

  // Fix extra spaces
  fixed = fixed.replace(/\s+/g, ' ');
  fixed = fixed.replace(/\s*{\s*/g, ' {');
  fixed = fixed.replace(/\s*}\s*/g, ' }');
  fixed = fixed.replace(/\s*\(\s*/g, ' (');
  fixed = fixed.replace(/\s*\)\s*/g, ') ');
  fixed = fixed.replace(/\s*\[\s*/g, ' [');
  fixed = fixed.replace(/\s*\]\s*/g, '] ');

  // Fix line breaks
  fixed = fixed.replace(/\n\s*\n/g, '\n');

  return fixed;
}

// Function to process a file
function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const fixedContent = fixSyntaxErrors(content);

    if (content !== fixedContent) {
      fs.writeFileSync(filePath, fixedContent, 'utf8');
      console.log(`Fixed: ${filePath}`);
      return true;
    }
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Function to recursively find and process files
function processDirectory(dirPath) {
  let processedCount = 0;

  try {
    const items = fs.readdirSync(dirPath);

    for (const item of items) {
      const fullPath = path.join(dirPath, item);
      const stat = fs.statSync(fullPath);

      if (stat.isDirectory()) {
        // Skip node_modules and other common directories
        if (!['node_modules', '.git', 'dist', 'build'].includes(item)) {
          processedCount += processDirectory(fullPath);
        }
      } else if (
        item.endsWith('.ts') ||
        item.endsWith('.tsx') ||
        item.endsWith('.js') ||
        item.endsWith('.jsx')
      ) {
        if (processFile(fullPath)) {
          processedCount++;
        }
      }
    }
  } catch (error) {
    console.error(`Error processing directory ${dirPath}:`, error.message);
  }

  return processedCount;
}

// Main execution
console.log('Starting to fix remaining syntax errors...');
const processedCount = processDirectory('./src');
console.log(`Fixed ${processedCount} files.`);
