const fs = require('fs');
const path = require('path');

// Function to fix common syntax errors
function fixSyntaxErrors(content) {
  // Fix unterminated string literals in import statements
  content = content.replace(/from 'lucide-react;$/gm, "from 'lucide-react';");
  content = content.replace(/from 'lucide-react';$/gm, "from 'lucide-react';");
  
  // Fix extra quotes and semicolons in object properties
  content = content.replace(/'([^']+)',;/g, "'$1',");
  content = content.replace(/'([^']+)',/g, "'$1',");
  content = content.replace(/'([^']+)';/g, "'$1',");
  
  // Fix missing quotes in import statements
  content = content.replace(/from '([^']+);$/gm, "from '$1';");
  
  // Fix missing return statements
  content = content.replace(/if \(process\.env\.NODE_ENV === 'production'\) \{\s*<([^>]+)>/gm, 
    "if (process.env.NODE_ENV === 'production') {\n    return <$1>");
  
  // Fix broken JSX structure
  content = content.replace(/\}\s*import React/g, "}\n\nimport React");
  
  // Fix duplicate function declarations
  content = content.replace(/const (\w+): React\.FC = \(\) => \{\s*return null;\s*\}\s*export default \1;/gm, 
    "const $1: React.FC = () => {\n  return null;\n};\n\nexport default $1;");
  
  return content;
}

// Function to process a file
function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const fixedContent = fixSyntaxErrors(content);
    
    if (content !== fixedContent) {
      fs.writeFileSync(filePath, fixedContent, 'utf8');
      console.log(`Fixed: ${filePath}`);
    }
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
  }
}

// Function to recursively find and process TSX files
function processDirectory(dirPath) {
  const items = fs.readdirSync(dirPath);
  
  for (const item of items) {
    const fullPath = path.join(dirPath, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      processDirectory(fullPath);
    } else if (item.endsWith('.tsx')) {
      processFile(fullPath);
    }
  }
}

// Start processing from the app directory
console.log('Starting syntax error fixes...');
processDirectory('./app');
console.log('Syntax error fixes completed!');