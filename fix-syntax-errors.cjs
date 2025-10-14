const fs = require('fs');
const path = require('path');

function fixSyntaxErrors(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let fixed = false;
    
    // Fix broken array syntax
    // Pattern: }; export default ComponentName;,
    const brokenArrayPattern = /(\s*\};\s*export\s+default\s+\w+;\s*,)/g;
    if (brokenArrayPattern.test(content)) {
      content = content.replace(brokenArrayPattern, '');
      fixed = true;
    }
    
    // Fix incomplete JSX attributes
    // Pattern: rows={4\n};
    const incompleteAttributePattern = /(\w+=\{[^}]*\n\s*\};\s*export\s+default)/g;
    if (incompleteAttributePattern.test(content)) {
      content = content.replace(incompleteAttributePattern, (match) => {
        return match.replace(/\n\s*\};\s*export\s+default/, '}');
      });
      fixed = true;
    }
    
    // Fix broken JSX elements
    // Pattern: <element\n};
    const brokenJSXPattern = /(<[^>]*\n\s*\};\s*export\s+default)/g;
    if (brokenJSXPattern.test(content)) {
      content = content.replace(brokenJSXPattern, (match) => {
        return match.replace(/\n\s*\};\s*export\s+default/, '>');
      });
      fixed = true;
    }
    
    // Remove stray semicolons and commas
    content = content.replace(/;\s*export\s+default\s+\w+;\s*,/g, '');
    content = content.replace(/,\s*export\s+default\s+\w+;/g, '');
    
    // Fix incomplete arrays
    const incompleteArrayPattern = /(\[\s*\{[^}]*\}\s*;\s*export\s+default)/g;
    if (incompleteArrayPattern.test(content)) {
      content = content.replace(incompleteArrayPattern, (match) => {
        return match.replace(/;\s*export\s+default/, ']');
      });
      fixed = true;
    }
    
    // Clean up extra whitespace
    content = content.replace(/\n\s*\n\s*\n/g, '\n\n');
    content = content.replace(/^\s*\n/gm, '');
    
    if (fixed) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed syntax errors in: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

function fixAllSyntaxErrors(dir) {
  const files = fs.readdirSync(dir);
  let fixedCount = 0;
  
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      fixedCount += fixAllSyntaxErrors(filePath);
    } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
      if (fixSyntaxErrors(filePath)) {
        fixedCount++;
      }
    }
  }
  
  return fixedCount;
}

// Fix all syntax errors
console.log('Fixing syntax errors...');
const fixedCount = fixAllSyntaxErrors('./app');
console.log(`Fixed syntax errors in ${fixedCount} files`);

console.log('Syntax error fixing complete!');