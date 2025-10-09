const fs = require('fs');

const filePath = '/workspace/src/blog/page.tsx';
let content = fs.readFileSync(filePath, 'utf8');

// Fix missing commas in the blog posts array
content = content.replace(/(\s+stats:\s*\{\s*views:\s*\d+,\s*engagement:\s*\d+\s*\}\s*)(\s+id:)/g, '$1    },\n    {\n      $2');

fs.writeFileSync(filePath, content);
console.log('Fixed blog page comma issues!');