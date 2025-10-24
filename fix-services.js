const fs = require('fs');

let content = fs.readFileSync('app/data/services.ts', 'utf8');

// Fix common syntax errors
content = content.replace(/;\s*}/g, '}');
content = content.replace(/,\s*}/g, '}');
content = content.replace(/;\s*]/g, ']');
content = content.replace(/,\s*]/g, ']');
content = content.replace(/;\s*\)/g, ')');
content = content.replace(/,\s*\)/g, ')');

// Fix missing commas before properties
content = content.replace(/(\w+)\s*\n\s*(\w+):/g, '$1,\n    $2:');

// Fix missing commas in arrays
content = content.replace(/(\w+)\s*\n\s*(\w+)/g, '$1,\n    $2');

fs.writeFileSync('app/data/services.ts', content);
console.log('Fixed services.ts syntax errors');