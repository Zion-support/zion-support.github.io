const fs = require('fs');
const path = require('path');

const missingPages = [
  'ai-content-generation',
  'ai-data-analytics', 
  'ai-cybersecurity',
  'ai-workflow-automation',
  'ai-mobile-app-development',
  'ai-ecommerce-solutions',
  'ai-customer-support',
  'ai-sales-automation',
  'ai-data-visualization',
  'ai-lead-generation',
  'ai-document-processing',
  'it-infrastructure',
  'database',
  'networking',
  'autonomous-systems',
  'robotics',
  'careers',
  'news',
  'pricing',
  'consultation',
  'support',
  'docs',
  'status',
  'terms',
  'cookies'
];

const pageTemplate = (title) => `import React from 'react';

const ${title.charAt(0).toUpperCase() + title.slice(1).replace(/-([a-z])/g, (g) => g[1].toUpperCase())}Page: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-white mb-4">${title.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}</h1>
        <p className="text-gray-300 mb-8">Coming Soon - ${title.replace(/-/g, ' ')} services</p>
        <a href="/contact" className="bg-cyan-500 text-white px-6 py-3 rounded-lg hover:bg-cyan-600 transition-colors">
          Contact Us
        </a>
      </div>
    </div>
  );
};

export default ${title.charAt(0).toUpperCase() + title.slice(1).replace(/-([a-z])/g, (g) => g[1].toUpperCase())}Page;
`;

missingPages.forEach(page => {
  const dir = path.join(__dirname, 'src', page);
  const filePath = path.join(dir, 'page.tsx');
  
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  
  if (!fs.existsSync(filePath)) {
    fs.writeFileSync(filePath, pageTemplate(page));
    console.log(`Created ${filePath}`);
  }
});

console.log('All missing pages created!');