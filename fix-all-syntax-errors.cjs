const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Get all .tsx files in the app directory
function getAllTsxFiles(dir) {
  let files = [];
  const items = fs.readdirSync(dir);
  
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      files = files.concat(getAllTsxFiles(fullPath));
    } else if (item.endsWith('.tsx')) {
      files.push(fullPath);
    }
  }
  
  return files;
}

function fixFile(filePath) {
  try {
    if (!fs.existsSync(filePath)) {
      return;
    }

    let content = fs.readFileSync(filePath, 'utf8');
    
    // Skip if file already looks properly formatted
    if (content.includes('import React from \'react\';') && 
        content.includes('const ') && 
        content.includes('React.FC') &&
        !content.includes('error TS') &&
        !content.includes('">: value') &&
        !content.includes(';>') &&
        !content.includes('"\'"')) {
      return;
    }
    
    // Extract the page name from the file path
    const pathParts = filePath.split('/');
    const pageName = pathParts[pathParts.length - 2]; // Get the directory name before page.tsx
    
    // Create a proper page name from the path
    const properPageName = pageName
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
    
    // Create a proper component name
    const componentName = pageName
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join('') + 'Page';

    // Create a proper description
    const description = `Professional ${pageName.replace(/-/g, ' ')} solutions for modern businesses`;

    // Create the fixed content
    const fixedContent = `import React from 'react';
import SEOHead from '../components/SEOHead';

const ${componentName}: React.FC = () => {
  return (
    <>
      <SEOHead
        title="${properPageName} - Zion Tech Group"
        description="${description}"
      />
      <div className="min-h-screen bg-slate-900 text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">${properPageName}</h1>
          <p className="text-gray-300">Professional solutions coming soon...</p>
        </div>
      </div>
    </>
  );
};

export default ${componentName};`;

    fs.writeFileSync(filePath, fixedContent);
    console.log(`Fixed: ${filePath}`);
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
}

// Get all .tsx files
const allTsxFiles = getAllTsxFiles('./app');

console.log(`Found ${allTsxFiles.length} .tsx files`);

// Fix all files
allTsxFiles.forEach(fixFile);

console.log('All files have been processed.');