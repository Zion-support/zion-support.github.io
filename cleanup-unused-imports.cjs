const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Function to remove unused imports from a file
function removeUnusedImports(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    
    // Skip if file doesn't exist or is not a React component
    if (!content.includes('import') || !content.includes('from')) {
      return;
    }
    
    // Run ESLint with --fix to remove unused imports
    try {
      execSync(`npx eslint "${filePath}" --fix --quiet`, { stdio: 'pipe' });
      console.log(`Fixed: ${filePath}`);
    } catch (error) {
      // If ESLint fails, try to manually remove unused imports
      console.log(`Manual cleanup needed for: ${filePath}`);
    }
  } catch (error) {
    console.log(`Error processing ${filePath}: ${error.message}`);
  }
}

// Function to recursively find all .tsx and .ts files
function findFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir);
  
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory() && !file.startsWith('.') && file !== 'node_modules') {
      findFiles(filePath, fileList);
    } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
      fileList.push(filePath);
    }
  });
  
  return fileList;
}

// Main execution
console.log('Starting cleanup of unused imports...');

const files = findFiles('./src');
files.forEach(removeUnusedImports);

const appFiles = findFiles('./app');
appFiles.forEach(removeUnusedImports);

console.log('Cleanup completed!');