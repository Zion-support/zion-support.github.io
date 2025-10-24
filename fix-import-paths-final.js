const fs = require('fs');
const path = require('path');

// Function to fix import paths based on actual directory structure
function fixImportPaths(content, filePath) {
  let fixed = content;
  
  // Calculate the correct relative path to components
  const pathParts = filePath.split('/');
  const appIndex = pathParts.indexOf('app');
  const depth = pathParts.length - appIndex - 2; // -2 for 'app' and filename
  
  let correctPath = '';
  for (let i = 0; i < depth; i++) {
    correctPath += '../';
  }
  correctPath += 'components/Footer';
  
  // Replace the import statement
  fixed = fixed.replace(/import Footer from ['"][^'"]*['"];/, `import Footer from '../../components/Footer';`);
  
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
      console.log(`Fixed: ${filePath} -> ${content.match(/import Footer from ['"][^'"]*['"];/)?.[0]}`);
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
console.log('Starting final import path fixes...');
const fixedCount = fixFilesInDirectory('/workspace');
console.log(`Fixed ${fixedCount} files`);