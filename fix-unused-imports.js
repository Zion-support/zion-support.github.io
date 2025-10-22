import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// List of files with unused imports
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
  'app/analytics-tools/page.tsx',
  'app/ar-vr-solutions/page.tsx',
  'app/autonomous-systems/page.tsx',
  'app/backup-recovery/page.tsx',
  'app/blockchain-integration-services/page.tsx',
  'app/business-apps/page.tsx',
  'app/business-intelligence/page.tsx',
  'app/cloud-migration/page.tsx',
  'app/cloud-security/page.tsx',
  'app/consultation/page.tsx',
  'app/iot-edge-computing/page.tsx',
  'app/it-infrastructure/page.tsx',
  'app/it-support/page.tsx',
  'app/micro-saas/page.tsx',
  'app/quantum-computing/page.tsx'
];

function fixUnusedImports(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Remove unused imports from lucide-react
    content = content.replace(/import { [^}]*Phone[^}]* } from 'lucide-react';/g, '');
    content = content.replace(/import { [^}]*Mail[^}]* } from 'lucide-react';/g, '');
    content = content.replace(/import { [^}]*MapPin[^}]* } from 'lucide-react';/g, '');
    content = content.replace(/import { [^}]*Globe[^}]* } from 'lucide-react';/g, '');
    content = content.replace(/import { [^}]*ArrowRight[^}]* } from 'lucide-react';/g, '');
    content = content.replace(/import { [^}]*Zap[^}]* } from 'lucide-react';/g, '');
    content = content.replace(/import { [^}]*Shield[^}]* } from 'lucide-react';/g, '');
    content = content.replace(/import { [^}]*Brain[^}]* } from 'lucide-react';/g, '');
    
    // Clean up any empty import lines
    content = content.replace(/import { } from 'lucide-react';\n/g, '');
    content = content.replace(/import { } from 'lucide-react';\n/g, '');
    
    // Clean up multiple empty lines
    content = content.replace(/\n\s*\n\s*\n/g, '\n\n');
    
    fs.writeFileSync(filePath, content);
    console.log(`Fixed unused imports in ${filePath}`);
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
}

// Fix all files
filesToFix.forEach(file => {
  const fullPath = path.join(__dirname, file);
  if (fs.existsSync(fullPath)) {
    fixUnusedImports(fullPath);
  } else {
    console.log(`File not found: ${fullPath}`);
  }
});

console.log('Unused import resolution completed!');