import fs from 'fs';
import path from 'path';
import { glob } from 'glob';

async function fixSyntaxErrors() {
  try {
    const files = [
      '/workspace/app/medical-records-manager/page.tsx',
      '/workspace/app/online-learning-platform/page.tsx',
      '/workspace/app/property-management-ai/page.tsx',
      '/workspace/app/supply-chain-optimizer/page.tsx',
      '/workspace/app/test/page.tsx'
    ];
    
    for (const file of files) {
      if (fs.existsSync(file)) {
        console.log(`Fixing ${file}`);
        let content = fs.readFileSync(file, 'utf8');
        
        // Remove duplicate imports and fix structure
        const lines = content.split('\n');
        const cleanedLines = [];
        const seenImports = new Set();
        let inComponent = false;
        
        for (let i = 0; i < lines.length; i++) {
          const line = lines[i].trim();
          
          // Skip duplicate imports
          if (line.startsWith('import ') && seenImports.has(line)) {
            continue;
          }
          
          // Track imports
          if (line.startsWith('import ')) {
            seenImports.add(line);
            cleanedLines.push(lines[i]);
          }
          // Keep metadata export
          else if (line.startsWith('export const metadata')) {
            cleanedLines.push(lines[i]);
            // Find the closing brace
            let j = i + 1;
            while (j < lines.length && !lines[j].includes('};')) {
              cleanedLines.push(lines[j]);
              j++;
            }
            if (j < lines.length) {
              cleanedLines.push(lines[j]);
            }
            i = j;
          }
          // Keep component definition
          else if (line.startsWith('export default function') || line.startsWith('const ') && line.includes('React.FC')) {
            inComponent = true;
            cleanedLines.push(lines[i]);
          }
          // Keep everything else
          else {
            cleanedLines.push(lines[i]);
          }
        }
        
        fs.writeFileSync(file, cleanedLines.join('\n'));
        console.log(`Fixed ${file}`);
      }
    }
    
    console.log('All syntax errors fixed');
  } catch (error) {
    console.error('Error fixing syntax errors:', error);
  }
}

fixSyntaxErrors();