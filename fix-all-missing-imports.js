import fs from 'fs';
import path from 'path';

// Common missing imports that cause build issues
const commonImports = {
  'Smartphone': 'lucide-react',
  'Navigation': 'lucide-react',
  'FileText': 'lucide-react',
  'Shield': 'lucide-react',
  'CheckCircle': 'lucide-react',
  'AlertTriangle': 'lucide-react',
  'Users': 'lucide-react',
  'Globe': 'lucide-react',
  'Database': 'lucide-react',
  'Cloud': 'lucide-react',
  'Lock': 'lucide-react',
  'Eye': 'lucide-react',
  'ArrowRight': 'lucide-react',
  'Star': 'lucide-react',
  'Phone': 'lucide-react',
  'Mail': 'lucide-react',
  'MapPin': 'lucide-react',
  'Clock': 'lucide-react',
  'Award': 'lucide-react',
  'BarChart': 'lucide-react',
  'Target': 'lucide-react',
  'Zap': 'lucide-react',
  'Code': 'lucide-react',
  'Brain': 'lucide-react',
  'MessageSquare': 'lucide-react',
  'Home': 'lucide-react',
  'Menu': 'lucide-react',
  'X': 'lucide-react',
  'ChevronDown': 'lucide-react',
  'useMemo': 'react',
  'useCallback': 'react',
  'useState': 'react',
  'useEffect': 'react',
  'Link': 'next/link',
  'Head': 'next/head'
};

// Get all page files
function getAllPageFiles(dir) {
  let files = [];
  const items = fs.readdirSync(dir);
  
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      files = files.concat(getAllPageFiles(fullPath));
    } else if (item === 'page.tsx') {
      files.push(fullPath);
    }
  }
  
  return files;
}

function fixImports(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Check if file uses any of the common imports
    const usedImports = [];
    for (const [importName, fromModule] of Object.entries(commonImports)) {
      if (content.includes(importName) && !content.includes(`import { ${importName}`) && !content.includes(`import ${importName}`)) {
        usedImports.push({ name: importName, module: fromModule });
      }
    }
    
    if (usedImports.length > 0) {
      // Group imports by module
      const importsByModule = {};
      usedImports.forEach(({ name, module }) => {
        if (!importsByModule[module]) {
          importsByModule[module] = [];
        }
        importsByModule[module].push(name);
      });
      
      // Find existing import statements
      const existingImports = {};
      const importMatches = content.matchAll(/import\s+{([^}]+)}\s+from\s+['"]([^'"]+)['"];?/g);
      
      for (const match of importMatches) {
        const existingImportNames = match[1].split(',').map(imp => imp.trim());
        const fromModule = match[2];
        existingImports[fromModule] = existingImportNames;
      }
      
      // Add missing imports
      for (const [module, names] of Object.entries(importsByModule)) {
        if (existingImports[module]) {
          // Add to existing import
          const newImports = [...new Set([...existingImports[module], ...names])];
          const newImportStatement = `import { ${newImports.join(', ')} } from '${module}';`;
          
          // Find and replace the existing import
          const oldImportMatch = content.match(new RegExp(`import\\s+{[^}]+}\\s+from\\s+['"]${module.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}['"];?`));
          if (oldImportMatch) {
            content = content.replace(oldImportMatch[0], newImportStatement);
            modified = true;
          }
        } else {
          // Create new import statement
          const newImportStatement = `import { ${names.join(', ')} } from '${module}';\n`;
          
          // Find the first import statement to add after it
          const firstImportMatch = content.match(/import\s+.*?from\s+['"][^'"]+['"];?\n/);
          if (firstImportMatch) {
            content = content.replace(firstImportMatch[0], firstImportMatch[0] + newImportStatement);
            modified = true;
          } else {
            // Add at the beginning
            content = newImportStatement + content;
            modified = true;
          }
        }
      }
    }
    
    if (modified) {
      fs.writeFileSync(filePath, content);
      console.log(`Fixed imports: ${filePath}`);
    }
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
}

// Get all page files
const pageFiles = getAllPageFiles('app');

console.log(`Checking ${pageFiles.length} page files for missing imports...`);

// Fix all files
pageFiles.forEach(fixImports);

console.log('All missing imports fixed!');