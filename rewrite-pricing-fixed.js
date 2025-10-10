#!/usr/bin/env node

import fs from 'fs';

const filePath = '/workspace/app/pricing/page.tsx';

try {
  console.log('Rewriting pricing page...');
  const content = fs.readFileSync(filePath, 'utf8');
  
  // Find the return statement and fix the structure
  const returnIndex = content.indexOf('return (');
  if (returnIndex === -1) {
    console.log('No return statement found');
    process.exit(1);
  }
  
  const beforeReturn = content.substring(0, returnIndex);
  const afterReturn = content.substring(returnIndex);
  
  // Fix the JSX structure
  const fixedAfterReturn = afterReturn.replace(
    /return \(\s*<>/,
    'return (\n    <>\n      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">'
  ).replace(
    /<\/section>\s*<\/div>\s*<>\/>/,
    '</section>\n      </div>\n    </>'
  );
  
  const fixed = beforeReturn + fixedAfterReturn;
  fs.writeFileSync(filePath, fixed);
  console.log('✓ Rewrote pricing page');
} catch (error) {
  console.error('Error rewriting pricing page:', error.message);
}