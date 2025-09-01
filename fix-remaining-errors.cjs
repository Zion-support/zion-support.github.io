const fs = require('fs');
const path = require('path');

function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let originalContent = content;
    
    // Fix double import statements
    content = content.replace(/import\s+\{\s*import\s+\{\s*([^}]+)\s*\}\s*from\s*['"`]([^'"`]+)['"`]/g, "import { $1 } from '$2'");
    
    // Fix malformed function declarations
    content = content.replace(/export\s+default\s+function\s+(\w+)\(\)\s*\{\s*import\s+\{/g, "export default function $1() {\n  import {");
    
    // Fix missing closing braces
    content = content.replace(/export\s+default\s+function\s+(\w+)\(\)\s*\{\s*$/gm, "export default function $1() {\n");
    
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed: ${filePath}`);
      return true;
    }
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

function processDirectory(dirPath) {
  const files = fs.readdirSync(dirPath);
  let fixedCount = 0;
  
  files.forEach(file => {
    const filePath = path.join(dirPath, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      if (!['node_modules', '.git', '.next', 'out', 'dist'].includes(file)) {
        fixedCount += processDirectory(filePath);
      }
    } else if (file.endsWith('.tsx') || file.endsWith('.ts') || file.endsWith('.jsx') || file.endsWith('.js')) {
      if (fixFile(filePath)) {
        fixedCount++;
      }
    }
  });
  
  return fixedCount;
}

console.log('Starting remaining syntax fixes...');
const fixedCount = processDirectory('./src');
console.log(`Fixed ${fixedCount} files.`);