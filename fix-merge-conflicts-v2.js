import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// List of files with merge conflicts
const filesWithConflicts = [
  'app/ai-automation/page.tsx',
  'app/ai-customer-support/page.tsx',
  'app/ai-cybersecurity/page.tsx',
  'app/ai-data-analytics/page.tsx',
  'app/ai-data-visualization/page.tsx',
  'app/ai-fintech/page.tsx',
  'app/ai-healthcare/page.tsx',
  'app/ai-marketing/page.tsx',
  'app/ai-sales-automation/page.tsx',
  'app/ai-workflow-automation/page.tsx',
  'app/ar-vr-solutions/page.tsx',
  'app/autonomous-systems/page.tsx',
  'app/consultation/page.tsx',
  'app/iot-edge-computing/page.tsx',
  'app/it-infrastructure/page.tsx',
  'app/it-support/page.tsx',
  'app/micro-saas/page.tsx',
  'app/quantum-computing/page.tsx',
  'app/status/page.tsx'
];

function fixMergeConflicts(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Remove any remaining merge conflict markers and branch names
    content = content.replace(/<<<<<<< HEAD[\s\S]*?=======\n([\s\S]*?)>>>>>>> [a-f0-9]+/g, '$1');
    content = content.replace(/<<<<<<< HEAD[\s\S]*?=======\n([\s\S]*?)>>>>>>> [a-f0-9]+/g, '$1');
    
    // Remove any leftover branch names or conflict markers
    content = content.replace(/cursor\/fix-errors-and-merge-to-main-[a-f0-9]+/g, '');
    content = content.replace(/<<<<<<< HEAD/g, '');
    content = content.replace(/=======/g, '');
    content = content.replace(/>>>>>>> [a-f0-9]+/g, '');
    
    // Clean up any extra whitespace or newlines
    content = content.replace(/\n\s*\n\s*\n/g, '\n\n');
    
    // Fix any broken syntax around the end of files
    content = content.replace(/\s+\);\s*$/gm, ');');
    content = content.replace(/\s+\);\s*}\s*$/gm, ');\n}');
    
    fs.writeFileSync(filePath, content);
    console.log(`Fixed merge conflicts in ${filePath}`);
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
}

// Fix all files
filesWithConflicts.forEach(file => {
  const fullPath = path.join(__dirname, file);
  if (fs.existsSync(fullPath)) {
    fixMergeConflicts(fullPath);
  } else {
    console.log(`File not found: ${fullPath}`);
  }
});

console.log('Merge conflict resolution completed!');