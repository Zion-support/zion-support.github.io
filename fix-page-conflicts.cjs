const fs = require('fs');

// Read the page component
let content = fs.readFileSync('app/page.tsx', 'utf8');

// Remove all merge conflict markers
content = content.replace(/<<<<<<< HEAD[\s\S]*?=======[\s\S]*?>>>>>>> [^\n]+/g, '');
content = content.replace(/<<<<<<< HEAD[\s\S]*?>>>>>>> [^\n]+/g, '');

// Clean up any remaining conflict markers
content = content.replace(/=======[\s\S]*?>>>>>>> [^\n]+/g, '');

// Write the cleaned content back
fs.writeFileSync('app/page.tsx', content);
console.log('Page component merge conflicts fixed!');