import fs from 'fs';
import path from 'path';
import { glob } from 'glob';

async function main() {
  // Find all page.tsx files in the app directory
  const pageFiles = await glob('app/**/page.tsx', { cwd: '/workspace' });

  console.log(`Found ${pageFiles.length} page files to process`);

  let fixedCount = 0;
  let errorCount = 0;

  for (const filePath of pageFiles) {
    try {
      const fullPath = path.join('/workspace', filePath);
      let content = fs.readFileSync(fullPath, 'utf8');
      
      // Check if the file has malformed imports (imports inside metadata object)
      if (content.includes('export const metadata = {') && content.includes('import ') && content.includes('title:')) {
        // Use regex to find and fix the pattern
        const importPattern = /import\s+[^;]+;/g;
        const imports = content.match(importPattern) || [];
        
        // Remove imports from the content
        let fixedContent = content.replace(importPattern, '');
        
        // Add imports at the beginning
        if (imports.length > 0) {
          fixedContent = imports.join('\n') + '\n\n' + fixedContent;
        }
        
        // Clean up any double newlines
        fixedContent = fixedContent.replace(/\n\n\n+/g, '\n\n');
        
        fs.writeFileSync(fullPath, fixedContent);
        fixedCount++;
        console.log(`Fixed malformed imports: ${filePath}`);
      }
      
    } catch (error) {
      console.error(`Error processing ${filePath}:`, error.message);
      errorCount++;
    }
  }

  console.log(`\nProcessing complete:`);
  console.log(`- Fixed: ${fixedCount} files`);
  console.log(`- Errors: ${errorCount} files`);
}

main().catch(console.error);