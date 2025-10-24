import fs from 'fs';

const filePath = './app/components/Navigation.tsx';
let content = fs.readFileSync(filePath, 'utf8');

// Fix semicolons in JSX text content
content = content.replace(/>([^<]+);</g, '>$1<');

fs.writeFileSync(filePath, content);
console.log('Fixed remaining semicolons in Navigation.tsx');