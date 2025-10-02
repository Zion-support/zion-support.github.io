#!/usr/bin/env node

import fs from 'fs';

// Files with syntax errors that need to be fixed
const filesToFix = [
  'src/components/Revolutionary2026ContentMegaBanner.tsx',
  'src/pages/AIMicroSAAS.tsx',
  'src/pages/AISolutions.tsx',
  'src/pages/About.tsx',
  'src/pages/AboutPage.tsx',
  'src/pages/CaseStudiesPage.tsx',
  'src/pages/ComprehensiveServices.tsx',
  'src/pages/Demo.tsx',
  'src/pages/Home.tsx',
  'src/pages/ITServices.tsx',
  'src/pages/Resources.tsx',
  'src/pages/Support.tsx'
];

function fixSyntaxErrors(filePath) {
  if (!fs.existsSync(filePath)) {
    console.log(`File not found: ${filePath}`);
    return;
  }

  let content = fs.readFileSync(filePath, 'utf8');
  let modified = false;

  // Fix trailing commas in imports
  content = content.replace(/,\s*\)/g, ')');
  
  // Fix missing commas in object properties
  content = content.replace(/(\w+)\s*\n\s*(\w+)/g, '$1,\n    $2');
  
  // Fix missing commas in array elements
  content = content.replace(/(\w+)\s*\n\s*{/g, '$1,\n  {');

  if (content !== fs.readFileSync(filePath, 'utf8')) {
    fs.writeFileSync(filePath, content);
    console.log(`Fixed syntax errors in: ${filePath}`);
    modified = true;
  }
}

// Apply fixes
filesToFix.forEach(file => {
  fixSyntaxErrors(file);
});

console.log('Syntax error fixes applied!');