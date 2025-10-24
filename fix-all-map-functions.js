import fs from 'fs';

const filePath = './app/components/Navigation.tsx';
let content = fs.readFileSync(filePath, 'utf8');

// Fix all map functions that are missing closing parentheses
content = content.replace(/\)\s*}\s*<\/div>/g, '))</div>');
content = content.replace(/\)\s*}\s*<\/div>\s*<\/div>/g, '))</div></div>');

fs.writeFileSync(filePath, content);
console.log('Fixed all map function closing parentheses in Navigation.tsx');