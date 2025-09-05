#!/usr/bin/env node

const fs = require('fs');

// Fix HTML entities in React components
function fixHtmlEntities(content) {
  return content
    .replace(/&amp;lt;/g, '<')
    .replace(/&amp;gt;/g, '>')
    .replace(/&amp;apos;/g, "'")
    .replace(/&amp;quot;/g, '"')
    .replace(/&amp;amp;/g, '&');
}

// Files to fix
const files = ['pages/about.tsx', 'pages/pricing.tsx', 'pages/services.tsx'];

files.forEach(file => {
  if (fs.existsSync(file)) {
    let content = fs.readFileSync(file, 'utf8');
    content = fixHtmlEntities(content);
    fs.writeFileSync(file, content);
    console.log(`Fixed HTML entities in: ${file}`);
  }
});

console.log('HTML entity fixes completed');