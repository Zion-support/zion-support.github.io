import fs from 'fs';
import { glob } from 'glob';

// Function to fix a single file
function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Remove all 'use client' directives completely
    if (content.includes("'use client'")) {
      content = content.replace(/'use client';\n?/g, '');
      modified = true;
    }
    
    // Fix ErrorBoundary import path for it-services
    if (filePath.includes('app/it-services/') && content.includes("import ErrorBoundary from './components/ErrorBoundary'")) {
      content = content.replace(
        "import ErrorBoundary from './components/ErrorBoundary'",
        "import ErrorBoundary from '../../components/ErrorBoundary'"
      );
      modified = true;
    }
    
    // Clean up any remaining semicolons after metadata
    content = content.replace(/};\n;\n/g, '};\n');
    
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