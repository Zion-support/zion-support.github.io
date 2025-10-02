import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Function to fix missing commas in object literals and import statements
function fixSyntaxErrors(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Fix missing commas in import statements
    const importRegex = /import\s*{\s*([^}]+)\s*}/g;
    content = content.replace(importRegex, (match, imports) => {
      const fixedImports = imports
        .split('\n')
        .map(line => line.trim())
        .filter(line => line && !line.includes(','))
        .join(',\n');
      
      if (fixedImports !== imports) {
        modified = true;
        return `import {\n${fixedImports}\n}`;
      }
      return match;
    });

    // Fix missing commas in object literals (simple cases)
    const objectRegex = /{\s*([^}]+)\s*}/g;
    content = content.replace(objectRegex, (match, content) => {
      // Only fix if it looks like an object literal with missing commas
      if (content.includes(':') && !content.includes(',') && content.split('\n').length > 1) {
        const lines = content.split('\n').map(line => line.trim()).filter(line => line);
        const fixedLines = lines.map((line, index) => {
          if (index < lines.length - 1 && line.includes(':') && !line.includes(',')) {
            return line + ',';
          }
          return line;
        });
        
        if (fixedLines.some((line, i) => line !== lines[i])) {
          modified = true;
          return `{\n${fixedLines.join('\n')}\n}`;
        }
      }
      return match;
    });

    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed syntax errors in: ${filePath}`);
    }
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
  }
}

// Find all TypeScript/JavaScript files
function findTsFiles(dir) {
  const files = [];
  const items = fs.readdirSync(dir);
  
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
      files.push(...findTsFiles(fullPath));
    } else if (stat.isFile() && (item.endsWith('.ts') || item.endsWith('.tsx'))) {
      files.push(fullPath);
    }
  }
  
  return files;
}

// Process all files
const srcDir = path.join(__dirname, 'src');
const files = findTsFiles(srcDir);

console.log(`Found ${files.length} TypeScript files to process...`);

files.forEach(file => {
  fixSyntaxErrors(file);
});

console.log('Syntax fixing complete!');