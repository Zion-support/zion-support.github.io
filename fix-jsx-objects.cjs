const fs = require('fs');
const path = require('path');

function fixJSXObjects(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Fix object syntax in JSX attributes
    content = content.replace(/\{\s*\{\s*([^}]+)\s*\}\s*\}/g, '{{$1}}');

    // Fix semicolons in JSX closing tags
    content = content.replace(/>\s*;/g, '>');

    // Fix semicolons in JSX text content
    content = content.replace(/>([^<]+);</g, '>$1<');

    // Fix semicolons in JSX attributes
    content = content.replace(/(\w+)="([^"]*)";/g, '$1="$2"');

    // Fix semicolons in JSX expressions
    content = content.replace(/\{([^}]+)\};/g, '{$1}');

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
    } else if (file.endsWith('.tsx') || file.endsWith('.jsx')) {
      if (fixJSXObjects(filePath)) fixedCount++;
    }
  }

  return fixedCount;
}

console.log('Starting JSX object syntax fixes...');
const fixedCount = processDirectory('./pages');
console.log(`Fixed ${fixedCount} files`);
