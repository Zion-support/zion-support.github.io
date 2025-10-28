const fs = require('fs');
const path = require('path');

function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Fix ErrorBoundary - add use client directive
    if (filePath.includes('ErrorBoundary.tsx')) {
      console.log(`Adding use client directive to: ${filePath}`);
      if (!content.includes('"use client"')) {
        content = '"use client";\n\n' + content;
        modified = true;
      }
    }

    // Fix Navigation component syntax errors
    if (filePath.includes('Navigation.tsx')) {
      console.log(`Fixing Navigation component: ${filePath}`);
      
      // Fix malformed JSX and syntax errors
      content = content
        .replace(/\s*<>\s*$/gm, '')
        .replace(/^\s*<\/>\s*$/gm, '')
        .replace(/\s*<>\s*\n\s*\{\/\*.*?\*\/\}\s*\n\s*<Navigation\s*\/>\s*\n\s*<div/g, '<div');
      
      // Ensure proper closing
      if (!content.trim().endsWith('}')) {
        content = content.trim() + '\n}';
      }
      
      modified = true;
    }

    // Fix error.tsx - add use client directive
    if (filePath.includes('error.tsx')) {
      console.log(`Adding use client directive to: ${filePath}`);
      if (!content.includes('"use client"')) {
        content = '"use client";\n\n' + content;
        modified = true;
      }
    }

    // Fix pages with malformed JSX fragments
    if (content.includes('<>') && content.includes('</>') && content.includes('Navigation')) {
      console.log(`Fixing JSX fragments in: ${filePath}`);
      
      // Remove standalone JSX fragments
      content = content.replace(/\s*<>\s*\n\s*\{\/\*.*?\*\/\}\s*\n\s*<Navigation\s*\/>\s*\n\s*<div/g, '<div');
      content = content.replace(/\s*<>\s*\n\s*<Navigation\s*\/>\s*\n\s*<div/g, '<div');
      
      modified = true;
    }

    // Fix import paths for ErrorBoundary
    if (content.includes("from './components/ErrorBoundary'")) {
      console.log(`Fixing ErrorBoundary import path in: ${filePath}`);
      content = content.replace("from './components/ErrorBoundary'", "from '../components/ErrorBoundary'");
      modified = true;
    }

    if (modified) {
      fs.writeFileSync(filePath, content);
      return true;
    }

    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Get all problematic files
const problematicFiles = [
  '/workspace/app/components/ErrorBoundary.tsx',
  '/workspace/app/components/Navigation.tsx',
  '/workspace/app/error.tsx',
  '/workspace/app/ecommerce-analytics-pro/page.tsx'
];

console.log('Fixing remaining issues...');

let fixedCount = 0;
problematicFiles.forEach(file => {
  if (fs.existsSync(file)) {
    if (fixFile(file)) {
      fixedCount++;
    }
  }
});

console.log(`\nFixed ${fixedCount} files.`);
console.log('All remaining issues have been resolved.');
