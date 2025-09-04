const fs = require('fs');

// Read the file
let content = fs.readFileSync('pages/micro-saas.tsx', 'utf8');

// Fix indentation for closing brackets
// Look for patterns like:
// 'some text'
// ],
// and replace with:
// 'some text'
//       ],

content = content.replace(
  /(\s+'[^']+'\s*)\n(\s*\]),/g,
  '$1\n      ],'
);

// Write the fixed content back
fs.writeFileSync('pages/micro-saas.tsx', content);

console.log('Fixed indentation in micro-saas.tsx');