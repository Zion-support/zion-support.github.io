const fs = require('fs');

const filePath = '/workspace/app/accessibility/page.tsx';
let content = fs.readFileSync(filePath, 'utf8');

// Remove any stray characters that might be causing issues
content = content.replace(/[^\x20-\x7E\n\r\t]/g, ''); // Remove non-printable characters except newlines, tabs, and carriage returns
content = content.replace(/,\s*-\s*>\s*/g, ''); // Remove stray ,-> patterns
content = content.replace(/\|\s*/g, ''); // Remove stray | patterns
content = content.replace(/`\s*-\s*>\s*/g, ''); // Remove stray `-> patterns

// Clean up any double spaces
content = content.replace(/\s{2,}/g, ' ');

// Clean up any stray characters around section tags
content = content.replace(/\s*,\s*-\s*>\s*<\/section>/g, '</section>');
content = content.replace(/\s*\|\s*<\/section>/g, '</section>');
content = content.replace(/\s*`\s*-\s*>\s*<\/section>/g, '</section>');

fs.writeFileSync(filePath, content, 'utf8');
console.log('Cleaned accessibility page');