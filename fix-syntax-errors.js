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

// Fix syntax errors in a file
const fixSyntaxErrors = (filePath) => {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Fix malformed import statements
    // Pattern: import { \nimport { ... } from '...';
    const malformedImportRegex = /import\s+{\s*\nimport\s+{([^}]+)}\s+from\s+['"]([^'"]+)['"];?\s*([^}]+)\s*}/g;
    
    content = content.replace(malformedImportRegex, (match, imports1, source1, imports2) => {
      // Combine the imports
      const allImports = [...imports1.split(','), ...imports2.split(',')]
        .map(imp => imp.trim())
        .filter(imp => imp)
        .join(', ');
      
      modified = true;
      return `import { ${allImports} } from '${source1}';`;
    });
    
    // Fix incomplete import statements
    const incompleteImportRegex = /import\s+{\s*\nimport\s+{([^}]+)}\s+from\s+['"]([^'"]+)['"];?\s*$/gm;
    
    content = content.replace(incompleteImportRegex, (match, imports, source) => {
      modified = true;
      return `import { ${imports.trim()} } from '${source}';`;
    });
    
    // Fix duplicate imports in the same statement
    const duplicateImportRegex = /import\s+{([^}]+)}\s+from\s+['"]([^'"]+)['"];?\s*import\s+{([^}]+)}\s+from\s+['"]([^'"]+)['"];?/g;
    
    content = content.replace(duplicateImportRegex, (match, imports1, source1, imports2, source2) => {
      if (source1 === source2) {
        // Same source, combine imports
        const allImports = [...imports1.split(','), ...imports2.split(',')]
          .map(imp => imp.trim())
          .filter(imp => imp)
          .filter((imp, index, arr) => arr.indexOf(imp) === index) // Remove duplicates
          .join(', ');
        
        modified = true;
        return `import { ${allImports} } from '${source1}';`;
      }
      return match;
    });
    
    // Clean up multiple empty lines
    content = content.replace(/\n\s*\n\s*\n/g, '\n\n');
    
    if (modified) {
      fs.writeFileSync(filePath, content);
      console.log(`Fixed syntax errors in: ${filePath}`);
    }
    
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
  }
};

// Main execution
console.log('Fixing syntax errors...');

const files = getAllFiles('./app');
let fixedCount = 0;

files.forEach(file => {
  try {
    fixSyntaxErrors(file);
    fixedCount++;
  } catch (error) {
    console.error(`Error with file ${file}:`, error.message);
  }
});

console.log(`Processed ${fixedCount} files`);

// Also fix the main App.tsx
fixSyntaxErrors('./App.tsx');

console.log('Syntax errors fix completed!');