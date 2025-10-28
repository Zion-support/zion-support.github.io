import fs from 'fs';
import { glob } from 'glob';

// Function to fix a single file
function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Remove unused imports
    const lines = content.split('\n');
    const newLines = [];
    const usedImports = new Set();
    
    // Find what's actually used in the component
    const componentContent = content.substring(content.indexOf('function '), content.lastIndexOf('}'));
    
    for (const line of lines) {
      if (line.startsWith('import ')) {
        // Check if this import is used
        const importMatch = line.match(/import\s+(?:{[^}]+}|\w+)\s+from/);
        if (importMatch) {
          const importName = importMatch[0].match(/import\s+{?([^}]+)}?\s+from/)[1];
          const cleanImportName = importName.replace(/\s*{[^}]*}\s*/, '').trim();
          
          if (componentContent.includes(cleanImportName) || 
              cleanImportName === 'React' || 
              cleanImportName === 'ErrorBoundary' ||
              line.includes('ErrorBoundary')) {
            newLines.push(line);
          } else {
            // Skip unused import
            modified = true;
          }
        } else {
          newLines.push(line);
        }
      } else {
        newLines.push(line);
      }
    }
    
    if (modified) {
      content = newLines.join('\n');
    }
    
    // Fix ErrorBoundary import path for specific files
    if (filePath.includes('app/page.tsx') || filePath.includes('app/it-services/')) {
      if (content.includes("import ErrorBoundary from '../components/ErrorBoundary'")) {
        content = content.replace(
          "import ErrorBoundary from '../components/ErrorBoundary'",
          "import ErrorBoundary from './components/ErrorBoundary'"
        );
        modified = true;
      }
    }
    
    if (modified) {
      fs.writeFileSync(filePath, content);
      console.log(`Fixed: ${filePath}`);
    }
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
}

// Get all page.tsx files
async function fixAllFiles() {
  try {
    const files = await glob('app/**/page.tsx');
    files.forEach(fixFile);
    console.log('All files processed!');
  } catch (error) {
    console.error('Error:', error);
  }
}

fixAllFiles();