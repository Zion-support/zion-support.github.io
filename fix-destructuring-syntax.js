const fs = require('fs');
const path = require('path');

// Function to fix the destructuring syntax error
<<<<<<< HEAD
function fixDestructuringSyntax(content) {
  // Pattern to match the incorrect destructuring syntax
  const pattern = /const WorkingPage = \(\{ title: "Page", description: "Professional page services by Zion Tech Group\." \}: \{ title: string; description: string \}\) => \{/g;
  
  // Replace with correct syntax
  const replacement = 'const WorkingPage = ({ title = "Page", description = "Professional page services by Zion Tech Group." }: { title: string; description: string }) => {';
  
  return content.replace(pattern, replacement);
}

// Function to process a single file
function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const fixedContent = fixDestructuringSyntax(content);
    
    if (content !== fixedContent) {
      fs.writeFileSync(filePath, fixedContent, 'utf8');
=======
function fixDestructuringSyntax(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Check if the file has the problematic pattern
    if (content.includes('const WorkingPage = ({ title: "Page"')) {
      // Fix the destructuring syntax
      content = content.replace(
        /const WorkingPage = \(\{ title: "Page", description: "Professional page services by Zion Tech Group\." \}: \{ title: string; description: string \}\)/g,
        'const WorkingPage = ({ title = "Page", description = "Professional page services by Zion Tech Group." }: { title?: string; description?: string })'
      );
      
      fs.writeFileSync(filePath, content, 'utf8');
>>>>>>> cursor/fix-errors-and-merge-to-main-09e0
      console.log(`Fixed: ${filePath}`);
      return true;
    }
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

<<<<<<< HEAD
// Function to recursively find all .tsx files in the app directory
function findTsxFiles(dir) {
  const files = [];
  
  function traverse(currentDir) {
=======
// Function to recursively find and fix all page.tsx files
function fixAllPages(dir) {
  let fixedCount = 0;
  let totalCount = 0;
  
  function processDirectory(currentDir) {
>>>>>>> cursor/fix-errors-and-merge-to-main-09e0
    const items = fs.readdirSync(currentDir);
    
    for (const item of items) {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
<<<<<<< HEAD
        traverse(fullPath);
      } else if (item.endsWith('.tsx')) {
        files.push(fullPath);
=======
        processDirectory(fullPath);
      } else if (item === 'page.tsx') {
        totalCount++;
        if (fixDestructuringSyntax(fullPath)) {
          fixedCount++;
        }
>>>>>>> cursor/fix-errors-and-merge-to-main-09e0
      }
    }
  }
  
<<<<<<< HEAD
  traverse(dir);
  return files;
}

// Main execution
console.log('Starting to fix destructuring syntax errors...');

const appDir = path.join(__dirname, 'app');
const tsxFiles = findTsxFiles(appDir);

console.log(`Found ${tsxFiles.length} .tsx files to process`);

let fixedCount = 0;
let errorCount = 0;

for (const file of tsxFiles) {
  try {
    if (processFile(file)) {
      fixedCount++;
    }
  } catch (error) {
    console.error(`Error processing ${file}:`, error.message);
    errorCount++;
  }
}

console.log(`\nProcessing complete!`);
console.log(`Files fixed: ${fixedCount}`);
console.log(`Errors: ${errorCount}`);
console.log(`Total files processed: ${tsxFiles.length}`);
=======
  processDirectory(dir);
  console.log(`\nFixed ${fixedCount} out of ${totalCount} page.tsx files`);
  return { fixedCount, totalCount };
}

// Start fixing from the app directory
const appDir = path.join(__dirname, 'app');
console.log('Starting to fix destructuring syntax errors...');
const result = fixAllPages(appDir);

console.log(`\nSummary:`);
console.log(`- Total page.tsx files processed: ${result.totalCount}`);
console.log(`- Files fixed: ${result.fixedCount}`);
console.log(`- Files already correct: ${result.totalCount - result.fixedCount}`);
>>>>>>> cursor/fix-errors-and-merge-to-main-09e0
