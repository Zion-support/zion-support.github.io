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

  // Fix ErrorBoundary import
  if (content.includes("import { ErrorBoundary } from './components/ErrorBoundary'")) {
    content = content.replace(
      "import { ErrorBoundary } from './components/ErrorBoundary'",
      "import ErrorBoundary from './components/ErrorBoundary'"
    );
    modified = true;
  }

  // Fix unused variable declarations
  if (content.includes("function Page() {")) {
    content = content.replace(/function Page\(\) \{/g, "function PageComponent() {");
    modified = true;
  }

  if (content.includes("function pagePage() {")) {
    content = content.replace(/function pagePage\(\) \{/g, "function PageComponent() {");
    modified = true;
  }

  // Fix PageComponent references
  if (content.includes("<PageComponent {...props} />")) {
    // This is already correct
  } else if (content.includes("<Page {...props} />")) {
    content = content.replace("<Page {...props} />", "<PageComponent {...props} />");
    modified = true;
  }

  // Remove unused variable declarations
  if (content.includes("const Page = ")) {
    content = content.replace(/const Page = [^;]+;/g, '');
    modified = true;
  }

  if (content.includes("const pagePage = ")) {
    content = content.replace(/const pagePage = [^;]+;/g, '');
    modified = true;
  }

  // Clean up extra semicolons and empty lines
  content = content.replace(/;\s*;\s*/g, ';');
  content = content.replace(/\n\s*\n\s*\n/g, '\n\n');

  if (modified) {
    fs.writeFileSync(filePath, content);
    console.log(`Fixed: ${file}`);
  }
});

console.log('Import and component fixes completed');