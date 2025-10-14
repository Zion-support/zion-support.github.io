import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Function to fix remaining syntax errors
function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Remove any remaining merge conflict markers
    if (content.includes('<<<<<<<') || content.includes('=======') || content.includes('>>>>>>>')) {
      content = content.replace(/<<<<<<< HEAD\n([\s\S]*?)\n=======([\s\S]*?)\n>>>>>>>.*?\n/g, '$1');
      modified = true;
    }

    // Fix JSX structure issues
    // Fix JSX expressions that need one parent element
    content = content.replace(/return\s*\(\s*<([^>]+)>\s*"([^"]*)"\s*<\/\1>\s*\)/g, 'return (\n    <$1>$2</$1>\n  )');

    // Fix unterminated string literals in JSX
    content = content.replace(/([^\\])"([^"]*?)\n([^"]*?)"/g, '$1"$2$3"');

    // Fix JSX fragments
    content = content.replace(/<>([\s\S]*?)"([^"]*)"<\/>/g, '<>\n    $1$2\n  </>');

    // Fix malformed JSX attributes
    content = content.replace(/className="([^"]*?)"([^"]*?)"/g, 'className="$1$2"');

    // Fix extra quotes in JSX
    content = content.replace(/<([^>]+)>\s*"([^"]*)"\s*<\/\1>/g, '<$1>$2</$1>');

    // Fix function declarations with malformed returns
    content = content.replace(/const\s+(\w+)\s*=\s*\(\)\s*=>\s*{\s*return\s*\(\s*<([^>]+)>\s*"([^"]*)"\s*<\/\2>\s*\)\s*};/g, 
      (match, funcName, tagName, content) => {
        return `const ${funcName} = () => {\n  return (\n    <${tagName}>${content}</${tagName}>\n  );\n};`;
      });

    // Fix malformed object properties
    content = content.replace(/(\w+):\s*"([^"]*?)"([^"]*?)"/g, '$1: "$2$3"');

    // Fix numeric literals followed by identifiers
    content = content.replace(/(\d+)([a-zA-Z_])/g, '$1 $2');

    // Fix type predicate errors
    content = content.replace(/:\s*(\w+)\s*is\s*(\w+)/g, ': $1');

    // Fix property assignment errors
    content = content.replace(/(\w+)\s*=\s*"([^"]*?)"([^"]*?)"/g, '$1: "$2$3"');

    // Fix unexpected tokens
    content = content.replace(/>\s*"([^"]*)"\s*</g, '>$1<');

    // Fix unterminated strings at end of lines
    content = content.replace(/"([^"]*?)\n([^"]*?)"/g, '"$1$2"');

    // Fix JSX closing tag issues
    content = content.replace(/<\/\w+>\s*"([^"]*)"\s*<\/\w+>/g, (match) => {
      return match.replace(/"([^"]*)"\s*<\/\w+>/g, '$1');
    });

    // Fix expression expected errors
    content = content.replace(/(\w+)\s*\(\s*"([^"]*?)"([^"]*?)"\s*\)/g, '$1("$2$3")');

    // Fix declaration or statement expected
    content = content.replace(/^\s*"([^"]*)"\s*$/gm, '');

    // Fix variable declaration expected
    content = content.replace(/^\s*(\w+)\s*=\s*"([^"]*)"\s*$/gm, '');

    // Fix missing closing tags
    content = content.replace(/<(\w+)([^>]*)>\s*"([^"]*)"\s*$/gm, '<$1$2>$3</$1>');

    // Clean up extra semicolons and quotes
    content = content.replace(/;;+/g, ';');
    content = content.replace(/^\s*"\s*$/gm, '');
    content = content.replace(/\s*"\s*$/gm, '');

    // Fix malformed imports
    content = content.replace(/import\s+.*?from\s+["'][^"']*["'];";/g, (match) => {
      return match.replace(/";$/, ';');
    });

    // Fix malformed exports
    content = content.replace(/export\s+default\s+(\w+);";/g, 'export default $1;');

    if (content !== fs.readFileSync(filePath, 'utf8')) {
      fs.writeFileSync(filePath, content);
      console.log(`Fixed: ${filePath}`);
      return true;
    }
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
  return false;
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
    } else if (stat.isFile() && (item.endsWith('.tsx') || item.endsWith('.ts') || item.endsWith('.jsx') || item.endsWith('.js'))) {
      if (fixFile(fullPath)) {
        fixedCount++;
      }
    }
  }

  return fixedCount;
}

// Start fixing from the app directory
console.log('Starting to fix remaining syntax errors...');
const fixedCount = fixDirectory('./app');
console.log(`Fixed ${fixedCount} files.`);

// Also fix root level files
const rootFiles = ['App.tsx', 'main.tsx', 'vite.config.ts', 'eslint.config.js'];
let rootFixedCount = 0;

for (const file of rootFiles) {
  if (fs.existsSync(file)) {
    if (fixFile(file)) {
      rootFixedCount++;
    }
  }
}

console.log(`Fixed ${rootFixedCount} root files.`);
console.log(`Total files fixed: ${fixedCount + rootFixedCount}`);