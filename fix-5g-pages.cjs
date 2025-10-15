const fs = require('fs');
const path = require('path');

const pagesDir = '/workspace/app';
const files = fs.readdirSync(pagesDir).filter(file => file.startsWith('5g-') && file.endsWith('.tsx'));

files.forEach(file => {
  const filePath = path.join(pagesDir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Fix component name and export
  const pageName = file.replace('.tsx', '').replace(/-/g, '');
  const componentName = pageName.charAt(0).toUpperCase() + pageName.slice(1) + 'Page';
  
  // Replace the component declaration
  content = content.replace(/const\s+\w+:\s*React\.FC\s*=\s*\(\)\s*=>\s*{/, `const ${componentName}: React.FC = () => {`);
  
  // Fix the export
  content = content.replace(/export default \w+;/, `export default ${componentName};`);
  
  // Remove any incorrect exports
  content = content.replace(/export default __\w+;/, `export default ${componentName};`);
  
  fs.writeFileSync(filePath, content);
  console.log(`Fixed ${file}`);
});