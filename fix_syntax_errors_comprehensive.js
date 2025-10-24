const fs = require('fs');
const path = require('path');

// Function to fix syntax errors
function fixSyntaxErrors(content) {
  let fixedContent = content;
  
  // Fix missing closing brackets for arrays
  fixedContent = fixedContent.replace(
    /(\s+);\s*return\s*\(\s*<(\w+)/g,
    '$1\n  ];\n\n  return (\n    <$2'
  );
  
  // Fix malformed function declarations
  fixedContent = fixedContent.replace(
    /constResponsiveContainer=/g,
    'const ResponsiveContainer ='
  );
  
  fixedContent = fixedContent.replace(
    /class Nam e,/g,
    'className,'
  );
  
  fixedContent = fixedContent.replace(
    /maxWidth= '7 xl'/g,
    "maxWidth = '7xl'"
  );
  
  fixedContent = fixedContent.replace(
    /constmaxWidthClasses=/g,
    'const maxWidthClasses ='
  );
  
  // Fix malformed JSX in arrays
  fixedContent = fixedContent.replace(
    /(\s+);\s*<\/div>\s*<\/div>\s*<\/section>\s*<\/div>/g,
    '$1\n  ];'
  );
  
  // Fix missing closing brackets
  fixedContent = fixedContent.replace(
    /(\s+);\s*<\/div>\s*<\/div>\s*<\/section>\s*<\/div>\s*<\/div>\s*<\/div>/g,
    '$1\n  ];'
  );
  
  return fixedContent;
}

// Function to process a single file
function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const fixedContent = fixSyntaxErrors(content);
    
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

// Function to recursively find and process files
function processDirectory(dirPath) {
  let filesProcessed = 0;
  
  function walkDir(currentPath) {
    const items = fs.readdirSync(currentPath);
    
    for (const item of items) {
      const fullPath = path.join(currentPath, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        if (!['node_modules', '.git', '.next', 'dist', 'build'].includes(item)) {
          walkDir(fullPath);
        }
      } else if (item.endsWith('.tsx') || item.endsWith('.jsx')) {
        if (processFile(fullPath)) {
          filesProcessed++;
        }
      }
    }
  }
  
  walkDir(dirPath);
  return filesProcessed;
}

// Main execution
console.log('Starting to fix syntax errors comprehensively...');
const filesProcessed = processDirectory('/workspace');
console.log(`Processed ${filesProcessed} files.`);