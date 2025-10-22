import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// List of files that need to be fixed
const filesToFix = [
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

function fixIncompleteFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    
    // Check if file ends abruptly (missing closing braces and export)
    if (!content.includes('export default') || !content.trim().endsWith('};')) {
      console.log(`Fixing incomplete file: ${filePath}`);
      
      // Add the missing closing parts
      let fixedContent = content.trim();
      
      // Remove any trailing incomplete content
      if (fixedContent.includes('</div>') && !fixedContent.includes('export default')) {
        // Find the last complete closing tag and add the missing parts
        const lastDivIndex = fixedContent.lastIndexOf('</div>');
        if (lastDivIndex !== -1) {
          fixedContent = fixedContent.substring(0, lastDivIndex + 6);
        }
      }
      
      // Add the missing closing parts
      if (!fixedContent.includes('export default')) {
        fixedContent += `
  );
};

export default AiAutomationPage;`;
      }
      
      // Write the fixed content back
      fs.writeFileSync(filePath, fixedContent, 'utf8');
      console.log(`Fixed ${filePath}`);
    } else {
      console.log(`File ${filePath} appears to be complete`);
    }
    
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
}

// Fix all files
filesToFix.forEach(filePath => {
  const fullPath = path.join(__dirname, filePath);
  if (fs.existsSync(fullPath)) {
    fixIncompleteFile(fullPath);
  } else {
    console.log(`File not found: ${fullPath}`);
  }
});

console.log('File fixing completed!');