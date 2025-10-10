const fs = require('fs');
const path = require('path');

function fixSemicolonsInFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Fix common semicolon issues
    const patterns = [
      // Fix function declarations with semicolons
      { from: /const\s+(\w+):\s*React\.FC\s*=\s*\(\s*\)\s*=>\s*\{;/, to: 'const $1: React.FC = () => {' },
      // Fix JSX elements with semicolons
      { from: /<(\w+);/g, to: '<$1' },
      { from: /<\/\w+>;/g, to: (match) => match.replace(';', '') },
      // Fix closing tags with semicolons
      { from: /<\/\w+>;/g, to: (match) => match.replace(';', '') },
      // Fix self-closing tags with semicolons
      { from: /\/>;/g, to: '/>' },
      // Fix JSX attributes with semicolons
      { from: /(\w+)="([^"]*)"\s*;/g, to: '$1="$2"' },
      { from: /(\w+)=\{([^}]*)\}\s*;/g, to: '$1={$2}' },
      // Fix array/object declarations with semicolons
      { from: /\[\s*;/g, to: '[' },
      { from: /\{\s*;/g, to: '{' },
      { from: /\]\s*;/g, to: ']' },
      { from: /\}\s*;/g, to: '}' },
      // Fix return statements with semicolons
      { from: /return\s*\(;/g, to: 'return (' },
      // Fix comments with semicolons
      { from: /\/\/.*;/g, to: (match) => match.replace(';', '') },
      // Fix import statements with semicolons
      { from: /import\s+.*from\s+['"][^'"]*['"]\s*;/g, to: (match) => match.replace(';', '') },
      // Fix variable declarations with semicolons in wrong places
      { from: /const\s+(\w+)\s*=\s*\[;/g, to: 'const $1 = [' },
      { from: /const\s+(\w+)\s*=\s*\{;/g, to: 'const $1 = {' },
      // Fix JSX expressions with semicolons
      { from: /\{([^}]*);\}/g, to: '{$1}' },
      // Fix template literals with semicolons
      { from: /`([^`]*);`/g, to: '`$1`' },
      // Fix string literals with semicolons
      { from: /"([^"]*);"/g, to: '"$1"' },
      { from: /'([^']*);'/g, to: "'$1'" },
    ];
    
    patterns.forEach(pattern => {
      const newContent = content.replace(pattern.from, pattern.to);
      if (newContent !== content) {
        content = newContent;
        modified = true;
      }
    });
    
    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed semicolons in: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

function findTsxFiles(dir) {
  const files = [];
  
  function traverse(currentDir) {
    const items = fs.readdirSync(currentDir);
    
    for (const item of items) {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        traverse(fullPath);
      } else if (item.endsWith('.tsx')) {
        files.push(fullPath);
      }
    }
  }
  
  traverse(dir);
  return files;
}

// Main execution
const appDir = '/workspace/app';
const tsxFiles = findTsxFiles(appDir);

console.log(`Found ${tsxFiles.length} .tsx files to process`);

let fixedCount = 0;
for (const file of tsxFiles) {
  if (fixSemicolonsInFile(file)) {
    fixedCount++;
  }
}

console.log(`Fixed semicolons in ${fixedCount} files`);