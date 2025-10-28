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

  // Fix ErrorBoundary import path - change from local to global
  if (content.includes("import ErrorBoundary from './components/ErrorBoundary'")) {
    content = content.replace(
      "import ErrorBoundary from './components/ErrorBoundary'",
      "import ErrorBoundary from '../components/ErrorBoundary'"
    );
    modified = true;
  }

  // Fix ErrorBoundary import path for nested directories
  if (content.includes("import ErrorBoundary from '../components/ErrorBoundary'")) {
    // Check if we're in a nested directory and need to go up more levels
    const depth = file.split('/').length - 2; // -2 for 'app' and filename
    if (depth > 1) {
      const upLevels = '../'.repeat(depth - 1);
      content = content.replace(
        "import ErrorBoundary from '../components/ErrorBoundary'",
        `import ErrorBoundary from '${upLevels}components/ErrorBoundary'`
      );
      modified = true;
    }
  }

  if (modified) {
    fs.writeFileSync(filePath, content);
    console.log(`Fixed ErrorBoundary import: ${file}`);
  }
});

console.log('ErrorBoundary import fixes completed');