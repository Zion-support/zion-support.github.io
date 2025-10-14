import fs from 'fs';
import path from 'path';

// Function to fix import statement quotes
function fixImportQuotes(content) {
  let fixed = content;
  
  // Fix import statements that have &apos; instead of single quotes
  fixed = fixed.replace(/from '([^']*)&apos;/g, "from '$1'");
  fixed = fixed.replace(/import '([^']*)&apos;/g, "import '$1'");
  
  // Fix any remaining &apos; in import statements
  fixed = fixed.replace(/&apos;/g, "'");
  
  return fixed;
}

// Function to process a single file
function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const fixed = fixImportQuotes(content);
    
    if (content !== fixed) {
      fs.writeFileSync(filePath, fixed, 'utf8');
      console.log(`Fixed imports: ${filePath}`);
      return true;
    }
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Function to recursively find and process all .tsx and .ts files
function processDirectory(dirPath) {
  let processedCount = 0;
  
  function walkDir(currentPath) {
    const items = fs.readdirSync(currentPath);
    
    for (const item of items) {
      const fullPath = path.join(currentPath, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        walkDir(fullPath);
      } else if (item.endsWith('.tsx') || item.endsWith('.ts')) {
        if (processFile(fullPath)) {
          processedCount++;
        }
      }
    }
  }
  
  walkDir(dirPath);
  return processedCount;
}

// Main execution
console.log('Starting import quote fixes...');
const processedCount = processDirectory('./app');
console.log(`Processed ${processedCount} files with import fixes.`);

// Also process root level files
const rootFiles = ['App.tsx', 'main.tsx'];
let rootProcessed = 0;
for (const file of rootFiles) {
  if (fs.existsSync(file)) {
    if (processFile(file)) {
      rootProcessed++;
    }
  }
}
console.log(`Processed ${rootProcessed} root files with import fixes.`);

console.log('Import quote fixes completed!');