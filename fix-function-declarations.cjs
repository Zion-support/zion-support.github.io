const fs = require('fs');
const path = require('path');

// List of files that might have missing function declarations
const filesToFix = [
  './app/micro-saas-solutions/page.tsx',
  './app/it-solutions/page.tsx',
  './app/demo/page.tsx',
  './app/contact/page.tsx',
  './app/blog/page.tsx',
  './app/ai-services/page.tsx',
  './app/ai-solutions/page.tsx',
  './app/ai-automation-platform/page.tsx',
  './app/5g-solutions/page.tsx',
  './app/services/page.tsx',
  './app/support/page.tsx'
];

function fixFunctionDeclaration(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Check if the file has the pattern of missing function declaration
    if (content.includes('const features = [') && !content.includes('const ') && content.includes('import React')) {
      // Extract the component name from the file path
      const componentName = path.basename(filePath, '.tsx').split('-').map(word => 
        word.charAt(0).toUpperCase() + word.slice(1)
      ).join('');
      
      // Add the function declaration
      content = content.replace(
        /import React from 'react';\nimport { Helmet } from 'react-helmet-async';\n\n  const features = \[/,
        `import React from 'react';\nimport { Helmet } from 'react-helmet-async';\n\nconst ${componentName}: React.FC = () => {\n  const features = [`
      );
      
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed function declaration in ${filePath}`);
    }
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
}

// Fix all files
filesToFix.forEach(fixFunctionDeclaration);

console.log('All function declarations fixed!');