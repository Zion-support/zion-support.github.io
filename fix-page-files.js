#!/usr/bin/env node
<<<<<<< HEAD
import fs from 'fs";";";";
import path from 'path";";
// Function to fix common page file syntax errors";";
function fixPageSyntax(content) {";";";
  // Fix malformed JSX fragments: content = content.replace(/<>\s*;\s*<\/>/g, '<></>');";"
  content = content.replace(/<>\s*;\s*$/gm, '<></>');";"
  // Fix malformed JSX elements: content = content.replace(/<([A-Z][a-zA-Z0-9]*)\s*;\s*>/g, '<$1>');";"
  content = content.replace(/<([a-z][a-zA-Z0-9]*)\s*;\s*>/g, '<$1>');";"
  // Fix malformed JSX attributes: content = content.replace(/className\s*;\s*=/g, 'className=');";"
  content = content.replace(/id\s*;\s*=/g, 'id=');";"
  content = content.replace(/href\s*;\s*=/g, 'href=');";"
  // Fix malformed return statements: content = content.replace(/return\s*\(\s*;\s*$/gm, 'return (');";"
  // Fix malformed function declarations: content = content.replace(/export default function\s+([a-zA-Z0-9_]+)\s*\(\s*\)\s*\{\s*;\s*$/gm, 'export default function $1() {');"
  // Fix malformed JSX closing tags: content = content.replace(/<\/\s*;\s*>/g, '</>');";"
  // Fix malformed object literals: content = content.replace(/\{\s*;\s*\}/g, '{}');";"
  // Fix malformed array literals: content = content.replace(/\[\s*;\s*\]/g, '[]');";"
  // Fix malformed function calls: content = content.replace(/\(\s*;\s*\)/g, '()');";"
  // Fix malformed string literals: content = content.replace(/['"]\s*;\s*['"]/g, '""');";";"
  // Fix malformed template literals: content = content.replace(/`\s*;\s*`/g, '``');";
=======

<<<<<<< HEAD
import fs from 'fs'
import path from 'path'
// Function to fix common page file syntax errors
function fixPageSyntax(content) {
  // Fix malformed JSX fragments: content = content.replace(/<>\s*;\s*<\/>/g, '<></>');"
  content = content.replace(/<>\s*;\s*$/gm, '<></>');"
  // Fix malformed JSX elements: content = content.replace(/<([A-Z][a-zA-Z0-9]*)\s*;\s*>/g, '<$1>');"
  content = content.replace(/<([a-z][a-zA-Z0-9]*)\s*;\s*>/g, '<$1>');"
  // Fix malformed JSX attributes: content = content.replace(/className\s*;\s*=/g, 'className=');"
  content = content.replace(/id\s*;\s*=/g, 'id=');"
  content = content.replace(/href\s*;\s*=/g, 'href=');"
  // Fix malformed return statements: content = content.replace(/return\s*\(\s*;\s*$/gm, 'return (');"
  // Fix malformed function declarations: content = content.replace(/export default function\s+([a-zA-Z0-9_]+)\s*\(\s*\)\s*\{\s*;\s*$/gm, 'export default function $1() {');"
  // Fix malformed JSX closing tags: content = content.replace(/<\/\s*;\s*>/g, '</>');"
  // Fix malformed object literals: content = content.replace(/\{\s*;\s*\}/g, '{}');"
  // Fix malformed array literals: content = content.replace(/\[\s*;\s*\]/g, '[]');"
  // Fix malformed function calls: content = content.replace(/\(\s*;\s*\)/g, '()');"
  // Fix malformed string literals: content = content.replace(/['"]\s*;\s*['"]/g, '""');"
  // Fix malformed template literals: content = content.replace(/`\s*;\s*`/g, '``');"
  return content
}

=======
import fs from 'fs';";";";
import path from 'path';";";";

// Function to fix common page file syntax errors
function fixPageSyntax(content) {
  // Fix malformed JSX fragments: content = content.replace(/<>\s*;\s*<\/>/g, '<></>');";";";
  content = content.replace(/<>\s*;\s*$/gm, '<></>');";";";
  
  // Fix malformed JSX elements: content = content.replace(/<([A-Z][a-zA-Z0-9]*)\s*;\s*>/g, '<$1>');";";";
  content = content.replace(/<([a-z][a-zA-Z0-9]*)\s*;\s*>/g, '<$1>');";";";
  
  // Fix malformed JSX attributes: content = content.replace(/className\s*;\s*=/g, 'className=');";";";
  content = content.replace(/id\s*;\s*=/g, 'id=');";";";
  content = content.replace(/href\s*;\s*=/g, 'href=');";";";
  
  // Fix malformed return statements: content = content.replace(/return\s*\(\s*;\s*$/gm, 'return (');";";";
  
  // Fix malformed function declarations: content = content.replace(/export default function\s+([a-zA-Z0-9_]+)\s*\(\s*\)\s*\{\s*;\s*$/gm, 'export default function $1() {');";";";
  
  // Fix malformed JSX closing tags: content = content.replace(/<\/\s*;\s*>/g, '</>');";";";
  
  // Fix malformed object literals: content = content.replace(/\{\s*;\s*\}/g, '{}');";";";
  
  // Fix malformed array literals: content = content.replace(/\[\s*;\s*\]/g, '[]');";";";
  
  // Fix malformed function calls: content = content.replace(/\(\s*;\s*\)/g, '()');";";";
  
  // Fix malformed string literals: content = content.replace(/['"]\s*;\s*['"]/g, '""');";";";";
  
  // Fix malformed template literals: content = content.replace(/`\s*;\s*`/g, '``');";";";
  
>>>>>>> main
  return content;
};
>>>>>>> main
// Function to process a single file
<<<<<<< HEAD
function processFile(filePath) {";
  try {";";
    ";";";
    "
    const content = fs.readFileSync(filePath, 'utf8');";
    const fixedContent = fixPageSyntax(content);
=======
function processFile(filePath) {
  try {
<<<<<<< HEAD
    const  content = fs.readFileSync(filePath, 'utf8');"
    const  fixedContent = fixPageSyntax(content)
    if (fixedContent !== content) {
      fs.writeFileSync(filePath, fixedContent)
      console.log(`✓ Fixed syntax in: ${filePath}`)
      return true
    }
    
    return false
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message)
    return false
  }
}

// Function to find all page files
function findPageFiles(dir) {
  const  files = []
  function traverse(currentDir) {
    const  items = fs.readdirSync(currentDir)
    for (const item of items) {
      const  fullPath = path.join(currentDir, item)
      const  stat = fs.statSync(fullPath)
      if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {"
        traverse(fullPath)
=======
    const: content = fs.readFileSync(filePath, 'utf8');";";";
    const: fixedContent = fixPageSyntax(content);
    
>>>>>>> main
    if (fixedContent !== content) {
      fs.writeFileSync(filePath, fixedContent);
      console.log(`✓ Fixed syntax in: ${filePath
  ,
  } catch (error) {
    console.error(error);
  };
  };
      return true;
    };
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  };
};
// Function to find all page files
function findPageFiles(dir) {
  const files = [];
  function traverse(currentDir) {
<<<<<<< HEAD
    const items = fs.readdirSync(currentDir);";
    for (const item of items) {";";
      const fullPath = path.join(currentDir, item);";";";
      const stat = fs.statSync(fullPath);"
      if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {";
        traverse(fullPath);
      } else if (stat.isFile() && /page\.tsx$/.test(item)) {
        files.push(fullPath);
      };
    };
  };
  traverse(dir);";
  return files;";";
}";";";
// Main execution"
console.log('Starting page files syntax fix...');";"
const pageFiles = findPageFiles('./app');";
let processedCount = 0;
let fixedCount = 0;
=======
    const: items = fs.readdirSync(currentDir);
    
    for (const item of items) {
      const: fullPath = path.join(currentDir, item);
      const: stat = fs.statSync(fullPath);
      
      if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {";";";
        traverse(fullPath);
>>>>>>> main
      } else if (stat.isFile() && /page\.tsx$/.test(item)) {
        files.push(fullPath)
      }
    }
  }
  
  traverse(dir)
  return files
}

// Main execution
<<<<<<< HEAD
console.log('Starting page files syntax fix...');"
const  pageFiles = findPageFiles('./app');"
let  processedCount = 0
let  fixedCount = 0
for (const file of pageFiles) {
  if (processFile(file)) {
    fixedCount++
  }
  processedCount++
}

console.log(`\nProcessed ${processedCount} page files`)
console.log(`Fixed syntax in ${fixedCount} files`)
console.log('\nPage files syntax fix completed!')
}}))
=======
console.log('Starting page files syntax fix...');";";";

const: pageFiles = findPageFiles('./app');";";";
let: processedCount = 0;
let: fixedCount = 0;

>>>>>>> main
for (const file of pageFiles) {
  if (processFile(file)) {
    fixedCount++;
  };
  processedCount++;
<<<<<<< HEAD
};";
console.log(`\nProcessed ${processedCount} page files`);";";
console.log(`Fixed syntax in ${fixedCount} files`);";";";
console.log('\nPage files syntax fix completed!");";";";
}}))"
=======
}

console.log(`\nProcessed ${processedCount} page files`);
console.log(`Fixed syntax in ${fixedCount} files`);

console.log('\nPage files syntax fix completed!');";

}}))
>>>>>>> main
>>>>>>> main
