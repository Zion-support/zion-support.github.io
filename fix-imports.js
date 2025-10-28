#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// List of files to fix
const filesToFix = [
  'app/5g-data-analytics/page.tsx',
  'app/5g-edge-computing/page.tsx',
  'app/5g-implementation/page.tsx',
  'app/5g-iot-solutions/page.tsx',
  'app/about/page.tsx',
  'app/accessibility-page/page.tsx',
  'app/ai-powered-devops/page.tsx',
  'app/ai-powered-email-analyzer/page.tsx',
  'app/legal-document-manager/page.tsx',
  'app/medical-records-manager/page.tsx',
  'app/online-learning-platform/page.tsx',
  'app/property-management-ai/page.tsx',
  'app/supply-chain-optimizer/page.tsx',
  'app/test/page.tsx',
  'app/zion-ai-api-tester/page.tsx',
  'app/zion-ai-database-optimizer/page.tsx',
  'app/page.tsx',
  'app/offline/page.tsx'
];

// Fix each file
filesToFix.forEach(filePath => {
  const fullPath = path.join(__dirname, filePath);
  
  if (fs.existsSync(fullPath)) {
    console.log(`Fixing imports in ${filePath}...`);
    
    let content = fs.readFileSync(fullPath, 'utf8');
    
    // Fix ErrorBoundary import
    content = content.replace(
      /import { ErrorBoundary } from ['"]([^'"]+)['"];?/g,
      'import ErrorBoundary from "$1";'
    );
    
    // Fix props type
    content = content.replace(
      /export default function Wrapped\(props\)/g,
      'export default function Wrapped(props: Record<string, unknown>)'
    );
    
    fs.writeFileSync(fullPath, content);
    console.log(`Fixed ${filePath}`);
  } else {
    console.log(`File not found: ${filePath}`);
  }
});

console.log('All import fixes completed!');