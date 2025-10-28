import fs from 'fs';
import path from 'path';
import { glob } from 'glob';

const files = glob.sync('app/**/*.{ts,tsx}', { cwd: '/workspace' });

files.forEach(file => {
  const filePath = path.join('/workspace', file);
  let content = fs.readFileSync(filePath, 'utf8');
  let modified = false;

  // Fix PagePage references to PageComponent
  if (content.includes('<PagePage')) {
    content = content.replace(/<PagePage/g, '<PageComponent');
    modified = true;
  }

  if (modified) {
    fs.writeFileSync(filePath, content);
    console.log(`Fixed PagePage references: ${file}`);
  }
});

console.log('PagePage reference fixes completed');