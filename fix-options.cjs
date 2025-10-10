const fs = require('fs');

// Read the file
let content = fs.readFileSync('/workspace/app/page.tsx', 'utf8');

// Fix malformed option tags
content = content.replace(/<option([^>]*)><\/optio>([^<]+)<\/option>/g, '<option$1>$2</option>');

// Write the fixed content back
fs.writeFileSync('/workspace/app/page.tsx', content);

console.log('Fixed malformed option tags in page.tsx');