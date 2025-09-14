const fs = require('fs');
const path = require('path');

function fixObjectSyntax(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Fix semicolons in object properties
    content = content.replace(/(\w+):\s*([^,}]+);/g, '$1: $2,');
    content = content.replace(/(\w+):\s*([^,}]+);/g, '$1: $2');

    // Fix semicolons in array elements
    content = content.replace(/"([^"]*)";/g, '"$1",');
    content = content.replace(/"([^"]*)";/g, '"$1"');

    // Fix semicolons in object literals
    content = content.replace(/\{\s*([^}]+)\s*\};/g, '{$1}');

    // Fix semicolons in array literals
    content = content.replace(/\[\s*([^\]]+)\s*\];/g, '[$1]');

    // Fix semicolons in function calls
    content = content.replace(/(\w+)\s*\(\s*([^)]+)\s*\);?/g, '$1($2)');

    // Fix semicolons in object destructuring
    content = content.replace(/\{\s*([^}]+)\s*\};/g, '{$1}');

    // Fix semicolons in array destructuring
    content = content.replace(/\[\s*([^\]]+)\s*\];/g, '[$1]');

    // Fix semicolons in template literals
    content = content.replace(/`([^`]+)`;/g, '`$1`');

    // Fix semicolons in string literals
    content = content.replace(/"([^"]*)";/g, '"$1"');
    content = content.replace(/'([^']*)';/g, "'$1'");

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
      if (fixObjectSyntax(filePath)) fixedCount++;
    }
  }

  return fixedCount;
}

console.log('Starting final object syntax fixes...');
const fixedCount = processDirectory('./pages');
console.log(`Fixed ${fixedCount} files`);
