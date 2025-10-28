import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

<<<<<<< HEAD
=======
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

>>>>>>> 87c6cd40b012dd3702d84b18085574d3b52981fb
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
        lines.splice(importIndex + 1, 0, "import { ErrorBoundary } from '../components/ErrorBoundary';");
      } else {
        // Add at the beginning if no imports found
        lines.unshift("import { ErrorBoundary } from '../components/ErrorBoundary';");
      }
      
      content = lines.join('\n');
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed ErrorBoundary import in: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

<<<<<<< HEAD
// Main function
async function main() {
  console.log('Starting ErrorBoundary import fixes...');
=======
// Function to recursively find and fix all TypeScript files
function fixAllErrorBoundaryImports(dir) {
  let fixedCount = 0;
>>>>>>> 87c6cd40b012dd3702d84b18085574d3b52981fb
  
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

<<<<<<< HEAD
if (import.meta.url === `file://${process.argv[1]}`) {
  main().catch(console.error);
}

export { fixErrorBoundaryImports };
=======
// Run the fix
const appDir = path.join(__dirname, 'app');
console.log('Fixing ErrorBoundary imports...');
const fixedCount = fixAllErrorBoundaryImports(appDir);
console.log(`Fixed ${fixedCount} files with ErrorBoundary import issues.`);
>>>>>>> 87c6cd40b012dd3702d84b18085574d3b52981fb
