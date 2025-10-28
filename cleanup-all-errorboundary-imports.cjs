const fs = require('fs');
const path = require('path');

// Function to recursively find all .tsx and .ts files
function findFiles(dir, extensions = ['.tsx', '.ts']) {
  let results = [];
  const list = fs.readdirSync(dir);
  
  list.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat && stat.isDirectory()) {
      // Skip node_modules and .next directories
      if (file !== 'node_modules' && file !== '.next' && !file.startsWith('.')) {
        results = results.concat(findFiles(filePath, extensions));
      }
    } else if (extensions.some(ext => file.endsWith(ext))) {
      results.push(filePath);
    }
  });
  
  return results;
}

// Function to check if ErrorBoundary is actually used in the file
function isErrorBoundaryUsed(content) {
  // Check for JSX usage
  const jsxPatterns = [
    /<ErrorBoundary/,
    /<\/ErrorBoundary>/,
    /ErrorBoundary\s*[={}]/,
    /ErrorBoundary\s*\(/,
    /ErrorBoundary\s*\./
  ];
  
  return jsxPatterns.some(pattern => pattern.test(content));
}

// Function to clean up ErrorBoundary imports
function cleanErrorBoundaryImports(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    
    // Check if ErrorBoundary is actually used
    if (isErrorBoundaryUsed(content)) {
      return false; // Don't modify files where ErrorBoundary is used
    }
    
    let modified = false;
    let newContent = content;
    
    // Patterns for different ErrorBoundary import styles
    const importPatterns = [
      // Named import from react-error-boundary
      /import\s*{\s*ErrorBoundary\s*}\s*from\s*['"]react-error-boundary['"];\s*\n?/g,
      // Named import from local components
      /import\s*{\s*ErrorBoundary\s*}\s*from\s*['"]\.\.\/components\/ErrorBoundary['"];\s*\n?/g,
      /import\s*{\s*ErrorBoundary\s*}\s*from\s*['"]@\/components\/ErrorBoundary['"];\s*\n?/g,
      // Default import from react-error-boundary
      /import\s+ErrorBoundary\s+from\s*['"]react-error-boundary['"];\s*\n?/g,
      // Default import from local components
      /import\s+ErrorBoundary\s+from\s*['"]\.\.\/components\/ErrorBoundary['"];\s*\n?/g,
      /import\s+ErrorBoundary\s+from\s*['"]@\/components\/ErrorBoundary['"];\s*\n?/g,
      // Mixed imports (remove ErrorBoundary from the list)
      /import\s*{\s*([^}]*?),\s*ErrorBoundary\s*,\s*([^}]*?)\s*}\s*from\s*['"]react-error-boundary['"];\s*\n?/g,
      /import\s*{\s*([^}]*?),\s*ErrorBoundary\s*,\s*([^}]*?)\s*}\s*from\s*['"]\.\.\/components\/ErrorBoundary['"];\s*\n?/g,
      /import\s*{\s*([^}]*?),\s*ErrorBoundary\s*,\s*([^}]*?)\s*}\s*from\s*['"]@\/components\/ErrorBoundary['"];\s*\n?/g,
    ];
    
    // Apply each pattern
    importPatterns.forEach((pattern, index) => {
      if (pattern.test(newContent)) {
        if (index < 6) {
          // Simple import removal
          newContent = newContent.replace(pattern, '');
          modified = true;
        } else {
          // Mixed import - remove ErrorBoundary from the list
          newContent = newContent.replace(pattern, (match, before, after) => {
            const beforeClean = before.trim();
            const afterClean = after.trim();
            const remaining = [beforeClean, afterClean].filter(Boolean).join(', ');
            return `import { ${remaining} } from '${match.includes('react-error-boundary') ? 'react-error-boundary' : match.includes('@/components') ? '@/components/ErrorBoundary' : '../components/ErrorBoundary'}';\n`;
          });
          modified = true;
        }
      }
    });
    
    // Clean up empty import lines
    newContent = newContent.replace(/import\s*{\s*}\s*from\s*['"][^'"]*['"];\s*\n?/g, '');
    
    if (modified) {
      fs.writeFileSync(filePath, newContent);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Main execution
console.log('Starting comprehensive ErrorBoundary import cleanup...');

const appDir = path.join(__dirname, 'app');
const files = findFiles(appDir);

let cleanedCount = 0;
let processedCount = 0;

files.forEach(file => {
  processedCount++;
  if (cleanErrorBoundaryImports(file)) {
    cleanedCount++;
    console.log(`Cleaned: ${file}`);
  }
});

console.log(`\nCleanup complete!`);
console.log(`Files processed: ${processedCount}`);
console.log(`Files cleaned: ${cleanedCount}`);