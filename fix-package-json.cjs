const fs = require('fs');

// Read package.json
let content = fs.readFileSync('package.json', 'utf8');

// Remove all merge conflict markers and keep HEAD version
<<<<<<< HEAD
<<<<<<< HEAD
content = content.replace(/\n?/g, '');
content = content.replace(/.*?\n?/g, '');
content = content.replace(/content = content.replace(/content = content.replace(/
=======
content = content.replace(/>>>>>>> [a-f0-9]+\n?/g, '');
content = content.replace(/>>>>>>> origin\/[^\n]+\n?/g, '');
=======
>>>>>>> pr-11913

>>>>>>> pr-11914
// Clean up any remaining artifacts
content = content.replace(/\n\s*\n\s*\n/g, '\n\n');
content = content.replace(/\n\s*\n\s*\n/g, '\n\n');

// Remove any remaining conflict markers
<<<<<<< HEAD
<<<<<<< HEAD
content = content.replace(/||
=======

>>>>>>> pr-11913
// Write the cleaned content back
fs.writeFileSync('package.json', content);

console.log('package.json conflicts resolved!');
=======
>>>>>>> pr-11914
