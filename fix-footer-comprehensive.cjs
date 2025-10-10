#!/usr/bin/env node

const fs = require('fs');

// Function to fix all JSX issues in Footer
function fixFooterComprehensive(content) {
  // Fix missing closing quotes in className
  content = content.replace(/className="([^"]*?)(\n)/g, 'className="$1"\n');
  
  // Fix missing closing quotes in other attributes
  content = content.replace(/(\w+)="([^"]*?)(\n)/g, '$1="$2"\n');
  
  // Fix malformed closing tags
  content = content.replace(/(\w+):\s*\/>/g, '$1 />');
  
  // Fix malformed opening tags
  content = content.replace(/(\w+):\s*>/g, '$1>');
  
  // Fix extra quotes at the end of lines
  content = content.replace(/"\s*$/gm, '');
  
  // Fix content outside Link tags
  content = content.replace(/(\s+)(\w+="[^"]*")\s*\n\s*([^<]+)\s*\n\s*<\/Link>/g, '$1$2\n$1>\n$1  $3\n$1</Link>');
  
  return content;
}

// Process Footer.tsx
try {
  const content = fs.readFileSync('app/components/Footer.tsx', 'utf8');
  const fixed = fixFooterComprehensive(content);
  
  if (content !== fixed) {
    fs.writeFileSync('app/components/Footer.tsx', fixed, 'utf8');
    console.log('Fixed Footer.tsx comprehensively');
  }
} catch (error) {
  console.error('Error processing Footer.tsx:', error.message);
}