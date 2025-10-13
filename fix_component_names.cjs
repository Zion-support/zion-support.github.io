const fs = require('fs');
const path = require('path');

// Function to convert kebab-case to PascalCase
function kebabToPascalCase(str) {
  return str
    .split('-')
    .map(word => {
      // Handle special case for "5g" -> "FiveG"
      if (word === '5g') return 'FiveG';
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join('');
}

// Function to fix component names in a file
function fixComponentNames(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    
    // Check if the file has invalid component names (starting with numbers)
    if (content.match(/const \d+[a-zA-Z]*Page:/)) {
      console.log(`Fixing component names in: ${filePath}`);
      
      // Extract the directory name from the file path
      const dirName = path.basename(path.dirname(filePath));
      const componentName = kebabToPascalCase(dirName) + 'Page';
      
      // Replace invalid component names
      let fixedContent = content.replace(
        /const \d+[a-zA-Z]*Page: React\.FC = \(\) => \{/g,
        `const ${componentName}: React.FC = () => {`
      );
      
      // Replace export statements
      fixedContent = fixedContent.replace(
        /export default \d+[a-zA-Z]*Page;/g,
        `export default ${componentName};`
      );
      
      fs.writeFileSync(filePath, fixedContent);
    }
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
  }
}

// Function to recursively find and fix component names
function fixAllComponentNames(dir) {
  const items = fs.readdirSync(dir);
  
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      fixAllComponentNames(fullPath);
    } else if (item === 'page.tsx') {
      fixComponentNames(fullPath);
    }
  }
}

// Start fixing from the app directory
console.log('Starting component name fixes...');
fixAllComponentNames('./app');
console.log('Component name fixes completed!');