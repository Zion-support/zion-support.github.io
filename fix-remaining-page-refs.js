import fs from 'fs';
import path from 'path';
import { glob } from 'glob';

const files = glob.sync('app/**/*.{ts,tsx}', { cwd: '/workspace' });

files.forEach(file => {
  const filePath = path.join('/workspace', file);
  let content = fs.readFileSync(filePath, 'utf8');
  let modified = false;

  // Fix remaining Page references to PageComponent
  if (content.includes('<Page ') && !content.includes('function Page(')) {
    content = content.replace(/<Page /g, '<PageComponent ');
    modified = true;
  }

  if (modified) {
    fs.writeFileSync(filePath, content);
    console.log(`Fixed Page references: ${file}`);
  }
});

console.log('Page reference fixes completed');