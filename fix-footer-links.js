import fs from 'fs';

const filePath = './app/components/Footer.tsx';
let content = fs.readFileSync(filePath, 'utf8');

// Fix all Link semicolons
content = content.replace(/<Link;/g, '<Link');

fs.writeFileSync(filePath, content);
console.log('Fixed all Link semicolons in Footer.tsx');