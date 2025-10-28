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
      
      // Check if the file has ErrorBoundary references but no import
      if (content.includes('ErrorBoundary') && !content.includes('import') && !content.includes('export default function Wrapped')) {
        // This is a simple page that needs ErrorBoundary wrapper removed
        // Remove the Wrapped function and ErrorBoundary references
        content = content.replace(/export default function Wrapped\(props: \{ \[key: string\]: unknown \}\) \{\s*return \(\s*<ErrorBoundary>\s*<[^>]+ \{\.\.\.props\} \/>\s*<\/ErrorBoundary>\s*\);\s*\}\s*$/, '');
        
        // Clean up any remaining ErrorBoundary references
        content = content.replace(/<ErrorBoundary>\s*<[^>]+ \{\.\.\.props\} \/>\s*<\/ErrorBoundary>/g, '');
        
        // Remove any trailing empty lines
        content = content.trim() + '\n';
        
        fs.writeFileSync(fullPath, content);
        fixedCount++;
        console.log(`Fixed: ${filePath}`);
      } else if (content.includes('ErrorBoundary') && !content.includes('import ErrorBoundary')) {
        // This file has ErrorBoundary but no import - remove the wrapper
        content = content.replace(/export default function Wrapped\(props: \{ \[key: string\]: unknown \}\) \{\s*return \(\s*<ErrorBoundary>\s*<[^>]+ \{\.\.\.props\} \/>\s*<\/ErrorBoundary>\s*\);\s*\}\s*$/, '');
        content = content.replace(/<ErrorBoundary>\s*<[^>]+ \{\.\.\.props\} \/>\s*<\/ErrorBoundary>/g, '');
        content = content.trim() + '\n';
        
        fs.writeFileSync(fullPath, content);
        fixedCount++;
        console.log(`Fixed: ${filePath}`);
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