const fs = require('fs');
const path = require('path');

// Function to fix corrupted files
function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let originalContent = content;
    
    // Fix double quotes in import statements
    content = content.replace(/from '([^']+)''/g, "from '$1'");
    content = content.replace(/import '([^']+)''/g, "import '$1'");
    
    // Fix double quotes in string literals
    content = content.replace(/'([^']+)''/g, "'$1'");
    content = content.replace(/"([^"]+)""/g, '"$1"');
    
    // Fix malformed object properties
    content = content.replace(/"([^"]+)": '([^']+)''/g, '"$1": "$2"');
    content = content.replace(/'([^']+)': "([^"]+)""/g, "'$1': '$2'");
    
    // Fix array syntax issues
    content = content.replace(/\[([^\]]+)\]''/g, '[$1]');
    
    // Fix function parameter syntax
    content = content.replace(/= '([^']+)''/g, "= '$1'");
    
    // Fix semicolon issues
    content = content.replace(/;''/g, ';');
    content = content.replace(/'';/g, ';');
    
    // Fix malformed React component declarations
    content = content.replace(/const "([^"]+)": React\.FC/g, 'const $1: React.FC');
    
    // Fix malformed JSX attributes
    content = content.replace(/className = '([^']+)''/g, "className='$1'");
    
    // Only write if content changed
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed: ${filePath}`);
      return true;
    }
    return false;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

// Get list of files to fix
const filesToFix = [
  './app/components/SEOOptimizer.tsx',
  './app/pricing/page.tsx',
  './components/SEO/StructuredData.tsx',
  './components/SEO/MetaTags.tsx',
  './components/SEO/DefaultSEO.tsx',
  './components/DefaultSEO.tsx',
  './components/OptimizedImage.tsx'
];

console.log('Starting to fix corrupted files...');
let fixedCount = 0;

for (const file of filesToFix) {
  if (fs.existsSync(file)) {
    if (fixFile(file)) {
      fixedCount++;
    }
  }
}

console.log(`Fixed ${fixedCount} files.`);