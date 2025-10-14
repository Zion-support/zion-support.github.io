import fs from 'fs';

// Read the App.tsx file
let content = fs.readFileSync('App.tsx', 'utf8');

// Fix all the extra quotes in import statements
content = content.replace(/'/g, "'");

// Write the fixed content back
fs.writeFileSync('App.tsx', content);

console.log('Fixed App.tsx quotes');