#!/usr/bin/env node

const fs = require('fs');

// Read the CSS file
let content = fs.readFileSync('/workspace/app/styles/futuristic.css', 'utf8');

// Count opening and closing braces
const openBraces = (content.match(/\{/g) || []).length;
const closeBraces = (content.match(/\}/g) || []).length;

console.log(`Open braces: ${openBraces}, Close braces: ${closeBraces}`);

// If there are missing closing braces, add them
if (openBraces > closeBraces) {
  const missingBraces = openBraces - closeBraces;
  console.log(`Adding ${missingBraces} missing closing braces`);
  
  // Add missing closing braces at the end
  for (let i = 0; i < missingBraces; i++) {
    content += '\n}';
  }
}

// Write the fixed content back
fs.writeFileSync('/workspace/app/styles/futuristic.css', content);

console.log('Fixed CSS syntax issues');