#!/usr/bin/env node

import fs from 'fs';
import path from 'path';

// Find all files that might have invalid function names
const filesToCheck = [
  'app/5g-data-analytics/page.tsx',
  'app/5g-edge-computing/page.tsx',
  'app/5g-mobile-applications/page.tsx',
  'app/5g-network-infrastructure/page.tsx',
  'app/5g-private-networks/page.tsx',
  'app/5g-smart-city-solutions/page.tsx',
  'app/5g-solutions/page.tsx'
];

console.log('Fixing function names that start with numbers...');

let fixedCount = 0;

for (const filePath of filesToCheck) {
  try {
    if (fs.existsSync(filePath)) {
      let content = fs.readFileSync(filePath, 'utf8');
      
      // Fix function names that start with numbers
      content = content.replace(/export default function (\d+[a-zA-Z]+)/g, (match, funcName) => {
        const newName = 'Page' + funcName;
        console.log(`Fixing ${filePath}: ${funcName} -> ${newName}`);
        return `export default function ${newName}`;
      });
      
      fs.writeFileSync(filePath, content, 'utf8');
      fixedCount++;
    }
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
}

console.log(`Fixed ${fixedCount} files`);