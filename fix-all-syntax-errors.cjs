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

// Function to fix all syntax errors
function fixSyntaxErrors(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Fix function parameter destructuring with underscore
    const destructurePattern = /\(\{\s*_([^}]*)\s*\}\)\s*=>\s*\{/g;
    content = content.replace(destructurePattern, '({ $1 }) => {');
    if (destructurePattern.test(content)) modified = true;
    
    // Fix function parameters with underscore
    const paramPattern = /\(\s*_([^,)]*)\s*\)\s*=>\s*\{/g;
    content = content.replace(paramPattern, '($1) => {');
    if (paramPattern.test(content)) modified = true;
    
    // Fix useEffect with underscore
    const useEffectPattern = /useEffect\(_\(\)\s*=>\s*\{/g;
    content = content.replace(useEffectPattern, 'useEffect(() => {');
    if (useEffectPattern.test(content)) modified = true;
    
    // Fix useCallback with underscore
    const useCallbackPattern = /useCallback\(_\(\)\s*=>\s*\{/g;
    content = content.replace(useCallbackPattern, 'useCallback(() => {');
    if (useCallbackPattern.test(content)) modified = true;
    
    // Fix addEventListener with underscore
    const addEventListenerPattern = /addEventListener\(_([^,)]*),\s*\(/g;
    content = content.replace(addEventListenerPattern, 'addEventListener($1, (');
    if (addEventListenerPattern.test(content)) modified = true;
    
    // Fix string literals with underscore
    const stringLiteralPattern = /_([\'"][^\'\"]*[\'\"])/g;
    content = content.replace(stringLiteralPattern, '$1');
    if (stringLiteralPattern.test(content)) modified = true;
    
    // Fix function calls with underscore
    const functionCallPattern = /_\(([^)]*)\)/g;
    content = content.replace(functionCallPattern, '($1)');
    if (functionCallPattern.test(content)) modified = true;
    
    // Fix arrow functions with underscore
    const arrowFunctionPattern = /_\(\)\s*=>\s*\{/g;
    content = content.replace(arrowFunctionPattern, '() => {');
    if (arrowFunctionPattern.test(content)) modified = true;
    
    // Fix destructuring with underscore in parameters
    const destructureParamPattern = /\(\{\s*_([^}]*)\s*\}\s*\)\s*=>\s*\{/g;
    content = content.replace(destructureParamPattern, '({ $1 }) => {');
    if (destructureParamPattern.test(content)) modified = true;
    
    // Fix React.FC with underscore
    const reactFCPattern = /React\.FC<[^>]*>\s*=\s*\(\{\s*_([^}]*)\s*\}\s*\)\s*=>\s*\{/g;
    content = content.replace(reactFCPattern, (match, params) => {
      return match.replace(/\(\{\s*_([^}]*)\s*\}\s*\)\s*=>\s*\{/, '({ $1 }) => {');
    });
    if (reactFCPattern.test(content)) modified = true;
    
    // Fix memo with underscore
    const memoPattern = /memo\(\{\s*_([^}]*)\s*\}\s*\)\s*=>\s*\{/g;
    content = content.replace(memoPattern, 'memo(({ $1 }) => {');
    if (memoPattern.test(content)) modified = true;
    
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
console.log('Starting comprehensive syntax error fixing...');

const appDir = path.join(__dirname, 'app');
const files = findFiles(appDir);

let cleanedCount = 0;
let processedCount = 0;

files.forEach(file => {
  processedCount++;
  if (fixSyntaxErrors(file)) {
    cleanedCount++;
    console.log(`Fixed: ${file}`);
  }
});

console.log(`\nFix complete!`);
console.log(`Files processed: ${processedCount}`);
console.log(`Files fixed: ${cleanedCount}`);