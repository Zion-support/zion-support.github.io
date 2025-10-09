import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

// Get all TypeScript/JSX files in src directory
function getAllFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir);
  
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      getAllFiles(filePath, fileList);
    } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
      fileList.push(filePath);
    }
  });
  
  return fileList;
}

// Fix unused imports in a file
function fixUnusedImports(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    let newContent = content;
    
    // Remove unused lucide-react imports
    const lucideImportRegex = /import\s*{\s*([^}]+)\s*}\s*from\s*['"]lucide-react['"];?/g;
    const lucideMatches = [...content.matchAll(lucideImportRegex)];
    
    lucideMatches.forEach(match => {
      const fullImport = match[0];
      const imports = match[1].split(',').map(imp => imp.trim());
      
      // Check which imports are actually used in the file
      const usedImports = imports.filter(imp => {
        const importName = imp.split(' as ')[0].trim();
        const regex = new RegExp(`\\b${importName}\\b`, 'g');
        return regex.test(content.replace(fullImport, ''));
      });
      
      if (usedImports.length === 0) {
        // Remove the entire import line
        newContent = newContent.replace(fullImport + '\n', '');
      } else if (usedImports.length < imports.length) {
        // Replace with only used imports
        const newImport = `import { ${usedImports.join(', ')} } from 'lucide-react';`;
        newContent = newContent.replace(fullImport, newImport);
      }
    });
    
    // Remove unused component imports
    const componentImportRegex = /import\s+(\w+)\s+from\s+['"][^'"]+['"];?\s*(?=\n|$)/g;
    const componentMatches = [...content.matchAll(componentImportRegex)];
    
    componentMatches.forEach(match => {
      const fullImport = match[0];
      const importName = match[1];
      
      // Check if the import is used
      const regex = new RegExp(`\\b${importName}\\b`, 'g');
      const matches = [...content.matchAll(regex)];
      
      // If only appears in the import statement, remove it
      if (matches.length === 1) {
        newContent = newContent.replace(fullImport + '\n', '');
      }
    });
    
    if (newContent !== content) {
      fs.writeFileSync(filePath, newContent);
      console.log(`Fixed unused imports in: ${filePath}`);
    }
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
}

// Main execution
const srcDir = path.join(process.cwd(), 'src');
const files = getAllFiles(srcDir);

console.log(`Found ${files.length} files to process...`);

files.forEach(file => {
  fixUnusedImports(file);
});

console.log('Done fixing unused imports!');