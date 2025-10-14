const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Find all page.tsx files in the app directory
const pageFiles = glob.sync('app/**/page.tsx', { cwd: __dirname });

console.log(`Found ${pageFiles.length} page files to check`);

let fixedCount = 0;

pageFiles.forEach(filePath => {
  const fullPath = path.join(__dirname, filePath);
  let content = fs.readFileSync(fullPath, 'utf8');
  
  // Check if the file has a function/const declaration but no export
  const hasFunction = content.match(/(?:function|const)\s+(\w+)\s*(?:=|\([^)]*\)\s*=>)/);
  const hasExport = content.includes('export default');
  
  if (hasFunction && !hasExport) {
    const componentName = hasFunction[1];
    console.log(`Adding missing export to ${filePath}`);
    
    // Add export statement
    content += `\nexport default ${componentName};`;
    
    fs.writeFileSync(fullPath, content);
    fixedCount++;
  }
});

console.log(`Fixed ${fixedCount} files with missing exports`);