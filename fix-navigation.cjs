const fs = require('fs');

// Read the file
let content = fs.readFileSync('/workspace/app/components/Navigation.tsx', 'utf8');

// Remove all duplicate Footer and closing fragment tags
content = content.replace(/\s*<Footer \/>\s*<\/>\s*/g, '');

// Remove any remaining duplicate closing tags
content = content.replace(/\s*<\/>\s*$/gm, '');

// Write the cleaned content back
fs.writeFileSync('/workspace/app/components/Navigation.tsx', content, 'utf8');

console.log('Fixed Navigation.tsx');