const fs = require('fs');
const path = require('path');

function cleanFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Remove duplicate imports and fix syntax
    const lines = content.split('\n');
    const cleanedLines = [];
    const seenImports = new Set();
    
    for (const line of lines) {
      const trimmed = line.trim();
      
      // Skip empty lines and duplicate imports
      if (trimmed === '' || trimmed.startsWith('//')) {
        cleanedLines.push(line);
        continue;
      }
      
      if (trimmed.startsWith('import ')) {
        if (!seenImports.has(trimmed)) {
          cleanedLines.push(line);
          seenImports.add(trimmed);
        }
      } else {
        cleanedLines.push(line);
      }
    }
    
    content = cleanedLines.join('\n');
    
    // Fix common syntax errors
    content = content.replace(/,\s*;/g, ';');
    content = content.replace(/,\s*$/gm, '');
    content = content.replace(/render\(\)\s*\{/g, 'render() {');
    content = content.replace(/export default function\s+(\w+)\s*\{\s*$/gm, 'export default function $1() {\n  ');
    
    fs.writeFileSync(filePath, content);
    console.log(`Cleaned: ${filePath}`);
  } catch (error) {
    console.error(`Error cleaning ${filePath}:`, error.message);
  }
}

function cleanPages(dir) {
  const files = fs.readdirSync(dir);
  
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      cleanPages(filePath);
    } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
      try {
        const content = fs.readFileSync(filePath, 'utf8');
        if (content.includes(',;') || content.includes('render()') || content.includes('import ')) {
          cleanFile(filePath);
        }
      } catch (error) {
        console.log(`Skipping ${filePath}: ${error.message}`);
      }
    }
  }
}

console.log('Cleaning pages...');
cleanPages('./pages');
console.log('Pages cleaned!');