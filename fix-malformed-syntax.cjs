const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Function to fix malformed syntax
function fixMalformedSyntax(content) {
  // Fix malformed component names like "constNotfoundpage" to "const NotFoundPage"
  content = content.replace(/const([A-Z][a-z]+):\s*React\.fc/g, (match, componentName) => {
    const validName = componentName.charAt(0).toUpperCase() + componentName.slice(1) + 'Page';
    return `const ${validName}: React.FC`;
  });
  
  // Fix malformed React.fc to React.FC
  content = content.replace(/React\.fc/g, 'React.FC');
  
  // Fix malformed JSX attributes like "metaName =" to "meta name="
  content = content.replace(/metaName\s*=\s*/g, 'meta name=');
  
  // Fix malformed className like "divClassname =" to "div className="
  content = content.replace(/divClassname\s*=\s*/g, 'div className=');
  
  // Fix other common malformed patterns
  content = content.replace(/className\s*=\s*"/g, 'className="');
  content = content.replace(/content\s*=\s*"/g, 'content="');
  content = content.replace(/name\s*=\s*"/g, 'name="');
  
  // Fix missing spaces in JSX
  content = content.replace(/(\w+)([A-Z][a-z]+)\s*=\s*/g, '$1 $2=');
  
  return content;
}

// Function to process a single file
function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const fixedContent = fixMalformedSyntax(content);
    
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
console.log('Starting malformed syntax fixes...');

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
console.log('Malformed syntax fixes completed!');