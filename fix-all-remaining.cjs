const fs = require('fs');

// Read the Navigation.tsx file
let content = fs.readFileSync('/workspace/app/components/Navigation.tsx', 'utf8');

// Fix all remaining Link components with incorrect syntax
// Pattern: <Link} key=... to=... className=... onClick=... >
content = content.replace(
  /<Link\}\s+key=([^}]+)\s+to=([^}]+)\s+className=([^}]+)\s+onClick=([^}]+)\s*>/g,
  '<Link\n                          key=$1\n                          to=$2\n                          className=$3\n                          onClick=$4\n                        >'
);

// Also fix any remaining href attributes to to attributes
content = content.replace(/href=/g, 'to=');

// Fix any remaining JSX syntax issues
content = content.replace(/\(\}/g, '(');
content = content.replace(/\}\s*\)/g, ')');

// Fix any remaining malformed Link components
content = content.replace(/<Link\}\s+/g, '<Link ');

// Write the fixed content back
fs.writeFileSync('/workspace/app/components/Navigation.tsx', content, 'utf8');

console.log('Fixed all remaining Navigation.tsx Link components');