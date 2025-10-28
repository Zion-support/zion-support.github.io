import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Function to fix ErrorBoundary imports in a file
function fixErrorBoundaryImports(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Check if file has ErrorBoundary usage but no import
    if (content.includes('ErrorBoundary') && !content.includes("import.*ErrorBoundary")) {
      // Add ErrorBoundary import at the top
      const lines = content.split('\n');
      let importIndex = -1;
      
      // Find the last import statement
      for (let i = 0; i < lines.length; i++) {
        if (lines[i].startsWith('import ')) {
          importIndex = i;
        }
      }
      
      if (importIndex >= 0) {
        // Add ErrorBoundary import after the last import
        lines.splice(importIndex + 1, 0, "");
      } else {
        // Add at the beginning if no imports found
        lines.unshift("");
      }
      
      content = lines.join('\n');
      fs.writeFileSync(filePath, content, 'utf8');
            return true;
    }
    
    return false;
  } catch (error) {
        return false;
  }
}

// Function to recursively find and fix all TypeScript files
function fixAllErrorBoundaryImports(dir) {
  let fixedCount = 0;
  
  function processDirectory(currentDir) {
    const items = fs.readdirSync(currentDir);
    
    for (const item of items) {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
        processDirectory(fullPath);
      } else if (item.endsWith('.tsx') || item.endsWith('.ts')) {
        if (fixErrorBoundaryImports(fullPath)) {
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
const fixedCount = fixAllErrorBoundaryImports(appDir);
