const fs = require('fs');
const path = require('path');

function fixAllJSX(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Fix semicolons in JSX elements
    content = content.replace(/<(\w+);/g, '<$1');
    content = content.replace(/<\/(\w+)>;/g, '</$1>');

    // Fix semicolons in JSX attributes
    content = content.replace(/(\w+)="([^"]*)";/g, '$1="$2"');
    content = content.replace(/(\w+)=\{([^}]+)\};/g, '$1={$2}');

    // Fix semicolons in JSX text content
    content = content.replace(/>([^<]+);</g, '>$1<');

    // Fix semicolons in JSX expressions
    content = content.replace(/\{([^}]+)\};/g, '{$1}');

    // Fix semicolons in JSX closing tags
    content = content.replace(/>\s*;/g, '>');

    // Fix semicolons in JSX self-closing tags
    content = content.replace(/<(\w+)([^>]*)\s*\/>;/g, '<$1$2 />');

    // Fix semicolons in JSX comments
    content = content.replace(/{\/\*([^*]+)\*\/};/g, '{/*$1*/}');

    // Fix object syntax in JSX attributes
    content = content.replace(/\{\s*\{\s*([^}]+)\s*\}\s*\}/g, '{{$1}}');

    // Fix spaces in object syntax
    content = content.replace(/\{\s*\{\s*([^}]+)\s*\}\s*\}/g, '{{$1}}');

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
      if (fixAllJSX(filePath)) fixedCount++;
    }
  }

  return fixedCount;
}

console.log('Starting comprehensive JSX fixes...');
const fixedCount = processDirectory('./pages');
console.log(`Fixed ${fixedCount} files`);
