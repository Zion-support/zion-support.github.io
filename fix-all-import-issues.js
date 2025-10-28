import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Function to fix import issues in a file
function fixImportIssues(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Calculate relative path to components directory
    const relativePath = path.relative(path.dirname(filePath), path.join(__dirname, 'app', 'components'));
    const errorBoundaryPath = path.join(relativePath, 'ErrorBoundary').replace(/\\/g, '/');
    const navigationPath = path.join(relativePath, 'Navigation').replace(/\\/g, '/');
    const footerPath = path.join(relativePath, 'Footer').replace(/\\/g, '/');
    
    const lines = content.split('\n');
    const newLines = [];
    const imports = {
      react: false,
      errorBoundary: false,
      navigation: false,
      footer: false
    };
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      
      // Skip duplicate or incorrect imports
      if (line.includes('ErrorBoundary') && line.includes('import')) {
        if (imports.errorBoundary) {
          continue; // Skip duplicate
        }
        if (line.includes('ErrorBoundary from') && !line.includes('{ ErrorBoundary }')) {
          // Convert default import to named import
          newLines.push(`import { ErrorBoundary } from '${errorBoundaryPath}';`);
          imports.errorBoundary = true;
          modified = true;
          continue;
        }
        if (line.includes('{ ErrorBoundary }')) {
          newLines.push(`import { ErrorBoundary } from '${errorBoundaryPath}';`);
          imports.errorBoundary = true;
          modified = true;
          continue;
        }
        continue; // Skip other ErrorBoundary imports
      }
      
      if (line.includes('Navigation') && line.includes('import')) {
        if (imports.navigation) {
          continue; // Skip duplicate
        }
        newLines.push(`import Navigation from '${navigationPath}';`);
        imports.navigation = true;
        modified = true;
        continue;
      }
      
      if (line.includes('Footer') && line.includes('import')) {
        if (imports.footer) {
          continue; // Skip duplicate
        }
        newLines.push(`import Footer from '${footerPath}';`);
        imports.footer = true;
        modified = true;
        continue;
      }
      
      if (line.startsWith('import React')) {
        if (imports.react) {
          continue; // Skip duplicate
        }
        newLines.push(line);
        imports.react = true;
        continue;
      }
      
      newLines.push(line);
    }
    
    // Add missing imports if needed
    if (content.includes('ErrorBoundary') && !imports.errorBoundary) {
      newLines.unshift(`import { ErrorBoundary } from '${errorBoundaryPath}';`);
      modified = true;
    }
    
    if (content.includes('<Navigation') && !imports.navigation) {
      newLines.unshift(`import Navigation from '${navigationPath}';`);
      modified = true;
    }
    
    if (content.includes('<Footer') && !imports.footer) {
      newLines.unshift(`import Footer from '${footerPath}';`);
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
function fixAllImportIssues(dir) {
  let fixedCount = 0;
  
  function processDirectory(currentDir) {
    const items = fs.readdirSync(currentDir);
    
    for (const item of items) {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
        processDirectory(fullPath);
      } else if (item.endsWith('.tsx') || item.endsWith('.ts')) {
        if (fixImportIssues(fullPath)) {
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
console.log('Fixing all import issues...');
const fixedCount = fixAllImportIssues(appDir);
console.log(`Fixed ${fixedCount} files with import issues.`);