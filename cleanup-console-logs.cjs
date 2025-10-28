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

// Function to clean up console statements
function cleanConsoleStatements(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    
    // Skip files that are specifically for development/debugging
    if (filePath.includes('test') || filePath.includes('debug') || filePath.includes('dev')) {
      return false;
    }
    
    let modified = false;
    let newContent = content;
    
    // Patterns for different console statements
    const consolePatterns = [
      // console.log statements
      /console\.log\s*\([^)]*\)\s*;?\s*\n?/g,
      // console.warn statements
      /console\.warn\s*\([^)]*\)\s*;?\s*\n?/g,
      // console.error statements (keep these for error handling)
      // /console\.error\s*\([^)]*\)\s*;?\s*\n?/g,
      // console.info statements
      /console\.info\s*\([^)]*\)\s*;?\s*\n?/g,
      // console.debug statements
      /console\.debug\s*\([^)]*\)\s*;?\s*\n?/g,
      // console.trace statements
      /console\.trace\s*\([^)]*\)\s*;?\s*\n?/g,
      // console.table statements
      /console\.table\s*\([^)]*\)\s*;?\s*\n?/g,
      // console.group statements
      /console\.group\s*\([^)]*\)\s*;?\s*\n?/g,
      /console\.groupEnd\s*\([^)]*\)\s*;?\s*\n?/g,
    ];
    
    // Apply each pattern
    consolePatterns.forEach(pattern => {
      const matches = newContent.match(pattern);
      if (matches) {
        newContent = newContent.replace(pattern, '');
        modified = true;
      }
    });
    
    // Clean up multiple consecutive empty lines
    newContent = newContent.replace(/\n\s*\n\s*\n/g, '\n\n');
    
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
console.log('Starting console statement cleanup...');

const appDir = path.join(__dirname, 'app');
const files = findFiles(appDir);

let cleanedCount = 0;
let processedCount = 0;

files.forEach(file => {
  processedCount++;
  if (cleanConsoleStatements(file)) {
    cleanedCount++;
    console.log(`Cleaned: ${file}`);
  }
});

console.log(`\nCleanup complete!`);
console.log(`Files processed: ${processedCount}`);
console.log(`Files cleaned: ${cleanedCount}`);