import fs from 'fs';
import path from 'path';
import { glob } from 'glob';

// Find all page.tsx files in the app directory
const pageFiles = await glob('app/**/page.tsx', { cwd: '/workspace' });

console.log(`Found ${pageFiles.length} page files to process`);

let fixedCount = 0;
let errorCount = 0;

pageFiles.forEach(filePath => {
  try {
    const fullPath = path.join('/workspace', filePath);
    let content = fs.readFileSync(fullPath, 'utf8');
    
    // Calculate the correct import path based on directory depth
    const pathParts = filePath.split('/');
    const depth = pathParts.length - 2; // -2 because we have 'app' and 'page.tsx'
    const importPath = '../'.repeat(depth) + 'components/ErrorBoundary';
    
    // Remove ALL ErrorBoundary imports (including duplicates)
    const lines = content.split('\n');
    const filteredLines = lines.filter(line => {
      // Remove lines that import ErrorBoundary
      return !line.includes('import') || !line.includes('ErrorBoundary');
    });
    
    // Join the lines back
    content = filteredLines.join('\n');
    
    // Clean up extra empty lines
    content = content.replace(/\n\s*\n\s*\n/g, '\n\n');
    
    // Check if the file uses ErrorBoundary
    if (content.includes('<ErrorBoundary>')) {
      // Add the correct import at the top after 'use client' if present
      if (content.startsWith("'use client';")) {
        content = content.replace(
          "'use client';",
          `'use client';\n\nimport ErrorBoundary from '${importPath}';`
        );
      } else {
        content = `import ErrorBoundary from '${importPath}';\n\n` + content;
      }
      
      fs.writeFileSync(fullPath, content);
      fixedCount++;
      console.log(`Fixed: ${filePath} (import: ${importPath})`);
    }
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    errorCount++;
  }
});

console.log(`\nFixed ${fixedCount} files`);
console.log(`Errors: ${errorCount} files`);