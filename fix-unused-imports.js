import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// List of files that have unused React imports
const filesToFix = [
  'app/5g-data-analytics/page.tsx',
  'app/5g-edge-computing/page.tsx',
  'app/5g-implementation/page.tsx',
  'app/5g-iot-solutions/page.tsx',
  'app/accessibility-page/page.tsx',
  'app/ai-robotics/page.tsx',
  'app/ai-scheduler/page.tsx',
  'app/ai-scheduling-assistant/page.tsx',
  'app/components/Footer.tsx',
  'app/components/InteractiveAIROICalculator.tsx',
  'app/components/Navigation.tsx',
  'app/ecommerce-analytics-pro/page.tsx',
  'app/error.tsx',
  'app/global-error.tsx',
  'app/it-services/cybersecurity-audit/page.tsx',
  'app/legal-document-manager/page.tsx',
  'app/loading.tsx',
  'app/low-code-platform/page.tsx',
  'app/machine-learning/page.tsx',
  'app/medical-records-manager/page.tsx',
  'app/not-found.tsx',
  'app/online-learning-platform/page.tsx',
  'app/property-management-ai/page.tsx',
  'app/supply-chain-optimizer/page.tsx',
  'app/test/page.tsx'
];

filesToFix.forEach(filePath => {
  const fullPath = path.join(__dirname, filePath);
  if (fs.existsSync(fullPath)) {
    let content = fs.readFileSync(fullPath, 'utf8');
    
    // Remove unused React import
    content = content.replace(/^import React from 'react';\n/gm, '');
    
    fs.writeFileSync(fullPath, content);
    console.log(`Fixed: ${filePath}`);
  } else {
    console.log(`File not found: ${filePath}`);
  }
});

console.log('Fixed unused React imports');