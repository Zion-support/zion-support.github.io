const fs = require('fs');
const path = require('path');

// Function to fix malformed quotes in a file
function fixMalformedQuotes(content) {
  // Fix malformed quotes in JSX attributes
  content = content.replace(/content="([^"]*)"\s*"/g, 'content="$1"');
  content = content.replace(/href="([^"]*)"\s*"/g, 'href="$1"');
  content = content.replace(/className="([^"]*)"\s*"/g, 'className="$1"');
  content = content.replace(/name="([^"]*)"\s*"/g, 'name="$1"');
  content = content.replace(/property="([^"]*)"\s*"/g, 'property="$1"');
  
  // Fix malformed quotes in JSX text content
  content = content.replace(/>([^<]*)"\s*</g, '>$1<');
  content = content.replace(/>([^<]*);"\s*</g, '>$1<');
  
  // Fix malformed quotes in JSX closing tags
  content = content.replace(/<\/\s*([^>]*)\s*>\s*"/g, '</$1>');
  content = content.replace(/<\/\s*([^>]*)\s*>\s*;\s*"/g, '</$1>');
  
  // Fix malformed quotes in JSX opening tags
  content = content.replace(/<\s*([^>]*)\s*>\s*"/g, '<$1>');
  content = content.replace(/<\s*([^>]*)\s*>\s*;\s*"/g, '<$1>');
  
  // Fix malformed quotes in function returns
  content = content.replace(/return\s*\(\s*([^)]*)\s*\)\s*;\s*"/g, 'return ($1);');
  content = content.replace(/return\s*\(\s*([^)]*)\s*\)\s*"/g, 'return ($1)');
  
  // Fix malformed quotes in function definitions
  content = content.replace(/\)\s*}\s*;\s*"/g, ')}');
  content = content.replace(/\)\s*}\s*"/g, ')}');
  
  // Fix malformed quotes in array definitions
  content = content.replace(/\[\s*([^\]]*)\s*\]\s*;\s*"/g, '[$1];');
  content = content.replace(/\[\s*([^\]]*)\s*\]\s*"/g, '[$1]');
  
  // Fix malformed quotes in object definitions
  content = content.replace(/\{\s*([^}]*)\s*\}\s*;\s*"/g, '{$1};');
  content = content.replace(/\{\s*([^}]*)\s*\}\s*"/g, '{$1}');
  
  // Fix malformed quotes in string literals
  content = content.replace(/"([^"]*)"\s*"/g, '"$1"');
  content = content.replace(/'([^']*)'\s*"/g, "'$1'");
  
  // Fix malformed quotes in comments
  content = content.replace(/\/\*\s*([^*]*)\s*\*\/\s*"/g, '/* $1 */');
  content = content.replace(/\/\/\s*([^\n]*)\s*"/g, '// $1');
  
  return content;
}

// Function to fix Footer component specifically
function fixFooterComponent(content) {
  // Remove all semicolons that are incorrectly placed
  content = content.replace(/;\s*$/gm, '');
  content = content.replace(/;\s*"/g, '"');
  content = content.replace(/;\s*>/g, '>');
  content = content.replace(/;\s*\)/g, ')');
  content = content.replace(/;\s*}/g, '}');
  content = content.replace(/;\s*]/g, ']');
  
  // Fix specific Footer issues
  content = content.replace(/import.*Cloud\s*\} from 'lucide-react';/g, "import { Mail, Phone, MapPin, Github, Linkedin, Twitter, ArrowRight, Brain, Cloud } from 'lucide-react';");
  content = content.replace(/const Footer: React\.FC = \(\) => {;/g, 'const Footer: React.FC = () => {');
  content = content.replace(/const aiServices = \[;/g, 'const aiServices = [');
  content = content.replace(/const itServices = \[;/g, 'const itServices = [');
  content = content.replace(/const microSaas = \[;/g, 'const microSaas = [');
  content = content.replace(/const company = \[;/g, 'const company = [');
  content = content.replace(/const resources = \[;/g, 'const resources = [');
  
  // Fix JSX return statement
  content = content.replace(/return\s*\(<footer/g, 'return (\n    <footer');
  content = content.replace(/export default Footer;\s*"/g, 'export default Footer;');
  
  return content;
}

// Function to process a single file
function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    let fixedContent = content;
    
    // Apply general fixes
    fixedContent = fixMalformedQuotes(fixedContent);
    
    // Apply specific fixes for Footer component
    if (filePath.includes('Footer.tsx')) {
      fixedContent = fixFooterComponent(fixedContent);
    }
    
    // Only write if content changed
    if (fixedContent !== content) {
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

// Function to recursively find all .tsx and .ts files
function findFiles(dir, extensions = ['.tsx', '.ts', '.js']) {
  const files = [];
  
  function traverse(currentDir) {
    const items = fs.readdirSync(currentDir);
    
    for (const item of items) {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        // Skip node_modules and other common directories
        if (!['node_modules', '.git', '.next', 'dist', 'build'].includes(item)) {
          traverse(fullPath);
        }
      } else if (extensions.some(ext => item.endsWith(ext))) {
        files.push(fullPath);
      }
    }
  }
  
  traverse(dir);
  return files;
}

// Main execution
console.log('Starting syntax error fixes...');

const files = findFiles('./app');
let fixedCount = 0;

for (const file of files) {
  if (processFile(file)) {
    fixedCount++;
  }
}

console.log(`Fixed ${fixedCount} files.`);