import fs from 'fs';
import path from 'path';
import { glob } from 'glob';

// Find all TypeScript/TSX files in the app directory
const files = await glob('app/**/*.{ts,tsx}', { cwd: '/workspace' });

console.log(`Found ${files.length} files to check`);

let fixedCount = 0;

for (const file of files) {
  const filePath = path.join('/workspace', file);
  
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Remove ErrorBoundary imports
    if (content.includes("import ErrorBoundary from '@/components/ErrorBoundary'")) {
      content = content.replace("import ErrorBoundary from '@/components/ErrorBoundary';\n", '');
      content = content.replace("import ErrorBoundary from '@/components/ErrorBoundary'\n", '');
      modified = true;
    }
    
    if (content.includes("import { ErrorBoundary } from '@/components/ErrorBoundary'")) {
      content = content.replace("import { ErrorBoundary } from '@/components/ErrorBoundary';\n", '');
      content = content.replace("import { ErrorBoundary } from '@/components/ErrorBoundary'\n", '');
      modified = true;
    }
    
    if (content.includes("import ErrorBoundary from './components/ErrorBoundary'")) {
      content = content.replace("import ErrorBoundary from './components/ErrorBoundary';\n", '');
      content = content.replace("import ErrorBoundary from './components/ErrorBoundary'\n", '');
      modified = true;
    }
    
    if (content.includes("import { ErrorBoundary } from './components/ErrorBoundary'")) {
      content = content.replace("import { ErrorBoundary } from './components/ErrorBoundary';\n", '');
      content = content.replace("import { ErrorBoundary } from './components/ErrorBoundary'\n", '');
      modified = true;
    }
    
    // Remove ErrorBoundary wrapper
    if (content.includes('<ErrorBoundary>')) {
      content = content.replace(/<ErrorBoundary>\s*/, '');
      content = content.replace(/\s*<\/ErrorBoundary>/, '');
      modified = true;
    }
    
    // Remove ErrorBoundary wrapper with props
    if (content.includes('<ErrorBoundary ')) {
      content = content.replace(/<ErrorBoundary[^>]*>\s*/, '');
      content = content.replace(/\s*<\/ErrorBoundary>/, '');
      modified = true;
    }
    
    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed: ${file}`);
      fixedCount++;
    }
    
  } catch (error) {
    console.error(`Error processing ${file}:`, error.message);
  }
}

console.log(`Fixed ${fixedCount} files`);