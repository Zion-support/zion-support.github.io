#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

// Read App.tsx
const appTsxPath = '/workspace/App.tsx';
let content = fs.readFileSync(appTsxPath, 'utf8');

// Find all import statements that reference files
const importMatches = content.match(/import.*from\s+['"](\.\/[^'"]+)['"]/g) || [];
const lazyImportMatches = content.match(/React\.lazy\(\(\)\s*=>\s*import\(['"](\.\/[^'"]+)['"]\)/g) || [];

console.log(`Found ${importMatches.length} regular imports and ${lazyImportMatches.length} lazy imports`);

// Check each import
const brokenImports = [];

[...importMatches, ...lazyImportMatches].forEach(importLine => {
  const match = importLine.match(/['"](\.\/[^'"]+)['"]/);
  if (match) {
    const importPath = match[1];
    const fullPath = path.resolve('/workspace', importPath + '.tsx');
    const fullPathTs = path.resolve('/workspace', importPath + '.ts');
    
    if (!fs.existsSync(fullPath) && !fs.existsSync(fullPathTs)) {
      brokenImports.push({ importLine, importPath });
      console.log(`Broken import: ${importPath}`);
    }
  }
});

// Remove broken imports and their corresponding routes
brokenImports.forEach(({ importLine, importPath }) => {
  // Remove the import line
  content = content.replace(importLine + '\n', '');
  
  // Extract the component name from the import path
  const componentName = importPath.split('/').pop().replace(/^[a-z]/, (match) => match.toUpperCase()) + 'Page';
  
  // Find and replace the route
  const routePattern = new RegExp(`<Route\\s+path="[^"]*"\\s+element={<${componentName}\\s*/>}\\s*/>`, 'g');
  content = content.replace(routePattern, `<Route path="/coming-soon" element={<div>Page coming soon</div>} />`);
  
  console.log(`Removed import and route for: ${componentName}`);
});

// Write the fixed content back
fs.writeFileSync(appTsxPath, content);
console.log(`Fixed ${brokenImports.length} broken imports`);