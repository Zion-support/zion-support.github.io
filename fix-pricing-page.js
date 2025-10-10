#!/usr/bin/env node

import fs from 'fs';

const filePath = '/workspace/app/pricing/page.tsx';

try {
  console.log('Fixing pricing page...');
  const content = fs.readFileSync(filePath, 'utf8');
  
  // Fix the malformed JSX structure
  const fixed = content.replace(
    /(\s*)(<\/section>\s*<\/div>\s*<>\/>\s*\);\s*\};\s*export default PricingPage;)$/s,
    '$1      </section>\n    </div>\n  </>\n  );\n};\n\nexport default PricingPage;'
  );
  
  fs.writeFileSync(filePath, fixed);
  console.log('✓ Fixed pricing page');
} catch (error) {
  console.error('Error fixing pricing page:', error.message);
}