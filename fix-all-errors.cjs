const fs = require('fs');
const path = require('path');

// Fix 5G pages
const pagesDir = '/workspace/app';
const files = fs.readdirSync(pagesDir).filter(file => file.startsWith('5g-') && file.endsWith('.tsx'));

files.forEach(file => {
  const filePath = path.join(pagesDir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Extract the page name and create proper component name
  const pageName = file.replace('.tsx', '').replace(/-/g, '');
  const componentName = pageName.charAt(0).toUpperCase() + pageName.slice(1) + 'Page';
  
  // Replace the component declaration
  content = content.replace(/const\s+\w+:\s*React\.FC\s*=\s*\(\)\s*=>\s*{/, `const ${componentName}: React.FC = () => {`);
  
  // Fix the export
  content = content.replace(/export default __\w+;/, `export default ${componentName};`);
  content = content.replace(/export default \w+;/, `export default ${componentName};`);
  
  fs.writeFileSync(filePath, content);
  console.log(`Fixed ${file}`);
});

// Fix unused imports in 5g-implementation page
const implementationFile = '/workspace/app/5g-implementation/page.tsx';
if (fs.existsSync(implementationFile)) {
  let content = fs.readFileSync(implementationFile, 'utf8');
  
  // Remove unused imports
  const unusedImports = [
    'Zap', 'Brain', 'MapPin', 'Download', 'Pause', 'RefreshCw', 'Eye', 
    'Filter', 'Calendar', 'Target', 'Lock', 'Users', 'Award', 'TrendingUp',
    'Database', 'Radio', 'Antenna', 'Router', 'Server', 'Network'
  ];
  
  unusedImports.forEach(importName => {
    const regex = new RegExp(`\\s*${importName},?\\s*`, 'g');
    content = content.replace(regex, '');
  });
  
  // Clean up any double commas or trailing commas
  content = content.replace(/,\s*,/g, ',');
  content = content.replace(/,\s*}/g, '}');
  content = content.replace(/{\s*,/g, '{');
  
  fs.writeFileSync(implementationFile, content);
  console.log('Fixed 5g-implementation page unused imports');
}

console.log('All fixes completed!');