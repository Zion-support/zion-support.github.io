const fs = require('fs');
const path = require('path');

// Function to fix the destructuring syntax error
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
      console.log(`Fixed: ${filePath}`);
      return true;
    }
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Function to recursively find all .tsx files in the app directory
function findTsxFiles(dir) {
  const files = [];
  
  function traverse(currentDir) {
    const items = fs.readdirSync(currentDir);
    
    for (const item of items) {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        traverse(fullPath);
      } else if (item.endsWith('.tsx')) {
        files.push(fullPath);
      }
    }
  }
  
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
