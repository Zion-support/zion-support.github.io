#!/usr/bin/env node

const fs = require('fs');

// Function to fix page.tsx syntax issues
function fixPage(content) {
  // Fix semicolons after comments
  content = content.replace(/,\s*\}\s*$/gm, '}');
  content = content.replace(/,\s*\]\s*$/gm, ']');
  
  return content;
}

// Read and fix the file
const filePath = '/workspace/app/page.tsx';
const content = fs.readFileSync(filePath, 'utf8');
const fixedContent = fixPage(content);

if (fixedContent !== content) {
  fs.writeFileSync(filePath, fixedContent, 'utf8');
  console.log('Fixed page.tsx');
} else {
  console.log('No changes needed for page.tsx');
}