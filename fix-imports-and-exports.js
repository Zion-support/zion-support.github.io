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
      
      // Check if the file uses Navigation or Footer but doesn't import them
      if ((content.includes('<Navigation') || content.includes('<Footer')) && !content.includes('import Navigation') && !content.includes('import Footer')) {
        // Add imports at the top
        const importLines = [];
        
        if (content.includes('<Navigation')) {
          // Determine the correct import path based on file location
          const pathParts = filePath.split('/');
          const depth = pathParts.length - 2; // -2 because we have app/.../page.tsx
          const relativePath = '../'.repeat(depth) + 'components/Navigation';
          importLines.push(`import Navigation from '${relativePath}';`);
        }
        
        if (content.includes('<Footer')) {
          // Determine the correct import path based on file location
          const pathParts = filePath.split('/');
          const depth = pathParts.length - 2; // -2 because we have app/.../page.tsx
          const relativePath = '../'.repeat(depth) + 'components/Footer';
          importLines.push(`import Footer from '${relativePath}';`);
        }
        
        // Add React import if not present
        if (!content.includes('import React')) {
          importLines.unshift('import React from "react";');
        }
        
        // Insert imports after any existing imports
        const lines = content.split('\n');
        let insertIndex = 0;
        
        // Find the last import line
        for (let i = 0; i < lines.length; i++) {
          if (lines[i].trim().startsWith('import ') || lines[i].trim().startsWith('export const metadata')) {
            insertIndex = i + 1;
          }
        }
        
        // Insert the new imports
        lines.splice(insertIndex, 0, ...importLines);
        content = lines.join('\n');
        
        fs.writeFileSync(fullPath, content);
        fixedCount++;
        console.log(`Fixed imports: ${filePath}`);
      }
      
      // Fix unused variable warnings by removing unused function declarations
      if (content.includes('function ') && content.includes('export default function') && content.includes('is declared but its value is never read')) {
        // This is a complex case, let's just remove the unused function
        const lines = content.split('\n');
        let newLines = [];
        let inUnusedFunction = false;
        let braceCount = 0;
        let functionName = '';
        
        for (let i = 0; i < lines.length; i++) {
          const line = lines[i];
          
          // Check if this is an unused function declaration
          if (line.trim().startsWith('function ') && !line.includes('export default')) {
            const match = line.match(/function\s+(\w+)\s*\(/);
            if (match) {
              functionName = match[1];
              inUnusedFunction = true;
              braceCount = 0;
              continue; // Skip this line
            }
          }
          
          if (inUnusedFunction) {
            // Count braces to know when the function ends
            for (const char of line) {
              if (char === '{') braceCount++;
              if (char === '}') braceCount--;
            }
            
            if (braceCount === 0 && line.trim() === '}') {
              inUnusedFunction = false;
              continue; // Skip this line too
            }
            
            if (inUnusedFunction) {
              continue; // Skip all lines inside the unused function
            }
          }
          
          newLines.push(line);
        }
        
        if (newLines.length !== lines.length) {
          content = newLines.join('\n');
          fs.writeFileSync(fullPath, content);
          console.log(`Removed unused function: ${filePath}`);
        }
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