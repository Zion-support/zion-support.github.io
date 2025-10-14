const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Find all page.tsx files in the app directory
const pageFiles = glob.sync('app/**/page.tsx', { cwd: __dirname });

console.log(`Found ${pageFiles.length} page files to fix`);

pageFiles.forEach(filePath => {
  const fullPath = path.join(__dirname, filePath);
  let content = fs.readFileSync(fullPath, 'utf8');
  
  // Check if the file has circular import issues
  const hasCircularImport = content.includes('const page = React.lazy(() => import(') || 
                           content.includes('export default page;') ||
                           content.includes('const page = React.lazy(() => import(\'./page\')');
  
  if (hasCircularImport) {
    console.log(`Fixing circular import in ${filePath}`);
    
    // Remove circular import lines
    content = content.replace(/const page = React\.lazy\(\(\) => import\(['"]\.\/page['"]\)\);\s*\n?/g, '');
    content = content.replace(/export default page;\s*\n?/g, '');
    
    // Find the main component function/const
    const componentMatch = content.match(/(?:function|const)\s+(\w+)\s*(?:=|\([^)]*\)\s*=>)/);
    if (componentMatch) {
      const componentName = componentMatch[1];
      // Add proper export
      if (!content.includes(`export default ${componentName};`)) {
        content += `\nexport default ${componentName};`;
      }
    }
    
    fs.writeFileSync(fullPath, content);
    console.log(`Fixed ${filePath}`);
  }
});

console.log('Circular import fixes completed');