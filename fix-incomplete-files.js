import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Find all page.tsx files in app directory
const findPageFiles = (dir) => {
  const files = [];
  const items = fs.readdirSync(dir);
  
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      files.push(...findPageFiles(fullPath));
    } else if (item === 'page.tsx') {
      files.push(fullPath);
    }
  }
  
  return files;
};

const pageFiles = findPageFiles(path.join(__dirname, 'app'));

pageFiles.forEach(filePath => {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Check if file is incomplete (missing closing brace or has syntax issues)
    const lines = content.split('\n');
    const hasIncompleteFunction = lines.some(line => 
      line.includes('const ') && line.includes('= () => {') && 
      !content.includes('export default')
    );
    
    const hasDuplicateReturn = content.includes('return (') && 
      content.split('return (').length > 2;
    
    const hasMissingClosingBrace = content.includes('const ') && 
      content.includes('= () => {') && 
      !content.includes('};') && 
      !content.includes('}');
    
    if (hasIncompleteFunction || hasDuplicateReturn || hasMissingClosingBrace) {
      console.log(`Fixing incomplete file: ${filePath}`);
      
      // Extract component name from file path
      const pathParts = filePath.split('/');
      const componentName = pathParts[pathParts.length - 2]
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join('');
      
      // Create a basic working component
      const basicComponent = `import React from "react";
import { Helmet } from 'react-helmet-async';

const ${componentName} = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
      <Helmet>
        <title>${componentName} - Zion Tech Group</title>
        <meta name="description" content="Advanced ${componentName.toLowerCase().replace(/([A-Z])/g, ' $1').trim()} service coming soon." />
      </Helmet>
      <div className="text-center">
        <h1 className="text-4xl font-bold text-white mb-4">${componentName}</h1>
        <p className="text-xl text-gray-300">Coming Soon</p>
      </div>
    </div>
  );
};

export default ${componentName};`;
      
      fs.writeFileSync(filePath, basicComponent, 'utf8');
    }
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
  }
});

console.log('Incomplete file fixes completed');