const fs = require('fs');
const path = require('path');

// List of files that likely have unused imports or incomplete content
const filesToFix = [
  'app/ai-powered-email-analyzer/page.tsx',
  'app/it-services/cybersecurity-audit/page.tsx',
  'app/legal-document-manager/page.tsx',
  'app/medical-records-manager/page.tsx',
  'app/online-learning-platform/page.tsx',
  'app/property-management-ai/page.tsx',
  'app/supply-chain-optimizer/page.tsx',
  'app/test/page.tsx',
  'app/zion-ai-api-tester/page.tsx',
  'app/zion-ai-database-optimizer/page.tsx'
];

function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Remove unused React import
    content = content.replace(/import React from 'react'\n\n/g, '');
    content = content.replace(/import React from 'react'\n/g, '');
    
    // Remove unused icon imports
    content = content.replace(/import { [^}]+ } from 'lucide-react'\n/g, '');
    
    // Remove empty lines at the end
    content = content.replace(/\n+$/, '\n');
    
    // If the file only has metadata and no component, add a basic component
    if (content.includes('export const metadata') && !content.includes('export default function')) {
      const componentName = path.basename(path.dirname(filePath)).split('-').map(word => 
        word.charAt(0).toUpperCase() + word.slice(1)
      ).join('');
      
      content += `\nexport default function ${componentName}Page() {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">
          ${componentName.replace(/([A-Z])/g, ' $1').trim()}
        </h1>
        <p className="text-xl text-gray-600">
          Professional services by Zion Tech Group.
        </p>
      </div>
    </div>
  );
}`;
    }
    
    fs.writeFileSync(filePath, content);
    console.log(`Fixed: ${filePath}`);
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
}

// Fix all files
filesToFix.forEach(fixFile);

console.log('All files processed!');
