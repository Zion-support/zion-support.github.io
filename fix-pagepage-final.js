import fs from 'fs';
import path from 'path';
import { glob } from 'glob';

// Find all TypeScript/TSX files in the app directory
const files = await glob('app/**/*.{ts,tsx}', { cwd: '/workspace' });

console.log(`Found ${files.length} files to check`);

let fixedCount = 0;

for (const file of files) {
  const filePath = path.join('/workspace', file);
  
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Fix PagePage references
    if (content.includes('PagePage')) {
      // Extract the page name from the file path
      const pageName = path.basename(file, '.tsx');
      const componentName = pageName.charAt(0).toUpperCase() + pageName.slice(1) + 'Page';
      
      content = content.replace(/PagePage/g, componentName);
      modified = true;
    }
    
    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed: ${file}`);
      fixedCount++;
    }
    
  } catch (error) {
    console.error(`Error processing ${file}:`, error.message);
  }
}

console.log(`Fixed ${fixedCount} files`);