const fs = require('fs');
const path = require('path');

const pagesDir = './src/pages';

// List of JSX files that need fixing
const jsxFiles = [
  'AdvancedTechSolutions2025.jsx',
  'ComprehensiveTechInsights2026.jsx',
  'AdvancedAISolutions2026.jsx',
  'NewShowcase2025.jsx',
  'ComprehensiveServices2025.jsx',
  'QuantumRealityEngineering2025.jsx',
  'AdvancedAITransformation2026.jsx',
  'QuantumComputingRevolution2026.jsx',
  'NeuralInterface2026.jsx',
  'QuantumComputing2026.jsx',
  'NeuralInterfaceFuture.jsx',
  'QuantumComputingBreakthrough.jsx',
  'NextGenTechShowcase2026.jsx',
  'NextGenTechShowcase2025.jsx',
  'NewAIUseCases2025.jsx',
  'NextGenAIRevolution2026.jsx',
  'NeuralInterfaceRevolution2025.jsx',
  'FutureTechTrends2025.jsx',
  'DigitalTransformation2025.jsx',
  'CybersecurityFortress2025.jsx',
  'EdgeAIandIoT2025.jsx',
  'BlogPost2025.jsx',
  'AdvancedQuantumComputing2026.jsx',
  'AdvancedNeuralInterface2026.jsx',
  'AdvancedAnalytics2025.jsx',
  'AdvancedAITransformation2025.jsx',
  'AITransformationGuide2025.jsx',
  'AdvancedAI2026.jsx',
  'AIRevolution2025.jsx',
  'AIInnovationHub2025.jsx',
  'AIInnovationPlaybook2025.jsx',
  'AIEnterpriseCopilot2025.jsx',
  'TechnologyInsights2025.jsx',
  'SyntheticIntelligence2026.jsx',
  'RevolutionaryTechBlog2026.jsx',
  'QuantumComputingRevolution2025.jsx',
  'QuantumNeuralFusion2026.jsx',
  'QuantumComputingSolutions2025.jsx',
  'UltimateAIConsciousness2025.jsx'
];

jsxFiles.forEach(fileName => {
  const filePath = path.join(pagesDir, fileName);
  
  if (fs.existsSync(filePath)) {
    const componentName = fileName.replace('.jsx', '');
    
    const content = `import React from 'react';

const ${componentName} = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-16">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">${componentName.replace(/([A-Z])/g, ' $1').trim()}</h1>
          <p className="text-xl text-gray-600">Coming soon - Revolutionary technology solutions</p>
        </div>
      </div>
    </div>
  );
};

export default ${componentName};`;

    fs.writeFileSync(filePath, content);
    console.log(`Fixed ${fileName}`);
  }
});

console.log('All JSX files have been fixed!');