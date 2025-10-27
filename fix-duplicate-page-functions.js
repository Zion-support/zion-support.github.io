#!/usr/bin/env node
import fs from 'fs';
import path from 'path';
import { glob } from 'glob';

const files = await glob('app/**/page.tsx', { ignore: ['node_modules/**', '.next/**'] });

(async () => {
  files.forEach(file => {
    try {
      let content = fs.readFileSync(file, 'utf8');
      let modified = false;
      
      // Check if there are duplicate Page function declarations
      const pageFunctionMatches = content.match(/function\s+Page\(\)/g);
      if (pageFunctionMatches && pageFunctionMatches.length > 1) {
        // Keep only the last export default function Page
        const lines = content.split('\n');
        let newLines = [];
        let foundExportDefault = false;
        
        for (let i = 0; i < lines.length; i++) {
          const line = lines[i];
          
          // Skip the first function Page declaration
          if (line.includes('function Page()') && !foundExportDefault) {
            // Find the end of this function
            let braceCount = 0;
            let j = i;
            while (j < lines.length) {
              if (lines[j].includes('{')) braceCount++;
              if (lines[j].includes('}')) braceCount--;
              if (braceCount === 0 && lines[j].includes('}')) {
                i = j; // Skip to the end of this function
                break;
              }
              j++;
            }
            continue;
          }
          
          // Keep the export default function Page
          if (line.includes('export default function Page()')) {
            foundExportDefault = true;
          }
          
          newLines.push(line);
        }
        
        content = newLines.join('\n');
        modified = true;
      }
      
      if (modified) {
        fs.writeFileSync(file, content);
        console.log(`Fixed duplicate Page functions in: ${file}`);
      }
    } catch (error) {
      console.error(`Error processing ${file}:`, error.message);
    }
  });
  console.log('Duplicate Page functions fixed!');
})();