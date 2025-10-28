import fs from 'fs';
import { glob } from 'glob';

// Function to fix final TypeScript errors
function fixFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let modified = false;

  // Fix GlobalErrorBoundary import paths
  if (content.includes("from '../../../../components/GlobalErrorBoundary'")) {
    content = content.replace("from '../../../../components/GlobalErrorBoundary'", "from '../../../components/GlobalErrorBoundary'");
    modified = true;
  }

  // Remove unused Wrapped function declarations
  const wrappedRegex = /^export default function Wrapped\([^)]*\)\s*\{[^}]*\}$/gms;
  if (content.match(wrappedRegex)) {
    content = content.replace(wrappedRegex, '');
    modified = true;
  }

  // Remove unused ErrorBoundary imports
  const errorBoundaryImportRegex = /^import\s+ErrorBoundary\s+from\s+['"][^'"]+['"];?$/gm;
  if (content.match(errorBoundaryImportRegex)) {
    content = content.replace(errorBoundaryImportRegex, '');
    modified = true;
  }

  // Remove unused function declarations
  const unusedFuncs = ['AboutLayout', 'RootLayout', 'Error', 'GlobalError'];
  unusedFuncs.forEach(funcName => {
    const funcRegex = new RegExp(`^export default function ${funcName}\\([^)]*\\)\\s*\\{[^}]*\\}$`, 'gms');
    if (content.match(funcRegex)) {
      content = content.replace(funcRegex, '');
      modified = true;
    }
  });

  // Clean up extra empty lines
  content = content.replace(/\n\s*\n\s*\n/g, '\n\n');

  if (modified) {
    fs.writeFileSync(filePath, content);
    console.log(`Fixed: ${filePath}`);
  }
}

// Main function to process files
async function main() {
  // Find all TypeScript/TSX files in the app directory
  const files = await glob('app/**/*.{ts,tsx}');

  console.log(`Found ${files.length} TypeScript files to process...`);

  let fixedCount = 0;
  files.forEach(file => {
    try {
      fixFile(file);
      fixedCount++;
    } catch (error) {
      console.error(`Error processing ${file}:`, error.message);
    }
  });

  console.log(`Fixed ${fixedCount} files`);
}

main().catch(console.error);