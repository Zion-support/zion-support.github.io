import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Files with merge conflicts
const filesToFix = [
  'app/ai-customer-support/page.tsx',
  'app/ai-data-visualization/page.tsx',
  'app/ai-sales-automation/page.tsx',
  'app/ai-workflow-automation/page.tsx',
  'app/components/Footer.tsx',
  'app/it-services/page.tsx',
  'app/services/page.tsx'
];

function fixMergeConflicts(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Remove merge conflict markers and keep the content between them
    const conflictRegex = /<<<<<<< HEAD\s*\n?(.*?)\n?=======\s*\n?(.*?)\n?>>>>>>> [^\n]+\s*\n?/gs;
    
    content = content.replace(conflictRegex, (match, headContent, branchContent) => {
      modified = true;
      // Keep the content from HEAD (first part) and remove the conflict markers
      return headContent.trim() + '\n';
    });

    // Clean up any remaining conflict markers
    content = content.replace(/<<<<<<< HEAD\s*\n?/g, '');
    content = content.replace(/=======\s*\n?/g, '');
    content = content.replace(/>>>>>>> [^\n]+\s*\n?/g, '');

    // Clean up extra whitespace
    content = content.replace(/\n\s*\n\s*\n/g, '\n\n');

    if (modified) {
      fs.writeFileSync(filePath, content);
      console.log(`Fixed merge conflicts in ${filePath}`);
    } else {
      console.log(`No merge conflicts found in ${filePath}`);
    }
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
}

// Fix each file
filesToFix.forEach(filePath => {
  const fullPath = path.join(__dirname, filePath);
  if (fs.existsSync(fullPath)) {
    fixMergeConflicts(fullPath);
  }
});

console.log('Merge conflicts cleanup completed!');