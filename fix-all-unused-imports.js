import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';


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
      
      // Check for unused variable declarations
      const varMatch = line.match(/const\s+(\w+)\s*=\s*React\.FC.*?;/);
      if (varMatch) {
        const varName = varMatch[1];
        const isUsed = content.includes(varName) && content.indexOf(varName) !== content.lastIndexOf(varName);
        if (!isUsed) {
          continue; // Skip this line
        }
      }
      
      newLines.push(line);
    }
    
    if (newLines.length !== lines.length) {
      content = newLines.join('\n');
      modified = true;
    }

    if (modified) {
      fs.writeFileSync(filePath, content);
      console.log(`Cleaned: ${path.relative(__dirname, filePath)}`);
    }
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
  }
}

// Process all page files
pageFiles.forEach(file => {
  cleanUnusedImports(file);
});

console.log(`Processed ${pageFiles.length} page files`);
