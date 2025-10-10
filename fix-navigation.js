import fs from 'fs';

const filePath = 'app/components/Navigation.tsx';
let content = fs.readFileSync(filePath, 'utf8');

// Fix malformed JSX tags
content = content.replace(/<\/div><div>/g, '<div>');
content = content.replace(/<\/div><div className=/g, '<div className=');

fs.writeFileSync(filePath, content, 'utf8');
console.log('Fixed Navigation component');