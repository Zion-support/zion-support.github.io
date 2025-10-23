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

function getComponentName(filePath) {
  const fileName = path.basename(filePath, '.tsx');
  const words = fileName.split('-');
  return words.map(word => word.charAt(0).toUpperCase() + word.slice(1)).join('') + 'Page';
}

function fixFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const componentName = getComponentName(filePath);
    
    // Find the last complete section before the broken part
    const lines = content.split('\n');
    let lastGoodLine = -1;
    
    for (let i = lines.length - 1; i >= 0; i--) {
      if (lines[i].trim() === '</div>' && i > 0 && lines[i-1].trim().includes('</section>')) {
        lastGoodLine = i;
        break;
      }
    }
    
    if (lastGoodLine === -1) {
      console.log(`Could not find proper structure in ${filePath}`);
      return;
    }
    
    // Rebuild the file with proper structure
    const goodLines = lines.slice(0, lastGoodLine + 1);
    const fixedContent = goodLines.join('\n') + `

      <Footer />
    </div>
  );
};

export default ${componentName};
`;
    
    fs.writeFileSync(filePath, fixedContent);
    console.log(`Fixed file: ${filePath}`);
    
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
}

// Fix all files
filesToFix.forEach(filePath => {
  const fullPath = path.join(__dirname, filePath);
  if (fs.existsSync(fullPath)) {
    fixFile(fullPath);
  } else {
    console.log(`File not found: ${fullPath}`);
  }
});

console.log('All files fixed!');