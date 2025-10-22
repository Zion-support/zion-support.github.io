import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Function to fix syntax errors in a file
function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Fix object property syntax errors
    content = content.replace(/\{\s*;\s*/g, '{\n    ');
    content = content.replace(/;\s*\}/g, '\n  }');
    content = content.replace(/;\s*$/gm, '');
    
    // Fix malformed JSX closing tags
    content = content.replace(/<\/[^>]*>\s*<\/[^>]*>/g, (match) => {
      const tags = match.match(/<\/[^>]*>/g);
      return tags[tags.length - 1]; // Keep only the last closing tag
    });
    
    // Fix broken JSX expressions
    content = content.replace(/\{\s*([^}]*)\s*\}\s*<\/[^>]*>/g, '{$1}');
    
    // Fix malformed object properties
    content = content.replace(/(\w+):\s*([^,}]+);\s*/g, '$1: $2,\n    ');
    
    // Fix switch statement syntax
    content = content.replace(/switch\s*\(\s*([^)]+)\s*\)\s*\{/g, 'switch ($1) {\n    ');
    
    // Fix export statements
    content = content.replace(/export\s+default\s+([^;]+);/g, 'export default $1;');
    
    // Fix function declarations
    content = content.replace(/const\s+(\w+)\s*=\s*\([^)]*\)\s*=>\s*\{/g, 'const $1 = ($2) => {\n    ');
    
    // Write the fixed content back
    fs.writeFileSync(filePath, content);
    console.log(`Fixed: ${filePath}`);
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
}

// Function to recursively find all .tsx files
function findTsxFiles(dir) {
  const files = [];
  const items = fs.readdirSync(dir);
  
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      files.push(...findTsxFiles(fullPath));
    } else if (item.endsWith('.tsx')) {
      files.push(fullPath);
    }
  }
  
  return files;
}

// Main execution
const appDir = path.join(__dirname, 'app');
const tsxFiles = findTsxFiles(appDir);

console.log(`Found ${tsxFiles.length} .tsx files to process`);

tsxFiles.forEach(file => {
  fixFile(file);
});

console.log('Syntax error fixing completed!');