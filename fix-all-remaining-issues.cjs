const fs = require('fs');
const path = require('path');

// Get all TypeScript/JavaScript files
function getAllFiles(dir, extensions = ['.ts', '.tsx', '.js', '.jsx']) {
  let results = [];
  const list = fs.readdirSync(dir);
  
  list.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat && stat.isDirectory()) {
      // Skip node_modules and other directories
      if (!['node_modules', '.git', 'dist', '.next', 'out'].includes(file)) {
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

// Fix common issues in a file
function fixFileIssues(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Fix merge conflicts
    if (content.includes('<<<<<<< HEAD') || content.includes('=======') || content.includes('>>>>>>>')) {
      console.log(`Fixing merge conflicts in: ${filePath}`);
      content = content.replace(/<<<<<<< HEAD\n?/g, '');
      content = content.replace(/=======\n?/g, '');
      content = content.replace(/>>>>>>> [^\n]+\n?/g, '');
      modified = true;
    }
    
    // Fix duplicate imports
    const importLines = content.split('\n').filter(line => line.trim().startsWith('import'));
    const uniqueImports = [...new Set(importLines)];
    if (importLines.length !== uniqueImports.length) {
      console.log(`Fixing duplicate imports in: ${filePath}`);
      const nonImportLines = content.split('\n').filter(line => !line.trim().startsWith('import'));
      content = [...uniqueImports, ...nonImportLines].join('\n');
      modified = true;
    }
    
    // Fix duplicate exports
    const exportLines = content.split('\n').filter(line => line.trim().startsWith('export'));
    const uniqueExports = [...new Set(exportLines)];
    if (exportLines.length !== uniqueExports.length) {
      console.log(`Fixing duplicate exports in: ${filePath}`);
      const nonExportLines = content.split('\n').filter(line => !line.trim().startsWith('export'));
      content = [...uniqueExports, ...nonExportLines].join('\n');
      modified = true;
    }
    
    // Fix duplicate interface/type definitions
    const interfaceLines = content.split('\n').filter(line => line.trim().startsWith('interface ') || line.trim().startsWith('type '));
    const uniqueInterfaces = [...new Set(interfaceLines)];
    if (interfaceLines.length !== uniqueInterfaces.length) {
      console.log(`Fixing duplicate interfaces in: ${filePath}`);
      const nonInterfaceLines = content.split('\n').filter(line => !line.trim().startsWith('interface ') && !line.trim().startsWith('type '));
      content = [...uniqueInterfaces, ...nonInterfaceLines].join('\n');
      modified = true;
    }
    
    // Fix duplicate component definitions
    const componentLines = content.split('\n').filter(line => line.includes('const ') && line.includes(': React.FC'));
    const uniqueComponents = [...new Set(componentLines)];
    if (componentLines.length !== uniqueComponents.length) {
      console.log(`Fixing duplicate components in: ${filePath}`);
      const nonComponentLines = content.split('\n').filter(line => !(line.includes('const ') && line.includes(': React.FC')));
      content = [...uniqueComponents, ...nonComponentLines].join('\n');
      modified = true;
    }
    
    // Clean up empty lines
    content = content.replace(/\n\s*\n\s*\n/g, '\n\n');
    
    if (modified) {
      fs.writeFileSync(filePath, content);
      console.log(`Fixed issues in: ${filePath}`);
    }
    
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
  }
}

// Main execution
console.log('Fixing all remaining issues...');

const files = getAllFiles('./app');
files.forEach(file => {
  fixFileIssues(file);
});

// Fix other important files
const otherFiles = [
  './App.tsx',
  './main.tsx',
  './vite.config.ts'
];

otherFiles.forEach(file => {
  if (fs.existsSync(file)) {
    fixFileIssues(file);
  }
});

console.log('Done fixing all remaining issues!');