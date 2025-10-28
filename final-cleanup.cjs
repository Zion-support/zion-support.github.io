const fs = require('fs');
const path = require('path');

// CommonJS setup
const __filename = require.resolve('./final-cleanup.cjs');
const __dirname = path.dirname(__filename);

// Function to clean up a file
function cleanupFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Remove unused ErrorBoundary imports
    content = content.replace(/import ErrorBoundary from ['"]@\/components\/ErrorBoundary['"];\n/g, '');
    
    // Remove unused variable declarations
    content = content.replace(/const (Page|AboutPage|OfflinePage|HomePage|pagePage) = [\s\S]*?;\n/g, '');
    
    // Remove any remaining unused imports
    content = content.replace(/import \{ ErrorBoundary \} from ['"]@\/components\/ErrorBoundary['"];\n/g, '');
    
    // Clean up any remaining issues
    content = content.replace(/\n\n\n+/g, '\n\n'); // Remove multiple empty lines
    content = content.replace(/^\s*\n/gm, ''); // Remove empty lines at start
    
    fs.writeFileSync(filePath, content);
    console.log(`Cleaned up: ${filePath}`);
  } catch (error) {
    console.error(`Error cleaning up ${filePath}:`, error.message);
  }
}

// Function to recursively find all .tsx files
function findTsxFiles(dir) {
  const files = [];
  const items = fs.readdirSync(dir);
  
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      files.push(...findTsxFiles(fullPath));
    } else if (item.endsWith('.tsx')) {
      files.push(fullPath);
    }
  }
  
  return files;
}

// Main cleanup process
console.log('Starting final cleanup of improvement script issues...');

const appDir = path.join(__dirname, 'app');
const tsxFiles = findTsxFiles(appDir);

tsxFiles.forEach(cleanupFile);

console.log('Final cleanup completed!');