#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// List of files that still have errors
const filesToFix = [
  'app/5g-edge-computing/page.tsx',
  'app/5g-implementation/page.tsx', 
  'app/5g-iot-solutions/page.tsx',
  'app/accessibility-page/page.tsx'
];

function fixPageFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Remove the broken JSX pattern
    content = content.replace(/\(props\) \{\s*return \(\s*<ErrorBoundary>\s*<\s*\{\.\.\.props\} \/>\s*<\/ErrorBoundary>\s*\);\s*\}/g, '');
    
    // Clean up any extra whitespace
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
    fixPageFile(fullPath);
  } else {
    console.log(`File not found: ${filePath}`);
  }
});

console.log('Done fixing remaining errors!');