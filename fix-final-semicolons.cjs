#!/usr/bin/env node;
const fs = require('fs');
const path = require('path');

// Function to fix all remaining semicolons in JSX;
function fixFinalSemicolons(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // More specific fixes for remaining semicolons;
    const fixes = [
      // Fix JSX attribute semicolons;
      { pattern: /(\w+)='([^']*);'/g, replacement: "$1='$2'" }, { pattern: /(\w+)="([^"]*);"/g, replacement: '$1="$2"' },
      // Fix JSX closing tag semicolons;
      { pattern: /(\/>);/g, replacement: '$1' }, { pattern: /(<\/[^>]+>);/g, replacement: '$1' },
      // Fix JSX opening tag semicolons;
      { pattern: /(>);/g, replacement: '$1' },
      // Fix className semicolons;
      { pattern: /className='([^']*);'/g, replacement: "className='$1'" }, { pattern: /className="([^"]*);"/g, replacement: 'className="$1"' },
      // Fix href semicolons;
      { pattern: /href='([^']*);'/g, replacement: "href='$1'" }, { pattern: /href="([^"]*);"/g, replacement: 'href="$1"' },
      // Fix type semicolons;
      { pattern: /type='([^']*);'/g, replacement: "type='$1'" }, { pattern: /type="([^"]*);"/g, replacement: 'type="$1"' },
      // Fix import statements that got corrupted;
      { pattern: /}\s*import\s+/g, replacement: '}\n\nimport ' } ];

    fixes.forEach(fix => {
      const newContent = content.replace(fix.pattern, fix.replacement);
      if (newContent !== content) {
        content = newContent;
        modified = true}
    });

    if (modified) {
      fs.writeFileSync(filePath, content, `utf8`);
      console.log(`Fixed final semicolons in: ${filePath}`);
      return true}
    return false} catch (error) { 
    console.error(`Error fixing ${filePath }:`, error.message);
    return false}
}

// Specific files that need fixing;
const filesToFix = [
  `components/SEO.tsx`,
  'components/ui/Badge.tsx',
  'pages/NotFound.tsx',
  'pages/enhanced-home.tsx',
  'pages/index.p.tsx' ];

console.log('🔧 Fixing final semicolons...');
let fixedCount = 0;

filesToFix.forEach(file => {
  if (fs.existsSync(file)) {
    if (fixFinalSemicolons(file)) {
      fixedCount++}
  }
});

console.log(`✅ Fixed final semicolons in ${fixedCount} files`);
