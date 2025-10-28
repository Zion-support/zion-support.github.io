const fs = require('fs');
const path = require('path');

// Function to recursively find all .tsx and .ts files
function findFiles(dir, extensions = ['.tsx', '.ts']) {
  let results = [];
  const list = fs.readdirSync(dir);
  
  list.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat && stat.isDirectory()) {
      // Skip node_modules and .next directories
      if (file !== 'node_modules' && file !== '.next' && !file.startsWith('.')) {
        results = results.concat(findFiles(filePath, extensions));
      }
    } else if (extensions.some(ext => file.endsWith(ext))) {
      results.push(filePath);
    }
  });
  
  return results;
}

// Function to clean up unused variables and parameters
function cleanUnusedVariables(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    
    let modified = false;
    let newContent = content;
    
    // Pattern for unused parameters in function signatures
    // Match function parameters that start with underscore
    const unusedParamPattern = /(\w+)\s*:\s*[^,)]+,\s*_(\w+)\s*:\s*[^,)]+/g;
    newContent = newContent.replace(unusedParamPattern, (match, firstParam, unusedParam) => {
      modified = true;
      return `${firstParam}: any`;
    });
    
    // Pattern for single unused parameter
    const singleUnusedParamPattern = /\(_(\w+)\s*:\s*[^)]+\)/g;
    newContent = newContent.replace(singleUnusedParamPattern, '()');
    if (newContent !== content) modified = true;
    
    // Pattern for unused variables in destructuring
    const unusedDestructurePattern = /const\s*{\s*[^}]*,\s*_(\w+)\s*[^}]*}\s*=/g;
    newContent = newContent.replace(unusedDestructurePattern, (match) => {
      modified = true;
      return match.replace(/,\s*_\w+/g, '');
    });
    
    // Pattern for unused imports in destructuring
    const unusedImportPattern = /import\s*{\s*([^}]*),\s*_(\w+)\s*,\s*([^}]*)\s*}\s*from/g;
    newContent = newContent.replace(unusedImportPattern, (match, before, unused, after) => {
      modified = true;
      const beforeClean = before.trim();
      const afterClean = after.trim();
      const remaining = [beforeClean, afterClean].filter(Boolean).join(', ');
      return `import { ${remaining} } from`;
    });
    
    // Pattern for single unused import
    const singleUnusedImportPattern = /import\s*{\s*_(\w+)\s*}\s*from/g;
    newContent = newContent.replace(singleUnusedImportPattern, '// Removed unused import');
    if (newContent !== content) modified = true;
    
    // Pattern for unused type imports
    const unusedTypePattern = /import\s*type\s*{\s*([^}]*),\s*_(\w+)\s*,\s*([^}]*)\s*}\s*from/g;
    newContent = newContent.replace(unusedTypePattern, (match, before, unused, after) => {
      modified = true;
      const beforeClean = before.trim();
      const afterClean = after.trim();
      const remaining = [beforeClean, afterClean].filter(Boolean).join(', ');
      return `import type { ${remaining} } from`;
    });
    
    // Clean up empty import lines
    newContent = newContent.replace(/\/\/ Removed unused import\s*\n?/g, '');
    newContent = newContent.replace(/import\s*{\s*}\s*from\s*['"][^'"]*['"];\s*\n?/g, '');
    
    if (modified) {
      fs.writeFileSync(filePath, newContent);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Main execution
console.log('Starting unused variable cleanup...');

const appDir = path.join(__dirname, 'app');
const files = findFiles(appDir);

let cleanedCount = 0;
let processedCount = 0;

files.forEach(file => {
  processedCount++;
  if (cleanUnusedVariables(file)) {
    cleanedCount++;
    console.log(`Cleaned: ${file}`);
  }
});

console.log(`\nCleanup complete!`);
console.log(`Files processed: ${processedCount}`);
console.log(`Files cleaned: ${cleanedCount}`);