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
      if (content.includes('export const metadata') && content.includes('import ') && content.includes('title:')) {
        const lines = content.split('\n');
        const newLines = [];
        const imports = [];
        let inMetadata = false;
        let metadataStart = -1;
        let metadataEnd = -1;
        
        // Find metadata object boundaries
        for (let i = 0; i < lines.length; i++) {
          if (lines[i].trim().startsWith('export const metadata')) {
            metadataStart = i;
            inMetadata = true;
          }
          if (inMetadata && lines[i].trim() === '};') {
            metadataEnd = i;
            inMetadata = false;
          }
        }
        
        // Extract imports from inside metadata
        if (metadataStart !== -1 && metadataEnd !== -1) {
          for (let i = metadataStart; i <= metadataEnd; i++) {
            if (lines[i].trim().startsWith('import ')) {
              imports.push(lines[i]);
            }
          }
        }
        
        // Rebuild the file
        for (let i = 0; i < lines.length; i++) {
          if (i === 0 && imports.length > 0) {
            // Add imports at the beginning
            newLines.push(...imports);
            newLines.push(''); // Empty line
          }
          
          if (i >= metadataStart && i <= metadataEnd) {
            // Skip lines that are imports inside metadata
            if (!lines[i].trim().startsWith('import ')) {
              newLines.push(lines[i]);
            }
          } else {
            newLines.push(lines[i]);
          }
        }
        
        content = newLines.join('\n');
        fs.writeFileSync(fullPath, content);
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