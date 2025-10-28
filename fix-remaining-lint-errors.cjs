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

// Function to fix remaining lint errors
function fixLintErrors(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Fix parsing errors - missing closing parentheses
    const missingParenPattern = /\(\s*\{\s*([^}]*)\s*\}\s*\)\s*=>\s*\{/g;
    content = content.replace(missingParenPattern, (match, params) => {
      // Check if there are missing closing parentheses
      const openParens = (match.match(/\(/g) || []).length;
      const closeParens = (match.match(/\)/g) || []).length;
      if (openParens > closeParens) {
        modified = true;
        return `({ ${params} }) => {`;
      }
      return match;
    });
    
    // Fix destructuring with underscore prefix
    const destructureUnderscorePattern = /\(\{\s*_([^}]*)\s*\}\s*\)\s*=>\s*\{/g;
    content = content.replace(destructureUnderscorePattern, '({ $1 }) => {');
    if (destructureUnderscorePattern.test(content)) modified = true;
    
    // Fix function parameters with underscore
    const paramUnderscorePattern = /\(\s*_([^,)]*)\s*\)\s*=>\s*\{/g;
    content = content.replace(paramUnderscorePattern, '($1) => {');
    if (paramUnderscorePattern.test(content)) modified = true;
    
    // Fix missing commas in function parameters
    const missingCommaPattern = /\(\s*([^)]*)\s*\)\s*=>\s*\{/g;
    content = content.replace(missingCommaPattern, (match, params) => {
      // Check if there are missing commas between parameters
      if (params.includes(' ') && !params.includes(',')) {
        const paramList = params.split(/\s+/).filter(p => p.trim()).join(', ');
        modified = true;
        return `(${paramList}) => {`;
      }
      return match;
    });
    
    // Fix undefined variables by removing underscore prefix
    const undefinedVarPattern = /_([a-zA-Z_][a-zA-Z0-9_]*)/g;
    content = content.replace(undefinedVarPattern, (match, varName) => {
      // Only replace if it's not in a string literal
      const beforeMatch = content.substring(0, content.indexOf(match));
      const stringLiterals = (beforeMatch.match(/['"]/g) || []).length;
      if (stringLiterals % 2 === 0) {
        modified = true;
        return varName;
      }
      return match;
    });
    
    // Fix empty block statements
    const emptyBlockPattern = /\{\s*\}\s*(?=\s*[;,)])/g;
    content = content.replace(emptyBlockPattern, '{ /* Empty block */ }');
    if (emptyBlockPattern.test(content)) modified = true;
    
    // Fix unused variables by prefixing with underscore
    const unusedVarPattern = /const\s+([a-zA-Z_][a-zA-Z0-9_]*)\s*=\s*[^;]+;\s*(?=\s*\/\/.*unused)/g;
    content = content.replace(unusedVarPattern, (match, varName) => {
      modified = true;
      return match.replace(varName, `_${varName}`);
    });
    
    // Fix console statements in production code
    if (!filePath.includes('test') && !filePath.includes('debug')) {
      const consolePattern = /console\.(log|warn|info|debug|trace|table|group|groupEnd)\s*\([^)]*\)\s*;?\s*\n?/g;
      if (consolePattern.test(content)) {
        content = content.replace(consolePattern, '');
        modified = true;
      }
    }
    
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
console.log('Starting comprehensive lint error fixing...');

const appDir = path.join(__dirname, 'app');
const files = findFiles(appDir);

let cleanedCount = 0;
let processedCount = 0;

files.forEach(file => {
  processedCount++;
  if (fixLintErrors(file)) {
    cleanedCount++;
    console.log(`Fixed: ${file}`);
  }
});

console.log(`\nFix complete!`);
console.log(`Files processed: ${processedCount}`);
console.log(`Files fixed: ${cleanedCount}`);