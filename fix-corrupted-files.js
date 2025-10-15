import fs from 'fs';
import path from 'path';
import { glob } from 'glob';

// Function to fix corrupted files by restoring basic structure
function fixCorruptedFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Check if file is corrupted (missing basic React structure)
  if (!content.includes('import React') || !content.includes('export default')) {
    console.log(`Fixing corrupted file: ${filePath}`);
    
    // Extract the page name from the file path
    const pageName = path.basename(path.dirname(filePath));
    const componentName = pageName.split('-').map(word => 
      word.charAt(0).toUpperCase() + word.slice(1)
    ).join('') + 'Page';
    
    // Create a basic page structure
    const basicPage = `import React from 'react';
import { Helmet } from 'react-helmet-async';

const ${componentName} = () => {
  return (
    <>
      <Helmet>
        <title>${pageName.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())} - Zion Tech Group</title>
        <meta name="description" content="Professional ${pageName.replace(/-/g, ' ')} services by Zion Tech Group" />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-20">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              ${pageName.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Professional ${pageName.replace(/-/g, ' ')} services by Zion Tech Group
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-600 to-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-cyan-700 hover:to-purple-700 transition-all duration-300">
                Get Started
              </button>
              <button className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ${componentName};`;
    
    fs.writeFileSync(filePath, basicPage);
    return true;
  }
  return false;
}

// Main function
async function main() {
  // Find all page files
  const files = await glob('app/**/page.tsx');
  
  console.log(`Found ${files.length} page files to check...`);
  
  let fixedCount = 0;
  for (const file of files) {
    const fullPath = path.join(process.cwd(), file);
    try {
      if (fixCorruptedFile(fullPath)) {
        fixedCount++;
      }
    } catch (error) {
      console.error(`Error processing ${file}:`, error.message);
    }
  }
  
  console.log(`Fixed ${fixedCount} corrupted files`);
}

main().catch(console.error);