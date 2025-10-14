const fs = require('fs');
const path = require('path');

// Function to fix specific files
function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Fix specific unused imports based on the error messages
    const fixes = [
      // ContentStatistics.tsx
      { pattern: /import { [^}]*ArrowRight[^}]* } from 'lucide-react';/, replacement: "import { } from 'lucide-react';" },
      
      // DynamicContentShowcase.tsx
      { pattern: /import { [^}]*Clock[^}]*Award[^}]* } from 'lucide-react';/, replacement: "import { } from 'lucide-react';" },
      
      // ErrorBoundary.tsx
      { pattern: /import React, { [^}]* } from 'react';/, replacement: "import { } from 'react';" },
      
      // Sidebar.tsx
      { pattern: /import { [^}]*Home[^}]*Users[^}]*Settings[^}]* } from 'lucide-react';/, replacement: "import { } from 'lucide-react';" },
      
      // errorBoundaryConfig.tsx
      { pattern: /import React from 'react';/, replacement: "" },
      
      // useAnalytics.ts
      { pattern: /import { [^}]*AnalyticsContextType[^}]* } from '\.\.\/contexts\/AnalyticsContext';/, replacement: "import { } from '../contexts/AnalyticsContext';" },
      
      // micro-saas/page.tsx
      { pattern: /import { [^}]*ArrowRight[^}]*Shield[^}]*Cloud[^}]*BarChart3[^}]*MessageSquare[^}]* } from 'lucide-react';/, replacement: "import { } from 'lucide-react';" },
      
      // support/page.tsx
      { pattern: /import { [^}]*CheckCircle[^}]* } from 'lucide-react';/, replacement: "import { } from 'lucide-react';" }
    ];

    for (const fix of fixes) {
      if (fix.pattern.test(content)) {
        content = content.replace(fix.pattern, fix.replacement);
        modified = true;
      }
    }

    // Clean up empty import lines
    content = content.replace(/import { } from '[^']+';/g, '');
    content = content.replace(/import React from 'react';\n\n/g, '');
    content = content.replace(/import React from 'react';\n/g, '');

    if (modified) {
      fs.writeFileSync(filePath, content);
      console.log(`Fixed: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Specific files to fix
const files = [
  'app/components/ContentStatistics.tsx',
  'app/components/DynamicContentShowcase.tsx',
  'app/components/ErrorBoundary.tsx',
  'app/components/Sidebar.tsx',
  'app/config/errorBoundaryConfig.tsx',
  'app/hooks/useAnalytics.ts',
  'app/micro-saas/page.tsx',
  'app/support/page.tsx'
];

console.log(`Processing ${files.length} files`);

let fixedCount = 0;
for (const file of files) {
  const fullPath = path.join(__dirname, file);
  if (fs.existsSync(fullPath)) {
    if (fixFile(fullPath)) {
      fixedCount++;
    }
  } else {
    console.log(`File not found: ${fullPath}`);
  }
}

console.log(`Fixed ${fixedCount} files`);