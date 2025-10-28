import fs from 'fs';
import path from 'path';
import { glob } from 'glob';

const files = glob.sync('app/**/*.{ts,tsx}', { cwd: '/workspace' });

files.forEach(file => {
  const filePath = path.join('/workspace', file);
  let content = fs.readFileSync(filePath, 'utf8');
  let modified = false;

  // Remove unused ErrorBoundary imports
  if (content.includes("import ErrorBoundary from '../components/ErrorBoundary'") && !content.includes('<ErrorBoundary')) {
    content = content.replace(/import ErrorBoundary from '\.\.\/components\/ErrorBoundary'\n?/g, '');
    modified = true;
  }
  
  if (content.includes("import ErrorBoundary from '../../components/ErrorBoundary'") && !content.includes('<ErrorBoundary')) {
    content = content.replace(/import ErrorBoundary from '\.\.\/\.\.\/components\/ErrorBoundary'\n?/g, '');
    modified = true;
  }

  if (modified) {
    fs.writeFileSync(filePath, content);
    console.log(`Fixed unused ErrorBoundary imports: ${file}`);
  }
});

console.log('Unused ErrorBoundary import fixes completed');