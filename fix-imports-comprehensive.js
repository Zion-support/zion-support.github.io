import fs from 'fs';
import path from 'path';
import { glob } from 'glob';

// Find all page.tsx files in the app directory
async function fixImports() {
  const pageFiles = await glob('app/**/page.tsx');

  console.log(`Found ${pageFiles.length} page files to process`);

  let fixedCount = 0;

  for (const filePath of pageFiles) {
    try {
      let content = fs.readFileSync(filePath, 'utf8');
      
      // Calculate the correct relative path to ErrorBoundary
      const dir = path.dirname(filePath);
      const relativePath = path.relative(dir, 'app/components/ErrorBoundary');
      const importPath = relativePath.startsWith('.') ? relativePath : `./${relativePath}`;
      
      // Replace any existing ErrorBoundary import with the correct path
      const importRegex = /import\s*{\s*ErrorBoundary\s*}\s*from\s*['"][^'"]*['"];?/g;
      const newImport = `import { ErrorBoundary } from '${importPath}';`;
      
      if (importRegex.test(content)) {
        content = content.replace(importRegex, newImport);
        
        fs.writeFileSync(filePath, content, 'utf8');
        
        console.log(`Fixed: ${filePath} -> ${importPath}`);
        fixedCount++;
      }
    } catch (error) {
      console.error(`Error processing ${filePath}:`, error.message);
    }
  }

  console.log(`\nFixed ${fixedCount} files`);
}

// Run the function
fixImports().catch(console.error);