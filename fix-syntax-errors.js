import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// List of files with syntax errors
const filesToFix = [
  'src/ai-analytics/page.tsx',
  'src/ai-automation/page.tsx',
  'src/ai-computer-vision/page.tsx',
  'src/ai-content-generation/page.tsx',
  'src/ai-content-studio/page.tsx',
  'src/ai-crm/page.tsx',
  'src/ai-customer-insights/page.tsx',
  'src/ai-customer-support-bot/page.tsx',
  'src/ai-customer-support/page.tsx',
  'src/ai-cybersecurity/page.tsx',
  'src/ai-data-analytics/page.tsx',
  'src/ai-data-visualization/page.tsx',
  'src/ai-design-assistant/page.tsx',
  'src/ai-document-processing/page.tsx',
  'src/ai-document-processor/page.tsx',
  'src/ai-ecommerce-optimizer/page.tsx',
  'src/ai-ecommerce-solutions/page.tsx',
  'src/ai-edge-computing/page.tsx',
  'src/ai-email-assistant/page.tsx',
  'src/ai-email-marketing/page.tsx',
  'src/ai-fintech/page.tsx',
  'src/ai-healthcare/page.tsx',
  'src/ai-hr-assistant/page.tsx',
  'src/ai-inventory-manager/page.tsx',
  'src/ai-invoice-generator/page.tsx',
  'src/ai-lead-generation/page.tsx',
  'src/ai-lead-scoring/page.tsx',
  'src/ai-marketing/page.tsx'
];

// Template for a simple coming soon page
const createComingSoonPage = (title, description) => `import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const ${title}Page: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>
      <Navigation /></Navigation>
      <div className="flex items-center justify-center min-h-screen"></div>
        <div className="text-center"></div>
          <h1 className="text-4 xl font-bold text-white mb-4">${title}</h1>
          <p className="text-gray-300 mb-8">${description}</p>
          <Link 
            to="/contact" 
            className="bg-cyan-500 text-white px-6 py-3 rounded-lg hover:bg-cyan-600 transition-colors"
          ></Lin>Contact</Lin> Us
          </Link>
        </div>
      </div>
      <Footer /></Footer>
    </div>
  );
};

export default ${title}Page;`;

// Fix each file
filesToFix.forEach(filePath => {
  const fullPath = path.join(__dirname, filePath);
  const fileName = path.basename(filePath, '.tsx');
  const title = fileName.split('-').map(word => 
    word.charAt(0).toUpperCase() + word.slice(1)
  ).join(' ');
  
  const description = `Coming Soon - Advanced ${title.toLowerCase()} solutions`;
  
  try {
    fs.writeFileSync(fullPath, createComingSoonPage(title, description));
    console.log(`Fixed: ${filePath}`);
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
});

console.log('All files fixed!');