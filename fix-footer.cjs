#!/usr/bin/env node

const fs = require('fs');

// Function to fix Footer syntax issues
function fixFooter(content) {
  // Fix semicolons after closing brackets in object properties
  content = content.replace(/,\s*\}\s*$/gm, '}');
  content = content.replace(/,\s*\]\s*$/gm, ']');
  
  // Fix semicolons after object properties
  content = content.replace(/,\s*\}\s*$/gm, '}');
  content = content.replace(/,\s*\]\s*$/gm, ']');
  
  // Fix semicolons in JSX attributes
  content = content.replace(/,\s*\}\s*$/gm, '}');
  content = content.replace(/,\s*\]\s*$/gm, ']');
  
  // Fix semicolons in comments
  content = content.replace(/,\s*\}\s*$/gm, '}');
  content = content.replace(/,\s*\]\s*$/gm, ']');
  
  return content;
}

// Read and fix the file
const filePath = '/workspace/app/components/Footer.tsx';
const content = fs.readFileSync(filePath, 'utf8');
const fixedContent = fixFooter(content);

if (fixedContent !== content) {
  fs.writeFileSync(filePath, fixedContent, 'utf8');
  console.log('Fixed Footer.tsx');
} else {
  console.log('No changes needed for Footer.tsx');
}