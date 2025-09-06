const fs = require('fs');
const path = require('path');

const filesToFix = [
  'app/services/ai-meeting-assistant/page.tsx',
  'app/services/devops-automation/page.tsx',
  'app/services/ai-code-reviewer/page.tsx',
  'app/services/smart-invoice-generator/page.tsx',
  'app/services/blockchain-solutions/page.tsx',
  'app/services/ai-customer-insights/page.tsx'
];

function fixMergeConflicts(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Remove merge conflict markers and keep the HEAD version
    content = content.replace(/<<<<<<< HEAD\n([\s\S]*?)=======([\s\S]*?)>>>>>>> [^\n]+\n/g, '$1');
    
    // Clean up any remaining conflict markers
    content = content.replace(/<<<<<<< HEAD\n/g, '');
    content = content.replace(/=======\n/g, '');
    content = content.replace(/>>>>>>> [^\n]+\n/g, '');
    
    fs.writeFileSync(filePath, content);
    console.log(`Fixed: ${filePath}`);
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
}

filesToFix.forEach(fixMergeConflicts);
console.log('Merge conflicts fixed!');