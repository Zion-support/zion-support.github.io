const fs = require('fs');
const path = require('path');

// Function to fix component names that start with numbers
function fixComponentNames(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Fix component names that start with numbers
    const invalidNames = [
      '5gImplementationPage',
      '5gSolutionsPage',
      '3dGenerationPage',
      '3dModelGeneratorPage'
    ];

    for (const invalidName of invalidNames) {
      if (content.includes(invalidName)) {
        const validName = invalidName.replace(/^(\d+)/, 'FiveG$1').replace(/^FiveG5g/, 'FiveG');
        content = content.replace(new RegExp(invalidName, 'g'), validName);
        modified = true;
      }
    }

    // Fix other number-prefixed names
    content = content.replace(/export default (\d+[a-zA-Z]+);/g, (match, name) => {
      const validName = name.replace(/^(\d+)/, 'Page$1');
      return `export default ${validName};`;
    });

    content = content.replace(/const (\d+[a-zA-Z]+): React.FC = \(\) => {/g, (match, name) => {
      const validName = name.replace(/^(\d+)/, 'Page$1');
      return `const ${validName}: React.FC = () => {`;
    });

    if (modified) {
      fs.writeFileSync(filePath, content);
      console.log(`Fixed component names in: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

// Function to recursively fix all page files
function fixAllComponentNames(dir) {
  const files = fs.readdirSync(dir);
  let fixedCount = 0;

  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      if (file !== 'node_modules' && file !== '.next' && !file.startsWith('.')) {
        fixedCount += fixAllComponentNames(filePath);
      }
    } else if (file === 'page.tsx' || file === 'page.js') {
      if (fixComponentNames(filePath)) {
        fixedCount++;
      }
    }
  }

  return fixedCount;
}

// Start fixing from the app directory
const appDir = path.join(__dirname, 'app');
console.log('Starting to fix component names...');
const totalFixed = fixAllComponentNames(appDir);
console.log(`Fixed component names in ${totalFixed} page files`);