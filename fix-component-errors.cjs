const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Function to fix common syntax errors in component files
function fixComponentErrors(content) {
  // Remove extra quotes and semicolons from import statements
  content = content.replace(/import\s+([^;]+);""/g, 'import $1;');
  content = content.replace(/import\s+([^;]+)";/g, 'import $1;');
  
  // Fix import statements with line breaks
  content = content.replace(/import\s+\{([^}]+);\s*\}\s*from\s*"([^"]+)";/g, (match, imports, module) => {
    const cleanImports = imports.replace(/;\s*$/, '').trim();
    return `import { ${cleanImports} } from "${module}";`;
  });
  
  // Fix object syntax in arrays
  content = content.replace(/\{([^}]+)\},''/g, '{$1},');
  content = content.replace(/\{([^}]+)\}''/g, '{$1}');
  
  // Fix string literals
  content = content.replace(/'([^']+)''/g, "'$1'");
  content = content.replace(/"([^"]+)""/g, '"$1"');
  
  // Fix JSX fragment syntax
  content = content.replace(/<>(\s*<div[^>]*><\/div>)/g, '<>');
  content = content.replace(/<>(\s*<section[^>]*>)/g, '<>\n    $1');
  
  // Fix JSX closing tags
  content = content.replace(/<\/section>\s*<\/>/g, '</section>\n    </>');
  content = content.replace(/<\/div>\s*<\/>/g, '</div>\n    </>');
  
  // Fix semicolons in wrong places
  content = content.replace(/;\s*$/gm, '');
  content = content.replace(/;\s*''/g, '');
  content = content.replace(/;\s*""/g, '');
  
  // Fix function syntax
  content = content.replace(/const\s+(\w+):\s*React\.FC\s*=\s*\(\)\s*=>\s*\{/g, 'const $1: React.FC = () => {');
  
  // Fix closing syntax
  content = content.replace(/\s*\)\};/g, '\n  );\n};');
  
  // Remove extra semicolons and quotes
  content = content.replace(/;""/g, ';');
  content = content.replace(/""/g, '');
  content = content.replace(/;"/g, ';');
  content = content.replace(/''/g, '');
  
  return content;
}

// Find all component files
const componentFiles = glob.sync('app/components/*.tsx');

console.log(`Found ${componentFiles.length} component files to process`);

componentFiles.forEach(filePath => {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    
    // Check if file has syntax errors
    if (content.includes(';""') || (content.includes('import') && content.includes('""')) || content.includes('},\'\'') || content.includes('\'\'\'')) {
      console.log(`Fixing: ${filePath}`);
      
      // Fix the content
      const newContent = fixComponentErrors(content);
      
      // Write the fixed content
      fs.writeFileSync(filePath, newContent, 'utf8');
      console.log(`Fixed: ${filePath}`);
    }
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
  }
});

console.log('Component syntax error fixing completed!');