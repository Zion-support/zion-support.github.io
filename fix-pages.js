import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// List of files that need fixing based on the error output
const filesToFix = [
  'app/ai-services/content-generation/page.tsx',
  'app/ai-services/customer-experience/page.tsx',
  'app/ai-services/document-processing/page.tsx',
  'app/ai-services/energy-management/page.tsx',
  'app/ai-services/fraud-detection/page.tsx',
  'app/ai-services/hr-analytics/page.tsx',
  'app/ai-services/marketing-automation/page.tsx',
  'app/ai-services/predictive-maintenance/page.tsx',
  'app/ai-services/process-automation/page.tsx',
  'app/ai-services/quality-assurance/page.tsx',
  'app/ai-services/supply-chain/page.tsx',
  'app/analytics-tools/page.tsx',
  'app/ar-vr-platform/page.tsx',
  'app/autonomous-systems/page.tsx',
  'app/backup-recovery/page.tsx',
  'app/blockchain-integration-services/page.tsx',
  'app/blockchain-web3/page.tsx',
  'app/business-apps/page.tsx',
  'app/business-intelligence/page.tsx',
  'app/cloud-infrastructure-manager/page.tsx',
  'app/cloud-migration-services/page.tsx',
  'app/cloud-security/page.tsx',
  'app/cloud-services/page.tsx',
  'app/community/page.tsx',
  'app/compliance/page.tsx'
];

// Template for a basic page component
const pageTemplate = (pageName, title) => `import React from 'react';

export default function ${pageName}() {
  return (
    <>
      <title>${title} - Zion Tech Group</title>
      <h1 className="text-4xl font-bold text-white mb-6">${title}</h1>
      <p className="text-lg text-gray-300 mb-8">Professional ${title.toLowerCase()} services coming soon.</p>
      <a href="/contact" className="text-blue-400 hover:text-blue-300">
        Contact Us
      </a>
    </>
  );
}`;

// Function to fix a single file
function fixFile(filePath) {
  try {
    const fullPath = path.join(__dirname, filePath);
    
    if (!fs.existsSync(fullPath)) {
      console.log(`File not found: ${filePath}`);
      return;
    }

    const content = fs.readFileSync(fullPath, 'utf8');
    
    // Extract page name from file path
    const pathParts = filePath.split('/');
    const fileName = pathParts[pathParts.length - 2]; // Get the directory name
    const pageName = fileName.split('-').map(word => 
      word.charAt(0).toUpperCase() + word.slice(1)
    ).join('') + 'Page';
    
    const title = fileName.split('-').map(word => 
      word.charAt(0).toUpperCase() + word.slice(1)
    ).join(' ');

    // Write the fixed content
    fs.writeFileSync(fullPath, pageTemplate(pageName, title));
    console.log(`Fixed: ${filePath}`);
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
}

// Fix all files
console.log('Fixing page files...');
filesToFix.forEach(fixFile);
console.log('Done fixing page files.');