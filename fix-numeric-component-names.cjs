const fs = require('fs');
const path = require('path');

// Function to fix numeric component names
function fixNumericComponentNames(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Find and replace numeric component names
    // Pattern: export default 5gSomethingPage;
    const numericExportPattern = /export default (\d+)([a-zA-Z]+)Page;/g;
    content = content.replace(numericExportPattern, (match, number, rest) => {
      // Convert to valid identifier by prefixing with underscore
      return `export default _${number}${rest}Page;`;
    });
    
    // Also fix the component definition
    const numericComponentPattern = /const (\d+)([a-zA-Z]+)Page:/g;
    content = content.replace(numericComponentPattern, (match, number, rest) => {
      return `const _${number}${rest}Page:`;
    });
    
    // Fix any other numeric identifiers
    const numericIdPattern = /(\d+)([a-zA-Z]+)Page/g;
    content = content.replace(numericIdPattern, (match, number, rest) => {
      return `_${number}${rest}Page`;
    });
    
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Fixed numeric component names in: ${filePath}`);
    return true;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

// Function to recursively find and fix numeric component names
function findAndFixNumericComponents(dir) {
  const files = fs.readdirSync(dir);
  let fixedCount = 0;
  
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      // Skip node_modules and other directories we don't want to process
      if (!['node_modules', '.git', 'dist', 'out', '.next'].includes(file)) {
        fixedCount += findAndFixNumericComponents(filePath);
      }
    } else if (file.endsWith('.tsx') || file.endsWith('.ts') || file.endsWith('.jsx') || file.endsWith('.js')) {
      const content = fs.readFileSync(filePath, 'utf8');
      if (content.includes('export default 5g') || content.includes('const 5g')) {
        if (fixNumericComponentNames(filePath)) {
          fixedCount++;
        }
      }
    }
  }
  
  return fixedCount;
}

// Start fixing numeric component names
console.log('Starting to fix numeric component names...');
const fixedCount = findAndFixNumericComponents('./app');
console.log(`Fixed numeric component names in ${fixedCount} files.`);