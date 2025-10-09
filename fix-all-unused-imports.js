import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Get all page files
const srcDir = path.join(__dirname, 'src');
const pageFiles = [];

function findPageFiles(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat.isDirectory()) {
      findPageFiles(filePath);
    } else if (file === 'page.tsx' || file === 'page.ts') {
      pageFiles.push(filePath);
    }
  }
}

findPageFiles(srcDir);

function cleanUnusedImports(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Fix lucide-react imports
    const lucideImportMatch = content.match(/import\s*{\s*([^}]+)\s*}\s*from\s*['"]lucide-react['"];?/);
    if (lucideImportMatch) {
      const imports = lucideImportMatch[1].split(',').map(imp => imp.trim());
      const usedImports = [];
      
      // Check which imports are actually used in the file
      imports.forEach(imp => {
        const cleanImp = imp.replace(/\s*as\s+\w+/, '').trim();
        if (content.includes(`<${cleanImp}`) || content.includes(`${cleanImp}.`) || content.includes(`${cleanImp}(`)) {
          usedImports.push(imp);
        }
      });

      if (usedImports.length !== imports.length) {
        const newImport = usedImports.length > 0 
          ? `import { ${usedImports.join(', ')} } from 'lucide-react';`
          : '';
        
        content = content.replace(lucideImportMatch[0], newImport);
        modified = true;
      }
    }

    // Remove unused component imports
    const componentImports = ['Navigation', 'Footer', 'SEOOptimizer'];
    componentImports.forEach(comp => {
      const importRegex = new RegExp(`import\\s+${comp}\\s+from\\s+['"][^'"]+['"];?\\s*`, 'g');
      if (importRegex.test(content) && !content.includes(`<${comp}`) && !content.includes(`${comp}.`)) {
        content = content.replace(importRegex, '');
        modified = true;
      }
    });

    // Remove unused variable declarations that are assigned but never used
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
console.log('Fixing all unused imports in src directory...');

const files = getAllFiles('./src', ['.ts', '.tsx', '.js', '.jsx']);

let fixedCount = 0;
files.forEach(file => {
  if (removeUnusedImportsFromFile(file)) {
    fixedCount++;
  }
});

console.log(`Fixed ${fixedCount} files`);
