const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Function to convert kebab-case to PascalCase
function kebabToPascalCase(str) {
  return str
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join('');
}

// Function to fix component names in a file
function fixComponentNames(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Fix component declarations with spaces
    const componentRegex = /const\s+([A-Za-z][A-Za-z0-9\s]+)\s*:\s*React\.FC/g;
    const matches = content.match(componentRegex);
    
    if (matches) {
      matches.forEach(match => {
        const componentName = match.match(/const\s+([A-Za-z][A-Za-z0-9\s]+)\s*:/)[1];
        const fixedName = componentName.replace(/\s+/g, '');
        const fixedMatch = match.replace(componentName, fixedName);
        content = content.replace(match, fixedMatch);
        modified = true;
      });
    }

    // Fix interface names with spaces
    const interfaceRegex = /interface\s+([A-Za-z][A-Za-z0-9\s]+)\s*Props/g;
    const interfaceMatches = content.match(interfaceRegex);
    
    if (interfaceMatches) {
      interfaceMatches.forEach(match => {
        const interfaceName = match.match(/interface\s+([A-Za-z][A-Za-z0-9\s]+)\s*Props/)[1];
        const fixedName = interfaceName.replace(/\s+/g, '');
        const fixedMatch = match.replace(interfaceName, fixedName);
        content = content.replace(match, fixedMatch);
        modified = true;
      });
    }

    // Fix property names with spaces in interfaces
    const propRegex = /(\w+)\s+([A-Za-z][A-Za-z0-9\s]+)\??\s*:/g;
    const propMatches = content.match(propRegex);
    
    if (propMatches) {
      propMatches.forEach(match => {
        const propName = match.match(/(\w+)\s+([A-Za-z][A-Za-z0-9\s]+)\??\s*:/)[2];
        if (propName.includes(' ')) {
          const fixedName = propName.replace(/\s+/g, '');
          const fixedMatch = match.replace(propName, fixedName);
          content = content.replace(match, fixedMatch);
          modified = true;
        }
      });
    }

    // Fix use Effect -> useEffect
    content = content.replace(/use Effect/g, 'useEffect');
    content = content.replace(/use State/g, 'useState');
    content = content.replace(/use Callback/g, 'useCallback');
    content = content.replace(/use Memo/g, 'useMemo');
    content = content.replace(/use Ref/g, 'useRef');
    content = content.replace(/use Context/g, 'useContext');
    content = content.replace(/use Reducer/g, 'useReducer');
    content = content.replace(/use ImperativeHandle/g, 'useImperativeHandle');
    content = content.replace(/use LayoutEffect/g, 'useLayoutEffect');
    content = content.replace(/use DebugValue/g, 'useDebugValue');

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
  if (fixComponentNames(file)) {
    fixedCount++;
  }
});

console.log(`Fixed ${fixedCount} files`);
