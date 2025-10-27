#!/usr/bin/env node

const fs = require('fs');

const filesToFix = [
  'app/5g-data-analytics/page.tsx',
  'app/5g-edge-computing/page.tsx',
  'app/5g-implementation/page.tsx',
  'app/5g-iot-solutions/page.tsx',
  'app/accessibility-page/page.tsx',
  'app/error.tsx',
  'app/global-error.tsx',
  'app/it-services/cybersecurity-audit/page.tsx',
  'app/legal-document-manager/page.tsx',
  'app/loading.tsx',
  'app/medical-records-manager/page.tsx',
  'app/online-learning-platform/page.tsx',
  'app/property-management-ai/page.tsx',
  'app/supply-chain-optimizer/page.tsx',
  'app/test/page.tsx'
];

let fixedCount = 0;

filesToFix.forEach(filePath => {
  try {
    if (fs.existsSync(filePath)) {
      const content = fs.readFileSync(filePath, 'utf8');
      
      // Remove unused React import
      const lines = content.split('\n');
      const newLines = lines.filter(line => {
        const trimmed = line.trim();
        return !(trimmed.startsWith("import React from 'react';") || 
                 trimmed.startsWith('import React from "react";') ||
                 trimmed.startsWith("import React from 'react'") ||
                 trimmed.startsWith('import React from "react"'));
      });
      
      if (newLines.length !== lines.length) {
        const newContent = newLines.join('\n');
        fs.writeFileSync(filePath, newContent, 'utf8');
        console.log(`Fixed: ${filePath}`);
        fixedCount++;
      }
    }
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
  }
});

console.log(`\nFixed ${fixedCount} files.`);
