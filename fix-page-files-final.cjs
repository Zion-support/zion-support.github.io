const fs = require('fs');
const path = require('path');
const { glob } = require('glob');

async function fixPageFilesFinal() {
  try {
    // Find all page files that might have issues
    const pageFiles = await glob('app/pages/*.tsx', { cwd: __dirname });
    
    console.log(`Found ${pageFiles.length} page files to check`);

    for (const filePath of pageFiles) {
      try {
        const fullPath = path.join(__dirname, filePath);
        let content = fs.readFileSync(fullPath, 'utf8');
        
        // Skip if already properly formatted
        if (content.includes('export default function') && 
            content.includes('return (') && 
            content.includes('<div className="min-h-screen')) {
          console.log(`Skipping ${filePath} - already properly formatted`);
          continue;
        }
        
        // Extract the page name from the file path
        const pathParts = filePath.split('/');
        const fileName = pathParts[pathParts.length - 1].replace('.tsx', '');
        const pageName = fileName.replace('Page', '');
        
        // Convert PascalCase to Title Case
        const titleCase = pageName
          .replace(/([A-Z])/g, ' $1')
          .trim()
          .replace(/^./, str => str.toUpperCase());
        
        // Create the proper JSX structure
        const newContent = `import React from "react";

export default function ${pageName}Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">${titleCase}</h1>
          <p className="text-gray-300 text-xl mb-8">Learn more about ${pageName.toLowerCase().replace(/([A-Z])/g, ' $1').trim()}</p>
        </div>
      </div>
    </div>
  );
}
`;
        
        fs.writeFileSync(fullPath, newContent);
        console.log(`Fixed ${filePath}`);
      } catch (error) {
        console.error(`Error fixing ${filePath}:`, error.message);
      }
    }

    console.log('Page files final fix completed');
  } catch (error) {
    console.error('Error:', error.message);
  }
}

fixPageFilesFinal();