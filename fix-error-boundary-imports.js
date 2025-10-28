import fs from 'fs';
import path from 'path';
import { glob } from 'glob';

// Find all page.tsx files in the app directory
async function fixErrorBoundaryImports() {
  const pageFiles = await glob('app/**/page.tsx');

  console.log(`Found ${pageFiles.length} page files to process`);

  let fixedCount = 0;

  for (const filePath of pageFiles) {
    try {
      let content = fs.readFileSync(filePath, 'utf8');
      
      // Check if the file uses ErrorBoundary but doesn't import it
      if (content.includes('ErrorBoundary') && !content.includes("import { ErrorBoundary }")) {
        // Add the import at the top of the file
        const importStatement = "import { ErrorBoundary } from '@/components/ErrorBoundary';\n";
        
        // Find the first import statement and add after it
        const lines = content.split('\n');
        let insertIndex = 0;
        
        // Find the last import statement
        for (let i = 0; i < lines.length; i++) {
          if (lines[i].startsWith('import ')) {
            insertIndex = i + 1;
          }
        }
        
        // Insert the ErrorBoundary import
        lines.splice(insertIndex, 0, importStatement);
        
        const newContent = lines.join('\n');
        fs.writeFileSync(filePath, newContent, 'utf8');
        
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
fixErrorBoundaryImports().catch(console.error);