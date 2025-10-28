const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Get all TypeScript/TSX files in the app directory
function getAllTsxFiles(dir) {
  const files = [];
  const items = fs.readdirSync(dir);
  
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      files.push(...getAllTsxFiles(fullPath));
    } else if (item.endsWith('.tsx') || item.endsWith('.ts')) {
      files.push(fullPath);
    }
  }
  
  return files;
}

// Remove unused imports from a file
function removeUnusedImports(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Remove unused ErrorBoundary imports
    if (content.includes("import { ErrorBoundary } from '../components/ErrorBoundary';") && 
        !content.includes('<ErrorBoundary') && 
        !content.includes('ErrorBoundary(')) {
      content = content.replace("import { ErrorBoundary } from '../components/ErrorBoundary';\n", '');
      modified = true;
    }
    
    // Remove unused Navigation imports
    if (content.includes("import Navigation from '../components/Navigation';") && 
        !content.includes('<Navigation') && 
        !content.includes('Navigation(')) {
      content = content.replace("import Navigation from '../components/Navigation';\n", '');
      modified = true;
    }
    
    // Remove unused Footer imports
    if (content.includes("import Footer from '../components/Footer';") && 
        !content.includes('<Footer') && 
        !content.includes('Footer(')) {
      content = content.replace("import Footer from '../components/Footer';\n", '');
      modified = true;
    }
    
    // Clean up multiple empty lines
    content = content.replace(/\n\n\n+/g, '\n\n');
    
    if (modified) {
      fs.writeFileSync(filePath, content);
      console.log(`Fixed unused imports in: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Main execution
console.log('Starting unused imports cleanup...');

const appDir = path.join(__dirname, 'app');
const tsxFiles = getAllTsxFiles(appDir);

console.log(`Found ${tsxFiles.length} TypeScript/TSX files`);

let fixedCount = 0;
for (const file of tsxFiles) {
  if (removeUnusedImports(file)) {
    fixedCount++;
  }
}

console.log(`Fixed unused imports in ${fixedCount} files`);

// Run lint to check if there are any remaining issues
console.log('Running lint check...');
try {
  execSync('npm run lint', { stdio: 'inherit' });
  console.log('Lint check completed successfully');
} catch (error) {
  console.log('Lint check found remaining issues');
}