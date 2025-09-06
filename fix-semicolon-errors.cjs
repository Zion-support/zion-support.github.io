const fs = require('fs');
const path = require('path');

function fixSemicolonErrors(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Fix semicolons in import statements
    content = content.replace(
      /import\s*{\s*([^}]+)\s*}\s*from\s*['"][^'"]+['"];?/g,
      (match, imports) => {
        const cleanImports = imports
          .split(',')
          .map(imp => imp.trim().replace(/;+$/, ''))
          .join(', ');
        return match.replace(imports, cleanImports);
      }
    );

    // Fix semicolons in object properties
    content = content.replace(/(\w+):\s*([^,}]+);/g, '$1: $2,');
    content = content.replace(/(\w+):\s*([^,}]+);/g, '$1: $2');

    // Fix semicolons in array elements
    content = content.replace(/\[([^\]]+)\]/g, (match, arrayContent) => {
      const cleanArray = arrayContent
        .split(',')
        .map(item => item.trim().replace(/;+$/, ''))
        .join(', ');
      return `[${cleanArray}]`;
    });

    // Fix semicolons in function parameters
    content = content.replace(/\(([^)]+)\)/g, (match, params) => {
      const cleanParams = params
        .split(',')
        .map(param => param.trim().replace(/;+$/, ''))
        .join(', ');
      return `(${cleanParams})`;
    });

    // Remove standalone semicolons
    content = content.replace(/^\s*;\s*$/gm, '');

    // Fix object literal syntax
    content = content.replace(/\{\s*([^}]+)\s*\}/g, (match, objContent) => {
      const cleanObj = objContent
        .split(',')
        .map(item => item.trim().replace(/;+$/, ''))
        .join(', ');
      return `{ ${cleanObj} }`;
    });

    if (content !== fs.readFileSync(filePath, 'utf8')) {
      fs.writeFileSync(filePath, content, 'utf8');
      modified = true;
    }

    return modified;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

function processDirectory(dirPath) {
  const files = fs.readdirSync(dirPath);
  let fixedCount = 0;

  for (const file of files) {
    const filePath = path.join(dirPath, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      fixedCount += processDirectory(filePath);
    } else if (
      file.endsWith('.tsx') ||
      file.endsWith('.ts') ||
      file.endsWith('.jsx') ||
      file.endsWith('.js')
    ) {
      if (fixSemicolonErrors(filePath)) fixedCount++;
    }
  }

  return fixedCount;
}

console.log('Starting semicolon error fixes...');
const fixedCount = processDirectory('./pages');
console.log(`Fixed ${fixedCount} files`);
