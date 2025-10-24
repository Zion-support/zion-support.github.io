const fs = require('fs');
const path = require('path');

// Find all page.tsx files that use Footer but don't import it
const appDir = './app';
const filesToFix = [];

function findFiles(dir) {
  const files = fs.readdirSync(dir);
  
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      findFiles(filePath);
    } else if (file === 'page.tsx') {
      const content = fs.readFileSync(filePath, 'utf8');
      if (content.includes('<Footer') && !content.includes('import Footer')) {
        filesToFix.push(filePath);
      }
    }
  }
}

findFiles(appDir);

console.log(`Found ${filesToFix.length} files to fix:`);
filesToFix.forEach(file => console.log(file));

// Fix each file
filesToFix.forEach(filePath => {
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Add Footer import after the existing imports
  const importMatch = content.match(/import.*from.*['"];?\s*\n/);
  if (importMatch) {
    const insertPoint = importMatch.index + importMatch[0].length;
    const footerImport = "import Footer from '../components/Footer';\n";
    content = content.slice(0, insertPoint) + footerImport + content.slice(insertPoint);
  }
  
  fs.writeFileSync(filePath, content);
  console.log(`Fixed: ${filePath}`);
});

console.log('All Footer imports fixed!');
