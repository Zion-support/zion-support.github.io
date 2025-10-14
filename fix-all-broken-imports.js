#!/usr/bin/env node

import fs from 'fs';
import path from 'path';

// Read App.tsx
const appTsxPath = '/workspace/App.tsx';
let content = fs.readFileSync(appTsxPath, 'utf8');

// Find all lazy imports
const lazyImportRegex = /const\s+(\w+)\s*=\s*React\.lazy\(\(\)\s*=>\s*import\(['"](\.\/[^'"]+)['"]\)\);/g;
const brokenImports = [];

let match;
while ((match = lazyImportRegex.exec(content)) !== null) {
  const componentName = match[1];
  const importPath = match[2];
  const fullPath = path.resolve('/workspace', importPath + '.tsx');
  const fullPathTs = path.resolve('/workspace', importPath + '.ts');
  
  if (!fs.existsSync(fullPath) && !fs.existsSync(fullPathTs)) {
    brokenImports.push({ componentName, importPath, fullMatch: match[0] });
    console.log(`Broken lazy import: ${componentName} -> ${importPath}`);
  }
}

// Remove broken lazy imports
brokenImports.forEach(({ fullMatch }) => {
  content = content.replace(fullMatch + '\n', '');
});

// Find and remove corresponding routes
const routeRegex = /<Route\s+path="[^"]*"\s+element={<(\w+)\s*\/>}\s*\/>/g;
const routesToRemove = [];

let routeMatch;
while ((routeMatch = routeRegex.exec(content)) !== null) {
  const componentName = routeMatch[1];
  const isBroken = brokenImports.some(bi => bi.componentName === componentName);
  if (isBroken) {
    routesToRemove.push(routeMatch[0]);
  }
}

// Remove broken routes
routesToRemove.forEach(route => {
  content = content.replace(route + '\n', '');
});

// Write the fixed content back
fs.writeFileSync(appTsxPath, content);
console.log(`Removed ${brokenImports.length} broken lazy imports and ${routesToRemove.length} broken routes`);