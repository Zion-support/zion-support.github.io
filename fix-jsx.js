import fs from 'fs';

// Read the file
let content = fs.readFileSync('/workspace/app/page.tsx', 'utf8');

// Fix malformed JSX patterns
const fixes = [
  // Fix headings with semicolons
  { pattern: /(\s+)([^<]+);\s*<\/\s*$/gm, replacement: '$1$2\n$1</h2>' },
  { pattern: /(\s+)([^<]+);\s*<\/\s*$/gm, replacement: '$1$2\n$1</h3>' },
  { pattern: /(\s+)([^<]+);\s*<\/\s*$/gm, replacement: '$1$2\n$1</p>' },
  { pattern: /(\s+)([^<]+);\s*<\/\s*$/gm, replacement: '$1$2\n$1</div>' },
  { pattern: /(\s+)([^<]+);\s*<\/\s*$/gm, replacement: '$1$2\n$1</span>' },
  { pattern: /(\s+)([^<]+);\s*<\/\s*$/gm, replacement: '$1$2\n$1</button>' },
  { pattern: /(\s+)([^<]+);\s*<\/\s*$/gm, replacement: '$1$2\n$1</label>' },
  { pattern: /(\s+)([^<]+);\s*<\/\s*$/gm, replacement: '$1$2\n$1</option>' },
];

// Apply fixes
fixes.forEach(fix => {
  content = content.replace(fix.pattern, fix.replacement);
});

// Write the fixed content back
fs.writeFileSync('/workspace/app/page.tsx', content);

console.log('Fixed malformed JSX elements');