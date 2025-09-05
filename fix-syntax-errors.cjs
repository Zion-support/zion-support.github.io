const fs = require('fs');
const path = require('path');

// Function to recursively find all .tsx and .ts files
function findFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir);
  
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory() && !file.startsWith('.') && file !== 'node_modules') {
      findFiles(filePath, fileList);
    } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
      fileList.push(filePath);
    }
  });
  
  return fileList;
}

// Function to fix corrupted text
function fixCorruptedText(content) {
  // Remove the corrupted text pattern
  content = content.replace(/ursor\/add-new-services-and-deploy-updates-1b90/g, '');
  
  // Fix common syntax issues
  content = content.replace(/hover: text-/g, 'hover:text-');
  content = content.replace(/hover: bg-/g, 'hover:bg-');
  content = content.replace(/hover: shadow-/g, 'hover:shadow-');
  content = content.replace(/className="bg-white p-8 rounded-xl shadow-lg hover: shadow-xl/g, 'className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl');
  content = content.replace(/className={`bg-white p-8 rounded-xl shadow-lg hover: shadow-xl/g, 'className={`bg-white p-8 rounded-xl shadow-lg hover:shadow-xl');
  
  return content;
}

// Main function
function main() {
  const files = findFiles('./pages');
  const componentFiles = findFiles('./components');
  const allFiles = [...files, ...componentFiles];
  
  let fixedCount = 0;
  
  allFiles.forEach(filePath => {
    try {
      const content = fs.readFileSync(filePath, 'utf8');
      const fixedContent = fixCorruptedText(content);
      
      if (content !== fixedContent) {
        fs.writeFileSync(filePath, fixedContent, 'utf8');
        console.log(`Fixed: ${filePath}`);
        fixedCount++;
      }
    } catch (error) {
      console.error(`Error processing ${filePath}:`, error.message);
    }
  });
  
  console.log(`\nFixed ${fixedCount} files`);
}

main();