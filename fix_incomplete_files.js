import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

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
    
    // Check if file ends properly
    if (content.trim().endsWith('</div>') && !content.includes('export default')) {
      // Add the missing closing parts
      const fixedContent = content.trim() + `
    </React.Fragment>
  );
};

export default ${getComponentName(filePath)};
`;
      
      fs.writeFileSync(filePath, fixedContent);
      console.log(`Fixed incomplete file: ${filePath}`);
    } else if (content.trim().endsWith('</div>') && content.includes('export default')) {
      console.log(`File already complete: ${filePath}`);
    } else {
      console.log(`File structure unclear for: ${filePath}`);
    }
    
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
}

function getComponentName(filePath) {
  const fileName = path.basename(filePath, '.tsx');
  const words = fileName.split('-');
  return words.map(word => word.charAt(0).toUpperCase() + word.slice(1)).join('') + 'Page';
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

console.log('Incomplete file fixing completed!');