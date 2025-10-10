const fs = require('fs');

// Read the src/page.tsx file
let content = fs.readFileSync('src/page.tsx', 'utf8');

// Fix malformed closing tags
content = content.replace(/;\s*<\/\s*/g, '');
content = content.replace(/;\s*<\/\s*$/gm, '');
content = content.replace(/;\s*<\/\s*\n/g, '\n');

// Fix specific patterns
content = content.replace(/;\s*<\/\s*([^>]+)>/g, '</$1>');
content = content.replace(/;\s*<\/\s*$/gm, '');

// Fix malformed closing tags that are just "  </"
content = content.replace(/\s*<\/\s*$/gm, '');

// Fix missing closing tags for headings and paragraphs
content = content.replace(/([^>])\s*;\s*$/gm, '$1');

// Write the cleaned content back
fs.writeFileSync('src/page.tsx', content, 'utf8');

console.log('src/page.tsx malformed tags fixed!');