import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Files and their missing imports
const fixes = [
  {
    file: 'app/compliance/page.tsx',
    imports: ['Navigation', 'Footer']
  },
  {
    file: 'app/ai-mobile-app-development/page.tsx',
    imports: ['Cloud']
  },
  {
    file: 'app/careers/page.tsx',
    imports: ['CheckCircle']
  }
];

function fixImports(filePath, missingImports) {
  try {
    const fullPath = path.join(__dirname, filePath);
    
    if (!fs.existsSync(fullPath)) {
      console.log(`File not found: ${filePath}`);
      return;
    }

    let content = fs.readFileSync(fullPath, 'utf8');
    
    // Find the existing import line
    const importMatch = content.match(/import.*from 'lucide-react';/);
    if (importMatch) {
      // Extract existing imports
      const existingImports = importMatch[0].match(/\{([^}]+)\}/);
      if (existingImports) {
        const currentImports = existingImports[1].split(',').map(imp => imp.trim());
        const allImports = [...new Set([...currentImports, ...missingImports])];
        const newImportLine = `import { ${allImports.join(', ')} } from 'lucide-react';`;
        content = content.replace(importMatch[0], newImportLine);
      }
    } else {
      // Add new import line
      const newImportLine = `import { ${missingImports.join(', ')} } from 'lucide-react';\n`;
      content = content.replace(/import React from 'react';\n/, `import React from 'react';\n${newImportLine}`);
    }

    // For Navigation and Footer, add the imports
    if (missingImports.includes('Navigation') || missingImports.includes('Footer')) {
      if (!content.includes("import Navigation from")) {
        content = content.replace(/import React from 'react';\n/, `import React from 'react';\nimport Navigation from '../components/Navigation';\n`);
      }
      if (!content.includes("import Footer from")) {
        content = content.replace(/import React from 'react';\n/, `import React from 'react';\nimport Footer from '../components/Footer';\n`);
      }
    }

    fs.writeFileSync(fullPath, content);
    console.log(`Fixed: ${filePath}`);
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
}

// Fix all files
fixes.forEach(({ file, imports }) => {
  fixImports(file, imports);
});

console.log('Import fixes completed!');