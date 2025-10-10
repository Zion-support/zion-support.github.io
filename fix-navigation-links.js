import fs from 'fs';

const filePath = './app/components/Navigation.tsx';
let content = fs.readFileSync(filePath, 'utf8');

// Fix all Link semicolons
content = content.replace(/<Link;/g, '<Link');

fs.writeFileSync(filePath, content);
console.log('Fixed all Link semicolons in Navigation.tsx');