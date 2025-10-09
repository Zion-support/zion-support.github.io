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

function fixComponentImports(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Fix Navigation component imports
    if (content.includes("import { Navigation }")) {
      content = content.replace(/import { Navigation } from ['"]([^'"]+)['"];?/g, "import Navigation from '$1';");
      modified = true;
    }
    
    // Fix Footer component imports
    if (content.includes("import { Footer }")) {
      content = content.replace(/import { Footer } from ['"]([^'"]+)['"];?/g, "import Footer from '$1';");
      modified = true;
    }
    
    // Fix ContentPreviewCard component imports
    if (content.includes("import { ContentPreviewCard }")) {
      content = content.replace(/import { ContentPreviewCard } from ['"]([^'"]+)['"];?/g, "import ContentPreviewCard from '$1';");
      modified = true;
    }
    
    if (modified) {
      fs.writeFileSync(filePath, content);
      console.log(`Fixed component imports: ${filePath}`);
    }
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
}

// Get all page files
const pageFiles = getAllPageFiles('app');

console.log(`Checking ${pageFiles.length} page files for component imports...`);

// Fix all files
pageFiles.forEach(fixComponentImports);

console.log('All component imports fixed!');