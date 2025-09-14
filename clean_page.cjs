const fs = require('fs');

// Read the current page.tsx file
let content = fs.readFileSync('/workspace/app/page.tsx', 'utf8');

// List of components that don't exist and should be removed
const nonExistentComponents = [
  'UltimateBusinessIntelligence2025Banner',
  'UltimateAutomationRevolution50000ROIBanner',
  'NewContent2025UltimateBanner',
  'NewContent2026PromotionBanner',
  'AI2026RevolutionaryBreakthroughBanner',
  'NewContent2025UltimateBusinessTransformationBanner',
  'QuantumAIRevolution2025PromotionalBanner',
  'Fortune500SuccessStoryBanner',
  'AI2025NextGenInnovationBanner',
  'QuantumComputingRevolution2025Banner',
  'NeuralInterfaceRevolution2025Banner',
  'AutonomousSystems2025Banner',
  'UltimateTechShowcase2025Banner',
  'InnovationHub2025Banner',
  'NewContent2025UltimateBreakthroughPromotionBanner',
  'SuccessStoriesShowcase2025',
  'BreakthroughTechnologies2025PromotionBanner',
  'AI2027UltimateBreakthroughBanner',
  'SyntheticIntelligence2026RevolutionBanner',
  'RevolutionaryAIAutomationShowcase2025',
  'NewContent2025ShowcaseBanner',
  'EnhancedContentPromotionBanner',
  'NewContentShowcase2026',
  'QuantumAIContentShowcase2026',
  'AI2026ContentShowcaseBanner',
  'RevolutionaryAI2026Banner',
  'AI2026RevolutionaryBanner',
  'RevolutionaryTechBanner2026'
];

// Remove lines that contain non-existent components
const lines = content.split('\n');
const cleanedLines = lines.filter(line => {
  // Check if line contains any non-existent component
  for (const component of nonExistentComponents) {
    if (line.includes(`<${component}`) || line.includes(`{/* ${component}`)) {
      return false;
    }
  }
  return true;
});

// Write the cleaned content back
fs.writeFileSync('/workspace/app/page.tsx', cleanedLines.join('\n'));

console.log('Removed non-existent components from page.tsx');