const fs = require('fs');
const path = require('path');

// Fix all 5G pages with correct exports
const pagesDir = '/workspace/app';
const files = fs.readdirSync(pagesDir).filter(file => file.startsWith('5g-') && file.endsWith('.tsx'));

files.forEach(file => {
  const filePath = path.join(pagesDir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Extract component name from the file
  const componentMatch = content.match(/const\s+(\w+):\s*React\.FC/);
  if (componentMatch) {
    const componentName = componentMatch[1];
    
    // Fix the export to use the correct component name
    content = content.replace(/export default __\w+;/, `export default ${componentName};`);
    content = content.replace(/export default \w+;/, `export default ${componentName};`);
    
    fs.writeFileSync(filePath, content);
    console.log(`Fixed ${file} -> ${componentName}`);
  }
});

// Fix console.log issues in utility files
const utilsDir = '/workspace/utils';
if (fs.existsSync(utilsDir)) {
  const utilFiles = fs.readdirSync(utilsDir).filter(file => file.endsWith('.ts') || file.endsWith('.tsx'));
  
  utilFiles.forEach(file => {
    const filePath = path.join(utilsDir, file);
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Remove console.log statements
    content = content.replace(/console\.log\([^)]*\);?\s*/g, '');
    content = content.replace(/console\.warn\([^)]*\);?\s*/g, '');
    content = content.replace(/console\.error\([^)]*\);?\s*/g, '');
    
    fs.writeFileSync(filePath, content);
    console.log(`Fixed console statements in ${file}`);
  });
}

// Fix console.log issues in app/utils
const appUtilsDir = '/workspace/app/utils';
if (fs.existsSync(appUtilsDir)) {
  const utilFiles = fs.readdirSync(appUtilsDir).filter(file => file.endsWith('.ts') || file.endsWith('.tsx'));
  
  utilFiles.forEach(file => {
    const filePath = path.join(appUtilsDir, file);
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Remove console.log statements
    content = content.replace(/console\.log\([^)]*\);?\s*/g, '');
    content = content.replace(/console\.warn\([^)]*\);?\s*/g, '');
    content = content.replace(/console\.error\([^)]*\);?\s*/g, '');
    
    fs.writeFileSync(filePath, content);
    console.log(`Fixed console statements in ${file}`);
  });
}

console.log('All remaining fixes completed!');