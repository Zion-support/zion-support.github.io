import fs from 'fs';
import path from 'path';
import { glob } from 'glob';

const files = glob.sync('app/**/*.{ts,tsx}', { cwd: '/workspace' });

files.forEach(file => {
  const filePath = path.join('/workspace', file);
  let content = fs.readFileSync(filePath, 'utf8');
  let modified = false;

  // Remove unused Link imports
  if (content.includes("import Link from 'next/link'") && !content.includes('<Link')) {
    content = content.replace(/import Link from 'next\/link'\n?/g, '');
    modified = true;
  }

  if (modified) {
    fs.writeFileSync(filePath, content);
    console.log(`Fixed unused Link imports: ${file}`);
  }
});

console.log('Unused Link import fixes completed');