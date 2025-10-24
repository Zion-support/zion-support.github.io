#!/usr/bin/env node

const fs = require('fs');

// Fix the broken import statements
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
  
  // Remove the broken import block and replace with proper imports
  content = content.replace(/import\s*{\s*[\s\S]*?}\s*from\s*'@heroicons\/react\/24\/outline';\n?/g, '');
  
  // Add only the needed imports
  const neededImports = `import { 
  UserGroupIcon, 
  ChartBarIcon, 
  CogIcon, 
  ShieldCheckIcon, 
  SparklesIcon, 
  CheckCircleIcon, 
  StarIcon
} from '@heroicons/react/24/outline';
`;
  
  // Find the first import and add before it
  const firstImportIndex = content.indexOf('import');
  if (firstImportIndex !== -1) {
    content = neededImports + content;
  }
  
  fs.writeFileSync(filePath, content);
  console.log(`Fixed imports in: ${filePath}`);
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

console.log('All import issues fixed!');