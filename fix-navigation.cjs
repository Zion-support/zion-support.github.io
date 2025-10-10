#!/usr/bin/env node

const fs = require('fs');

// Function to fix malformed JSX in Navigation
function fixNavigationJSX(content) {
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

// Process Navigation.tsx
try {
  const content = fs.readFileSync('app/components/Navigation.tsx', 'utf8');
  const fixed = fixNavigationJSX(content);
  
  if (content !== fixed) {
    fs.writeFileSync('app/components/Navigation.tsx', fixed, 'utf8');
    console.log('Fixed Navigation.tsx');
  }
} catch (error) {
  console.error('Error processing Navigation.tsx:', error.message);
}