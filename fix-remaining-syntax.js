#!/usr/bin/env node

import fs from 'fs';
import path from 'path';

// Files with syntax errors that need fixing
const filesToFix = [
  'app/api-docs/page.tsx',
  'app/backup-recovery/page.tsx',
  'app/blockchain-integration-services/page.tsx',
  'app/blockchain/page.tsx',
  'app/business-apps/page.tsx',
  'app/business-intelligence/page.tsx',
  'app/cloud-infrastructure/page.tsx',
  'app/cloud-migration-services/page.tsx',
  'app/cloud-migration/page.tsx',
  'app/cloud-security/page.tsx',
  'app/cloud-services/page.tsx',
  'app/community/page.tsx',
  'app/compliance/page.tsx'
];

console.log(`Fixing syntax errors in ${filesToFix.length} files`);

filesToFix.forEach(filePath => {
  if (!fs.existsSync(filePath)) {
    console.log(`File not found: ${filePath}`);
    return;
  }
  
  console.log(`Fixing: ${filePath}`);
  
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Fix common JSX issues
  
  // Fix orphaned closing tags
  content = content.replace(/\s*<\/h1>\s*<\/h2>\s*<\/h3>\s*<\/h4>\s*<\/h5>\s*<\/h6>\s*/g, '');
  content = content.replace(/\s*<\/h2>\s*<\/h3>\s*<\/h4>\s*<\/h5>\s*<\/h6>\s*/g, '');
  content = content.replace(/\s*<\/h3>\s*<\/h4>\s*<\/h5>\s*<\/h6>\s*/g, '');
  content = content.replace(/\s*<\/h4>\s*<\/h5>\s*<\/h6>\s*/g, '');
  content = content.replace(/\s*<\/h5>\s*<\/h6>\s*/g, '');
  
  // Fix orphaned opening tags
  content = content.replace(/\s*<h1[^>]*>\s*<h2[^>]*>\s*<h3[^>]*>\s*<h4[^>]*>\s*<h5[^>]*>\s*<h6[^>]*>\s*/g, '');
  content = content.replace(/\s*<h2[^>]*>\s*<h3[^>]*>\s*<h4[^>]*>\s*<h5[^>]*>\s*<h6[^>]*>\s*/g, '');
  content = content.replace(/\s*<h3[^>]*>\s*<h4[^>]*>\s*<h5[^>]*>\s*<h6[^>]*>\s*/g, '');
  content = content.replace(/\s*<h4[^>]*>\s*<h5[^>]*>\s*<h6[^>]*>\s*/g, '');
  content = content.replace(/\s*<h5[^>]*>\s*<h6[^>]*>\s*/g, '');
  
  // Fix mismatched div tags
  content = content.replace(/(<div[^>]*>[\s\S]*?)(<\/div>\s*){2,}/g, '$1</div>');
  
  // Fix orphaned closing divs
  content = content.replace(/\s*<\/div>\s*<\/div>\s*<\/div>\s*<\/div>\s*/g, '</div>');
  content = content.replace(/\s*<\/div>\s*<\/div>\s*<\/div>\s*/g, '</div>');
  content = content.replace(/\s*<\/div>\s*<\/div>\s*/g, '</div>');
  
  // Fix orphaned closing sections
  content = content.replace(/\s*<\/section>\s*<\/section>\s*<\/section>\s*/g, '</section>');
  content = content.replace(/\s*<\/section>\s*<\/section>\s*/g, '</section>');
  
  // Fix malformed JSX expressions
  content = content.replace(/\}\s*\)\s*\)\s*\)\s*\)/g, '}');
  content = content.replace(/\}\s*\)\s*\)\s*\)/g, '}');
  content = content.replace(/\}\s*\)\s*\)/g, '}');
  
  // Fix missing semicolons
  content = content.replace(/(\w+)\s*\)\s*$/gm, '$1);');
  
  // Fix orphaned elements
  content = content.replace(/\s*<\/h1>\s*<p[^>]*>/g, '<p>');
  content = content.replace(/\s*<\/h2>\s*<p[^>]*>/g, '<p>');
  content = content.replace(/\s*<\/h3>\s*<p[^>]*>/g, '<p>');
  
  // Clean up extra whitespace
  content = content.replace(/\n\s*\n\s*\n/g, '\n\n');
  content = content.replace(/\s+$/gm, '');
  
  // Fix specific patterns
  content = content.replace(/\s*<\/h1>\s*<\/h2>\s*<p/g, '<p');
  content = content.replace(/\s*<\/h2>\s*<p/g, '<p');
  content = content.replace(/\s*<\/h3>\s*<p/g, '<p');
  
  fs.writeFileSync(filePath, content);
  console.log(`Fixed: ${filePath}`);
});

console.log('Syntax errors fixed!');