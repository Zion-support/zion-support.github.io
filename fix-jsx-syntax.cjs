const fs = require('fs');
const path = require('path');

// Read the file
const filePath = '/workspace/app/page.tsx';
let content = fs.readFileSync(filePath, 'utf8');

// Fix common JSX syntax errors
const fixes = [
  // Fix malformed closing tags
  { pattern: /<\/di>/g, replacement: '</div>' },
  { pattern: /<\/h>/g, replacement: '</h3>' },
  { pattern: /<\/Suspense>/g, replacement: '</div>' },
  
  // Fix self-closing tags that should be opening tags
  { pattern: /<div([^>]*)><\/div>/g, replacement: '<div$1>' },
  { pattern: /<h1([^>]*)><\/h1>/g, replacement: '<h1$1>' },
  { pattern: /<h2([^>]*)><\/h2>/g, replacement: '<h2$1>' },
  { pattern: /<h3([^>]*)><\/h3>/g, replacement: '<h3$1>' },
  { pattern: /<p([^>]*)><\/p>/g, replacement: '<p$1>' },
  { pattern: /<section([^>]*)><\/section>/g, replacement: '<section$1>' },
  { pattern: /<article([^>]*)><\/article>/g, replacement: '<article$1>' },
  { pattern: /<main([^>]*)><\/main>/g, replacement: '<main$1>' },
  { pattern: /<div([^>]*)><\/div>/g, replacement: '<div$1>' },
  
  // Fix Suspense fallback syntax
  { pattern: /<Suspense fallback={<div><\/Suspense>}/g, replacement: '<Suspense fallback={<div></div>}>' },
  
  // Fix malformed JSX structure - close self-closing tags properly
  { pattern: /<div([^>]*)\s*><\/div>/g, replacement: '<div$1>' },
];

// Apply fixes
fixes.forEach(fix => {
  content = content.replace(fix.pattern, fix.replacement);
});

// Write the fixed content back
fs.writeFileSync(filePath, content, 'utf8');

console.log('JSX syntax fixes applied to page.tsx');