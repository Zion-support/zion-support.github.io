const fs = require('fs');
const path = require('path');

// Function to fix import paths
function fixImportPaths(content) {
  let fixed = content;
  
  // Fix @/components imports to relative paths
  fixed = fixed.replace(/import { Navigation } from '@\/components\/Navigation';/g, "import { Navigation } from '../components/Navigation';");
  fixed = fixed.replace(/import { Footer } from '@\/components\/Footer';/g, "import { Footer } from '../components/Footer';");
  fixed = fixed.replace(/import { Navigation } from '@\/components\/Navigation';/g, "import { Navigation } from '../../components/Navigation';");
  fixed = fixed.replace(/import { Footer } from '@\/components\/Footer';/g, "import { Footer } from '../../components/Footer';");
  
  return fixed;
}

// Function to process a single file
function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const fixed = fixImportPaths(content);
    
    if (content !== fixed) {
      fs.writeFileSync(filePath, fixed, 'utf8');
      console.log(`Fixed imports in: ${filePath}`);
    }
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
  }
}

// Function to recursively find all .tsx files
function findTsxFiles(dir) {
  const files = [];
  const items = fs.readdirSync(dir);
  
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      files.push(...findTsxFiles(fullPath));
    } else if (item.endsWith('.tsx')) {
      files.push(fullPath);
    }
  }
  
  return files;
}

// Main execution
const appDir = path.join(__dirname, 'app');
const tsxFiles = findTsxFiles(appDir);

console.log(`Found ${tsxFiles.length} .tsx files to process`);

tsxFiles.forEach(processFile);

console.log('Import path fixing completed!');