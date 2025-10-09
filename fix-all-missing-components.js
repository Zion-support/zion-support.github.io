import fs from 'fs';
import path from 'path';

// Get all page files
function getAllPageFiles(dir) {
  let files = [];
  const items = fs.readdirSync(dir);
  
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      files = files.concat(getAllPageFiles(fullPath));
    } else if (item === 'page.tsx') {
      files.push(fullPath);
    }
  }
  
  return files;
}

function fixMissingComponents(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Check if file uses Footer but doesn't import it
    if (content.includes('<Footer') && !content.includes("import Footer")) {
      const footerImport = "import Footer from '../components/Footer';\n";
      content = footerImport + content;
      modified = true;
    }
    
    // Check if file uses Navigation but doesn't import it
    if (content.includes('<Navigation') && !content.includes("import Navigation")) {
      const navImport = "import Navigation from '../components/Navigation';\n";
      content = navImport + content;
      modified = true;
    }
    
    if (modified) {
      fs.writeFileSync(filePath, content);
      console.log(`Fixed missing components: ${filePath}`);
    }
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
}

// Get all page files
const pageFiles = getAllPageFiles('app');

console.log(`Checking ${pageFiles.length} page files for missing components...`);

// Fix all files
pageFiles.forEach(fixMissingComponents);

console.log('All missing components fixed!');