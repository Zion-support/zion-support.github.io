const fs = require('fs');
const path = require('path');

// Function to clean up duplicate imports and fix syntax errors
function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Fix Navigation component syntax error
    if (filePath.includes('Navigation.tsx')) {
      // Fix the return statement syntax
      content = content.replace(/return \(\s*<nav/g, 'return (\n    <nav');
      content = content.replace(/}\s*"}\s*export default Navigation[\s\S]*?export default Navigation\s*$/s, '}\n  );\n};\n\nexport default Navigation;');
      modified = true;
    }

    // Fix duplicate imports
    const lines = content.split('\n');
    const seenImports = new Set();
    const cleanedLines = [];
    let inImportBlock = false;

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      
      // Check if we're starting an import block
      if (line.trim().startsWith('import ') || line.trim().startsWith('"use client"')) {
        inImportBlock = true;
      
      // Check if we're ending the import block
      if (inImportBlock && !line.trim().startsWith('import ') && !line.trim().startsWith('"use client"') && line.trim() !== '') {
        inImportBlock = false;

      if (inImportBlock && line.trim().startsWith('import ')) {
        const importKey = line.trim();
        if (!seenImports.has(importKey)) {
          seenImports.add(importKey);
          cleanedLines.push(line);
      } else if (inImportBlock && line.trim().startsWith('"use client"')) {
        if (!seenImports.has('"use client"')) {
          seenImports.add('"use client"');
      } else {

    if (cleanedLines.length !== lines.length) {
      content = cleanedLines.join('\n');

    // Fix common syntax errors
    const fixes = [
      // Fix missing closing quotes in href attributes
      { pattern: /href="\/contact\n\s*className=/g, replacement: 'href="/contact"\n                className=' },
      { pattern: /href="\/about\n\s*className=/g, replacement: 'href="/about"\n                className=' },
      
      // Fix extra closing braces
      { pattern: /\s*\)\s*}\s*}\s*$/gm, replacement: '\n  );\n}' },
      
      // Fix semicolon instead of closing parenthesis
      { pattern: /\s*;\s*$/gm, replacement: '\n  );' },
      
      // Fix missing closing parenthesis in return statements
      { pattern: /return \(\s*<[^>]*>\s*<[^>]*>\s*<\/[^>]*>\s*<\/[^>]*>\s*;\s*$/gm, replacement: 'return (\n    <>\n      <div>Content</div>\n    </>\n  );' },
      
      // Fix multiple export default statements
      { pattern: /export default \w+;\s*\n\s*export default \w+;\s*$/gm, replacement: 'export default $1;' },
      
      // Fix function declaration syntax
      { pattern: /export default function \w+\(\) \{\s*return \(\s*<[^>]*>\s*<[^>]*>\s*<\/[^>]*>\s*<\/[^>]*>\s*;\s*\};/gm, replacement: 'export default function $1() {\n  return (\n    <>\n      <div>Content</div>\n    </>\n  );\n}' }
    ];

    fixes.forEach(fix => {
      const newContent = content.replace(fix.pattern, fix.replacement);
      if (newContent !== content) {
        content = newContent;
    });

    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed: ${filePath}`);
      return true;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  return false;

// Function to recursively find all .tsx and .ts files
function findFiles(dir, extensions = ['.tsx', '.ts']) {
  const files = [];
  
  function traverse(currentDir) {
    const items = fs.readdirSync(currentDir);
    
    for (const item of items) {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
        traverse(fullPath);
      } else if (stat.isFile() && extensions.some(ext => item.endsWith(ext))) {
        files.push(fullPath);
  


// Main execution
console.log('Starting comprehensive syntax fix...');

const appDir = path.join('/workspace', 'app');
const files = findFiles(appDir);

let fixedCount = 0;
for (const file of files) {
  if (fixFile(file)) {
    fixedCount++;

console.log(`Fixed ${fixedCount} files out of ${files.length} total files.`);