#!/usr/bin/env node
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
function fixSyntaxErrors(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    // Fix missing closing tags and syntax issues
    const originalContent = content;
    // Fix missing closing div tags
    content = content.replace(/<div\s+key="[^"]*"\s*>\s*className="[^"]*"\s*>/g, '<div key="$1" className="$2">');
    // Fix malformed JSX attributes
    content = content.replace(/className="\$1"/g, 'className="service-card"');
    // Fix missing closing tags for common patterns
    content = content.replace(/<div\s+key="[^"]*"\s*>\s*className="[^"]*"\s*>\s*<div/g, '<div key="$1" className="$2"><div');
    // Fix missing semicolons and closing braces
    content = content.replace(/export default (\w+)(?!;)/g, 'export default $1;');
    // Fix missing closing tags for React components
    content = content.replace(/(<[A-Z]\w+[^>]*>)(?!.*<\/\1>)(?!.*\/>)/g, (match, tag) => {
      const tagName = tag.match(/<(\w+)/)[1];
}
      return match + `</${tagName}>`;
    });
    // Fix JSX fragment issues
    content = content.replace(/<>\s*<\/>/g, '<></>');
    // Fix missing closing parentheses in function calls
    content = content.replace(/\(([^)]*)\s*$/gm, '($1)');
    // Fix malformed object literals
    content = content.replace(/\{\s*([^}]*)\s*$/gm, '{\n  $1\n}');
    // Fix missing commas in object literals
    content = content.replace(/([^,}])\s*\n\s*([a-zA-Z_$][a-zA-Z0-9_$]*\s*:)/g, '$1,\n  $2');
    // Fix missing closing brackets
    content = content.replace(/\[\s*([^\]]*)\s*$/gm, '[\n  $1\n]');
    // Fix missing closing parentheses in JSX
    content = content.replace(/\(\s*([^)]*)\s*$/gm, '(\n  $1\n)');
    // Clean up extra whitespace
    content = content.replace(/\n\s*\n\s*\n/g, '\n\n');
    content = content.replace(/^\s*\n/gm, '');
    if (content !== originalContent) { fs.writeFileSync(filePath, content); }
      console.log(`Fixed syntax errors in: ${filePath}`);
      modified = true;
    }
    return modified;
  } catch (error) {
}
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
      if (stat.isDirectory() && !item.includes('node_modules') && !item.includes('.git') && !item.includes('app-broken')) {
        traverse(fullPath);
}
      } else if (stat.isFile() && /\.(tsx?|jsx?)$/.test(item) && !item.includes('app-broken')) { files.push(fullPath); }
      }
    }
  }
  traverse(dir);
  return files;
}
// Main execution
const projectRoot = process.cwd();
console.log('Searching for files with syntax errors...');
const filesToCheck = findFilesWithSyntaxErrors(projectRoot);
console.log(`Checking ${filesToCheck.length} files for syntax errors`);
let fixedCount = 0;
for (const file of filesToCheck) {
  if (fixSyntaxErrors(file)) {
    fixedCount++;
}
  }
}
console.log(`Fixed syntax errors in ${fixedCount} files`);