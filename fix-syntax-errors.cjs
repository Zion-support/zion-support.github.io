const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Function to convert a string to a valid component name
function toValidComponentName(str) {
  // Remove "Page" from the end if it exists
  let name = str.replace(/\s*Page\s*$/, '');
  
  // Convert to PascalCase
  name = name
    .split(/[\s-]+/)
    .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join('');
  
  // Ensure it starts with a letter
  if (!/^[a-zA-Z]/.test(name)) {
    name = 'A' + name;
  }
  
  // Add "Page" suffix
  return name + 'Page';
}

// Function to convert a string to a valid interface name
function toValidInterfaceName(str) {
  // Convert to PascalCase
  let name = str
    .split(/[\s-]+/)
    .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join('');
  
  // Ensure it starts with a letter
  if (!/^[a-zA-Z]/.test(name)) {
    name = 'A' + name;
  }
  
  return name;
}

// Function to fix component names in a file
function fixComponentNames(content) {
  // Fix component declarations like "const Five GEdge Computing Page: React.FC"
  content = content.replace(
    /const\s+([^:]+):\s*React\.FC/g,
    (match, componentName) => {
      const validName = toValidComponentName(componentName.trim());
      return `const ${validName}: React.FC`;
    }
  );
  
  // Fix interface names like "interface Accessibility Enhancer Props"
  content = content.replace(
    /interface\s+([^{]+)\s*{/g,
    (match, interfaceName) => {
      const validName = toValidInterfaceName(interfaceName.trim());
      return `interface ${validName} {`;
    }
  );
  
  // Fix import statements like "use Effect" to "useEffect"
  content = content.replace(/use\s+Effect/g, 'useEffect');
  content = content.replace(/use\s+State/g, 'useState');
  content = content.replace(/use\s+Callback/g, 'useCallback');
  content = content.replace(/use\s+Memo/g, 'useMemo');
  content = content.replace(/use\s+Ref/g, 'useRef');
  content = content.replace(/use\s+Context/g, 'useContext');
  content = content.replace(/use\s+Reducer/g, 'useReducer');
  content = content.replace(/use\s+LayoutEffect/g, 'useLayoutEffect');
  content = content.replace(/use\s+ImperativeHandle/g, 'useImperativeHandle');
  content = content.replace(/use\s+DebugValue/g, 'useDebugValue');
  
  // Fix property names in interfaces that have spaces
  content = content.replace(
    /(\w+)\s+(\w+)\s*\?:\s*(\w+);/g,
    (match, first, second, type) => {
      const validProp = first + second.charAt(0).toUpperCase() + second.slice(1);
      return `${validProp}?: ${type};`;
    }
  );
  
  return content;
}

// Get all TypeScript/TSX files
const files = [
  ...glob.sync('app/**/*.tsx'),
  ...glob.sync('app/**/*.ts'),
  ...glob.sync('components/**/*.tsx'),
  ...glob.sync('components/**/*.ts'),
  ...glob.sync('hooks/**/*.ts'),
  ...glob.sync('utils/**/*.ts')
];

console.log(`Found ${files.length} TypeScript files to process...`);

let fixedCount = 0;

files.forEach(filePath => {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const fixedContent = fixComponentNames(content);
    
    if (content !== fixedContent) {
      fs.writeFileSync(filePath, fixedContent, 'utf8');
      console.log(`Fixed: ${filePath}`);
      fixedCount++;
    }
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
  }
});

// Main execution
console.log('Starting syntax error fixes...');

// Find all TypeScript/JSX files
const files = glob.sync('app/**/*.{ts,tsx}', { cwd: __dirname });

let fixedCount = 0;
let totalFiles = files.length;

console.log(`Found ${totalFiles} files to process...`);

files.forEach(file => {
  const fullPath = path.join(__dirname, file);
  if (processFile(fullPath)) {
    fixedCount++;
  }
});

console.log(`\nFixed ${fixedCount} out of ${totalFiles} files.`);
console.log('Syntax error fixes completed!');
