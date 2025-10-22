import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// List of files with remaining errors
const filesToFix = [
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

function fixRemainingErrors(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Remove any leftover branch names that are causing syntax errors
    content = content.replace(/ursor\/fix-errors-and-merge-to-main-[a-f0-9]+\);/g, ');');
    content = content.replace(/cursor\/fix-errors-and-merge-to-main-[a-f0-9]+\);/g, ');');
    content = content.replace(/[a-f0-9]+\s*\);/g, ');');
    
    // Clean up any other leftover merge conflict artifacts
    content = content.replace(/<<<<<<< HEAD/g, '');
    content = content.replace(/=======/g, '');
    content = content.replace(/>>>>>>> [a-f0-9]+/g, '');
    
    // Ensure proper closing
    content = content.replace(/\s+\);\s*$/gm, ');');
    content = content.replace(/\s+}\s*$/gm, '}');
    
    fs.writeFileSync(filePath, content);
    console.log(`Fixed remaining errors in ${filePath}`);
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
}

// Fix all files
filesToFix.forEach(file => {
  const fullPath = path.join(__dirname, file);
  if (fs.existsSync(fullPath)) {
    fixRemainingErrors(fullPath);
  } else {
    console.log(`File not found: ${fullPath}`);
  }
});

console.log('Remaining error resolution completed!');