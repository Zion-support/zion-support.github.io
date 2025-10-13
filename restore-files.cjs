const fs = require('fs');
const path = require('path');

// List of corrupted files that need to be restored
const corruptedFiles = [
  'app/ai-holographic-workspace/page.tsx',
  'app/ai-image-recognition-pro/page.tsx',
  'app/ai-quantum-financial-oracle/page.tsx',
  'app/ai-sentiment-analysis-pro/page.tsx',
  'app/ai-space-mission-optimizer/page.tsx',
  'app/ai-voice-cloning-studio/page.tsx',
  'app/careers/page.tsx',
  'app/case-studies/page.tsx',
  'app/cloud-infrastructure/page.tsx',
  'app/cloud-services/page.tsx',
  'app/community/page.tsx',
  'app/compliance/page.tsx',
  'app/components/Footer.tsx',
  'app/components/ImprovedFooter.tsx',
  'app/components/Navigation.tsx',
  'app/components/PerformanceOptimizer.tsx',
  'app/consultation/page.tsx',
  'app/custom-development/page.tsx',
  'app/cybersecurity-solutions/page.tsx',
  'app/layout.tsx',
  'app/micro-saas-services/page.tsx',
  'app/page.tsx',
  'app/partners/page.tsx',
  'app/quantum-computing-solutions/page.tsx',
  'app/quantum-data-encryption-vault/page.tsx',
  'app/smart-inventory-optimizer/page.tsx',
  'app/zion-ai-accounting-suite/page.tsx',
  'app/zion-ai-customer-insights/page.tsx',
  'app/zion-ai-cybersecurity-suite-pro/page.tsx',
  'app/zion-ai-inventory-manager/page.tsx',
  'app/zion-ai-invoice-generator/page.tsx',
  'app/zion-ai-meeting-transcriber/page.tsx'
];

// Template for a basic React page component
const createBasicPageTemplate = (title, description) => `import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const ${title.replace(/[^a-zA-Z0-9]/g, '')}Page: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>${title} - Zion Tech Group</title>
        <meta name="description" content="${description}" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                ${title}
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                ${description}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/consultation" 
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
                >
                  Get Started
                </Link>
                <Link 
                  to="/case-studies" 
                  className="border border-white text-white hover:bg-white hover:text-gray-900 px-8 py-3 rounded-lg font-semibold transition-colors"
                >
                  View Case Studies
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ${title.replace(/[^a-zA-Z0-9]/g, '')}Page;
`;

// Template for components
const createComponentTemplate = (name) => `import React from 'react';

const ${name}: React.FC = () => {
  return (
    <div>
      {/* ${name} component content */}
    </div>
  );
};

export default ${name};
`;

function restoreFiles() {
  corruptedFiles.forEach(filePath => {
    const fullPath = path.join(__dirname, filePath);
    const dir = path.dirname(fullPath);
    
    // Ensure directory exists
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    
    let content;
    const fileName = path.basename(filePath, '.tsx');
    
    if (filePath.includes('/components/')) {
      content = createComponentTemplate(fileName);
    } else {
      const title = fileName.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
      const description = `Professional ${title.toLowerCase()} services and solutions.`;
      content = createBasicPageTemplate(title, description);
    }
    
    fs.writeFileSync(fullPath, content);
    console.log(`Restored: ${filePath}`);
  });
}

restoreFiles();
console.log('File restoration completed!');