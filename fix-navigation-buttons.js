import fs from 'fs';

const filePath = './app/components/Navigation.tsx';
let content = fs.readFileSync(filePath, 'utf8');

// Fix all button semicolons
content = content.replace(/<button;/g, '<button');

fs.writeFileSync(filePath, content);
console.log('Fixed all button semicolons in Navigation.tsx');