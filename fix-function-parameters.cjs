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

// Function to fix function parameter syntax
function fixFunctionParameters(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Fix incorrect function parameter syntax
    // Pattern: memo(_({ param1, param2 }) => {
    const incorrectMemoPattern = /memo\(_\(\{\s*([^}]*)\s*\}\)\s*=>\s*\{/g;
    content = content.replace(incorrectMemoPattern, (match, params) => {
      modified = true;
      return `memo(({ ${params} }) => {`;
    });
    
    // Pattern: React.FC<Props> = memo(_({ param1, param2 }) => {
    const incorrectFCPattern = /React\.FC<[^>]*>\s*=\s*memo\(_\(\{\s*([^}]*)\s*\}\)\s*=>\s*\{/g;
    content = content.replace(incorrectFCPattern, (match, params) => {
      modified = true;
      return match.replace(/memo\(_\(\{\s*([^}]*)\s*\}\)\s*=>\s*\{/, `memo(({ ${params} }) => {`);
    });
    
    // Pattern: = memo(_({ param1, param2 }) => {
    const incorrectMemoPattern2 = /=\s*memo\(_\(\{\s*([^}]*)\s*\}\)\s*=>\s*\{/g;
    content = content.replace(incorrectMemoPattern2, (match, params) => {
      modified = true;
      return `= memo(({ ${params} }) => {`;
    });
    
    // Pattern: = (_({ param1, param2 }) => {
    const incorrectArrowPattern = /=\s*_\(\{\s*([^}]*)\s*\}\)\s*=>\s*\{/g;
    content = content.replace(incorrectArrowPattern, (match, params) => {
      modified = true;
      return `= ({ ${params} }) => {`;
    });
    
    // Pattern: (_({ param1, param2 }) => {
    const incorrectArrowPattern2 = /_\(\{\s*([^}]*)\s*\}\)\s*=>\s*\{/g;
    content = content.replace(incorrectArrowPattern2, (match, params) => {
      modified = true;
      return `({ ${params} }) => {`;
    });
    
    if (modified) {
      fs.writeFileSync(filePath, content);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Main execution
console.log('Starting function parameter syntax fixing...');

const appDir = path.join(__dirname, 'app');
const files = findFiles(appDir);

let cleanedCount = 0;
let processedCount = 0;

files.forEach(file => {
  processedCount++;
  if (fixFunctionParameters(file)) {
    cleanedCount++;
    console.log(`Fixed: ${file}`);
  }
});

console.log(`\nFix complete!`);
console.log(`Files processed: ${processedCount}`);
console.log(`Files fixed: ${cleanedCount}`);