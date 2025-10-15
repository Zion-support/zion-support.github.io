import fs from 'fs';
import path from 'path';

// Get all TypeScript/JavaScript files
const getAllFiles = (dir, extensions = ['.ts', '.tsx', '.js', '.jsx']) => {
  let files = [];
  const items = fs.readdirSync(dir);
  
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
      files = files.concat(getAllFiles(fullPath, extensions));
    } else if (extensions.some(ext => item.endsWith(ext))) {
      files.push(fullPath);
    }
  }
  
  return files;
};

// Fix malformed imports in a file
const fixMalformedImports = (filePath) => {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Fix malformed import statements that have code on the same line
    const malformedImportRegex = /import\s+{[^}]+}\s+from\s+['"][^'"]+['"];\s*[^/]/g;
    
    content = content.replace(malformedImportRegex, (match) => {
      // Extract the import part and the code part
      const importEnd = match.indexOf(';');
      const importStatement = match.substring(0, importEnd + 1);
      const remainingCode = match.substring(importEnd + 1).trim();
      
      if (remainingCode) {
        modified = true;
        return importStatement + '\n' + remainingCode;
      }
      return match;
    });
    
    // Fix imports that are missing semicolons and have code after
    const missingSemicolonRegex = /import\s+{[^}]+}\s+from\s+['"][^'"]+['"]\s+[^/]/g;
    
    content = content.replace(missingSemicolonRegex, (match) => {
      const importEnd = match.indexOf("'");
      const lastQuote = match.lastIndexOf("'");
      if (lastQuote > importEnd) {
        const importStatement = match.substring(0, lastQuote + 1) + ';';
        const remainingCode = match.substring(lastQuote + 1).trim();
        
        if (remainingCode) {
          modified = true;
          return importStatement + '\n' + remainingCode;
        }
      }
      return match;
    });
    
    // Fix imports that are concatenated with other code
    const concatenatedImportRegex = /import\s+{[^}]+}\s+from\s+['"][^'"]+['"];\s*const\s+/g;
    
    content = content.replace(concatenatedImportRegex, (match) => {
      modified = true;
      return match.replace('; const', ';\nconst');
    });
    
    // Clean up multiple empty lines
    content = content.replace(/\n\s*\n\s*\n/g, '\n\n');
    
    if (modified) {
      fs.writeFileSync(filePath, content);
      console.log(`Fixed malformed imports in: ${filePath}`);
    }
    
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
  }
};

// Main execution
console.log('Fixing malformed imports...');

const files = getAllFiles('./app');
let fixedCount = 0;

files.forEach(file => {
  try {
    fixMalformedImports(file);
    fixedCount++;
  } catch (error) {
    console.error(`Error with file ${file}:`, error.message);
  }
});

console.log(`Processed ${fixedCount} files`);

// Also fix the main App.tsx
fixMalformedImports('./App.tsx');

console.log('Malformed imports fix completed!');