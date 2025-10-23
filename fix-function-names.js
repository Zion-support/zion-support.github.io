#!/usr/bin/env node

import fs from 'fs';
import path from 'path';

// List of files that need function name fixes
const filesToFix = [
  'app/5g-edge-computing/page.tsx',
  'app/5g-implementation/page.tsx',
  'app/5g-iot-solutions/page.tsx',
  'app/5g-mobile-applications/page.tsx',
  'app/5g-network-infrastructure/page.tsx',
  'app/5g-private-networks/page.tsx',
  'app/5g-smart-city-solutions/page.tsx',
  'app/5g-solutions/page.tsx',
  'app/contact/page-broken2.tsx',
  'app/not-found.tsx',
  'app/service-template.tsx',
  'app/sitemap.xml/page.tsx'
];

// Function to fix function names
function fixFunctionName(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Fix function names that start with numbers
    content = content.replace(/export default function (\d+)([a-zA-Z]+)Page\(\)/g, (match, number, name) => {
      const fixedName = number.replace(/\d/g, (digit) => {
        const words = ['Zero', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine'];
        return words[parseInt(digit)];
      }) + name;
      return `export default function ${fixedName}Page()`;
    });
    
    // Fix specific cases
    content = content.replace(/export default function 5g([a-zA-Z]+)Page\(\)/g, 'export default function FiveG$1Page()');
    content = content.replace(/export default function 5G([a-zA-Z]+)Page\(\)/g, 'export default function FiveG$1Page()');
    
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Fixed function name in: ${filePath}`);
    return true;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

// Main execution
console.log('Fixing function names...');

let fixedCount = 0;
let errorCount = 0;

filesToFix.forEach(filePath => {
  if (fs.existsSync(filePath)) {
    if (fixFunctionName(filePath)) {
      fixedCount++;
    } else {
      errorCount++;
    }
  } else {
    console.log(`File not found: ${filePath}`);
  }
});

console.log(`\nFixed ${fixedCount} files, ${errorCount} errors`);