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

// Function to fix remaining syntax issues
function fixSyntaxIssues(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Fix useEffect(_() => { patterns
    const useEffectPattern = /useEffect\(_\(\)\s*=>\s*\{/g;
    content = content.replace(useEffectPattern, 'useEffect(() => {');
    if (useEffectPattern.test(content)) modified = true;
    
    // Fix useCallback(_() => { patterns
    const useCallbackPattern = /useCallback\(_\(\)\s*=>\s*\{/g;
    content = content.replace(useCallbackPattern, 'useCallback(() => {');
    if (useCallbackPattern.test(content)) modified = true;
    
    // Fix function(_() => { patterns
    const functionPattern = /function\s*_\(\)\s*=>\s*\{/g;
    content = content.replace(functionPattern, 'function() {');
    if (functionPattern.test(content)) modified = true;
    
    // Fix (_() => { patterns
    const arrowPattern = /_\(\)\s*=>\s*\{/g;
    content = content.replace(arrowPattern, '() => {');
    if (arrowPattern.test(content)) modified = true;
    
    // Fix (_param) => { patterns
    const arrowParamPattern = /_\(([^)]*)\)\s*=>\s*\{/g;
    content = content.replace(arrowParamPattern, '($1) => {');
    if (arrowParamPattern.test(content)) modified = true;
    
    // Fix (_{ param }) => { patterns
    const destructurePattern = /\(\{\s*_([^}]*)\s*\}\)\s*=>\s*\{/g;
    content = content.replace(destructurePattern, '({ $1 }) => {');
    if (destructurePattern.test(content)) modified = true;
    
    // Fix missing closing parenthesis in function parameters
    const missingParenPattern = /=\s*memo\(\s*\(\{\s*([^}]*)\s*\}\s*\)\s*=>\s*\{/g;
    content = content.replace(missingParenPattern, (match, params) => {
      // Check if there's a missing closing parenthesis
      const openParens = (match.match(/\(/g) || []).length;
      const closeParens = (match.match(/\)/g) || []).length;
      if (openParens > closeParens) {
        modified = true;
        return `= memo(({ ${params} }) => {`;
      }
      return match;
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
console.log('Starting syntax issue fixing...');

const appDir = path.join(__dirname, 'app');
const files = findFiles(appDir);

let cleanedCount = 0;
let processedCount = 0;

files.forEach(file => {
  processedCount++;
  if (fixSyntaxIssues(file)) {
    cleanedCount++;
    console.log(`Fixed: ${file}`);
  }
});

console.log(`\nFix complete!`);
console.log(`Files processed: ${processedCount}`);
console.log(`Files fixed: ${cleanedCount}`);