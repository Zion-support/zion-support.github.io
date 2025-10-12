const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Find all page.tsx files that have the pattern "  return (" without a function declaration
const files = glob.sync('app/**/page.tsx');

files.forEach(file => {
  const content = fs.readFileSync(file, 'utf8');
  
  // Check if the file has the problematic pattern
  if (content.includes('  return (') && !content.includes('const ') && !content.includes('function ')) {
    console.log(`Fixing ${file}...`);
    
    // Extract the component name from the file path
    const pathParts = file.split('/');
    const componentName = pathParts[pathParts.length - 2] || 'Page';
    const capitalizedName = componentName.charAt(0).toUpperCase() + componentName.slice(1) + 'Page';
    
    // Fix the function declaration
    let fixedContent = content.replace(
      /import React from 'react'[\s\S]*?import { ArrowRight } from 'lucide-react'\n\n  return \(/,
      `import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

const ${capitalizedName}: React.FC = () => {
  return (`
    );
    
    // Add export if missing
    if (!fixedContent.includes('export default')) {
      fixedContent = fixedContent.replace(
        /    \);\n  \}/,
        `    );
  };

export default ${capitalizedName};`
      );
    }
    
    fs.writeFileSync(file, fixedContent);
    console.log(`Fixed ${file}`);
  }
});

console.log('Done fixing pages!');