#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
<<<<<<< HEAD
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Function to fix common syntax errors
function fixSyntaxErrors(content) {
  let fixed = content;
  
  // Fix missing semicolons after imports
  fixed = fixed.replace(/import\s+[^;]+$/gm, (match) => {
    if (!match.endsWith(';')) {
      return match + ';';
    }
    return match;
  });
  
  // Fix malformed export statements
  fixed = fixed.replace(/export\s+default\s+function\s+([^{]+)\s*{/g, 'export default function $1 {');
  
  // Fix missing quotes in JSX attributes
  fixed = fixed.replace(/className\s*=\s*'([^']*)\s*'/g, "className='$1'");
  
  // Fix broken JSX syntax
  fixed = fixed.replace(/<([^>]+)\s*>/g, (match) => {
    return match.replace(/\s+/g, ' ').trim();
  });
  
  // Fix missing semicolons in object properties
  fixed = fixed.replace(/(\w+):\s*([^,}]+)(?=[,}])/g, '$1: $2');
  
  // Fix malformed array syntax
  fixed = fixed.replace(/\[\s*([^\]]+)\s*\]/g, '[$1]');
  
  // Fix missing commas in arrays
  fixed = fixed.replace(/\]\s*\[/g, '], [');
  
  // Fix broken string literals
  fixed = fixed.replace(/'([^']*)\s*'/g, "'$1'");
  
  return fixed;
}

// Function to process a single file
function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const fixed = fixSyntaxErrors(content);
    
    if (content !== fixed) {
      fs.writeFileSync(filePath, fixed, 'utf8');
      console.log(`Fixed: ${filePath}`);
=======
import { execSync } from 'child_process';

// Function to fix common syntax errors in files
function fixSyntaxErrors(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Fix malformed imports - add missing semicolons
    content = content.replace(
      /import\s+{[^}]+}\s+from\s+['"][^'"]+['"]\s*(?!;)/g,
      match => {
        if (!match.endsWith(';')) {
          modified = true;
          return match + ';';
        }
        return match;
      }
    );

    // Fix broken import statements with missing commas
    content = content.replace(
      /import\s+{\s*([^}]+)\s*}\s+from\s+['"][^'"]+['"]/g,
      (match, imports) => {
        // Check if imports have proper comma separation
        if (imports.includes(' ') && !imports.includes(',')) {
          modified = true;
          const fixedImports = imports.split(/\s+/).join(', ');
          return match.replace(imports, fixedImports);
        }
        return match;
      }
    );

    // Fix missing semicolons after variable declarations
    content = content.replace(
      /(const|let|var)\s+\w+\s*=\s*[^;]+(?!;)\s*(?=\n|$)/g,
      match => {
        if (!match.endsWith(';')) {
          modified = true;
          return match + ';';
        }
        return match;
      }
    );

    // Fix broken JSX syntax - missing closing tags
    content = content.replace(
      /<(\w+)([^>]*)>(?!.*<\/\1>)/g,
      (match, tagName, attributes) => {
        // Only fix if it's not a self-closing tag and doesn't have a closing tag
        if (!match.endsWith('/>') && !content.includes(`</${tagName}>`)) {
          modified = true;
          return match + `</${tagName}>`;
        }
        return match;
      }
    );

    // Fix malformed function declarations
    content = content.replace(
      /export\s+{\s*function\s*}\s*export\s+default\s+function/g,
      'export default function'
    );

    // Fix broken arrow functions
    content = content.replace(/=>\s*\(\s*\)\s*=>/g, '=> () =>');

    // Fix malformed object literals
    content = content.replace(/\{\s*([^}]*)\s*\}\s*}/g, (match, content) => {
      if (content.includes('{') && !content.includes('}')) {
        modified = true;
        return match.replace('}}', '}');
      }
      return match;
    });

    // Fix broken string literals
    content = content.replace(/['"]([^'"]*)\s*['"]\s*['"]/g, (match, str) => {
      modified = true;
      return `"${str}"`;
    });

    // Fix missing commas in arrays and objects
    content = content.replace(/\[\s*([^\]]*)\s*\]/g, (match, arrayContent) => {
      if (
        arrayContent &&
        !arrayContent.endsWith(',') &&
        !arrayContent.endsWith(';')
      ) {
        const items = arrayContent
          .split(',')
          .map(item => item.trim())
          .filter(item => item);
        if (items.length > 1) {
          modified = true;
          return `[${items.join(', ')}]`;
        }
      }
      return match;
    });

    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed syntax errors in: ${filePath}`);
>>>>>>> main
      return true;
    }
    return false;
  } catch (error) {
<<<<<<< HEAD
    console.error(`Error processing ${filePath}:`, error.message);
=======
    console.error(`Error fixing ${filePath}:`, error.message);
>>>>>>> main
    return false;
  }
}

<<<<<<< HEAD
// Function to recursively find and process files
function processDirectory(dirPath) {
  const files = fs.readdirSync(dirPath);
  let fixedCount = 0;
  
  for (const file of files) {
    const fullPath = path.join(dirPath, file);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      fixedCount += processDirectory(fullPath);
    } else if (file.endsWith('.tsx') || file.endsWith('.ts') || file.endsWith('.jsx') || file.endsWith('.js')) {
      if (processFile(fullPath)) {
        fixedCount++;
      }
    }
  }
  
  return fixedCount;
}

// Main execution
const srcDir = path.join(__dirname, 'src');
console.log('Starting syntax error fixes...');
const totalFixed = processDirectory(srcDir);
console.log(`Fixed ${totalFixed} files`);
=======
// Function to find all TypeScript and JavaScript files
function findFiles(dir, extensions = ['.ts', '.tsx', '.js', '.jsx']) {
  let files = [];

  try {
    const items = fs.readdirSync(dir);

    for (const item of items) {
      const fullPath = path.join(dir, item);
      const stat = fs.statSync(fullPath);

      if (
        stat.isDirectory() &&
        !item.startsWith('.') &&
        item !== 'node_modules'
      ) {
        files = files.concat(findFiles(fullPath, extensions));
      } else if (stat.isFile() && extensions.some(ext => item.endsWith(ext))) {
        files.push(fullPath);
      }
    }
  } catch (error) {
    console.error(`Error reading directory ${dir}:`, error.message);
  }

  return files;
}

// Main execution
function main() {
  console.log('Starting syntax error fixes...');

  const srcDir = path.join(process.cwd(), 'src');
  const files = findFiles(srcDir);

  let fixedCount = 0;
  let totalCount = files.length;

  console.log(`Found ${totalCount} files to check...`);

  for (const file of files) {
    if (fixSyntaxErrors(file)) {
      fixedCount++;
    }
  }

  console.log(
    `\nFixed syntax errors in ${fixedCount} out of ${totalCount} files.`
  );

  // Run linting to check remaining errors
  console.log('\nRunning linting to check remaining errors...');
  try {
    execSync('npm run lint', { stdio: 'inherit' });
  } catch (error) {
    console.log('Linting completed with some remaining errors.');
  }
}

// Run if this is the main module
if (import.meta.url === `file://${process.argv[1]}`) {
  main();
}

export { fixSyntaxErrors, findFiles };
>>>>>>> main
