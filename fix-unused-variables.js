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
      
      // Remove unused ErrorBoundary import
      if (content.includes('import ErrorBoundary') && !content.includes('<ErrorBoundary')) {
        content = content.replace(/import ErrorBoundary[^;]+;\n?/g, '');
        fixedCount++;
        console.log(`Removed unused ErrorBoundary import: ${filePath}`);
      }
      
      // Remove unused function declarations that are not exported
      const lines = content.split('\n');
      const newLines = [];
      let inUnusedFunction = false;
      let braceCount = 0;
      let functionName = '';
      
      for (let i = 0; i < lines.length; i++) {
        const line = lines[i];
        
        // Check if this is an unused function declaration (not exported)
        if (line.trim().startsWith('function ') && !line.includes('export default') && !line.includes('export ')) {
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