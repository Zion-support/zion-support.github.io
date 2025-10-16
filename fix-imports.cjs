const fs = require('fs');
const path = require('path');

const filesToFix = [
  'app/ai-3d-model-generator/page.tsx',
  'app/ai-audio-processor/page.tsx',
  'app/ai-code-assistant/page.tsx',
  'app/ai-legal-assistant/page.tsx',
  'app/ai-translator/page.tsx',
  'app/edge-computing-solutions/page.tsx',
  'app/quantum-computing-solutions/page.tsx'
];

const unusedImports = {
  'ArrowRightIcon': true,
  'ShieldCheckIcon': true,
  'PlayIcon': true,
  'PauseIcon': true,
  'StopIcon': true,
  'ArrowDownTrayIcon': true,
  'ClockIcon': true,
  'SpeakerWaveIcon': true,
  'LanguageIcon': true,
  'CodeBracketIcon': true,
  'BoltIcon': true,
  'DocumentTextIcon': true,
  'GlobeAltIcon': true
};

filesToFix.forEach(filePath => {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Remove unused imports
    Object.keys(unusedImports).forEach(importName => {
      const regex = new RegExp(`\\s*${importName},?\\s*`, 'g');
      content = content.replace(regex, '');
    });
    
    // Clean up any trailing commas in import statements
    content = content.replace(/,\s*}/g, '}');
    content = content.replace(/,\s*]/g, ']');
    
    fs.writeFileSync(filePath, content);
    console.log(`Fixed imports in ${filePath}`);
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
});

console.log('Import fixing completed!');