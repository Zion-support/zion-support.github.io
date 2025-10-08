import fs from 'fs';

const filePath = '/workspace/app/config/performance.ts';
let content = fs.readFileSync(filePath, 'utf8');

// Remove extra semicolons after every line
content = content.replace(/;$/gm, '');

// Fix specific syntax issues
content = content.replace(/:\s*-10,/g, 'priority: -10,');
content = content.replace(/:\s*-20,/g, 'priority: -20,');

// Remove extra semicolons at the end of lines that shouldn't have them
content = content.replace(/,\s*;$/gm, ',');
content = content.replace(/}\s*;$/gm, '}');

// Fix the specific syntax error
content = content.replace(/:\s*-10,/g, 'priority: -10,');
content = content.replace(/:\s*-20,/g, 'priority: -20,');

fs.writeFileSync(filePath, content);
console.log('Fixed performance config file');