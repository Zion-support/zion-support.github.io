import fs from 'fs';

const filePath = './app/components/Navigation.tsx';
let content = fs.readFileSync(filePath, 'utf8');

// Fix all remaining semicolons
content = content.replace(/<a;/g, '<a');
content = content.replace(/<button;/g, '<button');
content = content.replace(/<Link;/g, '<Link');
content = content.replace(/>([^<]+);</g, '>$1<');

fs.writeFileSync(filePath, content);
console.log('Fixed all remaining semicolons in Navigation.tsx');