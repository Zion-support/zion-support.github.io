const fs = require('fs');
const path = require('path');

// Find all .tsx files in the app directory that have wrong import paths
const appDir = './app';
const files = [];

function findTsxFiles(dir) {
  const items = fs.readdirSync(dir);
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      findTsxFiles(fullPath);
    } else if (item.endsWith('.tsx') && !item.includes('ErrorBoundary')) {
      files.push(fullPath);
    }
  }
}

findTsxFiles(appDir);

let fixedCount = 0;

for (const file of files) {
  try {
    const content = fs.readFileSync(file, 'utf8');
    
    // Calculate correct relative path to components
    const fileDir = path.dirname(file);
    const relativePath = path.relative(fileDir, './app/components');
    const correctPath = relativePath.startsWith('.') ? relativePath : './' + relativePath;
    
    // Fix import paths
    let newContent = content;
    if (content.includes("import Navigation from '../components/Navigation'")) {
      newContent = newContent.replace(
        "import Navigation from '../components/Navigation'",
        `import Navigation from '${correctPath}/Navigation'`
      );
    }
    if (content.includes("import Footer from '../components/Footer'")) {
      newContent = newContent.replace(
        "import Footer from '../components/Footer'",
        `import Footer from '${correctPath}/Footer'`
      );
    }
    if (content.includes("import { ErrorBoundary } from '../components/ErrorBoundary'")) {
      newContent = newContent.replace(
        "import { ErrorBoundary } from '../components/ErrorBoundary'",
        `import { ErrorBoundary } from '${correctPath}/ErrorBoundary'`
      );
    }
    
    if (newContent !== content) {
      fs.writeFileSync(file, newContent);
      fixedCount++;
      console.log(`Fixed: ${file}`);
    }
  } catch (error) {
    console.error(`Error processing ${file}:`, error.message);
  }
}

console.log(`Fixed ${fixedCount} files`);
=======
// Function to fix import paths in a file
function fixImportPaths(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Calculate the correct relative path to components
    const relativePath = path.relative(path.dirname(filePath), path.join(__dirname, 'app', 'components'));
    const correctPath = relativePath.replace(/\\/g, '/');
    
    // Fix Navigation imports
    if (content.includes('from "../components/Navigation"')) {
      content = content.replace(/from "\.\.\/components\/Navigation"/g, `from "${correctPath}/Navigation"`);
      modified = true;
    }
    
    if (content.includes('from "../components/Footer"')) {
      content = content.replace(/from "\.\.\/components\/Footer"/g, `from "${correctPath}/Footer"`);
      modified = true;
    }
    
    if (modified) {
      fs.writeFileSync(filePath, content);
      console.log(`Fixed import paths: ${filePath}`);
      return true;
    }
    return false;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

// Find all .tsx files in the app directory
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

// Main execution
const appDir = path.join(__dirname, 'app');
const tsxFiles = findTsxFiles(appDir);

let fixedCount = 0;
for (const file of tsxFiles) {
  if (fixImportPaths(file)) {
    fixedCount++;
  }
}

console.log(`Fixed ${fixedCount} files with import path issues`);
>>>>>>> ace3976bd22d904e50634e99bfd241eea501f09d
