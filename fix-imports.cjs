const fs = require('fs');
const path = require('path');

// Function to fix imports in a file
function fixImportsInFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Fix @/utils/ imports
    const utilsRegex = /from '@\/utils\//g;
    if (utilsRegex.test(content)) {
      content = content.replace(utilsRegex, "from '../../../src/utils/");
      modified = true;
    }
    
    // Fix @/data/ imports
    const dataRegex = /from '@\/data\//g;
    if (dataRegex.test(content)) {
      content = content.replace(dataRegex, "from '../../../src/data/");
      modified = true;
    }
    
    // Fix @/lib/ imports
    const libRegex = /from '@\/lib\//g;
    if (libRegex.test(content)) {
      content = content.replace(libRegex, "from '../../../src/lib/");
      modified = true;
    }
    
    // Fix @/components/ imports
    const componentsRegex = /from '@\/components\//g;
    if (componentsRegex.test(content)) {
      content = content.replace(componentsRegex, "from '../../../src/components/");
      modified = true;
    }
    
    // Fix @/types/ imports
    const typesRegex = /from '@\/types\//g;
    if (typesRegex.test(content)) {
      content = content.replace(typesRegex, "from '../../../src/types/");
      modified = true;
    }
    
    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed imports in: ${filePath}`);
    }
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
  }
}

// Get all API files
const apiDir = path.join(__dirname, 'pages', 'api');
const files = [];

function walkDir(dir) {
  const filesInDir = fs.readdirSync(dir);
  for (const file of filesInDir) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat.isDirectory()) {
      walkDir(filePath);
    } else if (file.endsWith('.ts') || file.endsWith('.tsx')) {
      files.push(filePath);
    }
  }
}

walkDir(apiDir);

console.log(`Found ${files.length} API files to process`);

// Process each file
files.forEach(fixImportsInFile);

console.log('Import fixing complete!');