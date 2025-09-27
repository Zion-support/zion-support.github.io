#!/usr/bin/env node

import fs from 'fs';
import path from 'path';

const pagesToFix = [
  'pages/contact.tsx',
  'pages/services.tsx',
  'pages/blog.tsx',
  'pages/enhanced-home.tsx',
  'pages/portfolio.tsx',
  'pages/privacy-policy.tsx',
  'pages/faq.tsx'
];

function fixPage(filePath) {
  try {
    if (!fs.existsSync(filePath)) {
      console.log(`File not found: ${filePath}`);
      return false;
    }

    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Comment out problematic imports
    content = content.replace(
      /import Navigation from ['"][^'"]+['"];/g,
      '// import Navigation from \'../src/components/Navigation\';'
    );
    
    content = content.replace(
      /import ErrorBoundary from ['"][^'"]+['"];/g,
      '// import ErrorBoundary from \'../src/components/ErrorBoundary\';'
    );
    
    content = content.replace(
      /import \{ ErrorBoundary \} from ['"][^'"]+['"];/g,
      '// import { ErrorBoundary } from \'../src/components/ErrorBoundary\';'
    );

    // Comment out component usage
    content = content.replace(
      /<ErrorBoundary>/g,
      '{/* <ErrorBoundary> */}'
    );
    
    content = content.replace(
      /<\/ErrorBoundary>/g,
      '{/* </ErrorBoundary> */}'
    );
    
    content = content.replace(
      /<Navigation \/>/g,
      '{/* <Navigation /> */}'
    );

    if (content !== fs.readFileSync(filePath, 'utf8')) {
      fs.writeFileSync(filePath, content);
      console.log(`Fixed: ${filePath}`);
      modified = true;
    } else {
      console.log(`No changes needed: ${filePath}`);
    }

    return modified;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

// Fix all pages
let fixedCount = 0;
for (const file of pagesToFix) {
  if (fixPage(file)) {
    fixedCount++;
  }
}

console.log(`\nFixed ${fixedCount} out of ${pagesToFix.length} pages.`);