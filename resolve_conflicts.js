import fs from 'fs';
import path from 'path';

// Function to resolve merge conflicts in a file
function resolveConflicts(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Pattern to match merge conflict blocks
    const conflictRegex = /<<<<<<< HEAD\n([\s\S]*?)=======\n([\s\S]*?)>>>>>>> [a-f0-9]+/g;
    
    // Replace conflicts by choosing the second version (after =======)
    content = content.replace(conflictRegex, (match, headContent, mainContent) => {
      // Clean up the main content (remove extra whitespace)
      return mainContent.trim();
    });
    
    // Write the resolved content back
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Resolved conflicts in: ${filePath}`);
    return true;
  } catch (error) {
    console.error(`Error resolving conflicts in ${filePath}:`, error.message);
    return false;
  }
}

// List of files with conflicts
const conflictFiles = [
  'app/virtual-reality-solutions/page.tsx',
  'app/ai-real-estate-analyzer/page.tsx',
  'app/components/Footer.tsx',
  'app/components/Navigation.tsx',
  'app/micro-saas-solutions/page.tsx',
  'app/page.tsx',
  'app/ai-translator/page.tsx',
  'app/tutorials/page.tsx',
  'app/data-lake-solutions/page.tsx',
  'app/support/page.tsx',
  'app/ai-education-tutor/page.tsx',
  'app/docs/page.tsx',
  'app/ai-legal-assistant/page.tsx',
  'app/low-code-platform/page.tsx',
  'app/ai-infrastructure/page.tsx',
  'app/ai-3d-model-generator/page.tsx',
  'app/ai-supply-chain-optimizer/page.tsx',
  'app/quantum-computing-solutions/page.tsx',
  'app/serverless-architecture/page.tsx',
  'app/augmented-reality-solutions/page.tsx',
  'app/ai-medical-assistant/page.tsx',
  'app/robotic-process-automation/page.tsx',
  'app/edge-computing-solutions/page.tsx',
  'app/ai-audio-processor/page.tsx',
  'app/container-orchestration/page.tsx',
  'app/ai-code-assistant/page.tsx'
];

console.log('Starting conflict resolution...');
let resolvedCount = 0;

conflictFiles.forEach(file => {
  if (fs.existsSync(file)) {
    if (resolveConflicts(file)) {
      resolvedCount++;
    }
  } else {
    console.log(`File not found: ${file}`);
  }
});

console.log(`\nResolved conflicts in ${resolvedCount} files.`);