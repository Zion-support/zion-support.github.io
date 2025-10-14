const fs = require('fs');
const path = require('path');

// Function to fix page exports
function fixPageExports(dir) {
  const files = fs.readdirSync(dir);
  
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      // Recursively process subdirectories
      fixPageExports(filePath);
    } else if (file === 'page.tsx') {
      // Fix the page.tsx file
      const content = fs.readFileSync(filePath, 'utf8');
      
      // Remove the incorrect export pattern
      const fixedContent = content.replace(
        /const page = React\.lazy\(\(\) => import\('\.\/page'\)\);\nexport default page;/g,
        ''
      );
      
      // Add proper default export
      const finalContent = fixedContent.replace(
        /^};$/m,
        '};\n\nexport default ' + getComponentName(filePath) + ';'
      );
      
      fs.writeFileSync(filePath, finalContent);
      console.log(`Fixed: ${filePath}`);
    }
  });
}

// Function to get component name from file path
function getComponentName(filePath) {
  const parts = filePath.split('/');
  const fileName = parts[parts.length - 2]; // Get the directory name before page.tsx
  
  // Convert kebab-case to PascalCase
  const componentName = fileName
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join('') + 'Page';
    
  return componentName;
}

// Start fixing from the app directory
fixPageExports('./app');
console.log('Page exports fixed!');