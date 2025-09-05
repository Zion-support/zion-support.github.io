const fs = require('fs');

// Read package.json
let content = fs.readFileSync('package.json', 'utf8');

// Remove all merge conflict markers and keep HEAD version
content = content.replace(/>>>>>>> [a-f0-9]+\n?/g, '');
content = content.replace(/>>>>>>> origin\/[^\n]+\n?/g, '');

// Clean up any remaining artifacts
content = content.replace(/\n\s*\n\s*\n/g, '\n\n');
content = content.replace(/\n\s*\n\s*\n/g, '\n\n');

// Remove any remaining conflict markers
