const fs = require('fs');
const path = require('path');

// Function to fix Footer import paths in a file
function fixFooterImport(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Calculate the correct relative path to Footer component
    const relativePath = path.relative(path.dirname(filePath), path.join(__dirname, 'app', 'components', 'Footer'));
    const correctImport = `import Footer from '${relativePath}';`;

    // Check if file has Footer import and fix it
    if (content.includes("import Footer from '../components/Footer'") || 
        content.includes("import Footer from './components/Footer'") ||
        content.includes("import Footer from '../../components/Footer'")) {
      
      // Replace any existing Footer import with the correct one
      content = content.replace(
        /import Footer from ['"][^'"]*['"];?\s*\n?/g,
        correctImport + '\n'
      );
      
      modified = true;
    }

    if (modified) {
      fs.writeFileSync(filePath, content);
      console.log(`Fixed Footer import in: ${filePath}`);
      return true;
    }
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
  return false;
}

// Function to recursively find all .tsx files in app directory
function findTSXFiles(dir) {
  const files = [];
  const items = fs.readdirSync(dir);
  
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      files.push(...findTSXFiles(fullPath));
    } else if (item.endsWith('.tsx') && item === 'page.tsx') {
      files.push(fullPath);
    }
  }
  
  return files;
}

// Main execution
console.log('Starting Footer import path fix...');
const appDir = path.join(__dirname, 'app');
const tsxFiles = findTSXFiles(appDir);

let fixedCount = 0;
for (const file of tsxFiles) {
  if (fixFooterImport(file)) {
    fixedCount++;
  }
}

console.log(`Fixed ${fixedCount} files out of ${tsxFiles.length} total files.`);