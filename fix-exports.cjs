const fs = require('fs');
const path = require('path');

// Find all page.tsx files in the app directory
const appDir = path.join(__dirname, 'app');
const files = [];

function findPageFiles(dir) {
  const items = fs.readdirSync(dir);
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      findPageFiles(fullPath);
    } else if (item === 'page.tsx') {
      files.push(fullPath);
    }
  }
}

findPageFiles(appDir);

console.log(`Found ${files.length} page files to fix`);

for (const filePath of files) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Check if file has the problematic pattern
    if (content.includes('const page = React.lazy(() => import(\'./page\'));')) {
      console.log(`Fixing ${filePath}`);
      
      // Extract the component name from the const declaration
      const componentMatch = content.match(/const (\w+): React\.FC = \(\) => \{/);
      if (componentMatch) {
        const componentName = componentMatch[1];
        
        // Replace the lazy import and export with direct export
        content = content.replace(
          /const page = React\.lazy\(\(\) => import\('\.\/page'\)\);\nexport default page;/,
          `export default ${componentName};`
        );
        
        fs.writeFileSync(filePath, content);
        console.log(`  Fixed: ${componentName}`);
      }
    }
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
  }
}

console.log('Export fixes completed');