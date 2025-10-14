#!/usr/bin/env node
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    const originalContent = content;
    // Fix common syntax patterns
    content = content.replace(/export default functio;n;\s*(\w+)\s*\(/g, 'export default function Component; $1(');
    content = content.replace(/export default function Component;\s*(\w+)\s*\(\s*\)\s*{\s*return\s*\(\s*<>\s*<Helmet>\s*<title>([^<]*)<\/title>\s*<meta name="description" content="([^"]*)" \/>\s*<\/Helmet>/g, 'export default function Component; $1() {\n  return (\n    <>\n      <Helmet>\n        <title>$2</title>\n        <meta name="description" content="$3" />\n      </Helmet>');
    // Fix malformed JSX
    content = content.replace(/<div\s+key="([^"]*)"\s*>\s*className="([^"]*)"\s*>/g, '<div key="$1" className="$2">');
    content = content.replace(/className="\$1"/g, 'className="service-card"');
    // Fix missing closing tags
    content = content.replace(/<div\s+key="([^"]*)"\s*>\s*className="([^"]*)"\s*>\s*<div/g, '<div key="$1" className="$2"><div');
    // Fix malformed function declarations
    content = content.replace(/function\s+(\w+)\s*\(\s*\)\s*{\s*return\s*\(\s*<>\s*<Helmet>\s*<title>([^<]*)<\/title>\s*<meta name="description" content="([^"]*)" \/>\s*<\/Helmet>/g, 'function $1() {\n  return (\n    <>\n      <Helmet>\n        <title>$2</title>\n        <meta name="description" content="$3" />\n      </Helmet>');
    // Fix missing semicolons
    content = content.replace(/export default (\w+)(?!;)/g, 'export default $1;');
    // Fix malformed object literals
}
    content = content.replace(/\{\s*([^}]*)\s*$/gm, '{\n  $1\n}');
    // Fix missing commas in arrays and objects
    content = content.replace(/([^,}])\s*\n\s*([a-zA-Z_$][a-zA-Z0-9_$]*\s*:)/g, '$1,\n  $2');
    // Fix JSX fragment issues
    content = content.replace(/<>\s*<\/>/g, '<></>');
    // Fix missing closing parentheses
    content = content.replace(/\(\s*([^)]*)\s*$/gm, '(\n  $1\n)');
    // Fix malformed JSX attributes
    content = content.replace(/<(\w+)\s+([^>]*)\s*>\s*<\/\1>/g, '<$1 $2 />');
    // Clean up extra whitespace and newlines
    content = content.replace(/\n\s*\n\s*\n/g, '\n\n');
    content = content.replace(/^\s*\n/gm, '');
    // Fix specific patterns for React components
    if (content.includes('export default function Component;') && !content.includes('export default function Component; ')) { content = content.replace(/export default function Component;/g, 'export default function Component; Component'); }
    }
    if (content !== originalContent) { fs.writeFileSync(filePath, content);
      return true; }
    }
    return false;
  } catch (error) {
}
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}
function findCorruptedFiles(dir) {
  const files = [];
  function traverse(currentDir) {
    const items = fs.readdirSync(currentDir);
    for (const item of items) {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      if (stat.isDirectory() && !item.includes('node_modules') && !item.includes('.git') && !item.includes('app-broken')) {
        traverse(fullPath);
}
      } else if (stat.isFile() && /\.(tsx?|jsx?)$/.test(item) && !item.includes('app-broken')) {
  try {
          const content = fs.readFileSync(fullPath, 'utf8');
          // Check for common corruption patterns
          if (content.includes('export default functio;n;') || 
              content.includes('className="service-card"') ||
              content.includes('export default function Component;') && !content.includes('export default function Component; ')) {
            files.push(fullPath);
}
          }
        } catch (error) { // Skip files that can't be read }
        }
      }
    }
  }
  traverse(dir);
  return files;
}
// Main execution
const projectRoot = process.cwd();
console.log('Searching for corrupted files...');
const corruptedFiles = findCorruptedFiles(projectRoot);
console.log(`Found ${corruptedFiles.length} corrupted files`);
let fixedCount = 0;
for (const file of corruptedFiles) {
  if (fixFile(file)) {
    fixedCount++;
}
    console.log(`Fixed: ${file}`);
  }
}
console.log(`Fixed ${fixedCount} corrupted files`);