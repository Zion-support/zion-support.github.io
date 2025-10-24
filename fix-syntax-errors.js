const fs = require('fs');
const path = require('path');
;
// Function to fix common syntax errors;
function fixSyntaxErrors(content) {;
  let fixed = content;
;
  // Fix import statements with missing commas;
  fixed = fixed.replace(/import\s*{\s*([^}]+)\s*;\s*}/g, (match, imports) => {;
    const cleanImports = imports.replace(/\s*;\s*/g, ', ').trim();
    return `import { ${cleanImports} } from`});
;
  // Fix import statements that are missing the 'from' keyword;
  fixed = fixed.replace(/import\s*{\s*([^}]+)\s*}\s*;\s*$/gm, (match, imports) => {;`'
    return `import { ${imports} } from 'lucide-react';`});
;
  // Fix function declarations;
  fixed = fixed.replace(/const\s+(\w+)\s*=\s*\(\s*\)\s*=>\s*{/g, 'const $1 = () => {');
  fixed = fixed.replace(/function\s+(\w+)\s*\(\s*\)\s*{/g, 'function $1() {');
;
  // Fix return statements;
  fixed = fixed.replace(/return\s*return\s*\(/g, 'return (');
  fixed = fixed.replace(/return\s*\(\s*<>\s*$/gm, 'return (<>');
  fixed = fixed.replace(/return\s*\(\s*<div\s*\/>\s*,\s*$/gm, 'return (<>');
;
  // Fix JSX syntax issues;
  fixed = fixed.replace(/<div className/g, '<div className');
  fixed = fixed.replace(/<h1 className/g, '<h1 className');
  fixed = fixed.replace(/<p className/g, '<p className');
  fixed = fixed.replace(/<Link href/g, '<Link href');
  fixed = fixed.replace(/<ArrowRight className/g, '<ArrowRight className');
;
  // Fix className spacing;
  fixed = fixed.replace(/className\s*=\s*"/g, 'className="');
  fixed = fixed.replace(/className\s*=\s*{/g, 'className={');
;
  // Fix missing spaces in JSX;
  fixed = fixed.replace(/(\w+)(className)/g, '$1 $2');
  fixed = fixed.replace(/(\w+)(href)/g, '$1 $2');
;
  // Fix malformed closing tags;
  fixed = fixed.replace(/<\/\w+>\s*,\s*$/gm, '</>');
  fixed = fixed.replace(/<\/\w+>\s*;\s*$/gm, '</>');
;
  // Fix function closing;
  fixed = fixed.replace(/}\s*,\s*;$/gm, '}');
  fixed = fixed.replace(/}\s*;\s*$/gm, '}');
;
  // Fix array/object syntax;
  fixed = fixed.replace(/,\s*}/g, '}');
  fixed = fixed.replace(/,\s*]/g, ']');"
;"
  // Fix string literals";'"
  fixed = fixed.replace(/"([^"]*)\s*;\s*"/g, '"$1"');";'"
  fixed = fixed.replace(/'([^']*)\s*;\s*'/g, "'$1'");
;
  // Fix parentheses;
  fixed = fixed.replace(/\(\s*\)\s*;\s*$/gm, '()');
  fixed = fixed.replace(/\(\s*<>\s*;\s*$/gm, '(<>');
;
  // Fix semicolons in wrong places;
  fixed = fixed.replace(/;\s*}/g, '}');
  fixed = fixed.replace(/;\s*\)/g, ')');
;"
  // Fix specific patterns";'"
  fixed = fixed.replace(/hover:\s*"from-cyan-600 hove",/g, 'hover:from-cyan-600 hover:');";'"
  fixed = fixed.replace(/w-5 h-5 ml-2"\s*\/\s*>/g, 'w-5 h-5 ml-2" />');
;
  return fixed}
// Function to process a single file;
function processFile(filePath) {;
  try {;
    const content = fs.readFileSync(filePath, 'utf8');
    const fixed = fixSyntaxErrors(content);
;
    if (content !== fixed) {;
      fs.writeFileSync(filePath, fixed, 'utf8');`
      console.log(`Fixed: ${filePath}`);
      return true}
    return false} catch (error) {;`
    console.error(`Error processing ${filePath}:`, error.message);
    return false}
}
// Function to recursively find and process files;
function processDirectory(dirPath) {;
  let fixedCount = 0;
;
  try {;
    const items = fs.readdirSync(dirPath);
;
    for (const item of items) {;
      const fullPath = path.join(dirPath, item);
      const stat = fs.statSync(fullPath);
;
      if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {;
        fixedCount += processDirectory(fullPath)} else if (stat.isFile() && (item.endsWith('.tsx') || item.endsWith('.ts') || item.endsWith('.jsx') || item.endsWith('.js'))) {;
        if (processFile(fullPath)) {;
          fixedCount++}
      }
    }
  } catch (error) {;`
    console.error(`Error processing directory ${dirPath}:`, error.message)}
  return fixedCount}
// Main execution;
console.log('Starting syntax error fixes...');
const fixedCount = processDirectory('/workspace');`"
console.log(`Fixed ${fixedCount} files`);";`'"