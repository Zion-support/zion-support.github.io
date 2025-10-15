#!/usr/bin/env node

import fs from 'fs';
import path from 'path';

// Function to remove unused imports from a file
function fixUnusedImports(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Split content into lines
    const lines = content.split('\n');
    
    // Process each line
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      
      // Check if this is an import line with multiple imports
      const importMatch = line.match(/import\s*{([^}]+)}\s*from\s*['"]([^'"]+)['"]/);
      if (importMatch) {
        const imports = importMatch[1].split(',').map(imp => imp.trim());
        const source = importMatch[2];
        
        // Check which imports are actually used in the file
        const usedImports = [];
        
        for (const imp of imports) {
          // Remove 'as' aliases for checking
          const cleanImport = imp.split(' as ')[0].trim();
          
          // Check if this import is used anywhere in the file
          const isUsed = content.includes(cleanImport) && 
                        !content.includes(`import { ${cleanImport}`) &&
                        !content.includes(`import ${cleanImport}`) &&
                        !content.includes(`import * as ${cleanImport}`);
          
          if (isUsed) {
            usedImports.push(imp);
          }
        }
        
        // If we have unused imports, fix them
        if (usedImports.length !== imports.length) {
          if (usedImports.length === 0) {
            // Remove entire import line
            lines[i] = '';
          } else {
            // Update import line with only used imports
            lines[i] = `import { ${usedImports.join(', ')} } from '${source}';`;
          }
          modified = true;
        }
      }
    }
    
    // Remove empty lines and update content
    const newContent = lines.filter(line => line.trim() !== '').join('\n');
    
    if (modified) {
      fs.writeFileSync(filePath, newContent);
      console.log(`Fixed unused imports in: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Function to remove unused variables
function fixUnusedVariables(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Remove unused variable declarations
    const lines = content.split('\n');
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      
      // Check for unused variable declarations
      if (line.includes('const benefits =') || 
          line.includes('const features =') ||
          line.includes('const pricing =') ||
          line.includes('const testimonials =')) {
        
        // Check if the variable is used
        const varName = line.match(/const\s+(\w+)\s*=/)?.[1];
        if (varName) {
          const isUsed = content.includes(varName) && 
                        !content.includes(`const ${varName} =`);
          
          if (!isUsed) {
            lines[i] = '';
            modified = true;
          }
        }
      }
    }
    
    if (modified) {
      const newContent = lines.filter(line => line.trim() !== '').join('\n');
      fs.writeFileSync(filePath, newContent);
      console.log(`Fixed unused variables in: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Get all TypeScript/JavaScript files
function getAllFiles(dir, extensions = ['.ts', '.tsx', '.js', '.jsx']) {
  let results = [];
  const list = fs.readdirSync(dir);
  
  list.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat && stat.isDirectory()) {
      if (!['node_modules', 'dist', '.git', '.next', 'out'].includes(file)) {
        results = results.concat(getAllFiles(filePath, extensions));
      }
    } else if (extensions.some(ext => file.endsWith(ext))) {
      results.push(filePath);
    }
  });
  
  return results;
}

// Main execution
console.log('🔧 Fixing all linting issues...');

const files = getAllFiles('./app');
let fixedCount = 0;

files.forEach(file => {
  let fileModified = false;
  
  if (fixUnusedImports(file)) {
    fileModified = true;
  }
  
  if (fixUnusedVariables(file)) {
    fileModified = true;
  }
  
  if (fileModified) {
    fixedCount++;
  }
});

console.log(`✅ Fixed linting issues in ${fixedCount} files`);
console.log('🎉 Linting fix completed!');