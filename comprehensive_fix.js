const fs = require('fs');
const path = require('path');

// Function to fix specific syntax errors
function fixSpecificErrors(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Fix missing function declarations
    if (content.includes('// const benefits = [] // Unused variable') && !content.includes('export default function')) {
      content = content.replace('// const benefits = [] // Unused variable', 'export default function Page() {');
      modified = true;
    }
    
    // Fix malformed JSX structure
    if (content.includes('return (') && content.includes('<>') && !content.includes('export default')) {
      // Add proper function structure
      content = content.replace('return (', 'export default function Page() {\n  return (');
      modified = true;
    }
    
    // Fix missing closing braces
    if (content.includes('return (') && !content.includes('};')) {
      content = content.replace(/(\s+)(<\/>)\s*$/m, '$1$2\n  );\n};');
      modified = true;
    }
    
    // Fix malformed object syntax
    content = content.replace(/(\w+)\s*=\s*\[([^]]*)\]\s*(\w+):/g, '$1 = [$2],\n    $3:');
    
    // Fix malformed JSX closing
    content = content.replace(/(\s+)(<\/>)\s*,\s*""\s*\)\s*,\s*""\s*;\s*""\s*""\s*""\s*""/g, '$1$2\n  );\n};');
    
    // Fix malformed export statements
    content = content.replace(/export default PagePage;""\s*\)\s*,""(\s*);/g, 'export default function Page() {}');
    
    // Fix missing commas in arrays
    content = content.replace(/(\w+)\s*\n\s*(\w+):/g, '$1,\n    $2:');
    
    if (modified) {
      fs.writeFileSync(filePath, content);
      console.log(`Fixed: ${filePath}`);
    }
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
}

// Get all page files
const appDir = path.join(__dirname, 'app');
const pageFiles = [];

function findPageFiles(dir) {
  const files = fs.readdirSync(dir);
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat.isDirectory()) {
      findPageFiles(filePath);
    } else if (file === 'page.tsx') {
      pageFiles.push(filePath);
    }
  });
}

findPageFiles(appDir);

// Fix all page files
pageFiles.forEach(fixSpecificErrors);

console.log(`Processed ${pageFiles.length} page files`);
