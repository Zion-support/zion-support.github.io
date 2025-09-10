const fs = require('fs');

// Read package.json
let content = fs.readFileSync('package.json', 'utf8');

// Remove all merge conflict markers and keep HEAD version
<<<<<<< HEAD
content = content.replace(/>>>>>>> [a-f0-9]+\n?/g, '');
content = content.replace(/>>>>>>> origin\/[^\n]+\n?/g, '');

=======
content = content.replace(/\n?/g, '');
content = content.replace(/.*?\n?/g, '');
content = content.replace(/content = content.replace(/content = content.replace(/
>>>>>>> de7f6c5eff04de594f29a9b2825d434cd6b01985
// Clean up any remaining artifacts
content = content.replace(/\n\s*\n\s*\n/g, '\n\n');
content = content.replace(/\n\s*\n\s*\n/g, '\n\n');

// Remove any remaining conflict markers
<<<<<<< HEAD
=======
content = content.replace(/||
// Write the cleaned content back
fs.writeFileSync('package.json', content);

console.log('package.json conflicts resolved!');
>>>>>>> de7f6c5eff04de594f29a9b2825d434cd6b01985
