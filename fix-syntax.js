import fs from 'fs';
import path from 'path';

function fixSyntaxErrors(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Fix common syntax errors
  content = content
    // Remove extra semicolons after JSX elements
    .replace(/;$/gm, '')
    // Fix function declarations
    .replace(/const\s+(\w+):\s*React\.FC\s*=\s*\(\)\s*=>\s*\{/g, 'const $1: React.FC = () => {')
    // Fix variable declarations
    .replace(/const\s+\[([^\]]+)\]\s*=\s*useState\(([^)]+)\);/g, 'const [$1] = useState($2);')
    // Fix JSX return statements
    .replace(/return\s*\(\s*;/g, 'return (')
    // Fix JSX closing tags
    .replace(/>\s*;/g, '>')
    // Fix object properties
    .replace(/(\w+):\s*"([^"]+)",/g, '$1: "$2",')
    // Fix array elements
    .replace(/],\s*;/g, '],')
    // Fix function calls
    .replace(/\(\s*\)\s*;/g, '();')
    // Fix JSX expressions
    .replace(/\{\s*([^}]+)\s*\}\s*;/g, '{$1}')
    // Fix closing braces
    .replace(/\}\s*;/g, '}')
    // Fix trailing commas in objects
    .replace(/,(\s*})/g, '$1')
    // Fix trailing commas in arrays
    .replace(/,(\s*\])/g, '$1');
    
  fs.writeFileSync(filePath, content);
  console.log(`Fixed syntax errors in ${filePath}`);
}

// Get all TSX files with syntax issues
import { execSync } from 'child_process';

try {
  const files = execSync('find src -name "*.tsx" -exec grep -l ");$" {} \\;', { encoding: 'utf8' })
    .trim()
    .split('\n')
    .filter(file => file.trim());

  console.log(`Found ${files.length} files with syntax issues`);
  
  files.forEach(file => {
    if (file.trim()) {
      fixSyntaxErrors(`/workspace/${file.trim()}`);
    }
  });
  
  console.log('All syntax errors fixed!');
} catch (error) {
  console.error('Error finding files:', error.message);
}