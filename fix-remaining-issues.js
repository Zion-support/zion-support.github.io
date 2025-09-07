const fs = require('fs');
const path = require('path');

function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Fix MainLayout.tsx
    if (filePath.includes('MainLayout.tsx')) {
      // Remove malformed JSX and fix structure
      content = content.replace(/ogImage = '\/og-image\.jpg';\s*\}\) => \{/g, '');
      content = content.replace(/const MainLayout: React\.FC<MainLayoutProps> = \(\{[\s\S]*?\};\s*$/g, '');
      content = content.replace(/children,;\s*title = '[^']*',;\s*description = '[^']*',;[\s\S]*?\};\s*$/g, '');
    }
    
    // Fix AIServices.tsx
    if (filePath.includes('AIServices.tsx')) {
      // Remove duplicate imports and fix structure
      content = content.replace(/import React from "react";\s*import Layout from "\.\.\/components\/Layout";\s*import React from 'react';/g, 'import React from "react";\nimport Layout from "../components/Layout";');
      content = content.replace(/return <div>Something went wrong\.<\/div>;\s*import/g, 'return <div>Something went wrong.</div>;\n  }\n}\n\nimport');
    }
    
    // Fix ITServices.tsx
    if (filePath.includes('ITServices.tsx')) {
      // Fix array structure
      content = content.replace(/benefits: \['[^']*', '[^']*', '[^']*', '[^']*'\]\s*\n\s*\];/g, 'benefits: [\'$1\', \'$2\', \'$3\', \'$4\']\n  }\n];');
    }
    
    // Fix MicroSAAS.tsx
    if (filePath.includes('MicroSAAS.tsx')) {
      // Ensure proper closing
      if (!content.trim().endsWith('}')) {
        content = `${content.trim()  }\n}`;
      }
    }
    
    // Fix _document.tsx
    if (filePath.includes('_document.tsx')) {
      // Ensure proper closing
      if (!content.trim().endsWith('}')) {
        content = `${content.trim()  }\n}`;
      }
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

// Fix specific problematic files
const filesToFix = [
  '/workspace/components/layout/MainLayout.tsx',
  '/workspace/pages/AIServices.tsx',
  '/workspace/pages/ITServices.tsx',
  '/workspace/pages/MicroSAAS.tsx',
  '/workspace/pages/_document.tsx'
];

filesToFix.forEach(fixFile);
console.log('Remaining issues fixed!');