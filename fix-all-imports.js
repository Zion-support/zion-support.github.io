const fs = require('fs');
const path = require('path');

// Function to fix all import paths
function fixAllImports(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Fix double slash imports
    content = content.replace(/import Footer from '\/\/components\/Footer'/g, "import Footer from '../../components/Footer'");
    content = content.replace(/import Footer from '\/\/components\/Footer'/g, "import Footer from '../../../components/Footer'");
    content = content.replace(/import Footer from '\/\/components\/Footer'/g, "import Footer from '../../../../components/Footer'");

    // Fix single slash imports
    content = content.replace(/import Footer from '\/components\/Footer'/g, "import Footer from '../components/Footer'");
    content = content.replace(/import Footer from '\/components\/Footer'/g, "import Footer from '../../components/Footer'");
    content = content.replace(/import Footer from '\/components\/Footer'/g, "import Footer from '../../../components/Footer'");
    content = content.replace(/import Footer from '\/components\/Footer'/g, "import Footer from '../../../../components/Footer'");

    // Fix other component imports
    content = content.replace(/import ErrorBoundary from '\/\/components\/ErrorBoundary'/g, "import ErrorBoundary from '../../components/ErrorBoundary'");
    content = content.replace(/import PerformanceMonitor from '\/\/components\/PerformanceMonitor'/g, "import PerformanceMonitor from '../../components/PerformanceMonitor'");
    content = content.replace(/import AccessibilityEnhancer from '\/\/components\/AccessibilityEnhancer'/g, "import AccessibilityEnhancer from '../../components/AccessibilityEnhancer'");
    content = content.replace(/import LoadingSpinner from '\/\/components\/LoadingSpinner'/g, "import LoadingSpinner from '../../components/LoadingSpinner'");

    content = content.replace(/import ErrorBoundary from '\/components\/ErrorBoundary'/g, "import ErrorBoundary from '../components/ErrorBoundary'");
    content = content.replace(/import PerformanceMonitor from '\/components\/PerformanceMonitor'/g, "import PerformanceMonitor from '../components/PerformanceMonitor'");
    content = content.replace(/import AccessibilityEnhancer from '\/components\/AccessibilityEnhancer'/g, "import AccessibilityEnhancer from '../components/AccessibilityEnhancer'");
    content = content.replace(/import LoadingSpinner from '\/components\/LoadingSpinner'/g, "import LoadingSpinner from '../components/LoadingSpinner'");

    if (modified || content !== fs.readFileSync(filePath, 'utf8')) {
      fs.writeFileSync(filePath, content);
      console.log(`Fixed: ${filePath}`);
      return true;
    }
    return false;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

// Function to recursively find all .tsx files
function findTSXFiles(dir) {
  const files = [];
  const items = fs.readdirSync(dir);
  
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
      files.push(...findTSXFiles(fullPath));
    } else if (item.endsWith('.tsx')) {
      files.push(fullPath);
    }
  }
  
  return files;
}

// Main execution
console.log('Starting comprehensive import fixes...');
const appDir = '/workspace/app';
const tsxFiles = findTSXFiles(appDir);

let fixedCount = 0;
for (const file of tsxFiles) {
  if (fixAllImports(file)) {
    fixedCount++;
  }
}

console.log(`Fixed ${fixedCount} files out of ${tsxFiles.length} total TSX files.`);