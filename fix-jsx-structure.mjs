#!/usr/bin/env node

import fs from 'fs';

const pagesToFix = [
  'pages/blog.tsx',
  'pages/contact.tsx',
  'pages/enhanced-home.tsx',
  'pages/faq.tsx',
  'pages/portfolio.tsx',
  'pages/privacy-policy.tsx',
  'pages/services.tsx'
];

function fixPage(filePath) {
  try {
    if (!fs.existsSync(filePath)) {
      console.log(`File not found: ${filePath}`);
      return false;
    }

    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Fix JSX structure issues
    // Replace commented out opening tags with proper JSX
    content = content.replace(
      /\{\/\* <ErrorBoundary>\s*<SEO \/>\s*<Navigation \/> \*\/\}/g,
      '<>'
    );
    
    content = content.replace(
      /\{\/\* <ErrorBoundary>\s*<Navigation \/> \*\/\}/g,
      '<>'
    );
    
    content = content.replace(
      /\{\/\* <ErrorBoundary> \*\/\}/g,
      '<>'
    );

    // Replace commented out closing tags
    content = content.replace(
      /\{\/\* <\/ErrorBoundary> \*\/\}/g,
      '</>'
    );

    // Fix any remaining JSX structure issues
    content = content.replace(
      /return \(\s*\{[^}]*\}\s*<[^>]*>/g,
      (match) => {
        return match.replace(/\{[^}]*\}/, '');
      }
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