import fs from 'fs';
import { glob } from 'glob';

// Function to fix a single file
function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Fix ErrorBoundary import path
    if (content.includes("import ErrorBoundary from 'components/ErrorBoundary'")) {
      content = content.replace(
        "import ErrorBoundary from 'components/ErrorBoundary'",
        "import ErrorBoundary from '../components/ErrorBoundary'"
      );
      modified = true;
    }
    
    // Fix Metadata import in about page
    if (filePath.includes('about/page.tsx') && content.includes('Metadata')) {
      content = content.replace(
        "import { ErrorBoundary } from '../components/ErrorBoundary';",
        "import { ErrorBoundary } from '../components/ErrorBoundary';\nimport { Metadata } from 'next';"
      );
      modified = true;
    }
    
    // Fix function name mismatches - find the actual function name and use it
    const functionMatch = content.match(/function (\w+)\(\)/);
    if (functionMatch) {
      const functionName = functionMatch[1];
      
      // Fix the export wrapper to use the correct function name
      if (content.includes('<Page {...props} />') && functionName !== 'Page') {
        content = content.replace('<Page {...props} />', `<${functionName} {...props} />`);
        modified = true;
      }
    }
    
    // Remove all unused imports
    const lines = content.split('\n');
    const newLines = [];
    let inImportBlock = false;
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      
      if (line.startsWith('import ')) {
        inImportBlock = true;
        // Skip all imports for now - we'll add back only what's needed
        continue;
      } else if (inImportBlock && line.trim() === '') {
        // Skip empty lines after imports
        continue;
      } else if (inImportBlock && !line.startsWith('import ')) {
        // End of import block, add back only necessary imports
        newLines.push("import ErrorBoundary from '../components/ErrorBoundary';");
        if (filePath.includes('about/page.tsx')) {
          newLines.push("import { Metadata } from 'next';");
        }
        newLines.push('');
        inImportBlock = false;
        newLines.push(line);
      } else {
        newLines.push(line);
      }
    }
    
    if (inImportBlock) {
      // Add imports at the beginning
      newLines.unshift("import ErrorBoundary from '../components/ErrorBoundary';");
      if (filePath.includes('about/page.tsx')) {
        newLines.unshift("import { Metadata } from 'next';");
      }
      newLines.unshift('');
    }
    
    if (modified || inImportBlock) {
      content = newLines.join('\n');
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