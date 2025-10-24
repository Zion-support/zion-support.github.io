const fs = require('fs');
const path = require('path');

function fixSyntaxErrors(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Fix common syntax errors from merge conflict resolution
    const fixes = [
      // Fix malformed JSX with extra characters
      { pattern: /,\s*-\s*>\s*([^<]+)/g, replacement: '>' },
      { pattern: /`\s*-\s*>\s*([^<]+)/g, replacement: '>' },
      { pattern: /`\s*---\s*-\s*>\s*([^<]+)/g, replacement: '>' },
      
      // Fix malformed function declarations
      { pattern: /const\s+(\w+):\s*React\.FC\s*=\s*\(\)\s*=>\s*{\s*return\(\<\>\)\s*\)/g, replacement: 'const $1: React.FC = () => {\n  return (\n    <div>' },
      
      // Fix malformed JSX closing tags
      { pattern: /\)\s*\)\s*\)/g, replacement: ')' },
      { pattern: /\)\s*\)\s*\)\s*\)/g, replacement: ')' },
      
      // Fix malformed imports in the middle of functions
      { pattern: /export default function\s+\w+\(\)\s*{\s*\n\s*import\s+/g, replacement: 'import ' },
      
      // Fix malformed JSX attributes
      { pattern: /className="([^"]*)\s*,\s*-\s*>\s*([^"]*)"/g, replacement: 'className="$1$2"' },
      
      // Fix malformed closing tags
      { pattern: /<\/div><\/div><\/div>/g, replacement: '</div>' },
      
      // Fix malformed return statements
      { pattern: /return\s*\(\s*\)\s*\)/g, replacement: 'return (' },
      
      // Fix malformed JSX fragments
      { pattern: /return\(\<\>\)\s*\)/g, replacement: 'return (\n    <div>' },
      
      // Fix malformed function names
      { pattern: /const\s+(\w+):\s*React\.FC\s*=\s*\(\)\s*=>\s*{\s*return\(\<\>\)\s*\)/g, replacement: 'const $1: React.FC = () => {\n  return (\n    <div>' },
      
      // Fix malformed closing braces
      { pattern: /}\s*\)\s*\)\s*\)/g, replacement: '}' },
      
      // Fix malformed JSX with extra characters
      { pattern: /,\s*-\s*>\s*([^<]+)/g, replacement: '>' },
      { pattern: /`\s*-\s*>\s*([^<]+)/g, replacement: '>' },
      
      // Fix malformed className attributes
      { pattern: /className="([^"]*)\s*,\s*-\s*>\s*([^"]*)"/g, replacement: 'className="$1$2"' },
      
      // Fix malformed closing tags with extra characters
      { pattern: /<\/div><\/div><\/div>/g, replacement: '</div>' },
      
      // Fix malformed return statements
      { pattern: /return\s*\(\s*\)\s*\)/g, replacement: 'return (' },
      
      // Fix malformed JSX fragments
      { pattern: /return\(\<\>\)\s*\)/g, replacement: 'return (\n    <div>' },
      
      // Fix malformed function names
      { pattern: /const\s+(\w+):\s*React\.FC\s*=\s*\(\)\s*=>\s*{\s*return\(\<\>\)\s*\)/g, replacement: 'const $1: React.FC = () => {\n  return (\n    <div>' },
      
      // Fix malformed closing braces
      { pattern: /}\s*\)\s*\)\s*\)/g, replacement: '}' },
    ];
    
    for (const fix of fixes) {
      const newContent = content.replace(fix.pattern, fix.replacement);
      if (newContent !== content) {
        content = newContent;
        modified = true;
      }
    }
    
    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed syntax errors in: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

function findFilesWithSyntaxErrors(dir) {
  const files = [];
  
  function traverse(currentDir) {
    const items = fs.readdirSync(currentDir);
    
    for (const item of items) {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
        traverse(fullPath);
      } else if (stat.isFile() && (item.endsWith('.tsx') || item.endsWith('.ts'))) {
        const content = fs.readFileSync(fullPath, 'utf8');
        // Check for common syntax errors
        if (content.includes('->') || content.includes('`-') || content.includes('return(<>))') || content.includes('const ') && content.includes(': React.FC = () => {') && content.includes('return(<>))')) {
          files.push(fullPath);
        }
      }
    }
  }
  
  traverse(dir);
  return files;
}

// Find and fix files with syntax errors
const filesWithErrors = findFilesWithSyntaxErrors('./app');
console.log(`Found ${filesWithErrors.length} files with potential syntax errors`);

let fixedCount = 0;
for (const file of filesWithErrors) {
  if (fixSyntaxErrors(file)) {
    fixedCount++;
  }
}

console.log(`Fixed ${fixedCount} files`);