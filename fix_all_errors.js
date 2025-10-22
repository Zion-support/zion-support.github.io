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

function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Extract the page name from the file path
    const pageName = path.basename(path.dirname(filePath))
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join('') + 'Page';
    
    console.log(`Fixing ${filePath} - Component name: ${pageName}`);
    
    // Fix imports - remove unused imports and add Helmet
    const importLines = content.split('\n').filter(line => line.startsWith('import'));
    const usedImports = new Set();
    
    // Check which imports are actually used
    if (content.includes('CheckCircle')) usedImports.add('CheckCircle');
    if (content.includes('ArrowRight')) usedImports.add('ArrowRight');
    if (content.includes('Zap')) usedImports.add('Zap');
    if (content.includes('Shield')) usedImports.add('Shield');
    if (content.includes('Brain')) usedImports.add('Brain');
    if (content.includes('Navigation')) usedImports.add('Navigation');
    if (content.includes('Footer')) usedImports.add('Footer');
    
    // Build the new import section
    let newImports = `'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { CheckCircle, ArrowRight, Zap, Shield, Brain } from 'lucide-react';`;
    
    // Replace the import section
    const importEndIndex = content.indexOf('const ' + pageName);
    if (importEndIndex === -1) {
      // Try alternative component name patterns
      const altPatterns = [
        'const AiAutomationPage',
        'const AiCustomerSupportPage',
        'const AiCybersecurityPage',
        'const AiDataAnalyticsPage',
        'const AiDataVisualizationPage',
        'const AiFintechPage',
        'const AiHealthcarePage',
        'const AiMarketingPage',
        'const AiSalesAutomationPage',
        'const AiWorkflowAutomationPage',
        'const ARVRSolutionsPage',
        'const AutonomousSystemsPage',
        'const ConsultationPage',
        'const IoTEdgeComputingPage',
        'const ItInfrastructurePage',
        'const ItSupportPage',
        'const MicroSaasPage',
        'const QuantumComputingPage',
        'const StatusPage'
      ];
      
      for (const pattern of altPatterns) {
        const index = content.indexOf(pattern);
        if (index !== -1) {
          content = newImports + '\n\n' + content.substring(index);
          break;
        }
      }
    } else {
      content = newImports + '\n\n' + content.substring(importEndIndex);
    }
    
    // Fix the component name and export
    content = content.replace(/const \w+Page: React\.FC = \(\) => \{/, `const ${pageName}: React.FC = () => {`);
    content = content.replace(/export default \w+Page;/, `export default ${pageName};`);
    
    // Write the fixed content back
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Fixed ${filePath}`);
    
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