const fs = require('fs');

// Read the Footer.tsx file
let content = fs.readFileSync('/workspace/app/components/Footer.tsx', 'utf8');

// Fix all href attributes to to attributes
content = content.replace(/href=/g, 'to=');

// Fix JSX syntax issues
content = content.replace(/\(\}/g, '(');
content = content.replace(/\}\s*\)/g, ')');

// Write the fixed content back
fs.writeFileSync('/workspace/app/components/Footer.tsx', content, 'utf8');

console.log('Fixed Footer.tsx Link components');