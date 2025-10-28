const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Find all TypeScript/TSX files in the app directory
const files = glob.sync('app/**/*.{ts,tsx}', { cwd: process.cwd() });

let fixedFiles = 0;
let totalErrors = 0;

console.log(`Found ${files.length} files to process...`);

files.forEach(file => {
  try {
    let content = fs.readFileSync(file, 'utf8');
    let modified = false;
    let fileErrors = 0;

    // Fix ErrorBoundary references
    if (content.includes('ErrorBoundary')) {
      // Remove ErrorBoundary wrapper functions
      content = content.replace(/export default function Wrapped\(props: \{ \[key: string\]: unknown \}\) \{\s*return \(\s*<ErrorBoundary>\s*<[^>]+ \{\.\.\.props\} \/>\s*<\/ErrorBoundary>\s*\);\s*\}/gs, '');
      
      // Remove ErrorBoundary import statements
      content = content.replace(/import.*ErrorBoundary.*from.*['"][^'"]*['"];?\s*/g, '');
      
      // Remove ErrorBoundary references in JSX
      content = content.replace(/<ErrorBoundary>\s*<[^>]+ \{\.\.\.props\} \/>\s*<\/ErrorBoundary>/gs, '');
      
      modified = true;
      fileErrors++;
    }

    // Fix unused variable warnings
    if (content.includes('// @ts-ignore') || content.includes('unused')) {
      // Remove unused variable declarations
      content = content.replace(/const\s+\w+\s*=\s*[^;]+;\s*\/\/\s*unused/gi, '');
      modified = true;
      fileErrors++;
    }

    // Fix import issues - convert named imports to default imports for Navigation and Footer
    content = content.replace(/import\s*\{\s*Navigation\s*\}\s*from\s*['"][^'"]*['"];?/g, 'import Navigation from \'../components/Navigation\';');
    content = content.replace(/import\s*\{\s*Footer\s*\}\s*from\s*['"][^'"]*['"];?/g, 'import Footer from \'../components/Footer\';');
    
    // Fix relative import paths for different directory levels
    if (file.includes('/it-services/')) {
      content = content.replace(/import\s+Navigation\s+from\s+['"]\.\.\/components\/Navigation['"];?/g, 'import Navigation from \'../../components/Navigation\';');
      content = content.replace(/import\s+Footer\s+from\s+['"]\.\.\/components\/Footer['"];?/g, 'import Footer from \'../../components/Footer\';');
    }

    // Remove empty lines and clean up
    content = content.replace(/\n\s*\n\s*\n/g, '\n\n');
    content = content.replace(/^\s*\n/gm, '');

    // Remove unused Page variables
    content = content.replace(/function\s+Page\(\)\s*\{\s*return\s*\(\s*<div[^>]*>\s*<[^>]*>\s*Page\s*<\/[^>]*>\s*<\/div>\s*\);\s*\}/g, '');

    if (modified) {
      fs.writeFileSync(file, content, 'utf8');
      fixedFiles++;
      totalErrors += fileErrors;
      console.log(`Fixed ${fileErrors} errors in ${file}`);
    }
  } catch (error) {
    console.error(`Error processing ${file}:`, error.message);
  }
});

console.log(`\nFixed ${totalErrors} errors across ${fixedFiles} files.`);