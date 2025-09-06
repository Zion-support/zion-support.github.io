const fs = require('fs');
const path = require('path');

function fixSyntaxInFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Fix object properties - replace semicolons with commas in object literals
    content = content.replace(/(\w+):\s*([^,;]+);/g, (match, key, value) => {
      // Don't fix if it's the last property in an object (ends with })
      if (content.indexOf(match) + match.length < content.length) {
        const afterMatch = content.substring(content.indexOf(match) + match.length);
        if (afterMatch.trim().startsWith('}')) {
          return match; // Keep semicolon if it's the last property
        }
      }
      return `${key}: ${value},`;
    });
    
    // Fix array elements - replace semicolons with commas in arrays
    content = content.replace(/([^,;]+);(\s*[\]}])/g, '$1,$2');
    
    // Fix import statements - ensure they end with semicolons
    content = content.replace(/import\s+[^;]+,\s*$/gm, (match) => {
      return match.replace(/,\s*$/, ';');
    });
    
    // Fix export statements
    content = content.replace(/export\s+[^;]+,\s*$/gm, (match) => {
      return match.replace(/,\s*$/, ';');
    });
    
    // Fix function parameters
    content = content.replace(/\(\s*([^)]+)\s*\)\s*=>/g, (match, params) => {
      const fixedParams = params.replace(/;\s*/g, ', ');
      return `(${fixedParams}) =>`;
    });
    
    // Fix destructuring assignments
    content = content.replace(/\{\s*([^}]+)\s*\}\s*=/g, (match, destructured) => {
      const fixedDestructured = destructured.replace(/;\s*/g, ', ');
      return `{ ${fixedDestructured} } =`;
    });
    
    fs.writeFileSync(filePath, content);
    console.log(`Fixed syntax in: ${filePath}`);
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
}

function findTsxFiles(dir) {
  const files = [];
  
  function traverse(currentDir) {
    const items = fs.readdirSync(currentDir);
    
    for (const item of items) {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory() && !item.includes('node_modules') && !item.includes('.next')) {
        traverse(fullPath);
      } else if (item.endsWith('.tsx') || item.endsWith('.ts')) {
        files.push(fullPath);
      }
    }
  }
  
  traverse(dir);
  return files;
}

// Fix all TypeScript/React files
const files = findTsxFiles('./pages');
files.push(...findTsxFiles('./components'));

console.log(`Found ${files.length} files to fix`);

files.forEach(fixSyntaxInFile);

console.log('Syntax fixing completed!');