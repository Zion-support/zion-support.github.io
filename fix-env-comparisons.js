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
    
    // Fix environment variable comparisons
    // Replace process.env.VAR || "" with process.env.VAR
    content = content.replace(/process\.env\.(\w+)\s*\|\|\s*""/g, 'process.env.$1');
    modified = true;
    
    // Fix comparisons with empty strings
    content = content.replace(/process\.env\.(\w+)\s*===\s*""/g, '!process.env.$1');
    content = content.replace(/process\.env\.(\w+)\s*!==\s*""/g, '!!process.env.$1');
    content = content.replace(/process\.env\.(\w+)\s*==\s*""/g, '!process.env.$1');
    content = content.replace(/process\.env\.(\w+)\s*!=\s*""/g, '!!process.env.$1');
    
    // Fix specific string comparisons
    content = content.replace(/process\.env\.NODE_ENV\s*===\s*"development"/g, 'process.env.NODE_ENV === "development"');
    content = content.replace(/process\.env\.NODE_ENV\s*===\s*"production"/g, 'process.env.NODE_ENV === "production"');
    content = content.replace(/process\.env\.NODE_ENV\s*===\s*"test"/g, 'process.env.NODE_ENV === "test"');
    
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