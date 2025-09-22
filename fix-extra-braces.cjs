const fs = require('fs');
const path = require('path');

function fixExtraBraces(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    // Remove extra closing parentheses and braces at the end
    // Pattern: } followed by ); followed by }
    content = content.replace(/\s*\);\s*}\s*$/g, '');
    // Remove any stray commit hashes
    content = content.replace(/[a-f0-9]{40}/g, '');
    // Remove any remaining merge conflict markers
    // Clean up any extra whitespace at the end
    content = content.trim() + '\n';
    const originalContent = fs.readFileSync(filePath, 'utf8');
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content, 'utf8');
      modified = true;
    }
    return modified;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

function findAndFixFiles(dir) {
  const files = fs.readdirSync(dir);
  let fixedCount = 0;
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat.isDirectory()) {
      fixedCount += findAndFixFiles(filePath);
    } else if (file.endsWith('.tsx')) {
      if (fixExtraBraces(filePath)) {
        console.log(`Fixed extra braces in: ${filePath}`);
        fixedCount++;
      }
    }
  });
  return fixedCount;
}

console.log('Starting extra braces cleanup...');
const fixedCount = findAndFixFiles('./app');
console.log(`Fixed extra braces in ${fixedCount} files.`);