const fs = require('fs');
const path = require('path');
const { glob } = require('glob');

// Function to fix common JSX errors
function fixJsxErrors(content) {
  // Fix duplicate closing Helmet tags
  content = content.replace(/<\/Helmet>\s*<\/Helmet>/g, '</Helmet>');
  
  // Fix unterminated string literals in imports (remove extra quotes and semicolons)
  content = content.replace(/import\s+([^;]+);""/g, 'import $1;');
  content = content.replace(/import\s+([^;]+);"/g, 'import $1;');
  
  // Fix malformed JSX with unclosed fragments
  content = content.replace(/<([A-Z][a-zA-Z]*?)><\/\1>\s*<([^>]+)>\s*<\/\2>/g, '<$1><$2></$2></$1>');
  
  // Fix jest spy syntax
  content = content.replace(/jest;\s*\.spyOn/g, 'jest.spyOn');
  content = content.replace(/\.spyOn\([^)]+\)''/g, (match) => match.replace(/''$/, ''));
  
  // Fix string literals with extra quotes
  content = content.replace(/'([^']+)';'/g, "'$1';");
  content = content.replace(/"([^"]+)";"/g, '"$1";');
  
  // Fix JSX expressions with extra quotes
  content = content.replace(/expect\([^)]+\)\.toBeInTheDocument\(\);'/g, (match) => match.replace(/';$/, ';'));
  
  // Fix malformed JSX closing tags
  content = content.replace(/<\/\s*([A-Z][a-zA-Z]*?)\s*\/>/g, '</$1>');
  
  // Fix JSX fragments that are not properly closed
  content = content.replace(/<>\s*<([A-Z][a-zA-Z]*?)><\/\1>\s*<([^>]+)>\s*<\/\2>\s*<\/>/g, '<><$1><$2></$2></$1></>');
  
  return content;
}

// Function to process a single file
function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const fixedContent = fixJsxErrors(content);
    
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

// Main function to fix all files
async function fixAllFiles() {
  const patterns = [
    'app/**/*.tsx',
    'app/**/*.ts',
    '__tests__/**/*.tsx',
    '__tests__/**/*.ts',
    '*.tsx',
    '*.ts'
  ];
  
  let totalFixed = 0;
  
  for (const pattern of patterns) {
    const files = await glob(pattern, { cwd: process.cwd() });
    for (const file of files) {
      if (processFile(file)) {
        totalFixed++;
      }
    }
  }
  
  console.log(`\nTotal files fixed: ${totalFixed}`);
}

// Run the fix
fixAllFiles().catch(console.error);