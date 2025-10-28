const fs = require('fs');
const path = require('path');

// Function to fix import paths in micro-saas-services files
function fixMicroSaasPaths(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Fix Navigation import path
    if (content.includes("import Navigation from '../components/Navigation';")) {
      content = content.replace("import Navigation from '../components/Navigation';", "import Navigation from '../../components/Navigation';");
      modified = true;
    }
    
    // Fix Footer import path
    if (content.includes("import Footer from '../components/Footer';")) {
      content = content.replace("import Footer from '../components/Footer';", "import Footer from '../../components/Footer';");
      modified = true;
    }
    
    if (modified) {
      fs.writeFileSync(filePath, content);
      console.log(`Fixed import paths in: ${filePath}`);
      return true;
    }
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Function to recursively find and fix all micro-saas-services files
function fixAllMicroSaasPaths(dir) {
  const files = fs.readdirSync(dir);
  let fixedCount = 0;
  
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      // Skip node_modules and other non-app directories
      if (!['node_modules', '.next', '.git'].includes(file)) {
        fixedCount += fixAllMicroSaasPaths(filePath);
      }
    } else if (file.endsWith('.tsx') && filePath.includes('micro-saas-services')) {
      if (fixMicroSaasPaths(filePath)) {
        fixedCount++;
      }
    }
  }
  
  return fixedCount;
}

// Start fixing from the app directory
const appDir = path.join(__dirname, 'app');
console.log('Starting to fix micro-saas-services import paths...');
const totalFixed = fixAllMicroSaasPaths(appDir);
console.log(`Fixed import paths in ${totalFixed} files.`);