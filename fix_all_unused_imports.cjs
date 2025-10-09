const fs = require('fs');
const path = require('path');

// Find all page files
const srcDir = 'src';
const files = [];

function findTsxFiles(dir) {
  const items = fs.readdirSync(dir);
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      findTsxFiles(fullPath);
    } else if (item.endsWith('.tsx') && item === 'page.tsx') {
      files.push(fullPath);
    }
  }
}

findTsxFiles(srcDir);

let fixedCount = 0;

for (const file of files) {
  try {
    const content = fs.readFileSync(file, 'utf8');
    let newContent = content;
    
    // Remove all lucide-react imports that are not used
    const lucideImportMatch = content.match(/import\s*{\s*([^}]+)\s*}\s*from\s*['"]lucide-react['"];?/);
    if (lucideImportMatch) {
      const imports = lucideImportMatch[1].split(',').map(imp => imp.trim());
      const usedImports = imports.filter(imp => {
        const importName = imp.split(' as ')[0].trim();
        // Check if the import is actually used in the JSX
        return content.includes(`<${importName}`) || content.includes(`{${importName}`) || content.includes(`${importName} `);
      });
      
      if (usedImports.length === 0) {
        // Remove the entire import line
        newContent = newContent.replace(/import\s*{\s*[^}]+\s*}\s*from\s*['"]lucide-react['"];?\n?/g, '');
      } else if (usedImports.length < imports.length) {
        // Replace with only used imports
        const newImport = `import { ${usedImports.join(', ')} } from 'lucide-react';`;
        newContent = newContent.replace(/import\s*{\s*[^}]+\s*}\s*from\s*['"]lucide-react['"];?/g, newImport);
      }
    }
    
    // Remove unused component imports
    const componentImports = ['Navigation', 'Footer', 'SEOOptimizer', 'AICustomerSupportPage'];
    for (const comp of componentImports) {
      if (content.includes(`import ${comp}`) && !content.includes(`<${comp}`)) {
        newContent = newContent.replace(new RegExp(`import\\s+${comp}\\s+from\\s+['"][^'"]+['"];?\\n?`, 'g'), '');
      }
    }
    
    // Remove unused variable assignments
    const unusedVars = ['AICustomerSupportPage', 'Settings'];
    for (const varName of unusedVars) {
      if (content.includes(`const ${varName}`) && !content.includes(`<${varName}`)) {
        newContent = newContent.replace(new RegExp(`const\\s+${varName}\\s*=[^;]+;?\\n?`, 'g'), '');
      }
    }
    
    if (newContent !== content) {
      fs.writeFileSync(file, newContent);
      console.log(`Fixed unused imports: ${file}`);
      fixedCount++;
    }
  } catch (error) {
    console.error(`Error processing ${file}:`, error.message);
  }
}

console.log(`Fixed ${fixedCount} files`);