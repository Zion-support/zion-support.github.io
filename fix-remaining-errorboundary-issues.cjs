const fs = require('fs');
const path = require('path');

// Function to recursively find all .tsx files
function findTsxFiles(dir) {
  const files = [];
  const items = fs.readdirSync(dir);
  
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
      files.push(...findTsxFiles(fullPath));
    } else if (item.endsWith('.tsx')) {
      files.push(fullPath);
    }
  }
  
  return files;
}

// Function to clean up ErrorBoundary issues
function cleanErrorBoundaryIssues(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Remove ErrorBoundary import if it exists and is not used
    const hasErrorBoundaryImport = content.includes('import ErrorBoundary from');
    const usesErrorBoundary = content.includes('<ErrorBoundary') || content.includes('ErrorBoundary(');
    
    if (hasErrorBoundaryImport && !usesErrorBoundary) {
      content = content.replace(/import ErrorBoundary from ["'][^"']*["'];\s*\n?/g, '');
      modified = true;
      console.log(`Removed unused ErrorBoundary import from: ${filePath}`);
    }
    
    // Remove Wrapped function if it exists
    if (content.includes('export default function Wrapped')) {
      content = content.replace(
        /export default function Wrapped\(props: { \[key: string\]: unknown }\) \{\s*return\s*\(\s*<[^>]+ \{\\.\\.\\.props\} \/>\s*\);\s*\}/g,
        ''
      );
      modified = true;
      console.log(`Removed Wrapped function from: ${filePath}`);
    }
    
    // Clean up any remaining ErrorBoundary references
    if (content.includes('<ErrorBoundary>') || content.includes('</ErrorBoundary>')) {
      content = content.replace(/<ErrorBoundary>/g, '');
      content = content.replace(/<\/ErrorBoundary>/g, '');
      modified = true;
      console.log(`Cleaned up ErrorBoundary references from: ${filePath}`);
    }
    
    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
    }
    
    return modified;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Main execution
console.log('Starting comprehensive ErrorBoundary cleanup...');

const appDir = path.join(__dirname, 'app');
const tsxFiles = findTsxFiles(appDir);

let totalModified = 0;

for (const file of tsxFiles) {
  if (cleanErrorBoundaryIssues(file)) {
    totalModified++;
  }
}

console.log(`\nCleanup complete! Modified ${totalModified} files.`);