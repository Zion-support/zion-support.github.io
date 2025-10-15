const fs = require('fs');
const path = require('path');

// Function to fix common syntax errors in TSX files
function fixSyntaxErrors(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Fix common syntax errors from merge conflicts
    const fixes = [
      // Fix malformed JSX attributes
      { pattern: /className\s*=\s*"[^"]*"\s*"""/g, replacement: 'className="$1"' },
      { pattern: /className\s*=\s*"[^"]*"\s*"""/g, replacement: 'className="$1"' },
      { pattern: /className\s*=\s*"[^"]*"\s*"""/g, replacement: 'className="$1"' },
      
      // Fix malformed object properties
      { pattern: /(\w+):\s*=\s*"/g, replacement: '$1: "' },
      { pattern: /(\w+):\s*=\s*'/g, replacement: "$1: '" },
      
      // Fix malformed array elements
      { pattern: /,\s*"""/g, replacement: ',' },
      { pattern: /,\s*"""/g, replacement: ',' },
      
      // Fix malformed JSX closing tags
      { pattern: /<\/\w+>\s*"""/g, replacement: '>' },
      
      // Fix malformed function parameters
      { pattern: /\(\s*(\w+)\s*:\s*(\w+)\s*=\s*"/g, replacement: '($1: $2 = "' },
      
      // Fix malformed string literals
      { pattern: /"\s*"""/g, replacement: '"' },
      { pattern: /'\s*"""/g, replacement: "'" },
      
      // Fix malformed imports
      { pattern: /import\s*{\s*([^}]+)\s*}\s*;\s*from\s*'([^']+)'\s*"""/g, replacement: "import { $1 } from '$2';" },
      
      // Fix malformed object destructuring
      { pattern: /{\s*(\w+)\s*:\s*(\w+)\s*=\s*"/g, replacement: '{ $1: $2 = "' },
      
      // Fix malformed JSX elements
      { pattern: /<\w+\s*:\s*className\s*=\s*"[^"]*"\s*"""/g, replacement: (match) => match.replace(/\s*:\s*/, ' ').replace(/\s*"""/, '') },
      
      // Fix malformed array syntax
      { pattern: /\[\s*(\w+)\s*:\s*(\w+)\s*=\s*"/g, replacement: '[$1: $2 = "' },
      
      // Fix malformed function calls
      { pattern: /\(\s*(\w+)\s*:\s*(\w+)\s*=\s*"/g, replacement: '($1: $2 = "' },
      
      // Clean up extra semicolons and quotes
      { pattern: /;\s*"""/g, replacement: ';' },
      { pattern: /,\s*"""/g, replacement: ',' },
      { pattern: /}\s*"""/g, replacement: '}' },
      { pattern: /\)\s*"""/g, replacement: ')' },
      { pattern: /\]\s*"""/g, replacement: ']' },
    ];

    fixes.forEach(fix => {
      const newContent = content.replace(fix.pattern, fix.replacement);
      if (newContent !== content) {
        content = newContent;
        modified = true;
      }
    });

    // Additional specific fixes for common patterns
    content = content
      .replace(/description:\s*'[^']*'\s*"""/g, (match) => match.replace(/\s*"""/, ''))
      .replace(/title:\s*'[^']*'\s*"""/g, (match) => match.replace(/\s*"""/, ''))
      .replace(/icon:\s*<[^>]*>\s*"""/g, (match) => match.replace(/\s*"""/, ''))
      .replace(/className\s*=\s*"[^"]*"\s*"""/g, (match) => match.replace(/\s*"""/, ''))
      .replace(/href\s*=\s*"[^"]*"\s*"""/g, (match) => match.replace(/\s*"""/, ''))
      .replace(/src\s*=\s*"[^"]*"\s*"""/g, (match) => match.replace(/\s*"""/, ''));

    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed syntax errors in: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Function to find all TSX files with syntax errors
function findFilesWithSyntaxErrors(dir) {
  const files = [];
  
  function walkDir(currentPath) {
    const items = fs.readdirSync(currentPath);
    
    for (const item of items) {
      const fullPath = path.join(currentPath, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
        walkDir(fullPath);
      } else if (stat.isFile() && item.endsWith('.tsx')) {
        try {
          const content = fs.readFileSync(fullPath, 'utf8');
          // Check for common syntax error patterns
          if (content.includes('"""') || 
              content.includes('""') || 
              content.includes(':\s*=') ||
              content.includes('className\s*=') && content.includes('"""')) {
            files.push(fullPath);
          }
        } catch (error) {
          // Skip files that can't be read
        }
      }
    }
  }
  
  walkDir(dir);
  return files;
}

// Main execution
console.log('Starting syntax error fixes...');

const appDir = './app';
const filesWithErrors = findFilesWithSyntaxErrors(appDir);

console.log(`Found ${filesWithErrors.length} files with potential syntax errors`);

let fixedCount = 0;
for (const file of filesWithErrors) {
  if (fixSyntaxErrors(file)) {
    fixedCount++;
  }
}

console.log(`Fixed syntax errors in ${fixedCount} files`);
console.log('Syntax error fixes completed!');