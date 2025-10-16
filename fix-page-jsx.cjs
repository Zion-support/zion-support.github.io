const fs = require('fs');

// Read the file
let content = fs.readFileSync('app/page.tsx', 'utf8');

// Fix common JSX issues
const fixes = [
  // Fix malformed closing tags
  { pattern: /<\/di>/g, replacement: '</div>' },
  { pattern: /<\/h>/g, replacement: '</h3>' },
  { pattern: /<\/p>/g, replacement: '</p>' },
  { pattern: /<\/a>/g, replacement: '</a>' },
  { pattern: /<\/article>/g, replacement: '</article>' },
  
  // Fix malformed opening tags
  { pattern: /<div className="text-center"><\/div>/g, replacement: '<div className="text-center">' },
  { pattern: /<article className="quantum-card p-4 sm:p-6 energy-pulse"><\/article>/g, replacement: '<article className="quantum-card p-4 sm:p-6 energy-pulse">' },
  { pattern: /<h3 className="[^"]*"><\/h>/g, replacement: (match) => match.replace('</h>', '</h3>') },
  { pattern: /<p className="[^"]*"><\/p>/g, replacement: (match) => match.replace('</p>', '</p>') },
  { pattern: /<a href="[^"]*" className="[^"]*"><\/a>/g, replacement: (match) => match.replace('</a>', '</a>') },
  
  // Fix content outside tags
  { pattern: /<div className="text-4xl[^>]*><\/div>([^<]+)<\/div>/g, replacement: '<div className="text-4xl$1">$2</div>' },
  { pattern: /<h3[^>]*><\/h3>([^<]+)<\/h3>/g, replacement: '<h3$1">$2</h3>' },
  { pattern: /<p[^>]*><\/p>([^<]+)<\/p>/g, replacement: '<p$1">$2</p>' },
  { pattern: /<a[^>]*><\/a>([^<]+)<\/a>/g, replacement: '<a$1">$2</a>' },
  
  // Fix specific patterns
  { pattern: /<div className="text-lg[^>]*><\/div>([^<]+)<\/div>/g, replacement: '<div className="text-lg$1">$2</div>' },
  { pattern: /<a href="[^"]*" className="[^"]*"><\/a>([^<]+)<\/a>/g, replacement: '<a href="$1" className="$2">$3</a>' },
];

// Apply fixes
fixes.forEach(fix => {
  if (typeof fix.replacement === 'function') {
    content = content.replace(fix.pattern, fix.replacement);
  } else {
    content = content.replace(fix.pattern, fix.replacement);
  }
});

// Write the fixed content back
fs.writeFileSync('app/page.tsx', content);
console.log('Fixed JSX issues in app/page.tsx');