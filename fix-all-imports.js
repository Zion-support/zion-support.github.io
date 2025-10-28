import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Function to fix imports in a file
function fixImports(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Calculate relative path to components directory
    const relativePath = path.relative(path.dirname(filePath), path.join(__dirname, 'app', 'components'));
    const errorBoundaryPath = path.join(relativePath, 'ErrorBoundary').replace(/\\/g, '/');
    const navigationPath = path.join(relativePath, 'Navigation').replace(/\\/g, '/');
    const footerPath = path.join(relativePath, 'Footer').replace(/\\/g, '/');
    
    // Remove duplicate ErrorBoundary imports
    const lines = content.split('\n');
    const newLines = [];
    let hasErrorBoundaryImport = false;
    let hasNavigationImport = false;
    let hasFooterImport = false;
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      
      // Skip duplicate ErrorBoundary imports
      if (line.includes('ErrorBoundary') && line.includes('import')) {
        if (hasErrorBoundaryImport) {
          continue;
        }
        hasErrorBoundaryImport = true;
      }
      
      // Track other imports
      if (line.includes('Navigation') && line.includes('import')) {
        hasNavigationImport = true;
      }
      if (line.includes('Footer') && line.includes('import')) {
        hasFooterImport = true;
      }
      
      newLines.push(line);
    }
    
    // Add missing imports
    const importLines = [];
    
    if (content.includes('ErrorBoundary') && !hasErrorBoundaryImport) {
      importLines.push(`import { ErrorBoundary } from '${errorBoundaryPath}';`);
    }
    
    if (content.includes('<Navigation') && !hasNavigationImport) {
      importLines.push(`import Navigation from '${navigationPath}';`);
    }
    
    if (content.includes('<Footer') && !hasFooterImport) {
      importLines.push(`import Footer from '${footerPath}';`);
    }
    
    if (importLines.length > 0) {
      // Find the last import statement
      let lastImportIndex = -1;
      for (let i = 0; i < newLines.length; i++) {
        if (newLines[i].startsWith('import ')) {
          lastImportIndex = i;
        }
      }
      
      if (lastImportIndex >= 0) {
        newLines.splice(lastImportIndex + 1, 0, ...importLines);
      } else {
        newLines.unshift(...importLines);
      }
      
      modified = true;
    }
    
    if (modified) {
      content = newLines.join('\n');
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed imports in: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Function to recursively fix all TypeScript files
function fixAllImports(dir) {
  let fixedCount = 0;
  
  function processDirectory(currentDir) {
    const items = fs.readdirSync(currentDir);
    
    for (const item of items) {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
        processDirectory(fullPath);
      } else if (item.endsWith('.tsx') || item.endsWith('.ts')) {
        if (fixImports(fullPath)) {
          fixedCount++;
        }
      }
    }
  }
  
  processDirectory(dir);
  return fixedCount;
}

// Run the fix
const appDir = path.join(__dirname, 'app');
console.log('Fixing all imports...');
const fixedCount = fixAllImports(appDir);
console.log(`Fixed ${fixedCount} files with import issues.`);