const fs = require('fs');
const path = require('path');

// List of app files that need to be fixed
const appFiles = [
  'App.tsx'
];

console.log(`Fixing ${appFiles.length} app files`);

appFiles.forEach(file => {
  const filePath = path.join('/workspace', file);
  
  // Create a working App component
  const newContent = `import React from 'react';
import { Helmet } from 'react-helmet-async';

const App: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Zion Tech Group - Advanced AI and IT Solutions</title>
        <meta name="description" content="Advanced AI and IT solutions by Zion Tech Group" />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold text-white text-center mb-8">Zion Tech Group</h1>
          <p className="text-gray-300 text-center">Advanced AI and IT Solutions</p>
        </div>
      </div>
    </>
  );
};

export default App;`;

  fs.writeFileSync(filePath, newContent);
  console.log(`Fixed ${file}`);
});

console.log('App files fixed');