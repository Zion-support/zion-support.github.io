const fs = require('fs');
const path = require('path');

// Function to fix common syntax errors
function fixSyntaxErrors(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Fix merge conflict markers
    if (content.includes('<<<<<<< HEAD') || content.includes('=======') || content.includes('>>>>>>>')) {
      console.log(`Fixing merge conflicts in ${filePath}`);
      content = content.replace(/<<<<<<< HEAD[\s\S]*?=======[\s\S]*?>>>>>>> [^\n]+/g, '');
      modified = true;
    }

    // Fix malformed JSX closing tags
    content = content.replace(/<\/[^>]+><\/[^>]+>/g, (match) => {
      const tags = match.match(/<\/[^>]+>/g);
      return tags[tags.length - 1]; // Keep only the last closing tag
    });

    // Fix self-closing tags that are malformed
    content = content.replace(/<([^>]+)><\/\1>/g, '<$1 />');

    // Fix JSX expressions that need parent elements
    content = content.replace(/(\s*)<([A-Z][^>]*)\s*\/><([A-Z][^>]*)\s*\/>/g, '$1<>\n$1  <$2 />\n$1  <$3 />\n$1</>');

    // Fix missing closing tags for common elements
    content = content.replace(/<div([^>]*)>\s*<\/div>/g, '<div$1 />');
    content = content.replace(/<span([^>]*)>\s*<\/span>/g, '<span$1 />');

    // Fix malformed className attributes
    content = content.replace(/className="([^"]*)\s+([^"]*)"/g, 'className="$1 $2"');

    // Fix missing semicolons in JSX
    content = content.replace(/(\w+)\s*=\s*{([^}]+)}\s*([^;])/g, '$1={$2};$3');

    // Fix unterminated strings
    content = content.replace(/(\w+)\s*=\s*"([^"]*)\s*$/gm, '$1="$2"');

    // Fix malformed function declarations
    content = content.replace(/function\s+(\w+)\s*\(\s*\)\s*{\s*$/gm, 'function $1() {\n  ');

    // Fix missing commas in object literals
    content = content.replace(/(\w+):\s*([^,}\n]+)\s*\n(\s*)(\w+):/g, '$1: $2,\n$3$4:');

    // Fix malformed imports
    content = content.replace(/import\s+{\s*([^}]+)\s*}\s*from\s*['"]([^'"]+)['"]\s*;?\s*$/gm, 'import { $1 } from "$2";');

    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed syntax errors in ${filePath}`);
      return true;
    }
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Function to recursively find and fix files
function fixFilesInDirectory(dir) {
  const files = fs.readdirSync(dir);
  let fixedCount = 0;

  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory() && !file.startsWith('.') && file !== 'node_modules') {
      fixedCount += fixFilesInDirectory(filePath);
    } else if (file.endsWith('.tsx') || file.endsWith('.ts') || file.endsWith('.jsx') || file.endsWith('.js')) {
      if (fixSyntaxErrors(filePath)) {
        fixedCount++;
      }
    }
  });

  return fixedCount;
}

// Main execution
console.log('Starting syntax error fixes...');
const fixedCount = fixFilesInDirectory('./app');
console.log(`Fixed ${fixedCount} files with syntax errors.`);

// Also fix files in src directory if it exists
if (fs.existsSync('./src')) {
  const srcFixedCount = fixFilesInDirectory('./src');
  console.log(`Fixed ${srcFixedCount} files in src directory.`);
}

console.log('Syntax error fixes completed.');