const fs = require('fs');
const path = require('path');

function fixJsxFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Fix JSX syntax issues
    content = content
      // Remove semicolons after JSX elements
      .replace(/;\s*$/gm, '')
      // Fix merge conflict markers
      .replace(/^<<<<<<< HEAD[\s\S]*?=======[\s\S]*?>>>>>>> [^\n]+\s*$/gm, '')
      .replace(/^<<<<<<< [^\n]+\s*$/gm, '')
      .replace(/^=======\s*$/gm, '')
      .replace(/^>>>>>>> [^\n]+\s*$/gm, '')
      // Fix interface syntax
      .replace(/interface\s+(\w+)\s*\{;/g, 'interface $1 {')
      .replace(/;\s*$/gm, '')
      // Clean up extra semicolons
      .replace(/;;+/g, ';')
      .replace(/;\s*;/g, ';')
      .replace(/;\s*$/gm, '')
      .trim();
    
    fs.writeFileSync(filePath, content);
    console.log(`Fixed JSX: ${filePath}`);
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
}

function walkDir(dir) {
  const files = fs.readdirSync(dir);
  
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      walkDir(filePath);
    } else if (file.endsWith('.tsx') || file.endsWith('.jsx')) {
      fixJsxFile(filePath);
    }
  }
}

walkDir('/workspace/components');
walkDir('/workspace/pages');
console.log('JSX syntax fixing complete!');