#!/usr/bin/env node

import fs from 'fs';
import path from 'path';

// Read the App.tsx file
const appTsxPath = '/workspace/src/App.tsx';
const appContent = fs.readFileSync(appTsxPath, 'utf8');

// Extract all import statements
const importRegex = /import\s+(\w+)\s+from\s+['"](\.\/pages\/[^'"]+)['"];?/g;
const imports = [];
let match;

while ((match = importRegex.exec(appContent)) !== null) {
  imports.push({
    component: match[1],
    path: match[2]
  });
}

// Check which files exist and which don't
const missingImports = [];
const existingImports = [];

for (const importItem of imports) {
  const fullPath = path.join('/workspace/src', importItem.path + '.tsx');
  if (fs.existsSync(fullPath)) {
    existingImports.push(importItem);
  } else {
    missingImports.push(importItem);
  }
}

console.log('Missing imports:');
missingImports.forEach(item => {
  console.log(`- ${item.component} from ${item.path}`);
});

console.log('\nTotal missing:', missingImports.length);
console.log('Total existing:', existingImports.length);