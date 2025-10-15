import fs from 'fs';
import path from 'path';
import { glob } from 'glob';

// Simple template for all pages
const simplePageTemplate = (title, description) => `import React from 'react';
import { Helmet } from 'react-helmet-async';
import SEOHead from '../components/SEOHead';

const Page: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>${title} - Zion Tech Group</title>
        <meta name="description" content="${description}" />
      </Helmet>
      <SEOHead
        title="${title} - Zion Tech Group"
        description="${description}"
      />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">${title}</h1>
          <p className="text-gray-300">Professional ${title.toLowerCase()} services coming soon...</p>
        </div>
      </div>
    </>
  );
};

export default Page;
`;

// Get all .tsx files in the ai-services subdirectories
const files = await glob('app/ai-services/*/page.tsx', { cwd: process.cwd() });

let fixedCount = 0;

for (const file of files) {
  try {
    // Generate title and description from file path
    const pathParts = file.split('/');
    const serviceName = pathParts[pathParts.length - 2]; // Get the service directory name
    const title = serviceName.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
    const description = `Professional ${title.toLowerCase()} services by Zion Tech Group.`;
    
    // Replace with simple template
    fs.writeFileSync(file, simplePageTemplate(title, description));
    console.log(`Fixed: ${file}`);
    fixedCount++;
  } catch (error) {
    console.error(`Error processing ${file}:`, error.message);
  }
}

console.log(`Fixed ${fixedCount} AI services pages!`);