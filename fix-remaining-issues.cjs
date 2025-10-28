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
    
    // Add missing Navigation import if Navigation is used but not imported
    if (content.includes('<Navigation') && !content.includes('import Navigation') && !content.includes('import { Navigation }')) {
      // Find the first import statement and add Navigation import after it
      const importMatch = content.match(/import .+ from ['"][^'"]+['"];?\n/);
      if (importMatch) {
        const insertIndex = importMatch.index + importMatch[0].length;
        content = content.slice(0, insertIndex) + "import Navigation from '../components/Navigation';\n" + content.slice(insertIndex);
        modified = true;
      }
    }
    
    // Add missing Footer import if Footer is used but not imported
    if (content.includes('<Footer') && !content.includes('import Footer') && !content.includes('import { Footer }')) {
      // Find the first import statement and add Footer import after it
      const importMatch = content.match(/import .+ from ['"][^'"]+['"];?\n/);
      if (importMatch) {
        const insertIndex = importMatch.index + importMatch[0].length;
        content = content.slice(0, insertIndex) + "import Footer from '../components/Footer';\n" + content.slice(insertIndex);
        modified = true;
      }
    }
    
    // Remove console statements
    content = content.replace(/console\.(log|warn|error|info|debug)\([^)]*\);?\n?/g, '');
    
    // Remove unused variable warnings by removing unused variables
    content = content.replace(/const _props = [^;]+;\n?/g, '');
    content = content.replace(/const _[a-zA-Z]+ = [^;]+;\n?/g, '');
    
    // Remove unused function parameters
    content = content.replace(/\([^)]*_props[^)]*\)/g, '()');
    content = content.replace(/\([^)]*_[a-zA-Z]+[^)]*\)/g, '()');
    
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