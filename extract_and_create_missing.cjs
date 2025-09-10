const fs = require('fs');
const path = require('path');

// Read App.tsx to extract missing imports
const appContent = fs.readFileSync('src/App.tsx', 'utf8');

// Extract all import statements that reference pages
const importMatches = appContent.match(/import\('\.\/pages\/([^']+)'\)/g);
const missingPages = [];

if (importMatches) {
  importMatches.forEach(match => {
    const pagePath = match.match(/import\('\.\/pages\/([^']+)'\)/)[1];
    const fullPath = path.join(__dirname, 'src', 'pages', pagePath);
    
    if (!fs.existsSync(fullPath)) {
      missingPages.push(pagePath);
    }
  });
}

console.log('Missing pages found:', missingPages);

// Template for creating page components
const pageTemplate = (pagePath) => {
  const pageName = path.basename(pagePath, '.tsx');
  const displayName = pageName.replace(/([A-Z])/g, ' $1').trim();
  
  return `import React from 'react';

export default function ${pageName}() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700">
      <div className="text-center max-w-4xl mx-auto p-8">
        <h1 className="text-6xl font-bold text-white mb-6">
          ${displayName}
        </h1>
        <p className="text-xl text-slate-300 mb-8">
          ${displayName.toLowerCase()} content coming soon
        </p>
        <div className="text-cyan-400 text-lg">
          ${displayName} page under development
        </div>
      </div>
    </div>
  );
}`;
};

// Create missing page files
missingPages.forEach(pagePath => {
  const fullPath = path.join(__dirname, 'src', 'pages', pagePath);
  const dir = path.dirname(fullPath);
  
  // Create directory if it doesn't exist
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  
  fs.writeFileSync(fullPath, pageTemplate(pagePath));
  console.log(`Created ${fullPath}`);
});

console.log(`Finished creating ${missingPages.length} missing page components`);