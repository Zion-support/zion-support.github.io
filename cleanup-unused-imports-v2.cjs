const fs = require('fs');
const path = require('path');

function cleanupUnusedImports(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    const originalContent = content;

    // Check if ErrorBoundary is imported but not used
    if (content.includes("import { ErrorBoundary } from 'react-error-boundary';")) {
      // Check if ErrorBoundary is actually used in JSX
      const errorBoundaryUsed = content.includes('<ErrorBoundary') || 
                               content.includes('ErrorBoundary.') ||
                               content.includes('ErrorBoundary(');
      
      if (!errorBoundaryUsed) {
        content = content.replace(/import { ErrorBoundary } from 'react-error-boundary';\n?/g, '');
        modified = true;
      }
    }

    // Check if Navigation is imported but not used
    if (content.includes("import Navigation from '@/components/Navigation';") || 
        content.includes("import Navigation from '../components/Navigation';")) {
      const navigationUsed = content.includes('<Navigation') || 
                            content.includes('Navigation.') ||
                            content.includes('Navigation(');
      
      if (!navigationUsed) {
        content = content.replace(/import Navigation from ['"]@\/components\/Navigation['"];\n?/g, '');
        content = content.replace(/import Navigation from ['"]\.\.\/components\/Navigation['"];\n?/g, '');
        modified = true;
      }
    }

    // Check if Footer is imported but not used
    if (content.includes("import Footer from '@/components/Footer';") || 
        content.includes("import Footer from '../components/Footer';")) {
      const footerUsed = content.includes('<Footer') || 
                        content.includes('Footer.') ||
                        content.includes('Footer(');
      
      if (!footerUsed) {
        content = content.replace(/import Footer from ['"]@\/components\/Footer['"];\n?/g, '');
        content = content.replace(/import Footer from ['"]\.\.\/components\/Footer['"];\n?/g, '');
        modified = true;
      }
    }

    // Clean up multiple empty lines
    content = content.replace(/\n\s*\n\s*\n/g, '\n\n');

    if (modified) {
      fs.writeFileSync(filePath, content);
      console.log(`Cleaned up unused imports: ${filePath}`);
      return true;
    }
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

function findTsxFiles(dir) {
  const files = [];
  
  function traverse(currentDir) {
    const items = fs.readdirSync(currentDir);
    
    for (const item of items) {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
        traverse(fullPath);
      } else if (item.endsWith('.tsx')) {
        files.push(fullPath);
      }
    }
  }
  
  traverse(dir);
  return files;
}

// Find all .tsx files in the app directory
const appDir = path.join(__dirname, 'app');
const tsxFiles = findTsxFiles(appDir);

console.log(`Found ${tsxFiles.length} .tsx files`);

let cleanedCount = 0;
for (const file of tsxFiles) {
  if (cleanupUnusedImports(file)) {
    cleanedCount++;
  }
}

console.log(`Cleaned up ${cleanedCount} files`);