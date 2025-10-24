const fs = require('fs');
const path = require('path');

// Function to fix a single page file
function fixPageFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Check if the file has the problematic pattern
    if (content.includes('import { ArrowRight } from "lucide-react";') && 
        content.includes('export default function ServicePage()') &&
        content.includes('<Footer />') &&
        content.includes('</div>') &&
        !content.includes('import Footer from "../components/Footer"')) {
      
      console.log(`Fixing: ${filePath}`);
      
      // Add Footer import after the lucide-react import
      content = content.replace(
        'import { ArrowRight } from "lucide-react";',
        'import { ArrowRight } from "lucide-react";\nimport Footer from "../components/Footer";'
      );
      
      // Fix the JSX structure - replace </div> with </>
      content = content.replace(
        /      <Footer \/>\n    <\/div>\n  \)\n\}/,
        '      <Footer />\n    </>\n  )\n}'
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

// Function to recursively find all page.tsx files
function findPageFiles(dir) {
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
  
  traverse(dir);
  return files;
}

// Main execution
const appDir = path.join(__dirname, 'app');
const pageFiles = findPageFiles(appDir);

console.log(`Found ${pageFiles.length} page.tsx files`);

let fixedCount = 0;
for (const filePath of pageFiles) {
  if (fixPageFile(filePath)) {
    fixedCount++;
  }
}

console.log(`Fixed ${fixedCount} files`);