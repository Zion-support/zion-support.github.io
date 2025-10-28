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
    
    // Remove any existing ErrorBoundary imports
    content = content.replace(/import\s+ErrorBoundary\s+from\s+['"][^'"]*ErrorBoundary['"];\s*\n?/g, '');
    
    // Check if the file uses ErrorBoundary but doesn't import it
    if (content.includes('<ErrorBoundary>') && !content.includes('import.*ErrorBoundary')) {
      // Add the import at the top after 'use client' if present
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