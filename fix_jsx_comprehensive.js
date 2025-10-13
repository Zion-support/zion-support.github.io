#!/usr/bin/env node

import fs from 'fs';
import path from 'path';

// List of files with JSX errors
const problematicFiles = [
  'app/ai-chatbot-builder/page.tsx',
  'app/ai-mobile-app-builder/page.tsx',
  'app/ai-mobile-builder/page.tsx',
  'app/ai-website-builder/page.tsx',
  'app/cloud-infrastructure-management/page.tsx',
  'app/cybersecurity-solutions/page.tsx',
  'app/landing-page-builder/page.tsx',
  'app/micro-saas-services/ai-chatbot-builder/page.tsx',
  'app/pricing/page.tsx',
  'app/quantum-data-encryption-vault/page.tsx',
  'app/zion-ai-analytics-pro/page.tsx',
  'app/zion-ai-crm-pro/page.tsx',
  'app/zion-ai-customer-churn-predictor-pro/page.tsx',
  'app/zion-ai-email-marketing-pro/page.tsx',
  'app/zion-ai-inventory-manager/page.tsx',
  'app/zion-ai-inventory-optimizer-pro/page.tsx',
  'app/zion-ai-survey-builder/page.tsx',
  'app/components/ImageOptimizer.tsx'
];

function fixFile(filePath) {
  console.log(`Fixing ${filePath}...`);
  
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Remove the first incomplete function declaration
  const firstFunctionMatch = content.match(/export default function PageTsxPage\(\)\s*\{[^}]*\}\s*export default function/);
  if (firstFunctionMatch) {
    content = content.replace(/export default function PageTsxPage\(\)\s*\{[^}]*\}\s*/, '');
  }
  
  // Fix missing closing tags by adding proper structure
  if (content.includes('export default function') && !content.trim().endsWith('}')) {
    // Find the last complete JSX element and add proper closing
    const lines = content.split('\n');
    let inJSX = false;
    let openDivs = 0;
    let lastJSXLine = -1;
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      if (line.includes('<div')) {
        inJSX = true;
        openDivs++;
        lastJSXLine = i;
      }
      if (line.includes('</div>')) {
        openDivs--;
      }
    }
    
    // Add missing closing divs
    if (openDivs > 0) {
      for (let i = 0; i < openDivs; i++) {
        content += '\n    </div>';
      }
    }
    
    // Add proper function closing
    content += '\n  );\n}';
  }
  
  // Fix specific parameter issues
  if (filePath.includes('ImageOptimizer')) {
    content = content.replace(/quality\?\s*:\s*number;\s*lazy\s*=\s*true,\s*placeholder\s*lazy\s*=\s*true/gs, 'quality?: number;\n  lazy = true,\n  placeholder?: string');
  }
  
  // Fix missing commas in function parameters
  content = content.replace(/(\w+)\s*=\s*true\s*\n\s*placeholder/gs, '$1 = true,\n  placeholder');
  
  // Write the fixed content back
  fs.writeFileSync(filePath, content);
  console.log(`Fixed ${filePath}`);
}

// Fix all problematic files
problematicFiles.forEach(filePath => {
  const fullPath = path.join(process.cwd(), filePath);
  if (fs.existsSync(fullPath)) {
    fixFile(fullPath);
  } else {
    console.log(`File not found: ${fullPath}`);
  }
});

console.log('Comprehensive JSX fixes completed!');