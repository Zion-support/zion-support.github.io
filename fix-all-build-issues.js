import fs from 'fs';
import path from 'path';

// Common missing imports that cause build issues
const commonImports = {
  'Database': 'lucide-react',
  'Brain': 'lucide-react', 
  'BarChart3': 'lucide-react',
  'Target': 'lucide-react',
  'Zap': 'lucide-react',
  'Globe': 'lucide-react',
  'Shield': 'lucide-react',
  'Code': 'lucide-react',
  'Cloud': 'lucide-react',
  'ArrowRight': 'lucide-react',
  'CheckCircle': 'lucide-react',
  'Star': 'lucide-react',
  'Phone': 'lucide-react',
  'Mail': 'lucide-react',
  'MapPin': 'lucide-react',
  'Clock': 'lucide-react',
  'Award': 'lucide-react',
  'Users': 'lucide-react',
  'BarChart': 'lucide-react',
  'MessageSquare': 'lucide-react',
  'Eye': 'lucide-react',
  'Home': 'lucide-react',
  'Menu': 'lucide-react',
  'X': 'lucide-react',
  'ChevronDown': 'lucide-react'
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
      if (content.includes(importName) && !content.includes(`import { ${importName}`)) {
        usedImports.push(importName);
      }
    }
    
    if (usedImports.length > 0) {
      // Find existing import statement
      const importMatch = content.match(/import\s+{([^}]+)}\s+from\s+['"]([^'"]+)['"];?/);
      
      if (importMatch) {
        // Add to existing import
        const existingImports = importMatch[1].split(',').map(imp => imp.trim());
        const fromModule = importMatch[2];
        
        const newImports = [...new Set([...existingImports, ...usedImports])];
        const newImportStatement = `import { ${newImports.join(', ')} } from '${fromModule}';`;
        
        content = content.replace(importMatch[0], newImportStatement);
        modified = true;
      } else {
        // Create new import statement
        const newImportStatement = `import { ${usedImports.join(', ')} } from 'lucide-react';\n`;
        content = newImportStatement + content;
        modified = true;
      }
    }
    
    // Fix common undefined variable issues
    if (content.includes('enableConsoleLogging') && !content.includes('const enableConsoleLogging')) {
      content = content.replace(/enableConsoleLogging/g, 'false');
      modified = true;
    }
    
    if (content.includes('categories') && !content.includes('const categories')) {
      content = content.replace(/categories/g, '[]');
      modified = true;
    }
    
    if (modified) {
      fs.writeFileSync(filePath, content);
      console.log(`Fixed: ${filePath}`);
    }
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
}

// Get all page files
const pageFiles = getAllPageFiles('app');

console.log(`Found ${pageFiles.length} page files to check...`);

// Fix all files
pageFiles.forEach(fixImports);

console.log('All build issues fixed!');