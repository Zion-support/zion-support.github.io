#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { glob } from 'glob';

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
  
  // Fix duplicate function declarations - keep the second one
  const duplicateFunctionRegex = /export default function \w+\([^)]*\)\s*\{[^}]*\}\s*export default function/gs;
  content = content.replace(duplicateFunctionRegex, (match) => {
    const parts = match.split('export default function');
    return 'export default function' + parts[parts.length - 1];
  });
  
  // Fix incomplete function declarations at the beginning
  const incompleteFunctionRegex = /^export default function \w+\([^)]*\)\s*\{[^}]*\}\s*export default function/gs;
  content = content.replace(incompleteFunctionRegex, (match) => {
    const parts = match.split('export default function');
    return 'export default function' + parts[parts.length - 1];
  });
  
  // Fix missing closing tags - add proper closing structure
  if (content.includes('export default function') && !content.includes('}')) {
    // Find the last opening div and add proper closing
    const lastDivIndex = content.lastIndexOf('<div');
    if (lastDivIndex !== -1) {
      const beforeLastDiv = content.substring(0, lastDivIndex);
      const afterLastDiv = content.substring(lastDivIndex);
      
      // Count opening and closing divs
      const openDivs = (beforeLastDiv.match(/<div/g) || []).length;
      const closeDivs = (beforeLastDiv.match(/<\/div>/g) || []).length;
      const missingDivs = openDivs - closeDivs;
      
      // Add missing closing divs
      let closingDivs = '';
      for (let i = 0; i < missingDivs; i++) {
        closingDivs += '\n    </div>';
      }
      
      content = beforeLastDiv + afterLastDiv + closingDivs + '\n  );\n}';
    }
  }
  
  // Fix specific ImageOptimizer issues
  if (filePath.includes('ImageOptimizer')) {
    // Remove duplicate function declarations
    content = content.replace(/export default function ImageOptimizer[^}]*\}\s*export default function ImageOptimizer/gs, 'export default function ImageOptimizer');
    
    // Fix parameter syntax
    content = content.replace(/quality\?\s*:\s*number;\s*lazy\s*=\s*true,\s*placeholder\s*lazy\s*=\s*true/gs, 'quality?: number;\n  lazy = true,\n  placeholder?: string');
  }
  
  // Fix missing commas in function parameters
  content = content.replace(/(\w+)\s*=\s*true\s*\n\s*placeholder/gs, '$1 = true,\n  placeholder');
  
  // Fix missing closing braces
  if (content.includes('export default function') && !content.trim().endsWith('}')) {
    content = content.trim() + '\n}';
  }
  
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

console.log('JSX fixes completed!');