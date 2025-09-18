const fs = require('fs');
const path = require('path');

// Read the App.tsx file
const appPath = '/workspace/src/App.tsx';
let content = fs.readFileSync(appPath, 'utf8');

// Get all page files
const pagesDir = '/workspace/src/pages';
const pageFiles = fs.readdirSync(pagesDir)
  .filter(file => file.endsWith('.tsx') || file.endsWith('.jsx'))
  .map(file => file.replace(/\.(tsx|jsx)$/, ''));

console.log('Available page files:', pageFiles.slice(0, 10), '...');

// Find all import statements that reference pages
const importRegex = /import\s+(\w+)\s+from\s+['"]\.\/pages\/([^'"]+)['"];?/g;
const routeRegex = /<Route[^>]*element=\{<(\w+)\s*\/>\}[^>]*\/>/g;

let match;
const imports = new Map();
const routes = new Map();

// Extract all imports
while ((match = importRegex.exec(content)) !== null) {
  const [fullMatch, componentName, filePath] = match;
  imports.set(componentName, filePath);
}

// Extract all route usages
while ((match = routeRegex.exec(content)) !== null) {
  const [fullMatch, componentName] = match;
  routes.set(componentName, true);
}

console.log('Found imports:', Array.from(imports.keys()).slice(0, 10));
console.log('Found routes:', Array.from(routes.keys()).slice(0, 10));

// Fix missing imports
let fixed = 0;
for (const [componentName, filePath] of imports) {
  if (!pageFiles.includes(filePath)) {
    console.log(`Missing file: ${filePath} for component ${componentName}`);
    
    // Try to find a similar file
    const similarFile = pageFiles.find(file => 
      file.toLowerCase().includes(filePath.toLowerCase().split('2026')[0]) ||
      file.toLowerCase().includes(filePath.toLowerCase().split('2025')[0]) ||
      file.toLowerCase().includes(filePath.toLowerCase().split('2027')[0])
    );
    
    if (similarFile) {
      console.log(`  -> Replacing with: ${similarFile}`);
      content = content.replace(
        new RegExp(`import\\s+${componentName}\\s+from\\s+['"]\\.\\/pages\\/${filePath}['"];?`, 'g'),
        `import ${componentName} from './pages/${similarFile}';`
      );
      fixed++;
    } else {
      console.log(`  -> No similar file found, removing import and usage`);
      // Remove the import
      content = content.replace(
        new RegExp(`import\\s+${componentName}\\s+from\\s+['"]\\.\\/pages\\/[^'"]+['"];?\\n?`, 'g'),
        ''
      );
      // Remove the route usage
      content = content.replace(
        new RegExp(`<Route[^>]*element=\\{<${componentName}\\s*\\/>\\}[^>]*\\/>`, 'g'),
        ''
      );
      fixed++;
    }
  }
}

console.log(`Fixed ${fixed} imports`);

// Write the fixed content back
fs.writeFileSync(appPath, content);
console.log('Fixed App.tsx');