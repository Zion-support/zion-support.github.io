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
      
      // Check if the file has unused Page variable
      if (content.includes('function Page()') && content.includes('export default function')) {
        // Remove the unused Page function
        content = content.replace(/function Page\(\) \{\s*return \(\s*<div[^>]*>\s*<h1[^>]*>Page<\/h1>\s*<p[^>]*>This is a page\.<\/p>\s*<\/div>\s*\);\s*\}\s*/, '');
        
        // Clean up any remaining Page references
        content = content.replace(/function Page\(\) \{\s*return \(\s*<div[^>]*>\s*<h1[^>]*>Page<\/h1>\s*<p[^>]*>This is a page\.<\/p>\s*<\/div>\s*\);\s*\}\s*/, '');
        
        // Remove any trailing empty lines
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