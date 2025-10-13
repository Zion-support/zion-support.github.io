#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// List of files with merge conflicts
const filesToFix = [
  'app/ai-website-builder/page.tsx',
  'app/cloud-infrastructure-management/page.tsx',
  'app/components/FuturisticText.tsx',
  'app/landing-page-builder/page.tsx',
  'app/pricing/page.tsx',
  'app/quantum-data-encryption-vault/page.tsx',
  'app/zion-ai-analytics-pro/page.tsx',
  'app/zion-ai-crm-pro/page.tsx',
  'app/zion-ai-customer-churn-predictor-pro/page.tsx',
  'app/zion-ai-email-marketing-pro/page.tsx',
  'app/zion-ai-inventory-manager/page.tsx',
  'app/zion-ai-inventory-optimizer-pro/page.tsx',
  'app/zion-ai-survey-builder/page.tsx'
];

function fixMergeConflicts(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Remove merge conflict markers and keep the HEAD version (first part)
    content = content.replace(/<<<<<<< HEAD\n([\s\S]*?)=======\n([\s\S]*?)>>>>>>> [^\n]+\n/g, '$1');
    
    // Clean up any remaining merge conflict markers
    content = content.replace(/<<<<<<< [^\n]+\n/g, '');
    content = content.replace(/=======\n/g, '');
    content = content.replace(/>>>>>>> [^\n]+\n/g, '');
    
    // Ensure proper React imports
    if (!content.includes("import React from 'react'")) {
      content = "import React from 'react';\n" + content;
    }
    
    // Ensure Helmet import if not present
    if (content.includes('<Helmet>') && !content.includes("import { Helmet }")) {
      content = content.replace(
        /import React from 'react';/,
        "import React from 'react';\nimport { Helmet } from 'react-helmet-async';"
      );
    }
    
    // Standardize the theme to dark theme (slate-900 via-purple-900 to-slate-900)
    content = content.replace(
      /bg-gradient-to-br from-blue-50 to-indigo-100/g,
      'bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900'
    );
    
    // Update text colors for dark theme
    content = content.replace(/text-gray-900/g, 'text-white');
    content = content.replace(/text-gray-600/g, 'text-gray-300');
    
    // Update background colors for dark theme
    content = content.replace(/bg-white rounded-lg shadow-md/g, 'bg-white/10 backdrop-blur-sm rounded-xl border border-white/20');
    
    // Ensure proper function naming (PascalCase)
    const functionMatch = content.match(/export default function (\w+)/);
    if (functionMatch) {
      const functionName = functionMatch[1];
      const properName = functionName.charAt(0).toUpperCase() + functionName.slice(1);
      if (functionName !== properName) {
        content = content.replace(new RegExp(`export default function ${functionName}`, 'g'), `export default function ${properName}`);
      }
    }
    
    // Write the fixed content back
    fs.writeFileSync(filePath, content);
    console.log(`Fixed merge conflicts in: ${filePath}`);
    
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
}

// Fix all files
filesToFix.forEach(filePath => {
  const fullPath = path.join(__dirname, filePath);
  if (fs.existsSync(fullPath)) {
    fixMergeConflicts(fullPath);
  } else {
    console.log(`File not found: ${fullPath}`);
  }
});

console.log('Merge conflict fixing completed!');