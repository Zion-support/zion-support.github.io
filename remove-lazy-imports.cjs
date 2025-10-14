/* eslint-disable @typescript-eslint/no-require-imports */
const fs = require('fs');

const filePath = 'App.tsx';
let content = fs.readFileSync(filePath, 'utf8');

// Remove all lazy import lines
const lines = content.split('\n');
const filteredLines = lines.filter(line => {
  // Keep lines that don't contain React.lazy imports
  return !line.includes('React.lazy(() => import(') && 
         !line.includes('const ') && 
         !line.includes('= React.lazy');
});

// Join the lines back
content = filteredLines.join('\n');

// Add a comment where the lazy imports were
const importIndex = content.indexOf('import SitemapPage from');
if (importIndex !== -1) {
  const beforeImport = content.substring(0, importIndex);
  const afterImport = content.substring(importIndex);
  content = beforeImport + '// TODO: Add lazy imports for components when they are created\n\n' + afterImport;
}

fs.writeFileSync(filePath, content);
console.log('Removed all lazy imports from App.tsx');