const fs = require('fs');
const path = require('path');

// Function to fix import paths
function fixImportPaths(content, filePath) {
  let fixed = content;
  
  // Fix Footer import path based on directory depth
  if (filePath.includes('/ai-services/')) {
    fixed = fixed.replace("import Footer from '../../components/Footer';", "import Footer from '../../components/Footer';");
  } else if (filePath.includes('/micro-saas/')) {
    fixed = fixed.replace("import Footer from '../components/Footer';", "import Footer from '../../components/Footer';");
  } else if (filePath.includes('/it-services/')) {
    fixed = fixed.replace("import Footer from '../components/Footer';", "import Footer from '../../components/Footer';");
  }
  
  return fixed;
}

// Function to fix a specific file
function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    const originalContent = content;
    
    // Apply fixes
    content = fixImportPaths(content, filePath);
    
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed: ${filePath}`);
      return true;
    }
    return false;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

// Function to recursively find and fix files
function fixFilesInDirectory(dir) {
  const files = fs.readdirSync(dir);
  let fixedCount = 0;

  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      // Skip node_modules and other directories
      if (!['node_modules', '.git', '.next', 'dist', 'build'].includes(file)) {
        fixedCount += fixFilesInDirectory(filePath);
      }
    } else if (file.endsWith('.tsx') || file.endsWith('.ts') || file.endsWith('.jsx') || file.endsWith('.js')) {
      if (fixFile(filePath)) {
        fixedCount++;
      }
    }
  }

  return fixedCount;
}

// Main execution
console.log('Starting import path fixes...');
const fixedCount = fixFilesInDirectory('/workspace');
console.log(`Fixed ${fixedCount} files`);