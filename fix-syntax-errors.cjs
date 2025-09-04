const fs = require('fs');
const path = require('path');

// Common patterns to fix
const fixes = [
  // Fix missing commas in style objects
  {
    pattern: /(\w+):\s*['"`][^'"`]*['"`]\s*(\w+):/g,
    replacement: '$1: $2,'
  },
  // Fix missing commas in object literals
  {
    pattern: /(\w+):\s*['"`][^'"`]*['"`]\s*(\w+):/g,
    replacement: '$1: $2,'
  },
  // Fix missing commas in style properties
  {
    pattern: /(\w+):\s*['"`][^'"`]*['"`]\s*(\w+):/g,
    replacement: '$1: $2,'
  }
];

function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Fix missing commas in style objects
    const styleObjectPattern = /style=\{\{([^}]+)\}\}/g;
    content = content.replace(styleObjectPattern, (match, styleContent) => {
      // Add missing commas between style properties
      const fixed = styleContent.replace(/(\w+):\s*['"`][^'"`]*['"`]\s*(\w+):/g, '$1: $2,');
      if (fixed !== styleContent) {
        modified = true;
        return `style={{${fixed}}}`;
      }
      return match;
    });
    
    // Fix missing commas in object literals
    const objectPattern = /=\s*\{([^}]+)\}/g;
    content = content.replace(objectPattern, (match, objectContent) => {
      // Add missing commas between object properties
      const fixed = objectContent.replace(/(\w+):\s*['"`][^'"`]*['"`]\s*(\w+):/g, '$1: $2,');
      if (fixed !== objectContent) {
        modified = true;
        return `={${fixed}}`;
      }
      return match;
    });
    
    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed: ${filePath}`);
      return true;
    }
    return false;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

// Get all TypeScript/JavaScript files
function getAllFiles(dir, extensions = ['.tsx', '.ts', '.jsx', '.js']) {
  let files = [];
  const items = fs.readdirSync(dir);
  
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
      files = files.concat(getAllFiles(fullPath, extensions));
    } else if (stat.isFile() && extensions.some(ext => item.endsWith(ext))) {
      files.push(fullPath);
    }
  }
  
  return files;
}

// Fix all files
const files = getAllFiles('.');
let fixedCount = 0;

for (const file of files) {
  if (fixFile(file)) {
    fixedCount++;
  }
}

console.log(`Fixed ${fixedCount} files`);