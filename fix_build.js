import fs from 'fs';

// Read App.tsx
const appContent = fs.readFileSync('/workspace/src/App.tsx', 'utf8');

// List of problematic components to comment out
const problematicComponents = [
  'AbsoluteTechShowcase2031',
  'NewContentShowcase2026', 
  'UltimateContentShowcase2026',
  'InterdimensionalTechShowcase2027',
  'OmniversalTechShowcase2029',
  'TranscendentTechnologyShowcase2028'
];

let modifiedContent = appContent;

// Comment out imports
problematicComponents.forEach(component => {
  const importRegex = new RegExp(`import ${component} from '[^']+';`, 'g');
  modifiedContent = modifiedContent.replace(importRegex, `// import ${component} from './components/${component}'; // Component has syntax errors`);
});

// Comment out usage
problematicComponents.forEach(component => {
  const usageRegex = new RegExp(`<${component} />`, 'g');
  modifiedContent = modifiedContent.replace(usageRegex, `{/* <${component} /> */} {/* Component has syntax errors */}`);
});

// Write back to file
fs.writeFileSync('/workspace/src/App.tsx', modifiedContent);

console.log('Commented out problematic components');