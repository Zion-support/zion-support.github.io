import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const filesWithConflicts = [
  'app/micro-saas/page.tsx',
  'app/quantum-computing/page.tsx',
  'app/status/page.tsx',
  'app/it-infrastructure/page.tsx',
  'app/it-support/page.tsx',
  'app/iot-edge-computing/page.tsx',
  'app/consultation/page.tsx',
  'app/ai-cybersecurity/page.tsx',
  'app/ar-vr-solutions/page.tsx',
  'app/ai-sales-automation/page.tsx',
  'app/ai-healthcare/page.tsx',
  'app/ai-workflow-automation/page.tsx',
  'app/ai-marketing/page.tsx',
  'app/ai-data-analytics/page.tsx',
  'app/ai-fintech/page.tsx',
  'app/ai-data-visualization/page.tsx',
  'app/autonomous-systems/page.tsx',
  'app/ai-automation/page.tsx',
  'app/ai-customer-support/page.tsx'
];

function fixMergeConflicts(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    
    // Split by merge conflict markers
    const parts = content.split(/^$/m);
    
    if (parts.length === 1) {
      console.log(`No conflicts found in ${filePath}`);
      return;
    }
    
    let fixedContent = parts[0]; // Keep everything before the first conflict
    
    for (let i = 1; i < parts.length; i++) {
      const conflictPart = parts[i];
      const conflictSections = conflictPart.split(/^$/m);
      
      if (conflictSections.length === 2) {
        // Keep the part after  (the incoming changes)
        const afterEquals = conflictSections[1].split(/^/m);
        if (afterEquals.length > 0) {
          fixedContent += afterEquals[0];
        }
      }
    }
    
    // Write the fixed content back
    fs.writeFileSync(filePath, fixedContent);
    console.log(`Fixed merge conflicts in ${filePath}`);
    
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
}

// Fix all files
filesWithConflicts.forEach(filePath => {
  const fullPath = path.join(__dirname, filePath);
  if (fs.existsSync(fullPath)) {
    fixMergeConflicts(fullPath);
  } else {
    console.log(`File not found: ${fullPath}`);
  }
});

console.log('Merge conflict fixing completed!');