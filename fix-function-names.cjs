const fs = require('fs');
const path = require('path');

// Function to fix function names with hyphens
function fixFunctionNames(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Check if it has a function with hyphen in the name
    const hyphenFunctionMatch = content.match(/export default function ([A-Za-z]+-[A-Za-z]+)\(/);
    if (hyphenFunctionMatch) {
      const hyphenName = hyphenFunctionMatch[1];
      const camelCaseName = hyphenName.split('-').map((word, index) => 
        index === 0 ? word : word.charAt(0).toUpperCase() + word.slice(1)
      ).join('');
      
      content = content.replace(
        new RegExp(`export default function ${hyphenName}\\(`, 'g'),
        `export default function ${camelCaseName}(`
      );
      
      fs.writeFileSync(filePath, content);
      console.log(`Fixed function name in: ${filePath} (${hyphenName} -> ${camelCaseName})`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

// Function to recursively find and fix all page files
function fixAllFunctionNames(dir) {
  const files = fs.readdirSync(dir);
  let fixedCount = 0;
  
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      fixedCount += fixAllFunctionNames(filePath);
    } else if (file === 'page.tsx') {
      if (fixFunctionNames(filePath)) {
        fixedCount++;
      }
    }
  }
  
  return fixedCount;
}

// Start fixing from the app directory
const appDir = path.join(__dirname, 'app');
console.log('Starting to fix function names...');
const totalFixed = fixAllFunctionNames(appDir);
console.log(`Fixed ${totalFixed} function names`);