const fs = require('fs');
const path = require('path');

// Clean unused imports from files
const cleanUnusedImports = (filePath) => {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let originalContent = content;
    
    // Remove unused CheckCircle imports
    content = content.replace(/import { [^}]*CheckCircle[^}]* } from 'lucide-react';/g, '');
    content = content.replace(/CheckCircle, /g, '');
    content = content.replace(/, CheckCircle/g, '');
    
    // Remove unused Suspense imports
    content = content.replace(/import React, { Suspense } from 'react';/g, "import React from 'react';");
    content = content.replace(/, Suspense/g, '');
    content = content.replace(/Suspense, /g, '');
    
    // Remove unused services variables
    content = content.replace(/const services = \[[\s\S]*?\];\s*/g, '');
    
    // Clean up empty import lines
    content = content.replace(/import { } from 'lucide-react';\n/g, '');
    content = content.replace(/import { } from 'react';\n/g, '');
    
    // Fix React import if needed
    if (content.includes('React.FC') && !content.includes("import React")) {
      content = "import React from 'react';\n" + content;
    }
    
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Cleaned: ${filePath}`);
      return true;
    }
    return false;
  } catch (error) {
    console.error(`Error cleaning ${filePath}:`, error.message);
    return false;
  }
};

// Files to clean
const filesToClean = [
  'app/404/page.tsx',
  'app/5g-consulting/page.tsx',
  'app/5g-data-analytics/page.tsx',
  'app/5g-edge-computing/page.tsx',
  'app/5g-implementation/page.tsx',
  'app/5g-infrastructure/page.tsx',
  'app/5g-iot-solutions/page.tsx',
  'app/5g-mobile-applications/page.tsx',
  'app/5g-network-infrastructure/page.tsx',
  'app/5g-network-optimization/page.tsx',
  'app/5g-private-networks/page.tsx',
  'app/5g-smart-city-solutions/page.tsx',
  'app/5g-solutions/page.tsx',
  'app/5g-modernization/page.tsx',
  'app/5g-monitoring/page.tsx',
  'app/5g-optimization/page.tsx',
  'app/5g-reliability/page.tsx',
  'app/5g-scalability/page.tsx',
  'app/5g-security/page.tsx',
  'app/5g-support/page.tsx',
  'app/5g-testing/page.tsx',
  'app/5g-training/page.tsx',
  'app/5g-transformation/page.tsx',
  'app/5g-upgrade/page.tsx',
  'app/5g-performance/page.tsx',
  '__tests__/advanced-components.test.tsx',
  '__tests__/app.test.tsx',
  '__tests__/components.test.tsx'
];

// Clean all files
let cleanedCount = 0;
filesToClean.forEach(filePath => {
  if (fs.existsSync(filePath)) {
    if (cleanUnusedImports(filePath)) {
      cleanedCount++;
    }
  }
});

console.log(`Cleaned ${cleanedCount} files`);