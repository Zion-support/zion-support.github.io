import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// List of files that need import fixes
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

function fixMissingImports(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Add the necessary imports back
    const importLine = "import { CheckCircle, ArrowRight, Phone, Mail, MapPin, Zap, Shield, Brain, Globe, Database, Clock, ShieldCheck, Smartphone, Monitor, Cloud, BarChart, TrendingUp, Eye, Users } from 'lucide-react';";
    
    // Find the line with Navigation import and add the lucide-react import after it
    const navigationImportIndex = content.indexOf("import Navigation from '../components/Navigation';");
    if (navigationImportIndex !== -1) {
      const nextLineIndex = content.indexOf('\n', navigationImportIndex) + 1;
      content = content.slice(0, nextLineIndex) + importLine + '\n' + content.slice(nextLineIndex);
    } else {
      // If no Navigation import, add at the top after the first import
      const firstImportEnd = content.indexOf('\n', content.indexOf('import')) + 1;
      content = content.slice(0, firstImportEnd) + importLine + '\n' + content.slice(firstImportEnd);
    }
    
    fs.writeFileSync(filePath, content);
    console.log(`Fixed missing imports in ${filePath}`);
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
}

// Fix all files
filesToFix.forEach(file => {
  const fullPath = path.join(__dirname, file);
  if (fs.existsSync(fullPath)) {
    fixMissingImports(fullPath);
  } else {
    console.log(`File not found: ${fullPath}`);
  }
});

console.log('Missing import resolution completed!');