const fs = require('fs');

// Read the file
let content = fs.readFileSync('app/page.tsx', 'utf8');

// Fix common patterns
const patterns = [
  // Fix self-closing tags with content after them
  { regex: /(<[^>]+)><\/[^>]+>(\s*[^<]+)/g, replacement: '$1>$2' },
  // Fix malformed closing tags
  { regex: /<\/di>/g, replacement: '</div>' },
  { regex: /<\/h>/g, replacement: '</h3>' },
  // Fix self-closing article tags that should contain content
  { regex: /(<article[^>]+)><\/article>/g, replacement: '$1>' },
  // Fix self-closing div tags that should contain content
  { regex: /(<div[^>]+)><\/div>(\s*<[^>]+>)/g, replacement: '$1>$2' },
  // Fix self-closing p tags that should contain content
  { regex: /(<p[^>]+)><\/p>(\s*[^<]+)/g, replacement: '$1>$2' },
  // Fix self-closing a tags that should contain content
  { regex: /(<a[^>]+)><\/a>(\s*[^<]+)/g, replacement: '$1>$2' },
];

// Apply patterns
patterns.forEach(pattern => {
  content = content.replace(pattern.regex, pattern.replacement);
});

// Write the fixed content back
fs.writeFileSync('app/page.tsx', content);

console.log('HTML tags fixed successfully!');