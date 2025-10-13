#!/usr/bin/env node

import fs from 'fs';
import path from 'path';

// Function to fix all import issues
function fixAllImports(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Fix Right import from lucide-react
    if (content.includes("import { Right } from 'lucide-react'")) {
      content = content.replace(
        "import { Right } from 'lucide-react'",
        "import { ArrowRight as Right } from 'lucide-react'"
      );
      modified = true;
    }

    // Fix duplicate Circle imports
    if (content.includes('Circle, Circle')) {
      content = content.replace(/Circle,\s*Circle/g, 'Circle');
      modified = true;
    }

    // Fix missing Circle import
    if (content.includes('Circle') && !content.includes("import { Circle }")) {
      const lucideMatch = content.match(/import { ([^}]+) } from 'lucide-react';/);
      if (lucideMatch && !lucideMatch[1].includes('Circle')) {
        content = content.replace(
          lucideMatch[0],
          `import { ${lucideMatch[1]}, Circle } from 'lucide-react';`
        );
        modified = true;
      }
    }

    // Fix missing heroicons imports
    const missingHeroicons = [
      'CpuChipIcon', 'ChartBarIcon', 'ShieldCheckIcon', 'CheckCircleIcon', 
      'ClockIcon', 'EnvelopeIcon', 'PhoneIcon', 'MapPinIcon'
    ];
    
    missingHeroicons.forEach(icon => {
      if (content.includes(icon) && !content.includes(`import { ${icon} }`)) {
        const heroiconsMatch = content.match(/import { ([^}]+) } from '@heroicons\/react\/24\/outline';/);
        if (heroiconsMatch && !heroiconsMatch[1].includes(icon)) {
          content = content.replace(
            heroiconsMatch[0],
            `import { ${heroiconsMatch[1]}, ${icon} } from '@heroicons/react/24/outline';`
          );
          modified = true;
        }
      }
    });

    // Fix missing Link import
    if (content.includes('<Link') && !content.includes("import { Link }")) {
      const reactRouterMatch = content.match(/import { ([^}]+) } from 'react-router-dom';/);
      if (reactRouterMatch && !reactRouterMatch[1].includes('Link')) {
        content = content.replace(
          reactRouterMatch[0],
          `import { ${reactRouterMatch[1]}, Link } from 'react-router-dom';`
        );
        modified = true;
      } else if (!reactRouterMatch) {
        // Add react-router-dom import if it doesn't exist
        const reactImport = content.match(/import React[^;]*;/);
        if (reactImport) {
          content = content.replace(
            reactImport[0],
            `${reactImport[0]}\nimport { Link } from 'react-router-dom';`
          );
          modified = true;
        }
      }
    }

    // Fix missing React import
    if (content.includes('React') && !content.includes("import React")) {
      content = "import React from 'react';\n" + content;
      modified = true;
    }

    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`✅ Fixed imports in: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`❌ Error fixing ${filePath}:`, error.message);
    return false;
  }
}

// Main execution
console.log('🔧 Fixing all import issues...');

// Find all TypeScript/JavaScript files in the app directory
function findFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir);
  
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory() && !['node_modules', '.git', 'dist', 'build'].includes(file)) {
      findFiles(filePath, fileList);
    } else if (stat.isFile() && (file.endsWith('.tsx') || file.endsWith('.ts'))) {
      fileList.push(filePath);
    }
  });
  
  return fileList;
}

const filesToFix = findFiles('/workspace/app');

let fixedCount = 0;
let errorCount = 0;

filesToFix.forEach(filePath => {
  if (fixAllImports(filePath)) {
    fixedCount++;
  } else {
    errorCount++;
  }
});

console.log(`\n📊 Summary:`);
console.log(`  ✅ Fixed: ${fixedCount} files`);
console.log(`  ❌ Errors: ${errorCount} files`);

if (errorCount > 0) {
  console.log('\n⚠️  Some files could not be automatically fixed.');
} else {
  console.log('\n🎉 All import issues fixed successfully!');
}