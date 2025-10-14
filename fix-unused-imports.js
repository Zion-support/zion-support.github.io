import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Get all TypeScript/JavaScript files in the app directory
function getAllFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir);
  
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      getAllFiles(filePath, fileList);
    } else if (file.endsWith('.tsx') || file.endsWith('.ts') || file.endsWith('.jsx') || file.endsWith('.js')) {
      fileList.push(filePath);
    }
  });
  
  return fileList;
}

// Fix unused imports in a file
function fixUnusedImports(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Remove unused imports from lucide-react
    const lucideImportRegex = /import\s*{\s*([^}]+)\s*}\s*from\s*['"]lucide-react['"];?/g;
    const lucideMatches = content.match(lucideImportRegex);
    
    if (lucideMatches) {
      lucideMatches.forEach(match => {
        const importContent = match.match(/{\s*([^}]+)\s*}/)[1];
        const imports = importContent.split(',').map(imp => imp.trim());
        
        // Check which imports are actually used in the file
        const usedImports = imports.filter(imp => {
          const importName = imp.split(' as ')[0].trim();
          const regex = new RegExp(`\\b${importName}\\b`, 'g');
          const matches = content.match(regex);
          return matches && matches.length > 1; // More than just the import itself
        });
        
        if (usedImports.length === 0) {
          // Remove the entire import line
          content = content.replace(match + '\n', '');
          modified = true;
        } else if (usedImports.length < imports.length) {
          // Replace with only used imports
          const newImport = `import { ${usedImports.join(', ')} } from 'lucide-react';`;
          content = content.replace(match, newImport);
          modified = true;
        }
      });
    }
    
    // Remove unused Link imports
    const linkImportRegex = /import\s*{\s*Link\s*}\s*from\s*['"]react-router-dom['"];?/g;
    if (linkImportRegex.test(content) && !content.includes('<Link')) {
      content = content.replace(linkImportRegex, '');
      modified = true;
    }
    
    // Remove unused React imports (if only default import)
    const reactImportRegex = /import\s+React\s+from\s*['"]react['"];?/g;
    if (reactImportRegex.test(content) && !content.includes('React.')) {
      content = content.replace(reactImportRegex, '');
      modified = true;
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

const appDir = path.join(__dirname, 'app');
const files = getAllFiles(appDir);

files.forEach(file => {
  fixUnusedImports(file);
});

console.log('Unused imports fixed!');