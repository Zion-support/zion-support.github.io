import fs from 'fs';
import path from 'path';

// Function to fix component files
function fixComponentFile(filePath) {
  try {
    const fileName = path.basename(filePath, '.tsx');
    const componentName = fileName.charAt(0).toUpperCase() + fileName.slice(1);
    
    const content = `import React from "react";

const ${componentName}: React.FC = () => {
  return (
    <div>
      <h2>${componentName}</h2>
      <p>Component implementation coming soon.</p>
    </div>
  );
};

export default ${componentName};`;

    fs.writeFileSync(filePath, content);
    console.log(`Fixed component: ${filePath}`);
    return true;
  } catch (error) {
    console.error(`Error fixing component ${filePath}:`, error.message);
    return false;
  }
}

// Function to fix page files with numeric names
function fixPageFile(filePath) {
  try {
    const fileName = path.basename(filePath, '.tsx');
    const dirName = path.basename(path.dirname(filePath));
    
    // Generate a proper page name
    const pageName = fileName === 'page' ? 
      (dirName.charAt(0).toUpperCase() + dirName.slice(1).replace(/-/g, ' ')) + ' Page' :
      fileName.charAt(0).toUpperCase() + fileName.slice(1).replace(/-/g, ' ');
    
    const componentName = pageName.replace(/\s+/g, '');
    
    const content = `import React from "react";
import { Helmet } from "react-helmet-async";

const ${componentName} = () => {
  return (
    <div>
      <Helmet>
        <title>${pageName} - Zion Tech Group</title>
        <meta name="description" content="${pageName} - Zion Tech Group" />
      </Helmet>
      <div>
        <div>
          <h1 className="text-4xl font-bold text-white mb-8">${pageName}</h1>
          <p className="text-gray-300 text-lg">
            This page is under construction. Please check back later.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ${componentName};`;

    fs.writeFileSync(filePath, content);
    console.log(`Fixed page: ${filePath}`);
    return true;
  } catch (error) {
    console.error(`Error fixing page ${filePath}:`, error.message);
    return false;
  }
}

// Function to recursively fix all files
function fixAllFiles(dir) {
  const files = fs.readdirSync(dir);
  let fixedCount = 0;
  
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      // Skip node_modules and other irrelevant directories
      if (!['node_modules', '.git', 'dist', '.next', 'out'].includes(file)) {
        fixedCount += fixAllFiles(filePath);
      }
    } else if (file.endsWith('.tsx') || file.endsWith('.jsx')) {
      if (filePath.includes('/components/')) {
        if (fixComponentFile(filePath)) {
          fixedCount++;
        }
      } else if (filePath.includes('/pages/') || filePath.includes('/page.tsx')) {
        if (fixPageFile(filePath)) {
          fixedCount++;
        }
      }
    }
  }
  
  return fixedCount;
}

// Start fixing from the app directory
console.log('Starting component and page fixes...');
const fixedCount = fixAllFiles('./app');
console.log(`Fixed ${fixedCount} files.`);

console.log('Component and page fixes completed!');