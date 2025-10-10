#!/usr/bin/env node

import fs from 'fs';

const filePath = '/workspace/app/pricing/page.tsx';

try {
  console.log('Manually fixing pricing page...');
  const content = fs.readFileSync(filePath, 'utf8');
  
  // Find the last section and fix the structure
  const lines = content.split('\n');
  const fixedLines = [];
  let inLastSection = false;
  
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    
    if (line.includes('Is there a contract commitment?')) {
      inLastSection = true;
    }
    
    if (inLastSection && line.includes('</section>')) {
      fixedLines.push(line);
      fixedLines.push('      </div>');
      fixedLines.push('    </>');
      fixedLines.push('  );');
      fixedLines.push('};');
      fixedLines.push('');
      fixedLines.push('export default PricingPage;');
      break;
    } else {
      fixedLines.push(line);
    }
  }
  
  const fixed = fixedLines.join('\n');
  fs.writeFileSync(filePath, fixed);
  console.log('✓ Manually fixed pricing page');
} catch (error) {
  console.error('Error fixing pricing page:', error.message);
}