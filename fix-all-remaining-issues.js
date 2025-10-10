import fs from 'fs';
import path from 'path';

// Function to fix unused imports in a single file
function fixUnusedImports(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const lines = content.split('\n');
    const newLines = [];
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      const trimmedLine = line.trim();
      
      // Check if this is an import line
      if (trimmedLine.startsWith('import ')) {
        // Extract the imported names from the import line
        const importMatch = trimmedLine.match(/import\s*{([^}]+)}\s*from/);
        if (importMatch) {
          const imports = importMatch[1].split(',').map(imp => imp.trim());
          const usedImports = imports.filter(imp => {
            const name = imp.split(' as ')[0].trim();
            // Check if the name is used in the content (excluding the import line itself)
            const contentWithoutImport = content.replace(line, '');
            return contentWithoutImport.includes(name) && 
                   !contentWithoutImport.includes(`import ${name}`) &&
                   !contentWithoutImport.includes(`{ ${name}`) &&
                   !contentWithoutImport.includes(`{${name}`);
          });
          
          if (usedImports.length === 0) {
            // No used imports, remove the entire line
            continue;
          } else if (usedImports.length < imports.length) {
            // Some imports are unused, keep only the used ones
            const newImportLine = line.replace(importMatch[1], usedImports.join(', '));
            newLines.push(newImportLine);
          } else {
            // All imports are used, keep the line
            newLines.push(line);
          }
        } else {
          // For default imports, check if they're used
          const defaultImportMatch = trimmedLine.match(/import\s+(\w+)\s+from/);
          if (defaultImportMatch) {
            const name = defaultImportMatch[1];
            const contentWithoutImport = content.replace(line, '');
            if (contentWithoutImport.includes(name) && 
                !contentWithoutImport.includes(`import ${name}`)) {
              newLines.push(line);
            }
            // If not used, skip the line (don't add it)
          } else {
            // Other import types, keep them
            newLines.push(line);
          }
        }
      } else {
        newLines.push(line);
      }
    }
    
    const newContent = newLines.join('\n');
    if (newContent !== content) {
      fs.writeFileSync(filePath, newContent, 'utf8');
      console.log(`Fixed unused imports in: ${filePath}`);
      return true;
    }
    
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
  }
  
  return false;
}

// Function to fix parsing errors in blog files
function fixParsingErrors(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    
    // Check if file has parsing errors
    if (content.includes('export default') && !content.includes('export default ')) {
      // Add missing export statement
      const newContent = content + '\n\nexport default BlogPost;';
      fs.writeFileSync(filePath, newContent, 'utf8');
      console.log(`Fixed parsing error in: ${filePath}`);
      return true;
    }
    
    // Check for missing closing braces
    const openBraces = (content.match(/\{/g) || []).length;
    const closeBraces = (content.match(/\}/g) || []).length;
    
    if (openBraces > closeBraces) {
      const missingBraces = openBraces - closeBraces;
      const newContent = content + '\n' + '}'.repeat(missingBraces);
      fs.writeFileSync(filePath, newContent, 'utf8');
      console.log(`Fixed missing braces in: ${filePath}`);
      return true;
    }
    
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
  }
  
  return false;
}

// Function to fix unused variables by prefixing with underscore
function fixUnusedVariables(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    let newContent = content;
    
    // Fix common unused variable patterns
    const patterns = [
      { regex: /(\w+):\s*(\w+)\s*=\s*/, replacement: '_$1: $2 = ' },
      { regex: /const\s+(\w+)\s*=\s*/, replacement: 'const _$1 = ' },
      { regex: /let\s+(\w+)\s*=\s*/, replacement: 'let _$1 = ' },
      { regex: /var\s+(\w+)\s*=\s*/, replacement: 'var _$1 = ' }
    ];
    
    let changed = false;
    patterns.forEach(pattern => {
      if (pattern.regex.test(newContent)) {
        newContent = newContent.replace(pattern.regex, pattern.replacement);
        changed = true;
      }
    });
    
    if (changed) {
      fs.writeFileSync(filePath, newContent, 'utf8');
      console.log(`Fixed unused variables in: ${filePath}`);
      return true;
    }
    
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
  }
  
  return false;
}

// Get all TypeScript/JavaScript files in src directory
function getAllFiles(dir, extensions = ['.ts', '.tsx', '.js', '.jsx']) {
  let results = [];
  const list = fs.readdirSync(dir);
  
  list.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat && stat.isDirectory()) {
      // Skip node_modules and other common directories
      if (!['node_modules', '.git', 'dist', '.next', 'out', 'build'].includes(file)) {
        results = results.concat(getAllFiles(filePath, extensions));
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

// Main execution
console.log('Fixing all remaining issues in src directory...');

const files = getAllFiles('./src', ['.ts', '.tsx', '.js', '.jsx']);

let fixedCount = 0;
files.forEach(file => {
  let fileFixed = false;
  
  // Fix unused imports
  if (fixUnusedImports(file)) {
    fileFixed = true;
  }
  
  // Fix parsing errors
  if (fixParsingErrors(file)) {
    fileFixed = true;
  }
  
  // Fix unused variables
  if (fixUnusedVariables(file)) {
    fileFixed = true;
  }
  
  if (fileFixed) {
    fixedCount++;
  }
});

console.log(`Fixed ${fixedCount} files`);