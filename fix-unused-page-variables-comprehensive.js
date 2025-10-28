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
      
      // Check if the file has unused Page function and export default function
      if (content.includes('function Page()') && content.includes('export default function')) {
        // Find the line with 'function Page()' and remove the entire function
        const lines = content.split('\n');
        let newLines = [];
        let inPageFunction = false;
        let braceCount = 0;
        
        for (let i = 0; i < lines.length; i++) {
          const line = lines[i];
          
          if (line.trim().startsWith('function Page()')) {
            inPageFunction = true;
            braceCount = 0;
            continue; // Skip this line
          }
          
          if (inPageFunction) {
            // Count braces to know when the function ends
            for (const char of line) {
              if (char === '{') braceCount++;
              if (char === '}') braceCount--;
            }
            
            if (braceCount === 0 && line.trim() === '}') {
              inPageFunction = false;
              continue; // Skip this line too
            }
            
            if (inPageFunction) {
              continue; // Skip all lines inside the Page function
            }
          }
          
          newLines.push(line);
        }
        
        content = newLines.join('\n');
        
        // Clean up any remaining empty lines
        content = content.replace(/\n\s*\n\s*\n/g, '\n\n');
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