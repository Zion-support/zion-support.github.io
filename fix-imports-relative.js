import fs from 'fs';
import { glob } from 'glob';

// Find all page.tsx files in the app directory
async function fixImports() {
  const pageFiles = await glob('app/**/page.tsx');

  console.log(`Found ${pageFiles.length} page files to process`);

  let fixedCount = 0;

  for (const filePath of pageFiles) {
    try {
      let content = fs.readFileSync(filePath, 'utf8');
      
      // Replace @/components/ErrorBoundary with relative path
      if (content.includes("import { ErrorBoundary } from '@/components/ErrorBoundary'")) {
        content = content.replace(
          "import { ErrorBoundary } from '@/components/ErrorBoundary';",
          "import { ErrorBoundary } from '../../components/ErrorBoundary';"
        );
        
        fs.writeFileSync(filePath, content, 'utf8');
        
        console.log(`Fixed: ${filePath}`);
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