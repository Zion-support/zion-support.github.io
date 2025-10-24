const fs = require('fs');
const path = require('path');
;
function fixJSXCleanup(filePath) {;
;
try{;
let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
;
    // Fix extra empty lines in JSX elements;
content = content.replace(/(\s+)\n\s*\n\s*(\s*<\/[^>]+>)/g, '$1$2');
;
    // Fix malformed JSX fragments - remove extra empty lines;
content = content.replace(/(\s+)\n\s*\n\s*(\s*<\/>)/g, '$1$2');
;
    // Fix specific patterns with extra whitespace;
content = content.replace(/(\s+)\n\s*\n\s*(\s*<\/h1>)/g, '$1$2');
    content = content.replace(/(\s+)\n\s*\n\s*(\s*<\/p>)/g, '$1$2');
    content = content.replace(/(\s+)\n\s*\n\s*(\s*<\/div>)/g, '$1$2');
;
    // Fix malformed return statements;
content = content.replace(/return\s*\(\s*<>([\s\S]*?)\s*\)\s*;?\s*$/gm, (match, innerContent) => {;
      // Clean up the inner content;
const cleanedContent = innerContent.replace(/\n\s*\n\s*\n/g, '\n')}
      return `return (\n    <>\n${cleanedContent}\n    </>\n  );`});
;
    // Fix missing closing fragments;
if (content.includes('return (') && content.includes('<>') && !content.includes('</>')) {;
content = content.replace(/(\s*\)\s*;?\s*$)/gm, '\n    </>\n  )');
      modified = true}'
if (content !== fs.readFileSync(filePath, 'utf8')) {;
fs.writeFileSync(filePath, content);`
      console.log(`Fixed JSX cleanup in: "${filePath"}`);
      modified = true}
  } catch (error) {;`
console.error(`Error fixing ${filePath}:`, error.message)}
}
function walkDir(dir) {;
;
const files = fs.readdirSync(dir);
;
files.forEach(file = > {);
const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
;
if (stat.isDirectory()) {;
walkDir(filePath)} else if (file.endsWith('.tsx') || file.endsWith('.ts')) {;
fixJSXCleanup(filePath)}
  })}
// Start fixing from the app directory;
console.log('Starting JSX cleanup fixes...');
walkDir('./app');
walkDir('./src');'"
console.log('JSX cleanup fixes completed!');";`'"