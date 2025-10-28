import fs from 'fs';
import path from 'path';
import { glob } from 'glob';

// Find all TypeScript/TSX files in the app directory
const files = glob.sync('app/**/*.{ts,tsx}', { cwd: '/workspace' });

console.log(`Found ${files.length} files to process`);

files.forEach(file => {
  const filePath = path.join('/workspace', file);
  let content = fs.readFileSync(filePath, 'utf8');
  let modified = false;

  // Fix any types in function parameters
  if (content.includes('props: any')) {
    content = content.replace(/props: any/g, 'props: Record<string, unknown>');
    modified = true;
  }

  // Fix any types in function parameters with different spacing
  if (content.includes('props:any')) {
    content = content.replace(/props:any/g, 'props: Record<string, unknown>');
    modified = true;
  }

  // Fix any types in other contexts
  if (content.includes(': any')) {
    content = content.replace(/: any/g, ': unknown');
    modified = true;
  }

  if (modified) {
    fs.writeFileSync(filePath, content);
    console.log(`Fixed any types: ${file}`);
  }
});

console.log('Any type fixes completed');