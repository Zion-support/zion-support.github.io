const fs = require('fs');
const path = require('path');

function fixImportCommas(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Fix import statements with trailing commas
    content = content.replace(/import\s+([^;]+),\s*;/g, 'import $1;');
    
    // Fix other common comma issues
    content = content.replace(/const\s+([^=]+)=\s*([^,]+),\s*;/g, 'const $1 = $2;');
    content = content.replace(/let\s+([^=]+)=\s*([^,]+),\s*;/g, 'let $1 = $2;');
    content = content.replace(/var\s+([^=]+)=\s*([^,]+),\s*;/g, 'var $1 = $2;');
    
    fs.writeFileSync(filePath, content);
    console.log(`Fixed: ${filePath}`);
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
}

function walkDirectory(dir) {
  const files = fs.readdirSync(dir);
  
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      walkDirectory(filePath);
    } else if (file.endsWith('.ts') || file.endsWith('.tsx') || file.endsWith('.js') || file.endsWith('.jsx')) {
      fixImportCommas(filePath);
    }
  }
}

// Start fixing from the pages/api directory
walkDirectory('/workspace/pages/api');
console.log('Import comma fixes completed!');