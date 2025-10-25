const fs = require('fs');'const path = require('path');'
// Function to fix syntax errors in a file
function fixSyntaxErrors(filePath) {
  try {

    }
    let content = fs.readFileSync(filePath, 'utf8');'    let modified = false;
    

    
    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');'      console.log(`Fixed syntax errors in: ${filePath}`);`      return true;
    
    return false;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);`    return false;

function findFilesWithSyntaxErrors(dir) {
  const files = [];
  
  function traverse(currentDir) {
    const items = fs.readdirSync(currentDir);
    
    for (const item of items) {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {'        traverse(fullPath);
      } else if (stat.isFile() && (item.endsWith('.tsx') || item.endsWith('.ts'))) {'        const content = fs.readFileSync(fullPath, 'utf8');'        // Check for common syntax errors
        if (content.includes('->') || content.includes('`-') || content.includes('return(<>))') || content.includes('const ') && content.includes(': React.FC = () => {') && content.includes('return(<>))')) {'          files.push(fullPath);`        }
  
  traverse(dir);
  return files;

// Find and fix files with syntax errors
const filesWithErrors = findFilesWithSyntaxErrors('./app');'console.log(`Found ${filesWithErrors.length} files with potential syntax errors`);`
let fixedCount = 0;
for (const file of filesWithErrors) {
  if (fixSyntaxErrors(file)) {
    fixedCount++;

// Function to recursively find all TypeScript files
function findFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir);
  
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory() && !file.includes('node_modules') && !file.includes('.git')) {'      findFiles(filePath, fileList);
    } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {'      fileList.push(filePath);
  });
  
  return fileList;

// Main execution
console.log('Starting to fix syntax errors...');'
const files = findFiles('/workspace/app');'files.forEach(file => {
  fixSyntaxErrors(file);

console.log('Finished fixing syntax errors.');'    // Fix JSX fragment issues;
        modified = true;
        return `<div>${inner}</div>`;`      return match;

    // Fix unclosed JSX tags by adding proper closing tags;
    ];

      // Find unclosed opening tags;
      const openTagRegex = new RegExp(`<${tag}([^>]*)>(?!.*</${tag}>`  )`, 'gs');'      const matches = content.match(openTagRegex);`
        // This is a complex fix, let's use a simpler approach;'        // Just ensure proper closing for common patterns;
        content = content.replace(new RegExp(`<${tag}([^>]*)>\\s*$`, 'gm'), `<${tag}$1></${tag}>`);'        modified = true;`
    // Fix missing closing tags for self-closing elements;
    const selfClosingElements = ['img', 'br', 'hr', 'input', 'meta', 'link'];'      content = content.replace(new RegExp(`<${element}([^>]*?)(?<!/)>`, 'g'), `<${element}$1   />`);'      modified = true;`
    // Fix JSX expressions that need wrapping;
    content = content.replace(/\{([^}]*?)\s*\}\s*\{([^}]*?)\s*\}/g, '{$1}{$2}');'
    // Fix missing semicolons in JSX;
    content = content.replace(/(\w+)\s*(\n\s*
console.log(`Fixed ${fixedCount} files`);`</div></div></div>
