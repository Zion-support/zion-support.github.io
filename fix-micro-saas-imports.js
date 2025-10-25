const fs = require('fs');
const path = require('path');

// Function to recursively find all .tsx files in micro-saas directory
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
const microSaasDir = path.join(__dirname, 'app', 'micro-saas');
const tsxFiles = findTsxFiles(microSaasDir);

console.log(`Found ${tsxFiles.length} .tsx files in micro-saas directory`);

let fixedCount = 0;
for (const file of tsxFiles) {
  try {
    let content = fs.readFileSync(file, 'utf8');
    let modified = false;
    
    // Fix Footer import path
    if (content.includes("import Footer from '../components/Footer'")) {
      content = content.replace("import Footer from '../components/Footer'", "import Footer from '../../components/Footer'");
      modified = true;
    }
    
    // Fix Navigation import path
    if (content.includes("import Navigation from '../components/Navigation'")) {
      content = content.replace("import Navigation from '../components/Navigation'", "import Navigation from '../../components/Navigation'");
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