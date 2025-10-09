import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Function to fix common syntax errors in files
function fixSyntaxErrors(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Fix missing object structure patterns
    const patterns = [
      // Fix missing object braces
      {
        regex: /(\s+)([a-zA-Z_][a-zA-Z0-9_]*):\s*([^,}]+),\s*([a-zA-Z_][a-zA-Z0-9_]*):\s*([^,}]+),\s*([a-zA-Z_][a-zA-Z0-9_]*):\s*([^,}]+)\s*([a-zA-Z_][a-zA-Z0-9_]*):\s*([^,}]+)/g,
        replacement: '$1$2: $3,\n$1$4: $5,\n$1$6: $7,\n$1$8: $8'
      },
      // Fix missing commas in object arrays
      {
        regex: /(\s+)([a-zA-Z_][a-zA-Z0-9_]*):\s*([^,}]+)\s*([a-zA-Z_][a-zA-Z0-9_]*):\s*([^,}]+)\s*([a-zA-Z_][a-zA-Z0-9_]*):\s*([^,}]+)\s*([a-zA-Z_][a-zA-Z0-9_]*):\s*([^,}]+)\s*([a-zA-Z_][a-zA-Z0-9_]*):\s*([^,}]+)/g,
        replacement: '$1$2: $3,\n$1$4: $5,\n$1$6: $7,\n$1$8: $9,\n$1$10: $11'
      }
    ];

    patterns.forEach(pattern => {
      const newContent = content.replace(pattern.regex, pattern.replacement);
      if (newContent !== content) {
        content = newContent;
        modified = true;
      }
    });

    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed syntax errors in: ${filePath}`);
    }
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
  }
}

// Get all TypeScript/JSX files in src directory
function getAllTsxFiles(dir) {
  const files = [];
  const items = fs.readdirSync(dir);
  
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      files.push(...getAllTsxFiles(fullPath));
    } else if (item.endsWith('.tsx') || item.endsWith('.ts')) {
      files.push(fullPath);
    }
  }
  
  return files;
}

// Process all files
const srcDir = path.join(__dirname, 'src');
const files = getAllTsxFiles(srcDir);

console.log(`Found ${files.length} TypeScript/JSX files to process`);

files.forEach(file => {
  fixSyntaxErrors(file);
});

console.log('Syntax error fixing completed');