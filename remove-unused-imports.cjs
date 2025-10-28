#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Files that have unused ErrorBoundary imports
const filesToFix = [
  'app/5g-edge-computing/page.tsx',
  'app/5g-implementation/page.tsx',
  'app/5g-iot-solutions/page.tsx',
  'app/accessibility-page/page.tsx'
];

function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Remove unused ErrorBoundary imports
    content = content.replace(/import ErrorBoundary from '\.\.\/components\/ErrorBoundary';\n/g, '');
    content = content.replace(/import { ErrorBoundary } from '\.\.\/components\/ErrorBoundary';\n/g, '');
    content = content.replace(/import ErrorBoundary from '\.\.\/\.\.\/components\/ErrorBoundary';\n/g, '');
    content = content.replace(/import { ErrorBoundary } from '\.\.\/\.\.\/components\/ErrorBoundary';\n/g, '');
    
    // Clean up extra whitespace
    content = content.replace(/\n\s*\n\s*\n/g, '\n\n');
    
    fs.writeFileSync(filePath, content);
    console.log(`Fixed: ${filePath}`);
    
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
}

// Fix all files
filesToFix.forEach(filePath => {
  const fullPath = path.join(process.cwd(), filePath);
  if (fs.existsSync(fullPath)) {
    fixFile(fullPath);
  } else {
    console.log(`File not found: ${filePath}`);
  }
});

console.log('Done removing unused imports!');