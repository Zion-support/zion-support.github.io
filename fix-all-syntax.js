import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Function to clean up merge conflicts and malformed syntax
function cleanFile(content) {
  // Remove merge conflict markers
  content = content.replace(/<<<<<<< HEAD[\s\S]*?=======[\s\S]*?>>>>>>> [^\n]*/g, '');
  content = content.replace(/<<<<<<< [^\n]*[\s\S]*?=======[\s\S]*?>>>>>>> [^\n]*/g, '');
  
  // Fix malformed imports
  content = content.replace(/import\s+([^"']*)\s+from\s+"([^"]*)$/gm, (match, imports, module) => {
    return `import ${imports.trim()} from "${module}";`;
  });
  
  // Fix imports with missing semicolons
  content = content.replace(/import\s+([^"']*)\s+from\s+"([^"]*)"(?!;)/gm, 'import $1 from "$2";');
  
  // Fix React imports
  content = content.replace(/import\s+React\s+from\s+"react"(?!;)/gm, 'import React from "react";');
  
  // Fix component declarations
  content = content.replace(/const\s+(\w+):\s*React\.FC\s*=\s*\(\s*\)\s*=>\s*\{"/gm, 'const $1: React.FC = () => {');
  content = content.replace(/export\s+default\s+function\s+(\w+)\s*\(\s*\)\s*\{;/gm, 'export default function $1() {');
  
  // Fix malformed object literals in arrays
  content = content.replace(/const\s+(\w+)\s*=\s*\[\s*"([^"]*)"\s*\{/gm, 'const $1 = [\n    {');
  content = content.replace(/\{\s*"([^"]*)"\s*([^}]*)\s*\}/gm, (match, title, rest) => {
    const cleanRest = rest.replace(/\s*:\s*/g, ': ').replace(/\s*,\s*/g, ', ');
    return `{\n      title: "${title}"${cleanRest}\n    }`;
  });
  
  // Fix JSX syntax issues
  content = content.replace(/<(\w+)\s+className="([^"]*)"\s*\/>/gm, '<$1 className="$2" />');
  content = content.replace(/<(\w+)\s+className="([^"]*)"\s*>\s*<\/\1>/gm, '<$1 className="$2" />');
  
  // Remove duplicate imports
  const lines = content.split('\n');
  const seenImports = new Set();
  const cleanedLines = [];
  
  for (const line of lines) {
    if (line.trim().startsWith('import ')) {
      const importKey = line.trim();
      if (!seenImports.has(importKey)) {
        seenImports.add(importKey);
        cleanedLines.push(line);
      }
    } else {
      cleanedLines.push(line);
    }
  }
  
  content = cleanedLines.join('\n');
  
  // Fix malformed JSX returns
  content = content.replace(/return\s*\(\s*<div[^>]*>[\s\S]*?<\/div>\s*\)\s*\)\s*;/gm, (match) => {
    return match.replace(/\)\s*\)\s*;/, ');');
  });
  
  return content;
}

// Function to process a single file
function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const fixedContent = cleanFile(content);
    
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

// Function to find all TypeScript/JavaScript files
function findFiles(dir, extensions = ['.tsx', '.ts', '.jsx', '.js']) {
  const files = [];
  
  function traverse(currentDir) {
    try {
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
    } catch (error) {
      console.error(`Error reading directory ${currentDir}:`, error.message);
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