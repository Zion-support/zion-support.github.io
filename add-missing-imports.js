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
  'ArrowRightIcon': '@heroicons/react/24/outline',
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

// Add missing imports to a file
const addMissingImports = (filePath) => {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Find all used components that need imports
    const usedComponents = new Set();
    
    // Check for JSX usage
    Object.keys(commonIcons).forEach(component => {
      if (content.includes(`<${component}`) || content.includes(`{${component}`)) {
        usedComponents.add(component);
      }
    });
    
    if (usedComponents.size === 0) return;
    
    // Group components by their source
    const importsBySource = {};
    usedComponents.forEach(component => {
      const source = commonIcons[component];
      if (!importsBySource[source]) {
        importsBySource[source] = [];
      }
      importsBySource[source].push(component);
    });
    
    // Check if imports already exist
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
    
    // Add missing imports
    const newImports = [];
    Object.entries(importsBySource).forEach(([source, components]) => {
      const missingComponents = components.filter(comp => 
        !existingImports.has(`${comp}:${source}`)
      );
      
      if (missingComponents.length > 0) {
        newImports.push(`import { ${missingComponents.join(', ')} } from '${source}';`);
      }
    });
    
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
    
    if (modified) {
      fs.writeFileSync(filePath, content);
      console.log(`Added missing imports to: ${filePath}`);
    }
    
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
  }
};

// Main execution
console.log('Adding missing imports...');

const files = getAllFiles('./app');
let fixedCount = 0;

files.forEach(file => {
  try {
    addMissingImports(file);
    fixedCount++;
  } catch (error) {
    console.error(`Error with file ${file}:`, error.message);
  }
});

console.log(`Processed ${fixedCount} files`);

// Also fix the main App.tsx
addMissingImports('./App.tsx');

console.log('Missing imports fix completed!');