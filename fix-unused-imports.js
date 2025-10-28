import fs from 'fs';
import path from 'path';
import { glob } from 'glob';

const files = glob.sync('app/**/*.{ts,tsx}', { cwd: '/workspace' });

files.forEach(file => {
  const filePath = path.join('/workspace', file);
  let content = fs.readFileSync(filePath, 'utf8');
  let modified = false;

  // Remove unused Head imports
  if (content.includes("import Head from 'next/head'") && !content.includes('<Head>')) {
    content = content.replace(/import Head from 'next\/head'\n?/g, '');
    modified = true;
  }

  if (modified) {
    fs.writeFileSync(filePath, content);
    console.log(`Fixed unused imports: ${file}`);
  }
});

console.log('Unused import fixes completed');