import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Function to fix common syntax errors
function fixSyntaxErrors(content) {
  // Fix semicolons in object properties
  content = content.replace(/title: '([^']+)';,/g, "title: '$1',");
  content = content.replace(/description: '([^']+)';/g, "description: '$1'");
  content = content.replace(/name: '([^']+)';/g, "name: '$1'");
  content = content.replace(/href: '([^']+)';/g, "href: '$1'");
  
  // Fix extra semicolons in object properties
  content = content.replace(/hasError: false ;/g, 'hasError: false');
  content = content.replace(/hasError: true;,/g, 'hasError: true,');
  content = content.replace(/error: Error;,/g, 'error: Error,');
  content = content.replace(/Error;,/g, 'Error,');
  
  // Fix CSS class syntax errors
  content = content.replace(/grid md: grid-cols/g, 'grid md:grid-cols');
  content = content.replace(/hover: border-/g, 'hover:border-');
  content = content.replace(/hover: from-/g, 'hover:from-');
  content = content.replace(/hover: to-/g, 'hover:to-');
  content = content.replace(/border: border-/g, 'border:border-');
  
  // Fix JSX syntax errors
  content = content.replace(/className="([^"]*);/g, 'className="$1"');
  content = content.replace(/style={{([^}]*);/g, 'style={{$1');
  
  // Fix function parameter syntax
  content = content.replace(/\(([^)]*);/g, '($1');
  content = content.replace(/\): ([^,;]+);/g, '): $1');
  
  // Fix missing commas in object literals
  content = content.replace(/(\w+):\s*'([^']+)'\s*(\w+):/g, "$1: '$2',\n    $3:");
  content = content.replace(/(\w+):\s*"([^"]+)"\s*(\w+):/g, '$1: "$2",\n    $3:');
  
  // Fix merge conflict markers
  content = content.replace(/<<<<<<< HEAD[\s\S]*?=======[\s\S]*?>>>>>>> [a-f0-9]+/g, '');
  content = content.replace(/<<<<<<< HEAD[\s\S]*?>>>>>>> [a-f0-9]+/g, '');
  
  // Fix malformed JSX closing tags
  content = content.replace(/<(\w+)>\s*<\/\1>\s*;/g, '<$1></$1>');
  
  // Fix missing closing braces
  content = content.replace(/(\w+):\s*\([^)]*\)\s*{([^}]*)\s*$/gm, '$1: () => {\n    $2\n  }');
  
  return content;
}

// Get all TypeScript/JavaScript files
function getAllFiles(dir, extensions = ['.ts', '.tsx', '.js', '.jsx']) {
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
const files = getAllFiles(path.join(__dirname, 'app'));
let fixedCount = 0;

files.forEach(file => {
  try {
    const content = fs.readFileSync(file, 'utf8');
    const fixedContent = fixSyntaxErrors(content);
    
    if (content !== fixedContent) {
      fs.writeFileSync(file, fixedContent);
      console.log(`Fixed: ${path.relative(__dirname, file)}`);
      fixedCount++;
    }
  } catch (error) {
    console.error(`Error fixing ${file}:`, error.message);
  }
});

console.log(`\nFixed ${fixedCount} files`);