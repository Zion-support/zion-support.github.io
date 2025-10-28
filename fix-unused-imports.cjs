const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Find all TypeScript/TSX files in the app directory
const files = glob.sync('app/**/*.{ts,tsx}', { cwd: '/workspace' });

console.log(`Found ${files.length} files to process`);

let fixedCount = 0;

files.forEach(filePath => {
  const fullPath = path.join('/workspace', filePath);
  
  try {
    let content = fs.readFileSync(fullPath, 'utf8');
    let modified = false;
    
    // Remove unused ErrorBoundary imports (both relative and absolute paths)
    if (content.includes("import { ErrorBoundary }")) {
      content = content.replace(/import { ErrorBoundary } from ['"][^'"]*['"];\n?/g, '');
      modified = true;
    }
    
    // Remove unused Navigation imports (both relative and absolute paths)
    if (content.includes("import Navigation from") || content.includes("import { Navigation }")) {
      content = content.replace(/import (Navigation|{ Navigation }) from ['"][^'"]*['"];\n?/g, '');
      modified = true;
    }
    
    // Remove unused Footer imports (both relative and absolute paths)
    if (content.includes("import Footer from") || content.includes("import { Footer }")) {
      content = content.replace(/import (Footer|{ Footer }) from ['"][^'"]*['"];\n?/g, '');
      modified = true;
    }
    
    // Clean up multiple empty lines
    content = content.replace(/\n\s*\n\s*\n/g, '\n\n');
    
    if (modified) {
      fs.writeFileSync(fullPath, content);
      console.log(`Fixed: ${filePath}`);
      fixedCount++;
    }
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
  }
});

console.log(`Fixed ${fixedCount} files`);