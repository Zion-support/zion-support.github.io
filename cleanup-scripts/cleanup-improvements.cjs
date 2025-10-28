const fs = require('fs');
const path = require('path');

// Function to clean up a file
function cleanupFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Remove unused ErrorBoundary imports
    content = content.replace(/import ErrorBoundary from ['"]@\/components\/ErrorBoundary['"];\n/g, '');
    
    // Remove duplicate metadata declarations (keep only the first one)
    const metadataRegex = /export const metadata = \{[\s\S]*?\};\n/g;
    const matches = content.match(metadataRegex);
    if (matches && matches.length > 1) {
      // Keep only the first metadata declaration
      content = content.replace(metadataRegex, (match, index) => {
        return index === 0 ? match : '';
      });
    }
    
    // Remove unused variable declarations
    content = content.replace(/const (Page|AboutPage|OfflinePage|HomePage|pagePage) = [\s\S]*?;\n/g, '');
    
    // Clean up any remaining issues
    content = content.replace(/\n\n\n+/g, '\n\n'); // Remove multiple empty lines
    
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
console.log('Starting cleanup of improvement script issues...');

const appDir = path.join(__dirname, 'app');
const tsxFiles = findTsxFiles(appDir);

tsxFiles.forEach(cleanupFile);

console.log('Cleanup completed!');