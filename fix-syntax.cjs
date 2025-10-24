#!/usr/bin/env node

const fs = require('fs');

// Fix the corrupted object syntax in page files
const pageFiles = [
  'app/ai-crm-optimizer/page.tsx',
  'app/ai-data-visualizer/page.tsx',
  'app/ai-email-optimizer/page.tsx',
  'app/expense-tracker-pro/page.tsx',
  'app/it-solutions/page.tsx',
  'app/social-media-scheduler/page.tsx'
];

pageFiles.forEach(filePath => {
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Fix the corrupted icon:title syntax
  content = content.replace(/icon:title:/g, 'icon: UserGroupIcon,\n      title:');
  content = content.replace(/icon:description:/g, 'icon: UserGroupIcon,\n      description:');
  content = content.replace(/icon:benefits:/g, 'icon: UserGroupIcon,\n      benefits:');
  
  // Fix any remaining corrupted syntax
  content = content.replace(/icon:([^,}]+):/g, 'icon: UserGroupIcon,\n      $1:');
  
  fs.writeFileSync(filePath, content);
  console.log(`Fixed syntax in: ${filePath}`);
});

// Fix error handler
const errorHandlerPath = 'app/utils/errorHandler.ts';
let content = fs.readFileSync(errorHandlerPath, 'utf8');

// Fix the broken return statement
content = content.replace(/return \{[\s\S]*?message: 'An unexpected error occurred',[\s\S]*?code: 'UNKNOWN_ERROR',[\s\S]*?\};/g,
  `return {
    message: 'An unexpected error occurred',
    code: 'UNKNOWN_ERROR',
  };`);

fs.writeFileSync(errorHandlerPath, content);
console.log('Fixed error handler');

console.log('All syntax issues fixed!');