const fs = require('fs');

// Read the file
let content = fs.readFileSync('/workspace/app/page.tsx', 'utf8');

// Fix common syntax errors
content = content.replace(/;\s*$/gm, ''); // Remove trailing semicolons
content = content.replace(/  <\/\n/g, '\n          </'); // Fix malformed closing tags
content = content.replace(/  <\/\n          <\/h2>/g, '\n          </h2>'); // Fix h2 tags
content = content.replace(/  <\/\n          <\/h3>/g, '\n          </h3>'); // Fix h3 tags
content = content.replace(/  <\/\n          <\/p>/g, '\n          </p>'); // Fix p tags

// Write the fixed content back
fs.writeFileSync('/workspace/app/page.tsx', content);

console.log('Syntax errors fixed');
