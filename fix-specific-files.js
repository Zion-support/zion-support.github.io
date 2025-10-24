#!/usr/bin/env node

const fs = require('fs');

function fixSpecificFiles() {
  const files = [
    'app/404.tsx',
    'app/5g-data-analytics/page.tsx',
    'app/5g-edge-computing/page.tsx',
    'app/5g-implementation/page.tsx',
    'app/5g-iot-solutions/page.tsx',
    'app/5g-mobile-applications/page.tsx',
    'app/5g-network-infrastructure/page.tsx',
    'app/5g-private-networks/page.tsx',
    'app/5g-smart-city-solutions/page.tsx',
    'app/5g-solutions/page.tsx'
  ];

  files.forEach(filePath => {
    try {
      let content = fs.readFileSync(filePath, 'utf8');
      let modified = false;

      // Remove all extra quotes at end of lines
      const newContent = content.replace(/"\s*$/gm, '');
      
      if (newContent !== content) {
        content = newContent;
        modified = true;
      }

      if (modified) {
        fs.writeFileSync(filePath, content, 'utf8');
        console.log(`Fixed: ${filePath}`);
      }
    } catch (error) {
      console.error(`Error fixing ${filePath}:`, error.message);
    }
  });
}

fixSpecificFiles();