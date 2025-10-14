import fs from 'fs';
import path from 'path';
import { glob } from 'glob';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Find all utility files
const utilityFiles = await glob('app/utils/*.ts');

console.log(`Found ${utilityFiles.length} utility files`);

let fixedCount = 0;

for (const filePath of utilityFiles) {
  const fullPath = path.join(__dirname, filePath);
  
  try {
    let content = fs.readFileSync(fullPath, 'utf8');
    let modified = false;
    
    // Fix this. references in object methods
    if (content.includes('this.')) {
      // Extract the object name from the export
      const exportMatch = content.match(/export const (\w+) =/);
      if (exportMatch) {
        const objectName = exportMatch[1];
        content = content.replace(new RegExp(`this\\.`, 'g'), `${objectName}.`);
        modified = true;
      }
    }
    
    // Fix process.env references that might be undefined
    if (content.includes('process.env') && !content.includes('process.env ||')) {
      content = content.replace(
        /process\.env\.(\w+)/g,
        'process.env.$1 || ""'
      );
      modified = true;
    }
    
    // Fix Object.values() type issues
    if (content.includes('Object.values(') && content.includes('unknown')) {
      content = content.replace(
        /Object\.values\(([^)]+)\)/g,
        'Object.values($1) as string[]'
      );
      modified = true;
    }
    
    if (modified) {
      fs.writeFileSync(fullPath, content);
      console.log(`✓ Fixed ${filePath}`);
      fixedCount++;
    } else {
      console.log(`- ${filePath} - no changes needed`);
    }
  } catch (error) {
    console.error(`✗ Error processing ${filePath}:`, error.message);
  }
}

console.log(`\nFixed ${fixedCount} utility files`);