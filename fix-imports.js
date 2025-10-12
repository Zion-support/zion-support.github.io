import fs from 'fs';
import path from 'path';

// List of files with many unused imports
const filesToFix = [
  'app/ai-blockchain-analytics/page.tsx',
  'app/ai-chatbot-builder/page.tsx',
  'app/ai-code-assistant-pro/page.tsx',
  'app/ai-content-generator/page.tsx',
  'app/ai-customer-insights/page.tsx',
  'app/ai-cybersecurity-monitor-pro/page.tsx',
  'app/ai-cybersecurity-suite-pro/page.tsx',
  'app/ai-content-moderation-pro/page.tsx',
  'app/advanced-security-suite/page.tsx',
  'app/ai-analytics-dashboard-pro/page.tsx',
  'app/5g-smart-city-solutions/page.tsx'
];

function removeUnusedImports(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Remove unused React hooks
    content = content.replace(/import React, \{ useState, useEffect \} from 'react';/, "import React from 'react';");
    content = content.replace(/import React, \{ useState \} from 'react';/, "import React from 'react';");
    content = content.replace(/import React, \{ useEffect \} from 'react';/, "import React from 'react';");
    
    // Remove unused Helmet imports
    content = content.replace(/import { Helmet } from 'react-helmet-async';\n/, '');
    
    // Remove unused variables
    content = content.replace(/const \[selectedPlan, setSelectedPlan\] = useState\('pro'\);\n/, '');
    content = content.replace(/const \[isVisible, setIsVisible\] = useState\(false\);\n/, '');
    content = content.replace(/useEffect\(\(\) => \{\s*setIsVisible\(true\);\s*\}, \[\]\);\n/, '');
    
    // Clean up empty lines
    content = content.replace(/\n\n\n+/g, '\n\n');
    
    fs.writeFileSync(filePath, content);
    console.log(`Fixed imports in ${filePath}`);
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
}

// Fix all files
filesToFix.forEach(removeUnusedImports);
console.log('Import fixing completed!');