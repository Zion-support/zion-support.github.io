const fs = require('fs');
const path = require('path');

// List of missing page components to create
const missingPages = [
  'Login',
  'Resources', 
  'RequestQuote',
  'SearchPage',
  'Partners',
  'WhitePapers',
  'Webinars',
  'APIDocumentation',
  'Developers',
  'Training',
  'Community',
  'Support',
  'ScheduleDemo',
  'InvestorRelations',
  'Press',
  'Legal',
  'RevolutionaryServices2030',
  'Demo'
];

// Template for creating page components
const pageTemplate = (pageName) => `import React from 'react';

export default function ${pageName}() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700">
      <div className="text-center max-w-4xl mx-auto p-8">
        <h1 className="text-6xl font-bold text-white mb-6">
          ${pageName}
        </h1>
        <p className="text-xl text-slate-300 mb-8">
          ${pageName.toLowerCase()} content coming soon
        </p>
        <div className="text-cyan-400 text-lg">
          ${pageName} page under development
        </div>
      </div>
    </div>
  );
}`;

// Create missing page files
missingPages.forEach(pageName => {
  const filePath = path.join(__dirname, 'src', 'pages', `${pageName}.tsx`);
  
  if (!fs.existsSync(filePath)) {
    fs.writeFileSync(filePath, pageTemplate(pageName));
    console.log(`Created ${filePath}`);
  } else {
    console.log(`${filePath} already exists`);
  }
});

console.log('Finished creating missing page components');