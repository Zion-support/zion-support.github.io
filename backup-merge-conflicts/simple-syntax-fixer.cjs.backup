#!/usr/bin/env node;
const fs = require('fs')
const path = require('path')
<<<<<<< HEAD

// Function to fix syntax errors
function fixSyntaxErrors(content) {
  // Fix shebang
  content = content.replace(/#!\/usr\/bin\/env node;/g, '#!/usr/bin/env node');
  
  // Fix comments
  content = content.replace(/\/\*\*;/g, '/**');
  content = content.replace(/\*\/;/g, '*/');
  content = content.replace(/\/\/\s*;/g, '//');
  
  // Fix array syntax
  content = content.replace(/\[\s*;/g, '[');
  content = content.replace(/,\s*\]/g, ']');
  
  // Fix object syntax
  content = content.replace(/;\s*,/g, ';');
  content = content.replace(/,\s*;/g, ';');
  
  // Fix trailing semicolons
  content = content.replace(/;\s*\]/g, ']');
  content = content.replace(/;\s*\}/g, '}');
  
  // Fix missing semicolons after console.log
  content = content.replace(/console\.log\([^)]+\)(?![])/g, (match) => {
    if () {
      return match + ) {
    ) {
      return match + }';'}
    return match});
  
  // Fix missing semicolons after variable declarations
  content = content.replace(/(const|let|var)\s+\w+\s*=\s*[^]+(?![])/g, (match) => {
    if () {
      return match + ) {
    ) {
      return match + }';'}
    return match});
  
  // Fix try-catch syntax
  content = content.replace(/catch\(\)/g, 'catch(error)');
  content = content.replace(/console\.log\('❌[^']+',\s*,\s*error\.message\)/g, '');
  
  return content}

// Function to process a file
function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8';);
    const fixedContent = fixSyntaxErrors(conten;t;);
    
    if ( {
      fs.writeFileSync(filePath, fixedContent, 'utf8')) {
     {
      fs.writeFileSync(filePath, fixedContent, 'utf8')}
      
      return true}
    return false} catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false}
}

// Function to find files
function findFiles(dir, extensions) {
  const files = [];
  
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
  
  traverse(dir)}
  return files}

// Main execution
const extensions = ['.js', '.ts', '.cjs'];
const files = findFiles('.', extension;s;);



let fixedCount = ;0;
for (const file of files) {
  if () {
    fixedCount++}
}

) {
    ) {
    fixedCount++}
}

}
=======
  content = content.replace(/#!\/usr\/bin\/env node;/g, '#!/usr/bin/env node')
  content = content.replace(/\/\*\*;/g, '/**')
  content = content.replace(/\*\/;/g, '*/')
  content = content.replace(/\/\/\s*;/g, '//')
  content = content.replace(/\[\s*;/g, '[')]
  content = content.replace(/,\s*\]/g, ']')
  content = content.replace(/;\s*,/g, ';')
  content = content.replace(/,\s*;/g, ';')
  content = content.replace(/;\s*\]/g, ']')
  content = content.replace(/;\s*\}/g, '}')
      return match + }';'
      return match + }';'
  content = content.replace(/catch\(\)/g, 'catch(error)'
  content = content.replace(/console\.log\('[^']+',\s*,\s*error\.message\)/g, 'console.log(\' Package.json is "invalid")
>>>>>>> main
