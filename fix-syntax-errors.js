#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

// Get list of files with TypeScript errors
const filesWithErrors = [
  'app/ai-autonomous-systems/page.tsx',
  'app/ai-blockchain-analytics/page.tsx', 
  'app/ai-blockchain-solutions/page.tsx',
  'app/ai-cloud-infrastructure/page.tsx',
  'app/ai-code-assistant/page.tsx',
  'app/ai-code-security-auditor/page.tsx',
  'app/ai-computer-vision/page.tsx',
  'app/ai-content-delivery-network/page.tsx',
  'app/ai-content-generation/page.tsx',
  'app/ai-content-studio/page.tsx',
  'app/ai-content-writer/page.tsx',
  'app/ai-crm-assistant/page.tsx',
  'app/ai-climate-solutions-pro/page.tsx'
];

console.log(`Fixing syntax errors in ${filesWithErrors.length} files`);

filesWithErrors.forEach(filePath => {
  if (!fs.existsSync(filePath)) {
    console.log(`File not found: ${filePath}`);
    return;
  }
  
  console.log(`Fixing: ${filePath}`);
  
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Fix common JSX issues
  // Fix missing closing tags
  content = content.replace(/(\s*)<\/div>\s*<\/div>\s*<\/section>/g, '$1</div>\n          </div>\n        </section>');
  
  // Fix malformed JSX fragments
  content = content.replace(/<>\s*<\/>/g, '');
  
  // Fix missing closing tags for sections
  content = content.replace(/(<section[^>]*>[\s\S]*?)(?=\n\s*<section|\n\s*<\/div>\s*$)/g, (match) => {
    if (!match.includes('</section>')) {
      return match + '\n        </section>';
    }
    return match;
  });
  
  // Fix missing closing tags for divs
  content = content.replace(/(<div[^>]*>[\s\S]*?)(?=\n\s*<div|\n\s*<\/section>|\n\s*$)/g, (match) => {
    if (!match.includes('</div>') && match.includes('<div')) {
      return match + '\n          </div>';
    }
    return match;
  });
  
  // Clean up extra closing tags
  content = content.replace(/(<\/div>\s*){2,}/g, '</div>');
  
  // Fix malformed JSX expressions
  content = content.replace(/\}\s*\)\s*\)\s*\)/g, '}');
  
  // Fix missing semicolons
  content = content.replace(/(\w+)\s*\)\s*$/gm, '$1);');
  
  // Clean up extra whitespace and newlines
  content = content.replace(/\n\s*\n\s*\n/g, '\n\n');
  
  fs.writeFileSync(filePath, content);
  console.log(`Fixed: ${filePath}`);
});

console.log('Syntax errors fixed!');