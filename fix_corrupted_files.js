const fs = require('fs');
const path = require('path');

// Function to fix corrupted import statements and string literals
function fixCorruptedFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
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
    
    // Write the fixed content back
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Fixed: ${filePath}`);
    return true;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

// Function to recursively find and fix all .tsx files
function fixAllCorruptedFiles(dir) {
  const files = fs.readdirSync(dir);
  let fixedCount = 0;
  
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory() && !file.startsWith('.') && file !== 'node_modules') {
      fixedCount += fixAllCorruptedFiles(filePath);
    } else if (file.endsWith('.tsx') && file.includes("''")) {
      if (fixCorruptedFile(filePath)) {
        fixedCount++;
      }
    }
  }
  
  return fixedCount;
}

// Start fixing from the current directory
console.log('Starting to fix corrupted files...');
const fixedCount = fixAllCorruptedFiles('.');
console.log(`Fixed ${fixedCount} files.`);