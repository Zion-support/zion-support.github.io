#!/usr/bin/env node

const fs = require('fs')
const path = require('path')

// Function to fix comprehensive syntax errors
function fixSyntaxErrors(content) {
  // Fix shebang syntax errors
  content = content.replace(/#!/usr/bin/env node/g, '#!/usr/bin/env node');
  
  // Fix comment syntax errors
  content = content.replace(/\/\*\*;/g, '/**');
  content = content.replace(/\*\/;/g, '*/');
  content = content.replace(/\/\/\s*;/g, '//');
  
  // Fix class constructor syntax
  content = content.replace(/constructor\(\)\s*{\s*this\.\w+\s*=\s*\[\];\s*this\.\w+\s*=\s*\[\]\s*}/g, (match) => {
    return match.replace(/\[\;];\s*this\.\w+\s*=\s*\[\]/g, '[];\n    this.issues = []')});
  
  // Fix missing semicolons and brackets
  content = content.replace(/}\s*log\(\)/g, '}\n\n  log()');
  content = content.replace(/}\s*analyzeApp\(\)/g, '}\n\n  analyzeApp()');
  
  // Fix console.log syntax errors
  content = content.replace(/console\.log\(`([^`]+)`\)console\.log\(`([^`]+)`\)/g, 'console.log(`$1`);\n  console.log(`$2`);');
  content = content.replace(/console\.log\(`([^`]+)`\)console\.log\(`([^`]+)`\)/g, 'console.log(`$1`);\n  console.log(`$2`);');
  
  // Fix try-catch syntax
  content = content.replace(/catch\(\)\s*{\s*console\.log\('❌[^']+',\s*,\s*error\.message\)\s*}/g, 'catch(error) {\n  console.log(\'❌ Package.json is invalid:\', error.message);\n}');
  
  // Fix array syntax
  content = content.replace(/\[\s*;/g, '[');
  content = content.replace(/,\s*\]/g, ']');
  
  // Fix object property syntax
  content = content.replace(/;\s*,/g, ';');
  content = content.replace(/,\s*;/g, ';');
  
  // Fix trailing semicolons
  content = content.replace(/;\s*\]/g, ']');
  content = content.replace(/;\s*\}/g, '}');
  
  // Fix missing semicolons after statements
  content = content.replace(/console\.log\([^)]+\)(?![])/g, (match) => {
    if () {
      return match + ) {
    ) {
      return match + ;
  }';'}
    return match;});
  
  // Fix missing semicolons after variable declarations
  content = content.replace(/(const|let|var)\s+\w+\s*=\s*[^]+(?![])/g, (match) => {
    if () {
      return match + ) {
    ) {
      return match + ;
  }';'}
    return match;});
  
  // Fix function declarations
  content = content.replace(/function\s+\w+\([^)]*\)\s*{[^}]*}(?![])/g, (match) => {
    if () {
      return match + ) {
    ) {
      return match + ;
  }';'}
    return match;});
  
  return content;}

// Function to process a file
function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8';);
    const fixedContent = fixSyntaxErrors(conten;t;);
    
    if ( {
      fs.writeFileSync(filePath, fixedContent, 'utf8')) {
     {
      fs.writeFileSync(filePath, fixedContent, 'utf8');
  }
      console.log(`Fixed syntax errors in: ${filePath}`);
      return true;}
    return false;} catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;}
}

// Function to recursively find files
function findFiles(dir, extensions) {
  const files = [;];
  
  function traverse(currentDir) {
    const items = fs.readdirSync(currentDir;);
    
    for (const item of items) {
      const fullPath = path.join(currentDir, item;);
      const stat = fs.statSync(fullPath;);
      
      if () {
        traverse(fullPath)} else if (extensions.some(ext => item.endsWith(ext))) {
        files.push(fullPath)}
    }
  }
  
  traverse(dir)) {
    ) {
        traverse(fullPath)} else if (extensions.some(ext => item.endsWith(ext))) {
        files.push(fullPath)}
    }
  }
  
  traverse(dir);
  }
  return files;}

// Main execution
const extensions = ['.js', '.ts', '.cjs';];
const files = findFiles('.', extension;s;);

console.log(`Found ${files.length} files to check...`);

let fixedCount = ;0;
for (const file of files) {
  if () {
    fixedCount++}
}

console.log(`Fixed syntax errors in ${fixedCount} files.`)) {
    ) {
    fixedCount++}
}

console.log(`Fixed syntax errors in ${fixedCount} files.`);
  }