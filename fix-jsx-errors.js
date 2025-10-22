#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { glob } from 'glob';

// Pattern to find files with JSX syntax errors
const patterns = [
  // Pattern 1: Duplicate description and malformed object syntax
  {
    search: /description: 'Scale effortlessly across multiple regions with automatic load balancing\.'\s*\}\s*description: 'Scale effortlessly across multiple regions with automatic load balancing\.'\s*\}\s*\]/g,
    replace: "description: 'Scale effortlessly across multiple regions with automatic load balancing.'\n    }\n  ];"
  },
  // Pattern 2: Extra closing tags in JSX
  {
    search: /<\/a>\s*<\/div>\s*<\/div>\s*<\/div>\s*<\/section>/g,
    replace: "</a>\n            </div>\n          </div>\n        </section>"
  },
  // Pattern 3: Missing closing Helmet tag
  {
    search: /<meta name="keywords" content="[^"]*" \/>\s*<\/Helmet>/g,
    replace: '<meta name="keywords" content="$1" />\n      </Helmet>'
  }
];

// Get all TypeScript/TSX files in the app directory
const files = await glob('app/**/*.{ts,tsx}', { cwd: import.meta.url.replace('file://', '').replace('/fix-jsx-errors.js', '') });

let fixedFiles = 0;

files.forEach(file => {
  const filePath = path.join(__dirname, file);
  let content = fs.readFileSync(filePath, 'utf8');
  let modified = false;

  patterns.forEach(pattern => {
    const newContent = content.replace(pattern.search, pattern.replace);
    if (newContent !== content) {
      content = newContent;
      modified = true;
    }
  });

  if (modified) {
    fs.writeFileSync(filePath, content);
    console.log(`Fixed: ${file}`);
    fixedFiles++;
  }
});

console.log(`\nFixed ${fixedFiles} files`);