const fs = require('fs');
const path = require('path');

const missingPages = [
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
  'AIEnterpriseCopilot2025',
  'NewShowcase2025',
  'SyntheticIntelligence2026',
  'QuantumNeuralFusion2026',
  'CyberPhysicalSystems2026',
  'AdvancedBiotechSolutions2026',
  'NextGenAIRevolution2026',
  'QuantumComputingRevolution2026',
  'NeuralInterfaceRevolution2026',
  'RevolutionaryTechBlog2026',
  'ComprehensiveTechInsights2026'
];

const pageTemplate = (pageName) => `import React from 'react';

const ${pageName} = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-white mb-8">
            ${pageName.replace(/([A-Z])/g, ' $1').trim()}
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            This page is under construction
          </p>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 max-w-2xl mx-auto">
            <p className="text-white">
              This page is under construction. Check back soon for exciting updates!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ${pageName};`;

// Create the pages directory if it doesn't exist
const pagesDir = path.join(__dirname, 'src', 'pages');
if (!fs.existsSync(pagesDir)) {
  fs.mkdirSync(pagesDir, { recursive: true });
}

// Create all missing pages
missingPages.forEach(pageName => {
  const filePath = path.join(pagesDir, `${pageName}.jsx`);
  if (!fs.existsSync(filePath)) {
    fs.writeFileSync(filePath, pageTemplate(pageName));
    console.log(`Created ${filePath}`);
  } else {
    console.log(`${filePath} already exists`);
  }
});

console.log('All missing pages created!');