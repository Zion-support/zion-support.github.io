import fs from 'fs';
import path from 'path';
import { glob } from 'glob';

// Find all TypeScript/JavaScript files in the app directory
const files = await glob('app/**/*.{ts,tsx,js,jsx}', {
  ignore: [
    'node_modules/**',
    '.next/**',
    '**/node_modules/**'
  ]
});

let fixedCount = 0;

for (const file of files) {
  try {
    const content = fs.readFileSync(file, 'utf8');
    
    // Check if file has unused React import
    const lines = content.split('\n');
    let hasUnusedReact = false;
    let reactImportLine = -1;
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i].trim();
      
      // Check for React import that's not used
      if (line.startsWith("import React") && !content.includes('React.')) {
        // Check if React is actually used in JSX (which doesn't require explicit import in Next.js 13+)
        const hasJSX = /<[A-Z]/.test(content) || /<[a-z]/.test(content);
        if (hasJSX) {
          hasUnusedReact = true;
          reactImportLine = i;
          break;
        }
      }
    }
    
    if (hasUnusedReact && reactImportLine !== -1) {
      // Remove the React import line
      lines.splice(reactImportLine, 1);
      
      // Remove empty lines that might be left
      if (lines[reactImportLine] && lines[reactImportLine].trim() === '') {
        lines.splice(reactImportLine, 1);
      }
      
      const newContent = lines.join('\n');
      fs.writeFileSync(file, newContent, 'utf8');
      console.log(`Fixed: ${file}`);
      fixedCount++;
    }
  } catch (error) {
    console.error(`Error processing ${file}:`, error.message);
  }
}

console.log(`\nFixed ${fixedCount} files with unused React imports.`);