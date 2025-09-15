const fs = require('fs');
const path = require('path');

const missingPages = [
  'AdvancedTechSolutions2025',
  'NewAIUseCases2025',
  'EdgeAIandIoT2025',
  'FutureTechTrends2025',
  'ComprehensiveServices2025',
  'AIInnovationPlaybook2025',
  'TechnologyInsights2025',
  'AITransformationGuide2025',
  'QuantumComputingSolutions2025',
  'AIInnovationHub2025',
  'DigitalTransformation2025',
  'AdvancedAnalytics2025',
  'CybersecurityFortress2025',
  'AIRevolution2025',
  'QuantumComputingBreakthrough',
  'NeuralInterfaceFuture',
  'SyntheticIntelligence2026',
  'RevolutionaryTechBlog2026'
];

const pageTemplate = (name) => `import React from 'react';

const ${name}: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">${name.replace(/([A-Z])/g, ' $1').trim()}</h1>
          <p className="text-xl text-gray-600">Coming soon - ${name} content</p>
        </div>
      </div>
    </div>
  );
};

export default ${name};`;

missingPages.forEach(pageName => {
  const filePath = path.join(__dirname, 'src', 'pages', `${pageName}.tsx`);
  if (!fs.existsSync(filePath)) {
    fs.writeFileSync(filePath, pageTemplate(pageName));
    console.log(`Created ${filePath}`);
  } else {
    console.log(`${filePath} already exists`);
  }
});

console.log('Done creating missing pages');