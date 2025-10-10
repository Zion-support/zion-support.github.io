const fs = require('fs');
const path = require('path');

function fixJSXSyntax(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Fix common malformed tag patterns
  const fixes = [
    // Fix self-closing tags with content
    { pattern: /<(\w+)([^>]*)><\/\1>([^<]+)<\/\1>/g, replacement: '<$1$2>$3</$1>' },
    // Fix malformed closing tags like </di> -> </div>
    { pattern: /<\/di>/g, replacement: '</div>' },
    { pattern: /<\/h>/g, replacement: '</h3>' },
    { pattern: /<\/p>/g, replacement: '</p>' },
    // Fix empty self-closing tags that should have content
    { pattern: /<(\w+)([^>]*)><\/\1>([^<]+)<\/\1>/g, replacement: '<$1$2>$3</$1>' },
    // Fix semicolons in JSX expressions
    { pattern: /;\s*\)/g, replacement: ')' },
    // Fix malformed Suspense fallbacks
    { pattern: /<div><\/Suspense>/g, replacement: '<div>Loading...</div>' },
    // Fix malformed object properties
    { pattern: /:\s*'([^']+)';\s*\)/g, replacement: ": '$1'\n          }" },
    // Fix malformed JSX expressions
    { pattern: /}\s*`\s*}/g, replacement: '}` }' },
  ];
  
  fixes.forEach(fix => {
    content = content.replace(fix.pattern, fix.replacement);
  });
  
  fs.writeFileSync(filePath, content);
  console.log(`Fixed JSX syntax in ${filePath}`);
}

// Fix the main page file
fixJSXSyntax('/workspace/app/page.tsx');