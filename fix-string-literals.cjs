#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Patterns to fix unterminated string literals
const patterns = [
  // Fix import statements missing closing quotes
  {
    pattern: /import\s+([^'"]*)\s+from\s+'([^']*);/g,
    replacement: "import $1 from '$2';"
  },
  {
    pattern: /import\s+([^'"]*)\s+from\s+"([^"]*);/g,
    replacement: 'import $1 from "$2";'
  },
  // Fix require statements
  {
    pattern: /require\s*\(\s*'([^']*);/g,
    replacement: "require('$1');"
  },
  {
    pattern: /require\s*\(\s*"([^"]*);/g,
    replacement: 'require("$1");'
  },
  // Fix string literals in general
  {
    pattern: /'([^']*);/g,
    replacement: "'$1';"
  },
  {
    pattern: /"([^"]*);/g,
    replacement: '"$1";'
  },
  // Fix specific common patterns
  {
    pattern: /'use client;/g,
    replacement: "'use client';"
  },
  {
    pattern: /'use strict;/g,
    replacement: "'use strict';"
  }
];

function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    patterns.forEach(({ pattern, replacement }) => {
      const newContent = content.replace(pattern, replacement);
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
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Get all TypeScript and JavaScript files
const files = glob.sync('**/*.{ts,tsx,js,jsx}', {
  ignore: ['node_modules/**', 'dist/**', '.next/**', 'out/**']
});

console.log(`Found ${files.length} files to process...`);

let fixedCount = 0;
files.forEach(file => {
  if (fixFile(file)) {
    fixedCount++;
  }
});

console.log(`Fixed ${fixedCount} files`);