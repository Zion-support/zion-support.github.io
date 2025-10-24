#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Files to fix
const filesToFix = [
  'app/zion-ai-content-moderator/page.tsx',
  'app/zion-ai-customer-churn-predictor/page.tsx',
  'app/zion-ai-customer-sentiment-tracker/page.tsx',
  'app/zion-ai-document-analyzer/page.tsx',
  'app/zion-ai-financial-forecaster/page.tsx',
  'app/zion-ai-meeting-transcriber/page.tsx',
  'app/zion-ai-sales-predictor/page.tsx',
  'app/zion-ai-workflow-automator/page.tsx',
  'app/zion-smart-expense-tracker/page.tsx',
  'app/ai-crm-optimizer/page.tsx',
  'app/ai-data-visualizer/page.tsx',
  'app/ai-email-optimizer/page.tsx',
  'app/expense-tracker-pro/page.tsx',
  'app/it-solutions/page.tsx',
  'app/social-media-scheduler/page.tsx'
];

function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Remove unused React import
    content = content.replace(/import React from 'react';\n/g, '');
    content = content.replace(/import React, {/g, 'import {');
    
    // Remove unused icon imports (common patterns)
    const unusedIcons = [
      'ArrowRightIcon', 'CurrencyDollarIcon', 'ClockIcon', 'CogIcon', 
      'ShieldCheckIcon', 'EnvelopeIcon', 'EyeIcon', 'CpuChipIcon',
      'RocketLaunchIcon', 'ChartBarIcon'
    ];
    
    unusedIcons.forEach(icon => {
      const regex = new RegExp(`import {[^}]*${icon}[^}]*} from '@heroicons/react/24/outline';\n?`, 'g');
      content = content.replace(regex, '');
    });
    
    // Clean up empty import lines
    content = content.replace(/import\s*{\s*}\s*from\s*'@heroicons\/react\/24\/outline';\n?/g, '');
    content = content.replace(/import\s*{\s*}\s*from\s*'lucide-react';\n?/g, '');
    
    // Remove empty lines at the top
    content = content.replace(/^\s*\n+/, '');
    
    fs.writeFileSync(filePath, content);
    console.log(`Fixed: ${filePath}`);
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
}

// Fix all files
filesToFix.forEach(fixFile);

console.log('TypeScript error fixes completed!');