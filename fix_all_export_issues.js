const fs = require('fs');
const path = require('path');

// Function to fix export statement issues
function fixExportIssues(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Fix export statements that are inside functions or objects
    if (content.includes('export default function Page() {') && content.includes('];')) {
      // Find the pattern where export is inside an array or object
      const lines = content.split('\n');
      let newContent = '';
      let inArray = false;
      let foundExport = false;
      
      for (let i = 0; i < lines.length; i++) {
        const line = lines[i];
        
        if (line.includes('[') && !line.includes('export')) {
          inArray = true;
        }
        
        if (line.includes('];') && inArray) {
          inArray = false;
          newContent += line + '\n\n';
          continue;
        }
        
        if (line.includes('export default function Page() {') && inArray) {
          // Move export to after the array
          foundExport = true;
          continue;
        }
        
        if (foundExport && line.includes('return (')) {
          newContent += 'export default function Page() {\n';
          foundExport = false;
        }
        
        newContent += line + '\n';
      }
      
      if (foundExport) {
        newContent += '\nexport default function Page() {\n';
      }
      
      content = newContent;
      modified = true;
    }
    
    // Fix malformed function structure
    if (content.includes('export default function Page() {') && !content.includes('return (')) {
      content = content.replace('export default function Page() {', 'export default function Page() {\n  return (');
      modified = true;
    }
    
    // Fix missing closing
    if (content.includes('return (') && !content.includes('};')) {
      content = content.replace(/(\s+)(<\/>)\s*$/m, '$1$2\n  );\n};');
      modified = true;
    }
    
    // Fix malformed JSX structure
    if (content.includes('export default function Page() {') && content.includes('return (') && !content.includes('<>')) {
      content = content.replace('return (', 'return (\n    <>');
    }
    
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
pageFiles.forEach(fixExportIssues);

console.log(`Processed ${pageFiles.length} page files`);
