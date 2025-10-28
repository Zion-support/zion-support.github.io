const fs = require('fs');
const path = require('path');

// Function to fix ErrorBoundary issues in a file
function fixErrorBoundaryIssues(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Check if file has ErrorBoundary references
    if (content.includes('ErrorBoundary') && content.includes('export default function Wrapped')) {
      // Remove the Wrapped function with ErrorBoundary
      content = content.replace(
        /export default function Wrapped\(props: { \[key: string\]: unknown }\) \{\s*return\s*\(\s*<ErrorBoundary>\s*<[^>]+ \{\\.\\.\\.props\} \/>\s*<\/ErrorBoundary>\s*\);\s*\}/g,
        ''
      );
      
      // Clean up any remaining ErrorBoundary references
      content = content.replace(/<ErrorBoundary>/g, '');
      content = content.replace(/<\/ErrorBoundary>/g, '');
      
      // Remove any empty lines at the end
      content = content.replace(/\n\s*\n\s*$/, '\n');
      
      // Write the fixed content back
      fs.writeFileSync(filePath, content);
      console.log(`Fixed ErrorBoundary issues in: ${filePath}`);
      return true;
    }
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Function to recursively find and fix all page files
function fixAllErrorBoundaryIssues(dir) {
  const files = fs.readdirSync(dir);
  let fixedCount = 0;
  
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      // Skip node_modules and other non-app directories
      if (!['node_modules', '.next', '.git'].includes(file)) {
        fixedCount += fixAllErrorBoundaryIssues(filePath);
      }
    } else if (file.endsWith('.tsx') && file === 'page.tsx') {
      if (fixErrorBoundaryIssues(filePath)) {
        fixedCount++;
      }
    }
  }
  
  return fixedCount;
}

// Start fixing from the app directory
const appDir = path.join(__dirname, 'app');
console.log('Starting to fix ErrorBoundary issues...');
const totalFixed = fixAllErrorBoundaryIssues(appDir);
console.log(`Fixed ErrorBoundary issues in ${totalFixed} files.`);