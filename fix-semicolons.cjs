const fs = require('fs');

const filePath = '/workspace/data/api-docs/v1.ts';
let content = fs.readFileSync(filePath, 'utf8');

// Replace semicolons with commas in object properties
content = content.replace(/;(\s*[}\]])/g, ',$1');
content = content.replace(/;(\s*[a-zA-Z_])/g, ',$1');

// Fix specific patterns
content = content.replace(/(\w+):\s*'([^']+)';/g, '$1: \'$2\',');
content = content.replace(/(\w+):\s*(\d+);/g, '$1: $2,');
content = content.replace(/(\w+):\s*(\[.*?\]);/g, '$1: $2,');
content = content.replace(/(\w+):\s*(\{.*?\});/g, '$1: $2,');

// Fix array items
content = content.replace(/\]\s*;/g, '],');

// Fix object closing
content = content.replace(/\}\s*;/g, '},');

// Fix the last item in arrays/objects (remove trailing comma)
content = content.replace(/,(\s*[}\]])/g, '$1');

fs.writeFileSync(filePath, content);
console.log('Fixed semicolons in', filePath);