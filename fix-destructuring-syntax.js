const fs = require('fs');
const path = require('path');

// Function to fix the destructuring syntax error
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
      console.log(`Fixed: ${filePath}`);
      return true;
    }
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Function to recursively find and fix all page.tsx files
function fixAllPages(dir) {
  let fixedCount = 0;
  let totalCount = 0;
  
  function processDirectory(currentDir) {
    const items = fs.readdirSync(currentDir);
    
    for (const item of items) {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        processDirectory(fullPath);
      } else if (item === 'page.tsx') {
        totalCount++;
        if (fixDestructuringSyntax(fullPath)) {
          fixedCount++;
        }
      }
    }
  }
  
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
