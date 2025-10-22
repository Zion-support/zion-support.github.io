import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Function to fix JSX errors in a file
function fixJsxErrors(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Fix malformed JSX closing tags - remove duplicate closing tags
    content = content.replace(/<\/[^>]*>\s*<\/[^>]*>/g, (match) => {
      const tags = match.match(/<\/[^>]*>/g);
      return tags[tags.length - 1]; // Keep only the last closing tag
    });
    
    // Fix broken JSX expressions with missing closing braces
    content = content.replace(/\{\s*([^}]*)\s*\}\s*<\/[^>]*>/g, '{$1}');
    
    // Fix malformed object properties with semicolons
    content = content.replace(/(\w+):\s*([^,}]+);\s*/g, '$1: $2,\n    ');
    
    // Fix switch statement syntax
    content = content.replace(/switch\s*\(\s*([^)]+)\s*\)\s*\{/g, 'switch ($1) {\n    ');
    
    // Fix export statements
    content = content.replace(/export\s+default\s+([^;]+);/g, 'export default $1;');
    
    // Fix function declarations
    content = content.replace(/const\s+(\w+)\s*=\s*\([^)]*\)\s*=>\s*\{/g, 'const $1 = ($2) => {\n    ');
    
    // Fix missing closing tags by adding them at the end of the component
    const lines = content.split('\n');
    const openTags = [];
    const fixedLines = [];
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      const trimmedLine = line.trim();
      
      // Track opening tags
      const openTagMatch = trimmedLine.match(/<([a-zA-Z][a-zA-Z0-9]*)(?:\s[^>]*)?(?!\/)>/);
      if (openTagMatch) {
        openTags.push(openTagMatch[1]);
      }
      
      // Track closing tags
      const closeTagMatch = trimmedLine.match(/<\/([a-zA-Z][a-zA-Z0-9]*)>/);
      if (closeTagMatch) {
        const tagName = closeTagMatch[1];
        const lastOpenIndex = openTags.lastIndexOf(tagName);
        if (lastOpenIndex !== -1) {
          openTags.splice(lastOpenIndex, 1);
        }
      }
      
      fixedLines.push(line);
    }
    
    // Add missing closing tags at the end
    if (openTags.length > 0) {
      // Add closing tags in reverse order
      for (let i = openTags.length - 1; i >= 0; i--) {
        fixedLines.push('  '.repeat(i) + `</${openTags[i]}>`);
      }
    }
    
    content = fixedLines.join('\n');
    
    // Write the fixed content back
    fs.writeFileSync(filePath, content);
    console.log(`Fixed JSX errors: ${filePath}`);
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
  fixJsxErrors(file);
});

console.log('JSX error fixing completed!');