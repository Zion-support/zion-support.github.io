import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Function to fix merge conflicts and syntax errors
function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Remove merge conflict markers
    if (content.includes('<<<<<<<') || content.includes('=======') || content.includes('>>>>>>>')) {
      // Keep the HEAD version (first part before =======)
      content = content.replace(/<<<<<<< HEAD\n([\s\S]*?)\n=======([\s\S]*?)\n>>>>>>>.*?\n/g, '$1');
      modified = true;
    }

    // Fix common syntax errors
    // Remove extra quotes and semicolons
    content = content.replace(/import\s+.*?from\s+["'][^"']*["'];";/g, (match) => {
      return match.replace(/";$/, ';');
    });

    // Fix JSX syntax errors
    content = content.replace(/return\s*\(\s*"([\s\S]*?)"\s*\)/g, (match, jsxContent) => {
      return `return (\n${jsxContent}\n)`;
    });

    // Fix extra quotes in JSX
    content = content.replace(/<([^>]+)>\s*"([^"]*)"\s*<\/\1>/g, '<$1>$2</$1>');
    content = content.replace(/<([^>]+)>\s*"([^"]*)"\s*<\/\1>/g, '<$1>$2</$1>');

    // Fix unterminated strings
    content = content.replace(/([^\\])"([^"]*?)\n([^"]*?)"/g, '$1"$2$3"');

    // Remove extra semicolons
    content = content.replace(/;;+/g, ';');
    content = content.replace(/;\s*$/gm, ';');

    // Fix JSX structure
    content = content.replace(/<div[^>]*>\s*"([^"]*)"\s*<\/div>/g, '<div$1></div>');

    // Remove empty lines with just quotes
    content = content.replace(/^\s*"\s*$/gm, '');

    // Fix function declarations
    content = content.replace(/const\s+(\w+)\s*=\s*\(\)\s*=>\s*{\s*return\s*\(\s*"([\s\S]*?)"\s*\)\s*};/g, (match, funcName, jsxContent) => {
      return `const ${funcName} = () => {\n  return (\n${jsxContent}\n  );\n};`;
    });

    if (modified || content !== fs.readFileSync(filePath, 'utf8')) {
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
console.log('Starting to fix merge conflicts and syntax errors...');
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