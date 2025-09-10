const fs = require('fs');
const path = require('path');

// List of missing service components to create
const missingServices = [
  'quantum-computing',
  'iot-edge-computing'
];

// Template for creating service components
const serviceTemplate = (serviceName) => `import React from 'react';

export default function ${serviceName.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join('')}() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700">
      <div className="text-center max-w-4xl mx-auto p-8">
        <h1 className="text-6xl font-bold text-white mb-6">
          ${serviceName.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
        </h1>
        <p className="text-xl text-slate-300 mb-8">
          Advanced ${serviceName.replace('-', ' ')} solutions
        </p>
        <div className="text-cyan-400 text-lg">
          ${serviceName.replace('-', ' ')} service coming soon
        </div>
      </div>
    </div>
  );
}`;

// Create missing service files
missingServices.forEach(serviceName => {
  const filePath = path.join(__dirname, 'src', 'pages', 'services', `${serviceName}.tsx`);
  
  if (!fs.existsSync(filePath)) {
    fs.writeFileSync(filePath, serviceTemplate(serviceName));
    console.log(`Created ${filePath}`);
  } else {
    console.log(`${filePath} already exists`);
  }
});

console.log('Finished creating missing service components');