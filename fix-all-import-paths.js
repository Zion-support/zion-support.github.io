const fs = require('fs');
const path = require('path');

// Function to recursively find all .tsx files
function findTsxFiles(dir) {
  const files = [];
  const items = fs.readdirSync(dir);
  
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules' && item !== 'components') {
      files.push(...findTsxFiles(fullPath));
    } else if (item.endsWith('.tsx')) {
      files.push(fullPath);
    }
  }
  
  return files;
}

// Function to calculate the correct relative path to components
function getCorrectComponentPath(filePath) {
  const relativePath = path.relative(path.dirname(filePath), path.join(__dirname, 'app', 'components'));
  return relativePath.replace(/\\/g, '/');
}

// Main execution
const appDir = path.join(__dirname, 'app');
const tsxFiles = findTsxFiles(appDir);

console.log(`Found ${tsxFiles.length} .tsx files to check`);

let fixedCount = 0;
for (const file of tsxFiles) {
  try {
    let content = fs.readFileSync(file, 'utf8');
    let modified = false;
    
    // Calculate the correct path to components
    const correctPath = getCorrectComponentPath(file);
    
    // Fix Footer import path
    if (content.includes("import Footer from '../components/Footer'")) {
      content = content.replace("import Footer from '../components/Footer'", `import Footer from '${correctPath}/Footer'`);
      modified = true;
    }
    
    // Fix Navigation import path
    if (content.includes("import Navigation from '../components/Navigation'")) {
      content = content.replace("import Navigation from '../components/Navigation'", `import Navigation from '${correctPath}/Navigation'`);
      modified = true;
    }
    
    if (modified) {
      fs.writeFileSync(file, content);
      console.log(`Fixed imports in: ${file}`);
      fixedCount++;
    }
  } catch (error) {
    console.error(`Error fixing ${file}:`, error.message);
  }
}

console.log(`Fixed ${fixedCount} files`);