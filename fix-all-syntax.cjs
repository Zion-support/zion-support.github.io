const fs = require('fs');
const path = require('path');

// Function to fix a file
function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let fixed = false;

    // Fix divdiv typos
    if (content.includes('divdiv')) {
      content = content.replace(/divdiv/g, 'div');
      fixed = true;
    }

    // Fix malformed style properties (scale, opacity, rotate, x, y, duration, repeat, delay)
    const styleFixRegex = /(\s+style=\{\{\s*[^}]*\}\})\s+scale:\s*\[[^\]]*\],\s*opacity:\s*\[[^\]]*\],\s*rotate:\s*\[[^\]]*\],\s*x:\s*\[[^\]]*\],\s*y:\s*\[[^\]]*\],\s*\}\}\s+duration:\s*[^,]*,\s*repeat:\s*[^,]*,\s*delay:\s*[^,]*,\s*\}\}/g;
    if (styleFixRegex.test(content)) {
      content = content.replace(styleFixRegex, '$1');
      fixed = true;
    }

    // Fix malformed JSX structure
    if (content.includes('Expected closing') || content.includes('Unterminated')) {
      // This is a complex fix, let's just remove the problematic lines
      const lines = content.split('\n');
      const fixedLines = lines.filter(line => 
        !line.includes('scale: [') && 
        !line.includes('opacity: [') && 
        !line.includes('rotate: [') &&
        !line.includes('duration: ') &&
        !line.includes('repeat: ') &&
        !line.includes('delay: ')
      );
      content = fixedLines.join('\n');
      fixed = true;
    }

    if (fixed) {
      fs.writeFileSync(filePath, content);
      console.log(`Fixed: ${filePath}`);
      return true;
    }
    return false;
  } catch (error) {
    console.log(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

// Function to recursively find and fix files
function fixDirectory(dirPath) {
  const items = fs.readdirSync(dirPath);
  let fixedCount = 0;

  for (const item of items) {
    const fullPath = path.join(dirPath, item);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
      fixedCount += fixDirectory(fullPath);
    } else if (item.endsWith('.tsx') || item.endsWith('.jsx')) {
      if (fixFile(fullPath)) {
        fixedCount++;
      }
    }
  }

  return fixedCount;
}

// Start fixing from src directory
console.log('Starting syntax fixes...');
const fixedCount = fixDirectory('/workspace/src');
console.log(`Fixed ${fixedCount} files`);