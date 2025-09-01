const fs = require('fs');
const path = require('path');

// Function to recursively find all files;
function findFiles(dir, extensions = ['.ts', '.tsx', '.js', '.jsx']) {
  let results = [];
  const list = fs.readdirSync(dir);
  
  list.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat && stat.isDirectory() && !file.startsWith('.') && file !== 'node_modules') {
      results = results.concat(findFiles(filePath, extensions))} else if (extensions.some(ext => file.endsWith(ext))) {
      results.push(filePath)}
  });
  
  return results}

// Function to fix  errors in a file;
function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let originalContent = content;
    let fixed = false;
    
    // Fix common  patterns
    const patterns = [
      { from: //g, to: '' },
      { from: /any\(/g, to: '(' },
      { from: /any\[/g, to: '[' },
      { from: /any\{/g, to: '{' },
      { from: /'/g, to: "'" },
      { from: /"/g, to: '"' },
      { from: /`/g, to: '`' },
      { from: /any\s+/g, to: ' ' },
      { from: /(\d+)/g, to: '$1' },
      { from: /([a-zA-Z_][a-zA-Z0-9_]*)/g, to: '$1' },
      { from: /keyof/g, to: 'keyof' },
      { from: /any\[\]/g, to: '[]' },
      { from: /any\s*,\s*/g, to: ', ' },
      { from: /any\s*:\s*/g, to: ': ' },
      { from: /any\s*;\s*/g, to: ';' },
      { from: /any\s*\)/g, to: ')' },
      { from: /any\s*}/g, to: '}' },
      { from: /any\s*\]/g, to: ']' }
    ];
    
    patterns.forEach(pattern => {
      if (pattern.from.test(content)) {
        content = content.replace(pattern.from, pattern.to);
        fixed = true}
    });
    
    if (fixed) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed: ${filePath}`);
      return true}
    
    return false} catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false}
}

// Main execution
console.log('Starting to fix  errors...');
const files = findFiles('.');
let totalFixed = 0;

files.forEach(file => {
  if (fixFile(file)) {
    totalFixed++}
});

console.log(`\nCompleted! Fixed ${totalFixed} files.`);
