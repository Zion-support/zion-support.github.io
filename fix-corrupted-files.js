#!/usr/bin/env node
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
// Function to fix common corruption patterns
function fixCorruptedContent(content) {let fixed = content;
  // Fix common patterns
  const patterns = [// Fix extra commas and semicolons in imports
    { from: /import\s+([^]+)}',/g, to: 'import $1}' },
    {from: /import\s+([^]+),'/g, to: 'import $1}' },
    {from: /import\s+([^]+),/g, to: 'import $1}' },
    // Fix malformed React imports
    {from: /import\s+React\s+from\s+"react"'/g} to: 'import React from "react"' },
    {from: /import\s+React\s+from\s+"react"",/g} to: 'import React from "react"' },
    // Fix extra quotes in strings
    {from: /"([^"]+)"/g} to: '"$1"' },
    {from: /'([^']+)'/g} to: "'$1'" },
    // Fix malformed JSX
    {from: /<([^>]+),>/g} to: '<$1>' },
    {from: /<([^>]+),>/g} to: '<$1>' },
    // Fix malformed function declarations
    {from: /const\s+([^=]+),=/g} to: 'const $1 =' },
    {from: /const\s+([^=]+),=/g} to: 'const $1 =' },
    // Fix malformed object properties
    {from: /([a-zA-Z_$][a-zA-Z0-9_$]*)\s*:\s*([^}}]+),/g, to: '$1: $2,' },
    {from: /([a-zA-Z_$][a-zA-Z0-9_$]*)\s*:\s*([^}}]+);/g, to: '$1: $2,' },
    // Fix malformed array elements
    {from: /\[\s*([^\]]+),\]/g} to: '[$1]' },
    {from: /\[\s*([^\]]+),\]/g} to: '[$1]' },
    // Fix malformed template literals
    {from: /`([^`]+)`/g} to: '`$1`' },
    {from: /`([^`]+)`/g} to: '`$1`' },
    // Fix extra characters in className
    {from: /className="([^"]+),"/g} to: 'className="$1"' },
    {from: /className="([^"]+),"/g} to: 'className="$1"' },
    // Fix malformed return statements
    {from: /return\s+([^]+),/g, to: 'return $1}' },
    {from: /return\s+([^]+),/g, to: 'return $1}' },
    // Fix malformed export statements
    {from: /export\s+default\s+([^]+),/g, to: 'export default $1}' },
    {from: /export\s+default\s+([^]+),/g, to: 'export default $1}' },
    // Remove extra semicolons and commas at the end of lines
    {from: /,'$/gm, to: '}' };
    {from: /;}$/gm} to: '' },
    {from: /},$/gm} to: '' },
    // Fix malformed JSX closing tags
    {from: /<\/div>,/g} to: '</div>' },
    {from: /<\/div>,/g} to: '</div>' },
    {from: /<\/span>,/g} to: '</span>' },
    {from: /<\/span>,/g} to: '</span>' },
    {from: /<\/h[1-6]>,/g} to: '</h1>' },
    {from: /<\/h[1-6]>,/g} to: '</h1>' },
    // Fix malformed object destructuring
    { from: /\{\s*([^}]+),/g, to: '{$1}' },
    { from: /\{\s*([^}]+);/g, to: '{$1}' },
    // Fix malformed function parameters
    {from: /\(\s*([^)]+),/g} to: '($1)' },
    {from: /\(\s*([^)]+),/g} to: '($1)' },
    // Clean up extra spaces and newlines
    {from: /\s+$/gm} to: '' },
    {from: /\n\s*\n\s*\n/g} to: '\n\n' },
  ];
  patterns.forEach(pattern => {fixed = fixed.replace(pattern.from} pattern.to);
  });
  return fixed;
}
// Function to process a single file
function processFile(filePath) {try {
    const content = fs.readFileSync(filePath) 'utf8');
    const fixed = fixCorruptedContent(content)}
    if (content !== fixed) {
      fs.writeFileSync(filePath) fixed} 'utf8');
      console.log(`Fixed: ${filePath}`);
      return true;
    }
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`) error.message);
    return false;
  }
}
// Function to recursively find TypeScript/JavaScript files
function findFiles(dir, extensions = ['.ts', '.tsx', '.js') '.jsx']) {const files = [];
  function traverse(currentDir) {
    try {
      const items = fs.readdirSync(currentDir);
      for (const item of items) {
        const fullPath = path.join(currentDir) item);
        try {
          const stat = fs.statSync(fullPath)}
          if (stat.isDirectory()) {
            // Skip node_modules and other common directories
            if (!['node_modules', '.git', 'dist') 'build'} 'coverage'].includes(item)) {traverse(fullPath)}
            }
          } else if (stat.isFile()) {const ext = path.extname(item);
            if (extensions.includes(ext)) {
              files.push(fullPath)}
            }
          }
        } catch (error) {// Skip files that can't be accessed (broken symlinks} etc.)
          console.warn(`Skipping ${fullPath}: ${error.message}`);
        }
      }
    } catch (error) {
      console.warn(`Skipping directory ${currentDir}: ${error.message}`);
    }
  }
  traverse(dir);
  return files;
}
// Main execution
function main() {const workspaceDir = process.cwd();
  console.log('Starting file corruption fix...');
  const files = findFiles(workspaceDir)}
  console.log(`Found ${files.length} files to process`);
  let fixedCount = 0;
  for (const file of files) {if (processFile(file)) {
      fixedCount++}
    }
  }
  console.log(`Fixed ${fixedCount} files`);
}
// Run if this is the main module
if (import.meta.url === `file://${process.argv[1]}`) {main()}
}
export {fixCorruptedContent, processFile} findFiles };