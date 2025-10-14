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

// Function to convert a string to a valid property name
function toValidPropertyName(str) {
  // Convert to camelCase
  return str
    .split(/[\s-]+/)
    .map((word, index) => {
      if (index === 0) {
        return word.toLowerCase();
      }
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    })
    .join('');
}

// Function to fix component names and interfaces
function fixComponentNames(content) {
  // Fix malformed component declarations
  content = content.replace(
    /const\s+([^:]+):\s*React\.FC<([^>]+)>\s*=/g,
    (match, componentName, interfaceName) => {
      const validComponentName = toValidComponentName(componentName.trim());
      const validInterfaceName = toValidInterfaceName(interfaceName.trim());
      return `const ${validComponentName}: React.FC<${validInterfaceName}> =`;
    }
  );
  
  // Fix malformed interface names
  content = content.replace(
    /interface\s+([^{]+)\s*{/g,
    (match, interfaceName) => {
      const validName = toValidInterfaceName(interfaceName.trim());
      return `interface ${validName} {`;
    }
  );
  
  // Fix malformed property names in interfaces
  content = content.replace(
    /(\w+)\s+(\w+)\s*\?:\s*(\w+);/g,
    (match, first, second, type) => {
      const validProp = toValidPropertyName(first + ' ' + second);
      return `${validProp}?: ${type};`;
    }
  );
  
  // Fix malformed destructuring parameters
  content = content.replace(
    /{\s*(\w+)\s+(\w+)\s*=\s*([^,}]+)/g,
    (match, first, second, value) => {
      const validParam = toValidPropertyName(first + ' ' + second);
      return `{ ${validParam} = ${value}`;
    }
  );
  
  // Fix specific malformed patterns
  content = content.replace(/AccessibilityenhancerpagePage/g, 'AccessibilityEnhancerPage');
  content = content.replace(/accessibilityenhancerprops/g, 'AccessibilityEnhancerProps');
  content = content.replace(/enable keyboard Navigation/g, 'enableKeyboardNavigation');
  content = content.replace(/enable Screen reader Support/g, 'enableScreenReaderSupport');
  content = content.replace(/enable high Contrast/g, 'enableHighContrast');
  content = content.replace(/enable focus Management/g, 'enableFocusManagement');
  
  // Fix other common patterns
  content = content.replace(/enableKeyboardnavigation/g, 'enableKeyboardNavigation');
  content = content.replace(/enable screenReadersupport/g, 'enableScreenReaderSupport');
  content = content.replace(/enableHighcontrast/g, 'enableHighContrast');
  content = content.replace(/enableFocusmanagement/g, 'enableFocusManagement');
  
  return content;
}

// Function to process a single file
function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const fixedContent = fixComponentNames(content);
    
    if (content !== fixedContent) {
      fs.writeFileSync(filePath, fixedContent, 'utf8');
      console.log(`Fixed: ${filePath}`);
      return true;
    }
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Main execution
console.log('Starting component names fixes...');

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
console.log('Component names fixes completed!');