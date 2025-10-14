const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Function to convert a string to a valid property name
function toValidPropertyName(str) {
  // Remove spaces and convert to camelCase
  return str
    .split(/\s+/)
    .map((word, index) => {
      if (index === 0) {
        return word.toLowerCase();
      }
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    })
    .join('');
}

// Function to convert a string to a valid variable name
function toValidVariableName(str) {
  // Remove spaces and convert to camelCase
  return str
    .split(/\s+/)
    .map((word, index) => {
      if (index === 0) {
        return word.toLowerCase();
      }
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    })
    .join('');
}

// Function to fix remaining syntax errors in a file
function fixRemainingSyntaxErrors(content) {
  // Fix property names in interfaces that have spaces
  content = content.replace(
    /(\w+)\s+(\w+)\s*\?:\s*(\w+);/g,
    (match, first, second, type) => {
      const validProp = toValidPropertyName(first + ' ' + second);
      return `${validProp}?: ${type};`;
    }
  );
  
  // Fix property names in interfaces that have multiple words
  content = content.replace(
    /(\w+)\s+(\w+)\s+(\w+)\s*\?:\s*(\w+);/g,
    (match, first, second, third, type) => {
      const validProp = toValidPropertyName(first + ' ' + second + ' ' + third);
      return `${validProp}?: ${type};`;
    }
  );
  
  // Fix variable names with spaces
  content = content.replace(
    /const\s+([^=]+)\s*=/g,
    (match, varName) => {
      const validName = toValidVariableName(varName.trim());
      return `const ${validName} =`;
    }
  );
  
  // Fix object property names with spaces
  content = content.replace(
    /(\w+)\s+(\w+):\s*([^,}]+)/g,
    (match, first, second, value) => {
      const validProp = toValidPropertyName(first + ' ' + second);
      return `${validProp}: ${value}`;
    }
  );
  
  // Fix React Node type
  content = content.replace(/React\s+Node/g, 'ReactNode');
  
  // Fix function parameter names with spaces
  content = content.replace(
    /(\w+)\s+(\w+)\s*=\s*([^,)]+)/g,
    (match, first, second, value) => {
      const validParam = toValidPropertyName(first + ' ' + second);
      return `${validParam} = ${value}`;
    }
  );
  
  // Fix destructuring with spaces
  content = content.replace(
    /{\s*(\w+)\s+(\w+)\s*}/g,
    (match, first, second) => {
      const validProp = toValidPropertyName(first + ' ' + second);
      return `{ ${validProp} }`;
    }
  );
  
  // Fix specific patterns
  content = content.replace(/enable KeyboardNavigation/g, 'enableKeyboardNavigation');
  content = content.replace(/enable Screen ReaderSupport/g, 'enableScreenReaderSupport');
  content = content.replace(/enable HighContrast/g, 'enableHighContrast');
  content = content.replace(/enable FocusManagement/g, 'enableFocusManagement');
  content = content.replace(/enable Keyboard Navigation/g, 'enableKeyboardNavigation');
  content = content.replace(/enable Screen Reader Support/g, 'enableScreenReaderSupport');
  content = content.replace(/enable High Contrast/g, 'enableHighContrast');
  content = content.replace(/enable Focus Management/g, 'enableFocusManagement');
  
  // Fix React Node
  content = content.replace(/React Node/g, 'ReactNode');
  
  // Fix app Config
  content = content.replace(/app Config/g, 'appConfig');
  content = content.replace(/api Url/g, 'apiUrl');
  
  // Fix component names that still have spaces
  content = content.replace(/AccessibilityenhancerPage/g, 'AccessibilityEnhancerPage');
  content = content.replace(/AnalyticsproviderPage/g, 'AnalyticsProviderPage');
  
  return content;
}

// Function to process a single file
function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const fixedContent = fixRemainingSyntaxErrors(content);
    
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
console.log('Starting remaining syntax error fixes...');

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
console.log('Remaining syntax error fixes completed!');