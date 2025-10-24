<<<<<<< HEAD
#!/usr/bin/env node

import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
  fixed = fixed.replace(/from\s+["]([^"]+)["];"/g, '
  fixed = fixed.replace(/from\s+["]([^"]+)["]";/g, '
  fixed = fixed.replace(/className\s*=\s*["]([^"]+)["];"/g, '
  fixed = fixed.replace(/import\s+\([^)]*\)\s*=>\s*import\(["]([^"]+)["]\)"/g, '
  fixed = fixed.replace(/import\s+\([^)]*\)\s*=>\s*import\(["]([^"]+)["]\)";/g, '
  fixed = fixed.replace(/lazy\(\(\)\s*=>\s*import\(["]([^"]+)["]\)"/g, '
  fixed = fixed.replace(/lazy\(\(\)\s*=>\s*import\(["]([^"]+)["]\)";/g, '
  fixed = fixed.replace(/([^\\])"([^"]*)$/gm, '
  fixed = fixed.replace(/const\s+(\w+)\s*=\s*lazy\(\(\)\s*=>\s*import\(["]([^"]+)["]\)\)$/gm, '
=======
const fs = require('fs');
const path = require('path');

// Function to fix common syntax errors
function fixSyntaxErrors(content) {
  // Fix missing semicolons after variable declarations
  content = content.replace(/(\w+)\s*=\s*([^;]+)\s*$/gm, '$1 = $2;');
  
  // Fix missing commas in object properties
  content = content.replace(/(\w+):\s*([^,}\s][^,}]*?)(\s*[,}])/g, '$1: \'$2\'$3');
  
  // Fix missing commas in arrays
  content = content.replace(/\]\s*(\w+):/g, '],\n      $1:');
  
  // Fix missing commas in objects
  content = content.replace(/}\s*(\w+):/g, '},\n    $1:');
  
  // Fix JSX syntax errors - remove semicolons in JSX
  content = content.replace(/<(\w+)[^>]*>\s*([^<]+)\s*;\s*<\/\1>/g, '<$1>$2</$1>');
  
  // Fix missing quotes in object properties
  content = content.replace(/(\w+):\s*([^,}\s][^,}]*?)(\s*[,}])/g, '$1: \'$2\'$3');
  
  // Fix array syntax issues
  content = content.replace(/\[\s*'\.\.\.new Set\([^)]+\)'\s*\]/g, '[...new Set(services.map(service => service.category))]');
  
  // Fix function declarations
  content = content.replace(/const(\w+)Page: React\.FC = \(\) => \{const(\w+)Service,\s*s = \[/g, 'const $1Page: React.FC = () => {\n  const $2Services = [');
  
  // Fix common typos
  content = content.replace(/descriptio,\s*n:/g, 'description:');
  content = content.replace(/pric,\s*e:/g, 'price:');
  content = content.replace(/feature,\s*s:/g, 'features:');
  content = content.replace(/categor,\s*y:/g, 'category:');
  content = content.replace(/technologie,\s*s:/g, 'technologies:');
  
  // Fix missing spaces in strings
  content = content.replace(/(\w+)(\d+)/g, '$1 $2');
  
  // Fix HTML entities
  content = content.replace(/&quot;/g, '"');
  content = content.replace(/&lt;/g, '<');
  content = content.replace(/&gt;/g, '>');
  
  return content;
}

// Function to find all TypeScript/TSX files
function findTsxFiles(dir) {
  const files = [];
  const items = fs.readdirSync(dir);
  
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
      files.push(...findTsxFiles(fullPath));
    } else if (item.endsWith('.tsx') || item.endsWith('.ts')) {
      files.push(fullPath);
    }
  }
  
  return files;
}

// Get all TSX files
const tsxFiles = findTsxFiles('./src');
tsxFiles.push(...findTsxFiles('./app'));
tsxFiles.push(...findTsxFiles('./components'));

console.log(`Found ${tsxFiles.length} TypeScript/TSX files to process`);

// Process each file
let fixedCount = 0;
tsxFiles.forEach(filePath => {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const fixedContent = fixSyntaxErrors(content);
    
    if (content !== fixedContent) {
      fs.writeFileSync(filePath, fixedContent, 'utf8');
      console.log(`Fixed: ${filePath}`);
      fixedCount++;
    }
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
  }
});

console.log(`Fixed ${fixedCount} files`);
>>>>>>> origin/main
