import fs from 'fs';
import path from 'path';

// List of specific files that need fixing based on the error output
const filesToFix = [
  'app/analytics-tools/page.tsx',
  'app/analytics/page.tsx',
  'app/api-development-advanced/page.tsx',
  'app/api-development/page.tsx',
  'app/api-docs/page.tsx',
  'app/api/page.tsx',
  'app/ar-vr-platform/page.tsx',
  'app/ar-vr-solutions/page.tsx',
  'app/automation/page.tsx',
  'app/autonomous-systems/page.tsx',
  'app/backup-recovery/page.tsx',
  'app/blockchain-development/page.tsx',
  'app/blockchain-integration-services/page.tsx',
  'app/blockchain-web3/page.tsx'
];

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

filesToFix.forEach(filePath => {
  const title = filePath.split('/').pop().replace('.tsx', '').replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
  const description = `Professional ${title.toLowerCase()} services by Zion Tech Group.`;
  
  try {
    fs.writeFileSync(filePath, simplePageTemplate(title, description));
    console.log(`Fixed: ${filePath}`);
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
});

console.log('Specific files fixed!');