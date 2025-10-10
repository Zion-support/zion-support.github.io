const fs = require('fs');

// Read the Navigation.tsx file
let content = fs.readFileSync('/workspace/app/components/Navigation.tsx', 'utf8');

// Fix all Link components with incorrect syntax
// Pattern: <Link} key=... to=... className=... onClick=... >
content = content.replace(
  /<Link\}\s+key=([^}]+)\s+to=([^}]+)\s+className=([^}]+)\s+onClick=([^}]+)\s*>/g,
  '<Link\n                          key=$1\n                          to=$2\n                          className=$3\n                          onClick=$4\n                        >'
);

// Also fix any remaining href attributes to to attributes
content = content.replace(/href=/g, 'to=');

// Write the fixed content back
fs.writeFileSync('/workspace/app/components/Navigation.tsx', content, 'utf8');

console.log('Fixed all Navigation.tsx Link components');

// Also fix Footer.tsx
let footerContent = fs.readFileSync('/workspace/app/components/Footer.tsx', 'utf8');
footerContent = footerContent.replace(/href=/g, 'to=');
fs.writeFileSync('/workspace/app/components/Footer.tsx', footerContent, 'utf8');

console.log('Fixed all Footer.tsx Link components');