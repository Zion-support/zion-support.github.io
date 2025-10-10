#!/usr/bin/env node

const fs = require('fs');

// Function to fix malformed JSX in Footer
function fixFooterJSX(content) {
  // Fix malformed JSX tags with colons
  content = content.replace(/(\w+):\s*className=/g, '$1 className=');
  
  // Fix malformed closing tags
  content = content.replace(/(\w+):\s*\/>/g, '$1 />');
  
  // Fix malformed opening tags
  content = content.replace(/(\w+):\s*>/g, '$1>');
  
  // Fix extra quotes
  content = content.replace(/"\s*>/g, '>');
  
  return content;
}

// Process Footer.tsx
try {
  const content = fs.readFileSync('app/components/Footer.tsx', 'utf8');
  const fixed = fixFooterJSX(content);
  
  if (content !== fixed) {
    fs.writeFileSync('app/components/Footer.tsx', fixed, 'utf8');
    console.log('Fixed Footer.tsx');
  }
} catch (error) {
  console.error('Error processing Footer.tsx:', error.message);
}