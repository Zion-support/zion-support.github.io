const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Function to fix interface properties and destructuring parameters
function fixInterfaceProperties(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Fix interface properties with spaces
    const interfacePropRegex = /(\w+)\s+([A-Za-z][A-Za-z0-9\s]+)\??\s*:/g;
    const interfaceMatches = content.match(interfacePropRegex);
    
    if (interfaceMatches) {
      interfaceMatches.forEach(match => {
        const propName = match.match(/(\w+)\s+([A-Za-z][A-Za-z0-9\s]+)\??\s*:/)[2];
        if (propName.includes(' ')) {
          const fixedName = propName.replace(/\s+/g, '');
          const fixedMatch = match.replace(propName, fixedName);
          content = content.replace(match, fixedMatch);
          modified = true;
        }
      });
    }

    // Fix destructuring parameters with spaces
    const destructuringRegex = /(\w+)\s+([A-Za-z][A-Za-z0-9\s]+)\s*=/g;
    const destructuringMatches = content.match(destructuringRegex);
    
    if (destructuringMatches) {
      destructuringMatches.forEach(match => {
        const paramName = match.match(/(\w+)\s+([A-Za-z][A-Za-z0-9\s]+)\s*=/)[2];
        if (paramName.includes(' ')) {
          const fixedName = paramName.replace(/\s+/g, '');
          const fixedMatch = match.replace(paramName, fixedName);
          content = content.replace(match, fixedMatch);
          modified = true;
        }
      });
    }

    // Fix object property access with spaces
    const objectAccessRegex = /(\w+)\s+([A-Za-z][A-Za-z0-9\s]+)\s*[,\}]/g;
    const objectAccessMatches = content.match(objectAccessRegex);
    
    if (objectAccessMatches) {
      objectAccessMatches.forEach(match => {
        const propName = match.match(/(\w+)\s+([A-Za-z][A-Za-z0-9\s]+)\s*[,\}]/)[2];
        if (propName.includes(' ')) {
          const fixedName = propName.replace(/\s+/g, '');
          const fixedMatch = match.replace(propName, fixedName);
          content = content.replace(match, fixedMatch);
          modified = true;
        }
      });
    }

    // Fix specific patterns that might have been missed
    content = content.replace(/enable KeyboardNavigation/g, 'enableKeyboardNavigation');
    content = content.replace(/enable ScreenReaderSupport/g, 'enableScreenReaderSupport');
    content = content.replace(/enable HighContrast/g, 'enableHighContrast');
    content = content.replace(/enable FocusManagement/g, 'enableFocusManagement');
    content = content.replace(/enable ImageOptimization/g, 'enableImageOptimization');
    content = content.replace(/enable LazyLoading/g, 'enableLazyLoading');
    content = content.replace(/enable Preloading/g, 'enablePreloading');
    content = content.replace(/enable CodeSplitting/g, 'enableCodeSplitting');
    content = content.replace(/enable ServiceWorker/g, 'enableServiceWorker');
    content = content.replace(/enable ResourceHints/g, 'enableResourceHints');
    content = content.replace(/enable CriticalCSS/g, 'enableCriticalCSS');
    content = content.replace(/enable BundleAnalysis/g, 'enableBundleAnalysis');

    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Find all TypeScript/JavaScript files
const files = glob.sync('app/**/*.{ts,tsx,js,jsx}', { cwd: process.cwd() });

console.log(`Found ${files.length} files to process...`);

let fixedCount = 0;
files.forEach(file => {
  if (fixInterfaceProperties(file)) {
    fixedCount++;
  }
});

console.log(`Fixed ${fixedCount} files`);