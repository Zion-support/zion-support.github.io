const fs = require('fs');
const path = require('path');

// Function to fix ai-services page files
function fixAiServicesPageFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Check if the file has the wrong Footer import path
    if (content.includes('import Footer from "../components/Footer"')) {
      console.log(`Fixing: ${filePath}`);
      
      // Fix the Footer import path for ai-services subdirectory
      content = content.replace(
        'import Footer from "../components/Footer"',
        'import Footer from "../../components/Footer"'
      );
      
      fs.writeFileSync(filePath, content);
      return true;
    }
    return false;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

// Function to find all page.tsx files in ai-services directory
function findAiServicesPageFiles() {
  const aiServicesDir = path.join(__dirname, 'app', 'ai-services');
  const files = [];
  
  function traverse(currentDir) {
    const items = fs.readdirSync(currentDir);
    
    for (const item of items) {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        traverse(fullPath);
      } else if (item === 'page.tsx') {
        files.push(fullPath);
      }
    }
  }
  
  traverse(aiServicesDir);
  return files;
}

// Main execution
const pageFiles = findAiServicesPageFiles();

console.log(`Found ${pageFiles.length} ai-services page.tsx files`);

let fixedCount = 0;
for (const filePath of pageFiles) {
  if (fixAiServicesPageFile(filePath)) {
    fixedCount++;
  }
}

console.log(`Fixed ${fixedCount} files`);