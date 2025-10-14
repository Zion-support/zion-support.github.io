import fs from 'fs';
import path from 'path';
import { glob } from 'glob';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Find all page.tsx files in the app directory
const pageFiles = await glob('app/**/page.tsx');

console.log(`Found ${pageFiles.length} page files`);

let fixedCount = 0;

for (const filePath of pageFiles) {
  const fullPath = path.join(__dirname, filePath);
  
  try {
    const content = fs.readFileSync(fullPath, 'utf8');
    
    // Check if the file already has a default export
    if (content.includes('export default')) {
      console.log(`✓ ${filePath} already has default export`);
      continue;
    }
    
    // Check if the file ends with just a closing brace and no export
    if (content.trim().endsWith('}')) {
      // Add default export
      const newContent = content.trim() + '\n\nexport default Page;';
      fs.writeFileSync(fullPath, newContent);
      console.log(`✓ Fixed ${filePath}`);
      fixedCount++;
    } else {
      console.log(`? ${filePath} - unexpected format`);
    }
  } catch (error) {
    console.error(`✗ Error processing ${filePath}:`, error.message);
  }
}

console.log(`\nFixed ${fixedCount} files`);