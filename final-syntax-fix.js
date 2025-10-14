#!/usr/bin/env node

import fs from 'fs';
import { glob } from 'glob';

// Final comprehensive fixes
const finalFixes = [
  // Fix unterminated string literals
  {
    pattern: /'([^']*);'/g,
    replacement: "'$1';
  },
  // Fix malformed import statements
  {
    pattern: /import\s+([^;]+);'/g,
    replacement: "import $1;"
  },
  // Fix JSX expressions without parent element
  {
    pattern: /return\s*\(\s*<([^>]+)>\s*<([^>]+)>\s*<\/\2>\s*<\/\1>\s*\)/gm,
    replacement: "return (\n    <>\n      <$1>\n        <$2></$2>\n      </$1>\n    </>\n  )"
  },
  // Fix missing semicolons in imports
  {
    pattern: /import\s+([^;]+)';/g,
    replacement: "import $1;"
  },
  // Fix malformed object destructuring
  {
    pattern: /\{\s*([^}]+)\s*\}\s*from\s*'([^']+)';'/g,
    replacement: "{ $1 } from '$2';"
  },
  // Fix JSX fragments
  {
    pattern: /<>\s*<(\w+)>\s*<\/\1>\s*$/gm,
    replacement: "<>\n      <$1></$1>\n    </>"
  },
  // Fix missing closing tags
  {
    pattern: /<(\w+)([^>]*?)(?<!\/)>\s*$/gm,
    replacement: "<$1$2></$1>"
  }
];

function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    finalFixes.forEach(fix => {
      const newContent = content.replace(fix.pattern, fix.replacement);
      if (newContent !== content) {
        content = newContent;
        modified = true;
      }
    });
    
    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed: ${filePath}`);
      return true;
    }
    return false;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

async function main() {
  
  const patterns = [
    '*.tsx',
    '*.ts',
    'app/**