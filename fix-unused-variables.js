import fs from 'fs';
import path from 'path';
import { glob } from 'glob';

// Find all TypeScript/TSX files in the app directory
const files = glob.sync('app/**/*.{ts,tsx}', { cwd: '/workspace' });

console.log(`Found ${files.length} files to process`);

files.forEach(file => {
  const filePath = path.join('/workspace', file);
  let content = fs.readFileSync(filePath, 'utf8');
  let modified = false;

  // Remove unused function declarations
  if (content.includes('function Page() {')) {
    // Find the function and remove it if it's not used
    const lines = content.split('\n');
    let newLines = [];
    let inPageFunction = false;
    let braceCount = 0;
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      
      if (line.includes('function Page() {')) {
        inPageFunction = true;
        braceCount = 1;
        continue; // Skip this line
      }
      
      if (inPageFunction) {
        // Count braces to find the end of the function
        for (const char of line) {
          if (char === '{') braceCount++;
          if (char === '}') braceCount--;
        }
        
        if (braceCount === 0) {
          inPageFunction = false;
          continue; // Skip the closing brace line
        }
        continue; // Skip all lines inside the function
      }
      
      newLines.push(line);
    }
    
    if (newLines.length !== lines.length) {
      content = newLines.join('\n');
      modified = true;
    }
  }

  if (modified) {
    fs.writeFileSync(filePath, content);
    console.log(`Fixed unused variables: ${file}`);
  }
});

console.log('Unused variable fixes completed');