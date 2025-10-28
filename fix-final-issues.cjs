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
    
    // Remove all console statements
    const originalContent = content;
    content = content.replace(/console\.(log|warn|error|info|debug)\([^)]*\);?\n?/g, '');
    if (content !== originalContent) modified = true;
    
    // Remove unused variables and parameters
    content = content.replace(/const _props = [^;]+;\n?/g, '');
    content = content.replace(/const _[a-zA-Z]+ = [^;]+;\n?/g, '');
    content = content.replace(/\([^)]*_props[^)]*\)/g, '()');
    content = content.replace(/\([^)]*_[a-zA-Z]+[^)]*\)/g, '()');
    
    // Remove unused imports
    content = content.replace(/import { ErrorBoundary } from ['"][^'"]*['"];\n?/g, '');
    content = content.replace(/import ReactNode from ['"][^'"]*['"];\n?/g, '');
    content = content.replace(/import PerformanceEventTiming from ['"][^'"]*['"];\n?/g, '');
    content = content.replace(/import LayoutShift from ['"][^'"]*['"];\n?/g, '');
    content = content.replace(/import useEffect from ['"][^'"]*['"];\n?/g, '');
    
    // Remove unused function declarations
    content = content.replace(/const [A-Z][a-zA-Z]*Page = [^;]+;\n?/g, '');
    content = content.replace(/const [A-Z][a-zA-Z]*Component = [^;]+;\n?/g, '');
    
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