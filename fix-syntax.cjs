const fs = require('fs');

// Read the file
let content = fs.readFileSync('/workspace/app/page.tsx', 'utf8');

// Fix common syntax errors
content = content.replace(/;\s*$(\s*<\/)/gm, '$1');
content = content.replace(/;\s*$(\s*<[^/])/gm, '$1');
content = content.replace(/;\s*$(\s*[a-zA-Z])/gm, '$1');

// Fix specific patterns
content = content.replace(/([^>])\s*;\s*$(\s*<\/[a-zA-Z])/gm, '$1$2');
content = content.replace(/([^>])\s*;\s*$(\s*<[a-zA-Z])/gm, '$1$2');

// Write the fixed content back
fs.writeFileSync('/workspace/app/page.tsx', content);

console.log('Syntax errors fixed!');