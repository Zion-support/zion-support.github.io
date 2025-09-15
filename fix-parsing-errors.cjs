const fs = require('fs');
const path = require('path');

function fixParsingErrors(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Fix common parsing errors

    // Fix missing semicolons
    if (content.match(/[^;]\s*$/m)) {
      content = content.replace(/([^;])\s*$/gm, '$1;');
      modified = true;
    }

    // Fix missing colons in object properties
    content = content.replace(/(\w+)\s*=\s*(\w+)\s*:/g, '$1: $2:');

    // Fix property assignment syntax
    content = content.replace(/(\w+)\s*=\s*(\w+)\s*=/g, '$1: $2 =');

    // Fix missing closing braces
    const openBraces = (content.match(/\{/g) || []).length;
    const closeBraces = (content.match(/\}/g) || []).length;

    if (openBraces > closeBraces) {
      const missingBraces = openBraces - closeBraces;
      content += '\n' + '}'.repeat(missingBraces);
      modified = true;
    }

    // Fix missing closing parentheses
    const openParens = (content.match(/\(/g) || []).length;
    const closeParens = (content.match(/\)/g) || []).length;

    if (openParens > closeParens) {
      const missingParens = openParens - closeParens;
      content += '\n' + ')'.repeat(missingParens);
      modified = true;
    }

    // Fix common syntax issues
    content = content.replace(/,\s*}/g, '}');
    content = content.replace(/,\s*]/g, ']');
    content = content.replace(/,\s*\)/g, ')');

    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
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
      if (fixParsingErrors(filePath)) fixedCount++;
    }
  }

  return fixedCount;
}

console.log('Starting parsing error fixes...');
const fixedCount = processDirectory('./pages');
console.log(`Fixed ${fixedCount} files`);
