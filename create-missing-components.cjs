const fs = require('fs');
const path = require('path');

const missingComponents = [
  'RevolutionaryContentShowcase2026',
  'RevolutionaryContentBanner',
  'RevolutionaryContentBanner2026',
  'RevolutionaryContentBanner2027',
  'UltimateContentBanner2027',
  'NewContentPromotion2027',
  'UltimateContentBanner',
  'RevolutionaryContentCarousel2027',
  'NewContentBanner2028',
  'UltimateContentBanner2029',
  'RevolutionaryContentCarousel2029',
  'UltimateContentBanner2030',
  'RevolutionaryContentShowcase2030',
  'RevolutionaryContentBanner2032',
  'UltimateContentBanner2032',
  'RevolutionaryContentCarousel2032',
  'RevolutionaryTechBanner2032',
  'EnhancedContentCarousel2032',
  'UltimateContentBanner2033',
  'UltimateContentBanner2034',
  'RevolutionaryServicesShowcase',
  'InteractiveTechShowcase2035',
  'DynamicContentCarousel',
  'InteractiveTechShowcase',
  'InteractiveTechShowcase2026'
];

const componentTemplate = (name) => `import React from 'react';

const ${name}: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-purple-900 via-indigo-900 to-blue-900 text-white py-16 mb-12 rounded-2xl">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">${name.replace(/([A-Z])/g, ' $1').trim()}</h2>
          <p className="text-xl opacity-90">
            Revolutionary technology showcase
          </p>
        </div>
      </div>
    </div>
  );
};

export default ${name};`;

const componentsDir = path.join(__dirname, 'src', 'components');

// Ensure components directory exists
if (!fs.existsSync(componentsDir)) {
  fs.mkdirSync(componentsDir, { recursive: true });
}

missingComponents.forEach(componentName => {
  const filePath = path.join(componentsDir, `${componentName}.tsx`);
  
  if (!fs.existsSync(filePath)) {
    fs.writeFileSync(filePath, componentTemplate(componentName));
    console.log(`Created ${componentName}.tsx`);
  } else {
    console.log(`${componentName}.tsx already exists`);
  }
});

console.log('All missing components created!');