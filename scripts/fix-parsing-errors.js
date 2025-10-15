#!/usr/bin/env node

import fs from 'fs';
import path from 'path';

// List of files with parsing errors
const problematicFiles = [
  'app/ai-customer-sentiment-tracker/page.tsx',
  'app/ai-customer-support-chatbot/page.tsx',
  'app/ai-ecommerce-optimizer-pro/page.tsx',
  'app/ai-email-assistant/page.tsx',
  'app/ai-expense-tracker/page.tsx',
  'app/ai-financial-analytics-pro/page.tsx',
  'app/ai-healthcare-diagnostics/page.tsx',
  'app/ai-marketing-automation/page.tsx',
  'app/ai-powered-devops/page.tsx',
  'app/ai-powered-email-analyzer/page.tsx',
  'app/ai-project-management-pro/page.tsx',
  'app/ai-quantum-computing/page.tsx',
  'app/ai-smart-scheduler/page.tsx',
  'app/ai-supply-chain-optimizer/page.tsx',
  'app/ai-translation-service/page.tsx',
  'app/blockchain-web3/page.tsx',
  'app/careers/page.tsx',
  'app/cloud-infrastructure-management/page.tsx',
  'app/cloud-migration-pro/page.tsx',
  'app/cloud-services/page.tsx',
  'app/compliance/page.tsx'
];

// Function to fix a specific file
function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Fix common parsing issues
    content = content.replace(/const\s+\w+\s*=\s*\(\s*\)\s*=>\s*{\s*{/g, 'const features = [');
    content = content.replace(/}\s*$/g, '}];');
    content = content.replace(/const\s+\w+\s*=\s*\[\s*{/g, 'const features = [');
    content = content.replace(/}\s*];\s*$/g, '}];');
    
    // Fix missing imports
    if (!content.includes("import { Helmet } from 'react-helmet-async'")) {
      content = content.replace(
        /import React from 'react';/,
        "import React from 'react';\nimport { Helmet } from 'react-helmet-async';"
      );
    }
    
    if (!content.includes("import { Link } from 'react-router-dom'")) {
      content = content.replace(
        /import { Helmet } from 'react-helmet-async';/,
        "import { Helmet } from 'react-helmet-async';\nimport { Link } from 'react-router-dom';"
      );
    }
    
    // Fix missing motion import
    if (!content.includes("import { motion } from 'framer-motion'")) {
      content = content.replace(
        /import { Link } from 'react-router-dom';/,
        "import { Link } from 'react-router-dom';\nimport { motion } from 'framer-motion';"
      );
    }
    
    // Fix function declarations
    content = content.replace(/const\s+(\w+)\s*=\s*\(\s*\)\s*=>\s*{\s*$/gm, 'const $1 = () => {\n  const features = [');
    
    // Ensure proper closing
    if (!content.includes('export default')) {
      content += '\n\nexport default AICustomerSentimentTrackerPage;';
    }
    
    fs.writeFileSync(filePath, content);
    console.log(`Fixed parsing errors in: ${filePath}`);
    return true;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

// Main execution
console.log('🔧 Fixing parsing errors...');

let fixedCount = 0;
problematicFiles.forEach(file => {
  if (fs.existsSync(file)) {
    if (fixFile(file)) {
      fixedCount++;
    }
  }
});

console.log(`✅ Fixed parsing errors in ${fixedCount} files`);
console.log('🎉 Parsing errors fix completed!');