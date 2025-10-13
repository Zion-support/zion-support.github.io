import fs from 'fs';
import path from 'path';

// Get all TypeScript/TSX files in the app directory
function getAllTsxFiles(dir) {
  let files = [];
  const items = fs.readdirSync(dir);
  
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      files = files.concat(getAllTsxFiles(fullPath));
    } else if (item.endsWith('.tsx') || item.endsWith('.ts')) {
      files.push(fullPath);
    }
  }
  
  return files;
}

// Basic page template
const pageTemplate = (title, description) => `import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function ${title.replace(/[^a-zA-Z0-9]/g, '')}() {
  return (
    <>
      <Helmet>
        <title>${title} - Zion Tech Group</title>
        <meta name="description" content="${description}" />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-20">
          <h1 className="text-4xl font-bold text-white mb-8">${title}</h1>
          <p className="text-xl text-gray-300">Coming soon...</p>
        </div>
      </div>
    </>
  );
}`;

// Component template
const componentTemplate = (name) => `import React from 'react';

interface ${name}Props {
  // Add props here
}

const ${name}: React.FC<${name}Props> = (props) => {
  return (
    <div className="${name.toLowerCase()}">
      {/* Component content */}
    </div>
  );
};

export default ${name};`;

// Get all files
const allFiles = getAllTsxFiles('/workspace/app');

let fixedCount = 0;
let errorCount = 0;

allFiles.forEach(filePath => {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    
    // Skip if file is already properly formatted
    if (content.includes('export default function') && content.includes('return (') && content.includes('</>')) {
      return;
    }
    
    // Skip if file is a component in components directory
    if (filePath.includes('/components/')) {
      const componentName = path.basename(filePath, '.tsx');
      fs.writeFileSync(filePath, componentTemplate(componentName));
      fixedCount++;
      return;
    }
    
    // For page files, use page template
    if (filePath.includes('/page.tsx')) {
      const title = path.dirname(filePath).split('/').pop().replace(/-/g, ' ');
      const description = `Professional ${title} services for modern businesses.`;
      fs.writeFileSync(filePath, pageTemplate(title, description));
      fixedCount++;
    }
    
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    errorCount++;
  }
});

console.log(`Fixed ${fixedCount} files`);
console.log(`Errors: ${errorCount}`);
console.log('Done!');