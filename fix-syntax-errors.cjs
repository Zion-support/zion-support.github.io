const fs = require('fs');
const path = require('path');

// Function to recursively find all TypeScript/JavaScript files
function findFiles(dir, extensions = ['.ts', '.tsx', '.js', '.jsx']) {
  let results = [];
  const list = fs.readdirSync(dir);
  
  list.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat && stat.isDirectory()) {
      if (!file.startsWith('.') && file !== 'node_modules') {
        results = results.concat(findFiles(filePath, extensions));
      }
    } else {
      const ext = path.extname(file);
      if (extensions.includes(ext)) {
        results.push(filePath);
      }
    }
  });
  
  return results;
}

// Fix syntax errors
function fixSyntaxErrors(content) {
  let modified = false;
  
  // Remove extra semicolons
  content = content.replace(/;\s*;\s*/g, ';\n');
  content = content.replace(/;\s*;\s*$/gm, ';');
  
  // Fix malformed catch blocks
  content = content.replace(/catch\s*\(\s*\)\s*{/g, 'catch (error) {');
  
  // Remove orphaned semicolons
  content = content.replace(/^\s*;\s*$/gm, '');
  content = content.replace(/;\s*$/gm, ';');
  
  // Fix missing closing braces
  content = content.replace(/}\s*;\s*$/gm, '}');
  
  // Fix function calls
  content = content.replace(/\(\s*;\s*\)/g, '()');
  content = content.replace(/\(\s*;\s*,/g, '(');
  
  // Fix array/object literals
  content = content.replace(/\[\s*;\s*\]/g, '[]');
  content = content.replace(/{\s*;\s*}/g, '{}');
  
  // Fix JSX
  content = content.replace(/{\s*;\s*}/g, '{}');
  
  // Clean up extra whitespace
  content = content.replace(/\n\s*\n\s*\n/g, '\n\n');
  
  return { content, modified };
}

// Main function
function main() {
  const appDir = path.join(__dirname, 'app');
  const files = findFiles(appDir);
  
  let totalModified = 0;
  
  files.forEach(file => {
    try {
      let content = fs.readFileSync(file, 'utf8');
      let modified = false;
      
      // Apply fixes
      const result = fixSyntaxErrors(content);
      content = result.content;
      modified = result.modified;
      
      if (modified) {
        fs.writeFileSync(file, content, 'utf8');
        console.log(`Fixed: ${file}`);
        totalModified++;
      }
    } catch (error) {
      console.error(`Error processing ${file}:`, error.message);
    }
  });
  
  console.log(`\nTotal files modified: ${totalModified}`);
}

main();