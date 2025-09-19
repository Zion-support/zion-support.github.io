import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
// Function to convert kebab-case to PascalCase,
function kebabToPascalCase(str) {,
  return str,
    .split('-'),
    .map(word => word.charAt(0).toUpperCase() + word.slice(1)),
    .join('');
}
,
// Function to convert kebab-case to camelCase,
function kebabToCamelCase(str) {,
  const pascal = kebabToPascalCase(str);
  return pascal.charAt(0).toLowerCase() + pascal.slice(1);
}
,
// Get all component files with hyphens,
const componentsDir = path.join(__dirname, 'src/components');
const files = fs.readdirSync(componentsDir);
files.forEach(file => {,
  if (file.endsWith('.tsx') && file.includes('-')) {,
    const filePath = path.join(componentsDir, file);
    const content = fs.readFileSync(filePath, 'utf8');
    // Extract the component name from filename (without .tsx),
    const componentName = file.replace('.tsx', '');
    const pascalName = kebabToPascalCase(componentName);
    const camelName = kebabToCamelCase(componentName);
    // Replace the variable name in the content,
    let newContent = content.replace(,
      new RegExp(`const ${componentName}:`, 'g');
      `const ${camelName}:`,
    );
    newContent = newContent.replace(,
      new RegExp(`export default ${componentName}`, 'g');
      `export default ${camelName}`,
    );
    // Write the fixed content back,
    fs.writeFileSync(filePath, newContent);
    console.log(`Fixed ${file}: ${componentName} -> ${camelName}`);
  }
});
console.log('Component name fixes completed!');