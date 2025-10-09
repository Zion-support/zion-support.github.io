const fs = require('fs');
const path = require('path');

function fixMergeConflicts(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Remove merge conflict markers and keep HEAD version
    content = content.replace(/<<<<<<< HEAD\n([\s\S]*?)=======([\s\S]*?)>>>>>>> [^\n]+\n/g, '$1');
    
    // Remove any remaining merge conflict markers
    content = content.replace(/<<<<<<< HEAD\n/g, '');
    content = content.replace(/=======\n/g, '');
    content = content.replace(/>>>>>>> [^\n]+\n/g, '');
    
    fs.writeFileSync(filePath, content);
    console.log(`Fixed merge conflicts in: ${filePath}`);
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
}

// List of files with merge conflicts
const filesToFix = [
  'app/ai-customer-support/page.tsx',
  'app/components/Footer.tsx',
  'app/ai-sales-automation/page.tsx',
  'app/ai-data-visualization/page.tsx',
  'app/services/page.tsx',
  'app/it-services/page.tsx',
  'app/ai-workflow-automation/page.tsx'
];

filesToFix.forEach(file => {
  if (fs.existsSync(file)) {
    fixMergeConflicts(file);
  }
});

console.log('Merge conflicts fixed!');