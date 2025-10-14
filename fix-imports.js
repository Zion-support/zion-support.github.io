import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Function to fix malformed import statements
function fixImports(content) {
  // Fix imports missing closing quotes
  content = content.replace(/import\s+([^"']*)\s+from\s+"([^"]*)$/gm, (match, imports, module) => {
    // Find the next quote or end of line
    const lines = content.split('\n');
    const currentLineIndex = content.substring(0, content.indexOf(match)).split('\n').length - 1;
    const currentLine = lines[currentLineIndex];
    
    // Look for the closing quote in the same line or next lines
    let fixedModule = module;
    let lineOffset = 0;
    
    while (lineOffset < 5 && currentLineIndex + lineOffset < lines.length) {
      const checkLine = lines[currentLineIndex + lineOffset];
      const quoteIndex = checkLine.indexOf('"');
      if (quoteIndex !== -1) {
        fixedModule = module + checkLine.substring(0, quoteIndex);
        break;
      }
      lineOffset++;
    }
    
    return `import ${imports.trim()} from "${fixedModule}";`;
  });

  // Fix imports with missing semicolons
  content = content.replace(/import\s+([^"']*)\s+from\s+"([^"]*)"(?!;)/gm, 'import $1 from "$2";');
  
  // Fix React imports specifically
  content = content.replace(/import\s+React\s+from\s+"react"(?!;)/gm, 'import React from "react";');
  
  // Fix component declarations with malformed syntax
  content = content.replace(/const\s+(\w+):\s*React\.FC\s*=\s*\(\s*\)\s*=>\s*\{"/gm, 'const $1: React.FC = () => {');
  content = content.replace(/export\s+default\s+function\s+(\w+)\s*\(\s*\)\s*\{;/gm, 'export default function $1() {');
  
  return content;
}

// Function to process a single file
function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const fixedContent = fixImports(content);
    
    if (content !== fixedContent) {
      fs.writeFileSync(filePath, fixedContent, 'utf8');
      console.log(`Fixed: ${filePath}`);
      return true;
    }
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Function to recursively find all TypeScript/JavaScript files
function findFiles(dir, extensions = ['.tsx', '.ts', '.jsx', '.js']) {
  const files = [];
  
  function traverse(currentDir) {
    const items = fs.readdirSync(currentDir);
    
    for (const item of items) {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
        traverse(fullPath);
      } else if (stat.isFile() && extensions.some(ext => item.endsWith(ext))) {
        files.push(fullPath);
      }
    }
  }
  
  traverse(dir);
  return files;
}

// Main execution
const appDir = path.join(__dirname, 'app');
const files = findFiles(appDir);

console.log(`Found ${files.length} files to process...`);

let fixedCount = 0;
for (const file of files) {
  if (processFile(file)) {
    fixedCount++;
  }
}

console.log(`Fixed ${fixedCount} files out of ${files.length} total files.`);