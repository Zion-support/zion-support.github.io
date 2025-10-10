import fs from 'fs';

// Read the file
let content = fs.readFileSync('/workspace/app/page.tsx', 'utf8');

// Fix all malformed JSX patterns
const fixes = [
  // Fix h3 tags that have wrong closing tags
  { pattern: /(\s+)([^<]+)\n\s*<\/h2>/g, replacement: '$1$2\n$1</h3>' },
  // Fix any remaining malformed closing tags
  { pattern: /(\s+)([^<]+);\s*$/gm, replacement: '$1$2' },
  // Fix merge conflict markers
  { pattern: /<<<<<<< HEAD[\s\S]*?=======[\s\S]*?>>>>>>> [^\n]+/g, replacement: '' },
  // Fix specific patterns
  { pattern: /(\s+)([^<]+)\n\s*<\/h2>/g, replacement: '$1$2\n$1</h3>' },
  { pattern: /(\s+)([^<]+)\n\s*<\/h2>/g, replacement: '$1$2\n$1</p>' },
  { pattern: /(\s+)([^<]+)\n\s*<\/h2>/g, replacement: '$1$2\n$1</div>' },
  { pattern: /(\s+)([^<]+)\n\s*<\/h2>/g, replacement: '$1$2\n$1</span>' },
  { pattern: /(\s+)([^<]+)\n\s*<\/h2>/g, replacement: '$1$2\n$1</label>' },
  { pattern: /(\s+)([^<]+)\n\s*<\/h2>/g, replacement: '$1$2\n$1</button>' },
  { pattern: /(\s+)([^<]+)\n\s*<\/h2>/g, replacement: '$1$2\n$1</a>' },
  // Fix specific closing tag mismatches
  { pattern: /(\s+)([^<]+)\n\s*<\/h2>/g, replacement: '$1$2\n$1</h3>' },
  { pattern: /(\s+)([^<]+)\n\s*<\/h2>/g, replacement: '$1$2\n$1</p>' },
  { pattern: /(\s+)([^<]+)\n\s*<\/h2>/g, replacement: '$1$2\n$1</div>' },
  { pattern: /(\s+)([^<]+)\n\s*<\/h2>/g, replacement: '$1$2\n$1</span>' },
  { pattern: /(\s+)([^<]+)\n\s*<\/h2>/g, replacement: '$1$2\n$1</label>' },
  { pattern: /(\s+)([^<]+)\n\s*<\/h2>/g, replacement: '$1$2\n$1</button>' },
  { pattern: /(\s+)([^<]+)\n\s*<\/h2>/g, replacement: '$1$2\n$1</a>' },
];

// Apply fixes multiple times to catch all patterns
for (let i = 0; i < 5; i++) {
  fixes.forEach(fix => {
    content = content.replace(fix.pattern, fix.replacement);
  });
}

// Write the fixed content back
fs.writeFileSync('/workspace/app/page.tsx', content);

console.log('Fixed all malformed JSX elements');