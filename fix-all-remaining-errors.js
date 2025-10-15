import fs from 'fs';
import path from 'path';

// Common icon components that are used
const commonIcons = {
  'Shield': 'lucide-react',
  'BarChart3': 'lucide-react',
  'Settings': 'lucide-react',
  'Zap': 'lucide-react',
  'Users': 'lucide-react',
  'FileText': 'lucide-react',
  'Mail': 'lucide-react',
  'StarIcon': '@heroicons/react/24/solid',
  'TrophyIcon': '@heroicons/react/24/solid',
  'Cloud': 'lucide-react',
  'DollarSign': 'lucide-react',
  'Clock': 'lucide-react',
  'ArrowRightIcon': '@heroicons/react/24/solid',
  'Lock': 'lucide-react'
};

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

// Fix all remaining errors in a file
const fixAllErrors = (filePath) => {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // 1. Remove unused React imports
    if (content.includes("import React from 'react';") && !content.includes('React.')) {
      content = content.replace(/import React from 'react';\n?/g, '');
      modified = true;
    }
    
    // 2. Remove unused variable declarations
    const unusedVars = ['isVisible', 'setIsVisible', 'specialties', 'Cloud', 'Clock', 'ArrowRightIcon'];
    unusedVars.forEach(varName => {
      const regex = new RegExp(`const\\s+${varName}\\s*=.*?;\\n?`, 'g');
      if (content.match(regex)) {
        content = content.replace(regex, '');
        modified = true;
      }
    });
    
    // 3. Find all used components that need imports
    const usedComponents = new Set();
    
    // Check for JSX usage
    Object.keys(commonIcons).forEach(component => {
      if (content.includes(`<${component}`) || content.includes(`{${component}`)) {
        usedComponents.add(component);
      }
    });
    
    // 4. Group components by their source
    const importsBySource = {};
    usedComponents.forEach(component => {
      const source = commonIcons[component];
      if (!importsBySource[source]) {
        importsBySource[source] = [];
      }
      importsBySource[source].push(component);
    });
    
    // 5. Check if imports already exist
    const existingImports = new Set();
    const importRegex = /import\s+{([^}]+)}\s+from\s+['"]([^'"]+)['"];?/g;
    let match;
    
    while ((match = importRegex.exec(content)) !== null) {
      const importList = match[1].split(',').map(imp => imp.trim());
      const source = match[2];
      importList.forEach(imp => {
        const cleanImport = imp.replace(/\s+as\s+\w+/, '').trim();
        existingImports.add(`${cleanImport}:${source}`);
      });
    }
    
    // 6. Add missing imports
    const newImports = [];
    Object.entries(importsBySource).forEach(([source, components]) => {
      const missingComponents = components.filter(comp => 
        !existingImports.has(`${comp}:${source}`)
      );
      
      if (missingComponents.length > 0) {
        newImports.push(`import { ${missingComponents.join(', ')} } from '${source}';`);
      }
    });
    
    // 7. Remove unused imports
    const allImports = [];
    const importRegex2 = /import\s+{([^}]+)}\s+from\s+['"]([^'"]+)['"];?/g;
    let match2;
    
    while ((match2 = importRegex2.exec(content)) !== null) {
      const importList = match2[1].split(',').map(imp => imp.trim());
      const source = match2[2];
      
      // Check which imports are actually used
      const usedImports = importList.filter(imp => {
        const cleanImport = imp.replace(/\s+as\s+\w+/, '').trim();
        const isUsed = content.includes(`<${cleanImport}`) || 
                      content.includes(`{${cleanImport}`) ||
                      content.includes(`${cleanImport}.`) ||
                      content.includes(`${cleanImport}(`) ||
                      content.includes(` ${cleanImport} `) ||
                      content.includes(`=${cleanImport}`) ||
                      content.includes(`:${cleanImport}`) ||
                      content.includes(`[${cleanImport}`) ||
                      content.includes(`${cleanImport}]`) ||
                      content.includes(`${cleanImport},`) ||
                      content.includes(`${cleanImport};`) ||
                      (content.includes(`${cleanImport}`) && content.indexOf(`${cleanImport}`) !== content.lastIndexOf(`${cleanImport}`));
        
        return isUsed;
      });
      
      if (usedImports.length === 0) {
        // Remove entire import line
        content = content.replace(match2[0], '');
        modified = true;
      } else if (usedImports.length !== importList.length) {
        // Update import to only include used imports
        const newImport = `import { ${usedImports.join(', ')} } from '${source}';`;
        content = content.replace(match2[0], newImport);
        modified = true;
      }
    }
    
    // 8. Add new imports if needed
    if (newImports.length > 0) {
      // Find the best place to insert imports (after existing imports)
      const lines = content.split('\n');
      let insertIndex = 0;
      
      // Find the last import statement
      for (let i = 0; i < lines.length; i++) {
        if (lines[i].trim().startsWith('import ')) {
          insertIndex = i + 1;
        }
      }
      
      // Insert new imports
      lines.splice(insertIndex, 0, ...newImports);
      content = lines.join('\n');
      modified = true;
    }
    
    // 9. Clean up multiple empty lines
    content = content.replace(/\n\s*\n\s*\n/g, '\n\n');
    
    if (modified) {
      fs.writeFileSync(filePath, content);
      console.log(`Fixed errors in: ${filePath}`);
    }
    
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
  }
};

// Main execution
console.log('Fixing all remaining errors...');

const files = getAllFiles('./app');
let fixedCount = 0;

files.forEach(file => {
  try {
    fixAllErrors(file);
    fixedCount++;
  } catch (error) {
    console.error(`Error with file ${file}:`, error.message);
  }
});

console.log(`Processed ${fixedCount} files`);

// Also fix the main App.tsx
fixAllErrors('./App.tsx');

console.log('All remaining errors fix completed!');