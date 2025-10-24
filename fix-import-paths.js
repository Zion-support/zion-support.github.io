const fs = require('fs');
const path = require('path');

// Function to fix import paths based on directory depth
function fixImportPaths(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let fixed = false;
    
    // Calculate the depth of the file
    const pathParts = filePath.split('/');
    const depth = pathParts.length - 2; // Subtract 2 for 'app' and 'page.tsx'
    
    // Generate the correct relative path
    let relativePath = '';
    for (let i = 0; i < depth; i++) {
      relativePath += '../';
    }
    
    // Fix Navigation import
    if (content.includes("import Navigation from '../components/Navigation';")) {
      content = content.replace(
        "import Navigation from '../components/Navigation';",
        `import Navigation from '${relativePath}components/Navigation';`
      );
      fixed = true;
    }
    
    // Fix Footer import
    if (content.includes("import Footer from '../components/Footer';")) {
      content = content.replace(
        "import Footer from '../components/Footer';",
        `import Footer from '${relativePath}components/Footer';`
      );
      fixed = true;
    }
    
    if (fixed) {
      fs.writeFileSync(filePath, content);
      console.log(`Fixed imports: ${filePath}`);
    }
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
}

// Function to find all page files
function findPageFiles(dir) {
  const files = [];
  const items = fs.readdirSync(dir);
  
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      files.push(...findPageFiles(fullPath));
    } else if (item === 'page.tsx') {
      files.push(fullPath);
    }
  }
  
  return files;
}

// Fix all page files
const appDir = './app';
const files = findPageFiles(appDir);

console.log(`Found ${files.length} page files to fix...`);

files.forEach(fixImportPaths);

console.log('Done fixing import paths!');