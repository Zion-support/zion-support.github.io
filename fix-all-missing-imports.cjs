const fs = require('fs');
const path = require('path');

// Function to fix missing imports in a file
function fixMissingImports(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Check if the file uses components but doesn't import them
    const missingImports = [];
    
    // Check for lucide-react icons
    const lucideIcons = [
      'Brain', 'BarChart', 'Target', 'TrendingUp', 'ArrowRight', 'CheckCircle',
      'ChevronDown', 'Menu', 'X', 'Star', 'Users', 'Zap', 'Shield', 'Lock',
      'Eye', 'EyeOff', 'Search', 'Filter', 'Settings', 'User', 'Mail', 'Phone',
      'MapPin', 'Calendar', 'Clock', 'Download', 'Upload', 'Edit', 'Trash',
      'Plus', 'Minus', 'Play', 'Pause', 'Stop', 'Refresh', 'Save', 'Cancel'
    ];
    
    for (const icon of lucideIcons) {
      if (content.includes(`<${icon}`) && !content.includes(`import { ${icon}`)) {
        missingImports.push(icon);
      }
    }
    
    // Check for custom components
    const customComponents = ['Navigation', 'Footer', 'Header'];
    for (const component of customComponents) {
      if (content.includes(`<${component}`) && !content.includes(`import ${component}`)) {
        missingImports.push(component);
      }
    }
    
    // Check for ErrorBoundary
    if (content.includes('ErrorBoundary') && !content.includes('import ErrorBoundary')) {
      missingImports.push('ErrorBoundary');
    }
    
    // Check for React
    if (content.includes('React') && !content.includes('import React')) {
      missingImports.push('React');
    }
    
    if (missingImports.length > 0) {
      // Determine the correct import path based on file location
      const relativePath = path.relative(path.join(__dirname, 'app'), filePath);
      const depth = relativePath.split(path.sep).length - 1;
      
      let componentPath;
      if (depth > 1) {
        componentPath = '../'.repeat(depth) + 'components/';
      } else if (depth === 1) {
        componentPath = '../components/';
      } else {
        componentPath = './components/';
      }
      
      // Add the imports at the beginning of the file
      const lines = content.split('\n');
      
      // Add React import if needed
      if (missingImports.includes('React')) {
        lines.unshift("import React from 'react';");
        modified = true;
      }
      
      // Add lucide-react icons import
      const lucideImports = missingImports.filter(imp => lucideIcons.includes(imp));
      if (lucideImports.length > 0) {
        lines.splice(1, 0, `import { ${lucideImports.join(', ')} } from 'lucide-react';`);
        modified = true;
      }
      
      // Add custom component imports
      const customImports = missingImports.filter(imp => customComponents.includes(imp));
      for (const component of customImports) {
        lines.splice(1, 0, `import ${component} from '${componentPath}${component}';`);
        modified = true;
      }
      
      // Add ErrorBoundary import
      if (missingImports.includes('ErrorBoundary')) {
        let errorBoundaryPath;
        if (depth > 1) {
          errorBoundaryPath = '../'.repeat(depth) + 'components/GlobalErrorBoundary';
        } else if (depth === 1) {
          errorBoundaryPath = '../components/GlobalErrorBoundary';
        } else {
          errorBoundaryPath = './components/GlobalErrorBoundary';
        }
        lines.splice(1, 0, `import ErrorBoundary from '${errorBoundaryPath}';`);
        modified = true;
      }
      
      content = lines.join('\n');
    }
    
    if (modified) {
      // Write the file back
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed missing imports in: ${filePath}`);
      return true;
    }
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Function to recursively find all .tsx files
function findTsxFiles(dir) {
  const files = [];
  
  function traverse(currentDir) {
    const items = fs.readdirSync(currentDir);
    
    for (const item of items) {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        traverse(fullPath);
      } else if (item.endsWith('.tsx') && !item.includes('node_modules')) {
        files.push(fullPath);
      }
    }
  }
  
  traverse(dir);
  return files;
}

// Main execution
const appDir = path.join(__dirname, 'app');
const tsxFiles = findTsxFiles(appDir);

console.log(`Found ${tsxFiles.length} .tsx files to check`);

let fixedCount = 0;
for (const file of tsxFiles) {
  if (fixMissingImports(file)) {
    fixedCount++;
  }
}

console.log(`Fixed missing imports in ${fixedCount} files`);