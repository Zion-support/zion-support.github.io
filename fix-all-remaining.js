const fs = require('fs');
const path = require('path');

function fixAllRemaining(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Fix Footer.tsx
    if (filePath.includes('Footer.tsx')) {
      content = content.replace(/} from "lucide-react";\s*import React from 'react;';/g, '} from "lucide-react";\n\nimport React from \'react\';');
    }
    
    // Fix Header.tsx
    if (filePath.includes('Header.tsx')) {
      content = content.replace(/href: '\/contact'\s*\n\s*\];/g, 'href: \'/contact\'\n  }];');
    }
    
    // Fix AIServices.tsx
    if (filePath.includes('AIServices.tsx')) {
      content = content.replace(/}\s*import React from "react";\s*import Layout from "\.\.\/components\/Layout";\s*export default function AIServices\(\);\s*{/g, '}\n\nimport React from "react";\nimport Layout from "../components/Layout";\n\nexport default function AIServices() {');
    }
    
    // Fix ITServices.tsx
    if (filePath.includes('ITServices.tsx')) {
      if (!content.trim().endsWith('}')) {
        content = `${content.trim()  }\n}`;
      }
    }
    
    // Fix about.tsx
    if (filePath.includes('about.tsx')) {
      content = content.replace(/description: '[^']*'\s*\n\s*\];/g, 'description: \'$1\'\n  }];');
    }
    
    // General fixes
    content = content.replace(/\s*;\s*$/gm, ';');
    content = content.replace(/\n\s*\n\s*\n/g, '\n\n');
    
    fs.writeFileSync(filePath, content);
    console.log(`Fixed: ${filePath}`);
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
}

// Fix all problematic files
const filesToFix = [
  '/workspace/components/Footer.tsx',
  '/workspace/components/Header.tsx',
  '/workspace/pages/AIServices.tsx',
  '/workspace/pages/ITServices.tsx',
  '/workspace/pages/about.tsx'
];

filesToFix.forEach(fixAllRemaining);
console.log('All remaining issues fixed!');