const fs = require('fs');
const path = require('path');

// List of files that need Navigation and Footer imports
const filesToFix = [
  'app/legal-document-manager/page.tsx',
  'app/medical-records-manager/page.tsx',
  'app/micro-saas-services/ai-analytics-dashboard/page.tsx',
  'app/micro-saas-services/ai-chatbot-builder/page.tsx',
  'app/micro-saas-services/ai-content-generator/page.tsx',
  'app/micro-saas-services/ai-email-assistant/page.tsx',
  'app/micro-saas-services/ai-lead-generation/page.tsx',
  'app/micro-saas-services/page.tsx',
  'app/online-learning-platform/page.tsx',
  'app/property-management-ai/page.tsx',
  'app/supply-chain-optimizer/page.tsx',
  'app/test/page.tsx',
  'app/zion-ai-api-tester/page.tsx',
  'app/zion-ai-database-optimizer/page.tsx'
];

// Files that need icon imports as well
const filesWithIcons = [
  'app/5g-mobile-applications/page.tsx'
];

function fixFile(filePath) {
  try {
    const fullPath = path.join(__dirname, filePath);
    let content = fs.readFileSync(fullPath, 'utf8');
    
    // Check if imports are already present
    if (content.includes('import Navigation') || content.includes('import Footer')) {
      console.log(`Skipping ${filePath} - imports already present`);
      return;
    }
    
    // Find the export const metadata line
    const metadataMatch = content.match(/export const metadata = \{/);
    if (!metadataMatch) {
      console.log(`Skipping ${filePath} - no metadata found`);
      return;
    }
    
    const insertIndex = metadataMatch.index;
    
    // Determine the correct import path based on file location
    const depth = filePath.split('/').length - 2; // -2 for 'app' and filename
    const importPath = '../'.repeat(depth) + 'components';
    
    // Add imports
    const imports = `import React from 'react';
import Navigation from '${importPath}/Navigation';
import Footer from '${importPath}/Footer';

`;
    
    // Insert imports before metadata
    content = content.slice(0, insertIndex) + imports + content.slice(insertIndex);
    
    // Fix function declarations to be default exports
    content = content.replace(/^const \w+Page: React\.FC = \(\) => \{/gm, 'export default function Page() {');
    content = content.replace(/^function \w+Page\(\) \{/gm, 'export default function Page() {');
    
    fs.writeFileSync(fullPath, content);
    console.log(`Fixed ${filePath}`);
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
}

function fixFileWithIcons(filePath) {
  try {
    const fullPath = path.join(__dirname, filePath);
    let content = fs.readFileSync(fullPath, 'utf8');
    
    // Check if imports are already present
    if (content.includes('import Navigation') || content.includes('import Footer')) {
      console.log(`Skipping ${filePath} - imports already present`);
      return;
    }
    
    // Find the export const metadata line
    const metadataMatch = content.match(/export const metadata = \{/);
    if (!metadataMatch) {
      console.log(`Skipping ${filePath} - no metadata found`);
      return;
    }
    
    const insertIndex = metadataMatch.index;
    
    // Determine the correct import path based on file location
    const depth = filePath.split('/').length - 2; // -2 for 'app' and filename
    const importPath = '../'.repeat(depth) + 'components';
    
    // Add imports with common icons
    const imports = `import React from 'react';
import { Brain, BarChart, Target, TrendingUp, ArrowRight, CheckCircle, Shield, Zap, Users, Globe } from 'lucide-react';
import Navigation from '${importPath}/Navigation';
import Footer from '${importPath}/Footer';

`;
    
    // Insert imports before metadata
    content = content.slice(0, insertIndex) + imports + content.slice(insertIndex);
    
    // Fix function declarations to be default exports
    content = content.replace(/^const \w+Page: React\.FC = \(\) => \{/gm, 'export default function Page() {');
    content = content.replace(/^function \w+Page\(\) \{/gm, 'export default function Page() {');
    
    fs.writeFileSync(fullPath, content);
    console.log(`Fixed ${filePath} with icons`);
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
}

// Fix all files
console.log('Fixing files with missing imports...');
filesToFix.forEach(fixFile);
filesWithIcons.forEach(fixFileWithIcons);

console.log('Done!');