const fs = require('fs');
const path = require('path');

// Get all TypeScript/TSX files
function getAllTsxFiles(dir) {
  const files = [];
  const items = fs.readdirSync(dir);
  
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
      files.push(...getAllTsxFiles(fullPath));
    } else if (item.endsWith('.tsx') || item.endsWith('.ts')) {
      files.push(fullPath);
    }
  }
  
  return files;
}

// Fix specific syntax issues
function fixSpecificErrors(content) {
  let fixed = content;
  
  // Fix trailing commas in object properties
  fixed = fixed.replace(/(\w+):\s*'([^']*),',/g, "$1: '$2',");
  fixed = fixed.replace(/(\w+):\s*"([^"]*),",/g, '$1: "$2",');
  
  // Fix trailing commas in arrays
  fixed = fixed.replace(/(\w+)\s*,\s*]/g, '$1]');
  
  // Fix semicolons in JSX
  fixed = fixed.replace(/;\s*>/g, '>');
  fixed = fixed.replace(/;\s*</g, '<');
  
  // Fix semicolons after JSX elements
  fixed = fixed.replace(/(<[^>]+>);/g, '$1');
  
  // Fix trailing commas in function parameters
  fixed = fixed.replace(/(\w+)\s*,\s*\)/g, '$1)');
  
  // Fix object property syntax
  fixed = fixed.replace(/(\w+)\s*:\s*'([^']*),',/g, "$1: '$2',");
  fixed = fixed.replace(/(\w+)\s*:\s*"([^"]*),",/g, '$1: "$2",');
  
  // Fix JSX className syntax
  fixed = fixed.replace(/className="([^"]*),"/g, 'className="$1"');
  
  // Fix missing closing brackets
  fixed = fixed.replace(/(\w+)\s*{\s*([^}]*?)(?=\n\s*[a-zA-Z])/g, (match, name, body) => {
    if (!body.includes('}') && !body.includes('{')) {
      return match + '}';
    }
    return match;
  });
  
  // Fix function declarations
  fixed = fixed.replace(/(\w+)\s*=\s*\([^)]*\)\s*=>\s*{/g, (match) => {
    if (!match.includes(';')) {
      return match;
    }
    return match;
  });
  
  // Fix interface declarations
  fixed = fixed.replace(/interface\s+(\w+)\s*{([^}]*?)(?=\n\s*[a-zA-Z])/g, (match, name, body) => {
    if (!body.includes('}')) {
      return match + '}';
    }
    return match;
  });
  
  return fixed;
}

// Process all files
const allFiles = getAllTsxFiles(__dirname);
let fixedCount = 0;

allFiles.forEach(file => {
  try {
    const content = fs.readFileSync(file, 'utf8');
    const fixed = fixSpecificErrors(content);
    
    if (content !== fixed) {
      fs.writeFileSync(file, fixed);
      console.log(`Fixed: ${path.relative(__dirname, file)}`);
      fixedCount++;
    }
  } catch (error) {
    console.error(`Error processing ${file}:`, error.message);
  }
});

console.log(`\nFixed ${fixedCount} files`);
