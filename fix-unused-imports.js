const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Get all TypeScript/JavaScript files
function getAllFiles(dir, extensions = ['.ts', '.tsx', '.js', '.jsx']) {
  let results = [];
  const list = fs.readdirSync(dir);
  
  list.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat && stat.isDirectory()) {
      // Skip node_modules and other directories
      if (!['node_modules', '.git', 'dist', '.next', 'out'].includes(file)) {
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

// Fix unused imports in a file
function fixUnusedImports(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Remove unused imports from lucide-react
    const lucideImportRegex = /import\s*{\s*([^}]+)\s*}\s*from\s*["']lucide-react["'];?/g;
    const matches = content.match(lucideImportRegex);
    
    if (matches) {
      matches.forEach(match => {
        // Extract the imports
        const importMatch = match.match(/import\s*{\s*([^}]+)\s*}\s*from\s*["']lucide-react["'];?/);
        if (importMatch) {
          const imports = importMatch[1].split(',').map(imp => imp.trim());
          const usedImports = [];
          
          // Check which imports are actually used in the file
          imports.forEach(imp => {
            const cleanImp = imp.replace(/\s+as\s+\w+/, '').trim();
            const regex = new RegExp(`\\b${cleanImp}\\b`, 'g');
            if (regex.test(content.replace(match, ''))) {
              usedImports.push(imp);
            }
          });
          
          if (usedImports.length !== imports.length) {
            if (usedImports.length > 0) {
              const newImport = `import { ${usedImports.join(', ')} } from "lucide-react";`;
              content = content.replace(match, newImport);
            } else {
              content = content.replace(match, '');
            }
            modified = true;
          }
        }
      });
    }
    
    // Remove unused React imports
    const reactImportRegex = /import\s*{\s*([^}]+)\s*}\s*from\s*["']react["'];?/g;
    const reactMatches = content.match(reactImportRegex);
    
    if (reactMatches) {
      reactMatches.forEach(match => {
        const importMatch = match.match(/import\s*{\s*([^}]+)\s*}\s*from\s*["']react["'];?/);
        if (importMatch) {
          const imports = importMatch[1].split(',').map(imp => imp.trim());
          const usedImports = [];
          
          imports.forEach(imp => {
            const cleanImp = imp.replace(/\s+as\s+\w+/, '').trim();
            const regex = new RegExp(`\\b${cleanImp}\\b`, 'g');
            if (regex.test(content.replace(match, ''))) {
              usedImports.push(imp);
            }
          });
          
          if (usedImports.length !== imports.length) {
            if (usedImports.length > 0) {
              const newImport = `import { ${usedImports.join(', ')} } from "react";`;
              content = content.replace(match, newImport);
            } else {
              content = content.replace(match, '');
            }
            modified = true;
          }
        }
      });
    }
    
    // Remove unused react-router-dom imports
    const routerImportRegex = /import\s*{\s*([^}]+)\s*}\s*from\s*["']react-router-dom["'];?/g;
    const routerMatches = content.match(routerImportRegex);
    
    if (routerMatches) {
      routerMatches.forEach(match => {
        const importMatch = match.match(/import\s*{\s*([^}]+)\s*}\s*from\s*["']react-router-dom["'];?/);
        if (importMatch) {
          const imports = importMatch[1].split(',').map(imp => imp.trim());
          const usedImports = [];
          
          imports.forEach(imp => {
            const cleanImp = imp.replace(/\s+as\s+\w+/, '').trim();
            const regex = new RegExp(`\\b${cleanImp}\\b`, 'g');
            if (regex.test(content.replace(match, ''))) {
              usedImports.push(imp);
            }
          });
          
          if (usedImports.length !== imports.length) {
            if (usedImports.length > 0) {
              const newImport = `import { ${usedImports.join(', ')} } from "react-router-dom";`;
              content = content.replace(match, newImport);
            } else {
              content = content.replace(match, '');
            }
            modified = true;
          }
        }
      });
    }
    
    if (modified) {
      fs.writeFileSync(filePath, content);
      console.log(`Fixed unused imports in: ${filePath}`);
    }
    
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
  }
}

// Main execution
console.log('Fixing unused imports...');

const files = getAllFiles('./app');
files.forEach(file => {
  fixUnusedImports(file);
});

// Fix App.tsx
fixUnusedImports('./App.tsx');

console.log('Done fixing unused imports!');