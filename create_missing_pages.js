import fs from 'fs';
import path from 'path';

// List of missing pages that need to be created
const missingPages = [
  'ITServices',
  'RequestQuote',
  'Dashboard',
  'Login',
  'FAQ',
  'Privacy',
  'Terms',
  'Cookies',
  'SearchPage',
  'Team',
  'Press',
  'CaseStudies',
  'Webinars',
  'WhitePapers',
  'ServicesOverview',
  'PricingGuide',
  'Help',
  'Partners',
  'Community',
  'Documentation',
  'Training',
  'Support',
  'Accessibility',
  'Security',
  'Compliance',
  'OnsiteSupport',
  'Marketplace',
];

// Template for a basic page component
const pageTemplate = (
  pageName,
  title,
  description
) => `import React from 'react';
import { SEO } from '../components/SEO';

const ${pageName}: React.FC = () => {
  return (
    <>
      <SEO 
        title="${title} - Zion Tech Group"
        description="${description}"
        keywords="${title.toLowerCase()}, zion tech group, technology services"
      />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-white mb-6">
              ${title}
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              ${description}
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-slate-800 rounded-lg p-8 border border-slate-700">
              <h2 className="text-3xl font-semibold text-white mb-6">Coming Soon</h2>
              <p className="text-gray-300 mb-6">
                We're working hard to bring you the best ${title.toLowerCase()} experience. 
                This page will be available soon with comprehensive information and features.
              </p>
              <div className="flex flex-wrap gap-4">
                <a 
                  href="/contact" 
                  className="bg-cyan-600 hover:bg-cyan-700 text-white px-6 py-3 rounded-lg transition-colors"
                >
                  Contact Us
                </a>
                <a 
                  href="/services" 
                  className="bg-slate-700 hover:bg-slate-600 text-white px-6 py-3 rounded-lg transition-colors"
                >
                  View Services
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ${pageName};
`;

// Create the pages directory if it doesn't exist
const pagesDir = path.join(process.cwd(), 'src', 'pages');
if (!fs.existsSync(pagesDir)) {
  fs.mkdirSync(pagesDir, { recursive: true });
}

// Create each missing page
missingPages.forEach(pageName => {
  const title = pageName.replace(/([A-Z])/g, ' $1').trim();
  const description = `Professional ${title.toLowerCase()} services and solutions for modern businesses.`;

  const content = pageTemplate(pageName, title, description);
  const filePath = path.join(pagesDir, `${pageName}.tsx`);

  if (!fs.existsSync(filePath)) {
    fs.writeFileSync(filePath, content);
    console.log(`Created ${pageName}.tsx`);
  } else {
    console.log(`${pageName}.tsx already exists`);
  }
});

console.log('All missing pages created successfully!');
