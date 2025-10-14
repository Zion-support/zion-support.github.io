import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Create a basic page component template
const pageTemplate = `import React from 'react';
import { Helmet } from 'react-helmet-async';

const Page = (): React.JSX.Element => {
  return (
    <>
      <Helmet>
        <title>Page Title - Zion Tech Group</title>
        <meta name="description" content="Page description" />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white mb-8">Coming Soon</h1>
            <p className="text-xl text-gray-300 mb-8">
              This page is under development
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
`;

// Function to check if a file is empty with unused imports
function isEmptyWithUnusedImports(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const lines = content.split('\n');
    
    // Check if file is very short (less than 10 lines)
    if (lines.length >= 10) return false;
    
    // Check if it has React and Helmet imports
    const hasReactImport = content.includes('import React');
    const hasHelmetImport = content.includes('import') && content.includes('Helmet');
    
    // Check if it has actual component definition
    const hasComponent = content.includes('const ') || content.includes('function ') || content.includes('export default');
    
    return hasReactImport && hasHelmetImport && !hasComponent;
  } catch (error) {
    return false;
  }
}

// Find all empty page files
const appDir = path.join(__dirname, 'app');
const emptyFiles = [];

function findEmptyFiles(dir) {
  const files = fs.readdirSync(dir);
  
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      findEmptyFiles(filePath);
    } else if (file.endsWith('.tsx') && isEmptyWithUnusedImports(filePath)) {
      emptyFiles.push(filePath);
    }
  }
}

findEmptyFiles(appDir);

// Fix each empty file
emptyFiles.forEach(filePath => {
  fs.writeFileSync(filePath, pageTemplate);
  console.log(`Fixed: ${path.relative(__dirname, filePath)}`);
});

console.log(`Fixed ${emptyFiles.length} empty page files!`);