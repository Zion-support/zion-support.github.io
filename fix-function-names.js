const fs = require('fs');
const path = require('path');

// Function to convert kebab-case to PascalCase
function kebabToPascalCase(str) {
  return str
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join('');
}

// Function to fix a single page file
function fixPageFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Get the page name from the file path
    const pathParts = filePath.split('/');
    const pageName = pathParts[pathParts.length - 2] || 'Page';
    const pascalCaseName = kebabToPascalCase(pageName);
    
    // Fix the function name and export
    content = content.replace(/const\s+[^=]+=\s*\(\)\s*=>\s*{/, `const ${pascalCaseName} = () => {`);
    content = content.replace(/export default Page;/, `export default ${pascalCaseName};`);
    
    fs.writeFileSync(filePath, content);
    console.log(`Fixed function name in: ${filePath}`);
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
}

// Function to recursively find and fix all page files
function fixAllPageFiles(dir) {
  const files = fs.readdirSync(dir);
  
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory() && !file.startsWith('.') && file !== 'node_modules' && file !== 'components') {
      fixAllPageFiles(filePath);
    } else if (file === 'page.tsx' && dir.includes('/app/')) {
      fixPageFile(filePath);
    }
  });
}

// Start fixing from the app directory
console.log('Starting to fix function names...');
fixAllPageFiles('/workspace/app');
console.log('Finished fixing function names.');