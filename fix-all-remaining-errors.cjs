const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Function to fix all remaining syntax errors
function fixAllErrors(content) {
  // Fix import statements
  content = content.replace(/import\s+([^;]+);""/g, 'import $1;');
  content = content.replace(/import\s+([^;]+)";/g, 'import $1;');
  content = content.replace(/import\s+([^;]+);\s*$/gm, 'import $1;');
  
  // Fix string literals
  content = content.replace(/'([^']+)''/g, "'$1'");
  content = content.replace(/"([^"]+)""/g, '"$1"');
  content = content.replace(/'([^']+)$/gm, "'$1'");
  content = content.replace(/"([^"]+)$/gm, '"$1"');
  
  // Fix object syntax
  content = content.replace(/\{([^}]+)\},''/g, '{$1},');
  content = content.replace(/\{([^}]+)\}''/g, '{$1}');
  content = content.replace(/\{([^}]+)\},/g, '{$1},');
  
  // Fix JSX syntax
  content = content.replace(/<>(\s*<div[^>]*><\/div>)/g, '<>');
  content = content.replace(/<>(\s*<section[^>]*>)/g, '<>\n    $1');
  content = content.replace(/<>(\s*<div[^>]*>)/g, '<>\n    $1');
  
  // Fix closing tags
  content = content.replace(/<\/section>\s*<\/>/g, '</section>\n    </>');
  content = content.replace(/<\/div>\s*<\/>/g, '</div>\n    </>');
  content = content.replace(/<\/>\s*<\/>/g, '</>');
  
  // Fix semicolons
  content = content.replace(/;\s*$/gm, '');
  content = content.replace(/;""/g, ';');
  content = content.replace(/;"/g, ';');
  content = content.replace(/;''/g, ';');
  content = content.replace(/;'/g, ';');
  
  // Fix function syntax
  content = content.replace(/const\s+(\w+):\s*React\.FC\s*=\s*\(\)\s*=>\s*\{/g, 'const $1: React.FC = () => {');
  content = content.replace(/const\s+(\w+)\s*=\s*\(\)\s*=>\s*\{/g, 'const $1 = () => {');
  
  // Fix closing syntax
  content = content.replace(/\s*\)\};/g, '\n  );\n};');
  content = content.replace(/\s*\)\};/g, '\n  );\n};');
  
  // Remove extra quotes and semicolons
  content = content.replace(/""/g, '');
  content = content.replace(/''/g, '');
  content = content.replace(/;$/gm, '');
  
  // Fix JSX structure issues
  content = content.replace(/<>\s*<div[^>]*><\/div>\s*<Helmet>/g, '<>\n      <Helmet>');
  content = content.replace(/<>\s*<section[^>]*><\/section>\s*<Helmet>/g, '<>\n      <Helmet>');
  
  // Fix malformed JSX
  content = content.replace(/<div[^>]*><\/div>\s*<Helmet>/g, '<Helmet>');
  content = content.replace(/<section[^>]*><\/section>\s*<Helmet>/g, '<Helmet>');
  
  return content;
}

// Find all TSX files
const tsxFiles = glob.sync('app/**/*.tsx');

console.log(`Found ${tsxFiles.length} TSX files to process`);

let fixedCount = 0;

tsxFiles.forEach(filePath => {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    
    // Check if file has syntax errors
    if (content.includes(';""') || content.includes('""') || content.includes('\'\'\'') || 
        (content.includes('import') && content.includes('""')) || 
        content.includes('},\'\'') || content.includes('\'\'\'') ||
        content.includes('unterminated') || content.includes('Unexpected token')) {
      
      console.log(`Fixing: ${filePath}`);
      
      // Fix the content
      const newContent = fixAllErrors(content);
      
      // Write the fixed content
      fs.writeFileSync(filePath, newContent, 'utf8');
      console.log(`Fixed: ${filePath}`);
      fixedCount++;
    }
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
  }
});

console.log(`Fixed ${fixedCount} files out of ${tsxFiles.length} total files`);
console.log('All remaining syntax error fixing completed!');