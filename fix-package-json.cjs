const fs = require('fs');

// Read package.json
let content = fs.readFileSync('package.json', 'utf8');

// Remove all merge conflict markers and keep HEAD version
=======
content = content.replace(/\n?/g, '');
content = content.replace(/.*?\n?/g, '');
content = content.replace(/content = content.replace(/content = content.replace(/// Clean up any remaining artifacts
content = content.replace(/\n\s*\n\s*\n/g, '\n\n');
content = content.replace(/\n\s*\n\s*\n/g, '\n\n');

// Remove any remaining conflict markers
console.log('package.json conflicts resolved!');