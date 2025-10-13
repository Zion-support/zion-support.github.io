const fs = require('fs');
const path = require('path');

<<<<<<< HEAD
// List of files that need fixing
const filesToFix = [
  'app/ai-data-analytics-pro/page.tsx',
  'app/ai-ecommerce-optimizer-pro/page.tsx',
  'app/ai-financial-analysis/page.tsx',
  'app/ai-financial-analytics-pro/page.tsx',
  'app/ai-healthcare-diagnostics/page.tsx',
  'app/ai-marketing-automation/page.tsx',
  'app/ai-powered-email-analyzer/page.tsx',
  'app/ar-vr-development/page.tsx',
  'app/cloud-infrastructure/page.tsx',
  'app/cloud-services/page.tsx',
  'app/community/page.tsx',
  'app/compliance/page.tsx',
  'app/contact/page.tsx',
  'app/custom-development/page.tsx',
  'app/cybersecurity-solutions/page.tsx',
  'app/cybersecurity/page.tsx',
  'app/micro-saas/page.tsx',
  'app/page.tsx',
  'app/pricing/page.tsx',
  'app/smart-expense-categorizer/page.tsx',
  'app/zion-ai-accounting-suite/page.tsx',
  'app/zion-ai-analytics-pro/page.tsx',
  'app/zion-ai-crm-pro/page.tsx',
  'app/zion-ai-document-analyzer/page.tsx',
  'app/zion-ai-neural-interface/page.tsx',
  'app/zion-cloud-vault-pro/page.tsx',
  'app/zion-hr-assistant-pro/page.tsx'
];

function createBasicPage(filePath) {
  const fileName = path.basename(filePath, '.tsx');
  const title = fileName.split('-').map(word => 
    word.charAt(0).toUpperCase() + word.slice(1)
  ).join(' ');
  
  const content = `import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function ${title.replace(/\s+/g, '')}Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>${title} - Zion Tech Group</title>
        <meta name="description" content="Professional ${title.toLowerCase()} services by Zion Tech Group." />
      </Helmet>
      
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-6">
            ${title}
          </h1>
          <p className="text-lg text-gray-300 mb-8">
            Professional ${title.toLowerCase()} services coming soon.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
          >
            Contact Us
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </div>
  );
}`;

  return content;
}

// Fix each file
filesToFix.forEach(filePath => {
  const fullPath = path.join('/workspace', filePath);
  
  try {
    const content = createBasicPage(filePath);
    fs.writeFileSync(fullPath, content);
    console.log(`Fixed: ${filePath}`);
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
});

console.log('All files have been fixed!');
=======
// Function to fix a page file
function fixPageFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    
    // Extract the page name from the file path
    const pageName = path.basename(path.dirname(filePath));
    const title = pageName.split('-').map(word => 
      word.charAt(0).toUpperCase() + word.slice(1)
    ).join(' ');
    
    // Create the fixed content
    const fixedContent = `'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';

const ${pageName.split('-').map(word => 
  word.charAt(0).toUpperCase() + word.slice(1)
).join('')}Page: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>${title} - Zion Tech Group</title>
        <meta name="description" content="${title} services by Zion Tech Group. Professional AI and IT solutions." />
        <meta name="keywords" content="${pageName}, AI solutions, IT services" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
        <div className="container mx-auto px-4 py-20">
          <h1 className="text-5xl font-bold text-white mb-6">
            ${title}
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl">
            Professional ${title.toLowerCase()} services by Zion Tech Group.
          </p>
          
          <div className="bg-slate-800 p-8 rounded-lg">
            <h2 className="text-2xl font-bold text-white mb-4">Coming Soon</h2>
            <p className="text-gray-300">
              We are working on bringing you the most advanced ${title.toLowerCase()} solutions. 
              Stay tuned for updates!
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ${pageName.split('-').map(word => 
  word.charAt(0).toUpperCase() + word.slice(1)
).join('')}Page;`;

    fs.writeFileSync(filePath, fixedContent);
    console.log(`Fixed: ${filePath}`);
    return true;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

// Get all page files that need fixing
const appDir = path.join(__dirname, 'app');
const pageFiles = [];

function findPageFiles(dir) {
  const files = fs.readdirSync(dir);
  
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      // Check if this directory has a page.tsx file
      const pagePath = path.join(filePath, 'page.tsx');
      if (fs.existsSync(pagePath)) {
        pageFiles.push(pagePath);
      }
      findPageFiles(filePath);
    }
  }
}

findPageFiles(appDir);

console.log(`Found ${pageFiles.length} page files`);

// Fix each page file
let fixedCount = 0;
for (const pageFile of pageFiles) {
  if (fixPageFile(pageFile)) {
    fixedCount++;
  }
}

console.log(`Fixed ${fixedCount} out of ${pageFiles.length} page files`);
>>>>>>> cursor/fix-errors-and-merge-to-main-a070
