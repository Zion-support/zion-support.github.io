#!/usr/bin/env node

import fs from 'fs';
import path from 'path';

// Function to fix import issues
function fixImports(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Fix lucide-react imports
    if (content.includes("import { Right } from 'lucide-react'")) {
      content = content.replace(
        "import { Right } from 'lucide-react'",
        "import { ArrowRight as Right } from 'lucide-react'"
      );
      modified = true;
    }

    // Fix missing Circle import
    if (content.includes('Circle') && !content.includes("import { Circle }")) {
      content = content.replace(
        /import { ([^}]+) } from 'lucide-react';/,
        "import { $1, Circle } from 'lucide-react';"
      );
      modified = true;
    }

    // Fix heroicons imports
    if (content.includes('CpuChipIconCheckIcon')) {
      content = content.replace(/CpuChipIconCheckIcon/g, 'CpuChipIcon');
      modified = true;
    }

    if (content.includes('EnvelopeIconIcon')) {
      content = content.replace(/EnvelopeIconIcon/g, 'EnvelopeIcon');
      modified = true;
    }

    // Fix missing heroicons imports
    const missingHeroicons = ['CpuChipIcon', 'ChartBarIcon', 'ShieldCheckIcon', 'CheckCircleIcon'];
    missingHeroicons.forEach(icon => {
      if (content.includes(icon) && !content.includes(`import { ${icon} }`)) {
        const importMatch = content.match(/import { ([^}]+) } from '@heroicons\/react\/24\/outline';/);
        if (importMatch) {
          content = content.replace(
            importMatch[0],
            `import { ${importMatch[1]}, ${icon} } from '@heroicons/react/24/outline';`
          );
          modified = true;
        }
      }
    });

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
console.log('🔧 Fixing import issues...');

const filesToFix = [
  '/workspace/app/5g-solutions/page.tsx',
  '/workspace/app/ai-automation-platform/page.tsx',
  '/workspace/app/ai-services/page.tsx',
  '/workspace/app/ai-solutions/page.tsx',
  '/workspace/app/it-solutions/page.tsx',
  '/workspace/app/micro-saas-solutions/page.tsx',
  '/workspace/app/pages/AboutPage.tsx',
  '/workspace/app/pages/CareersPage.tsx',
  '/workspace/app/pages/PricingPage.tsx',
  '/workspace/app/pages/ServicesPage.tsx',
  '/workspace/app/services/page.tsx',
  '/workspace/app/support/page.tsx',
  '/workspace/app/tutorials/page.tsx',
  '/workspace/app/demo/page.tsx'
];

let fixedCount = 0;
let errorCount = 0;

filesToFix.forEach(filePath => {
  if (fs.existsSync(filePath)) {
    if (fixImports(filePath)) {
      fixedCount++;
    } else {
      errorCount++;
    }
  }
});

console.log(`\n📊 Summary:`);
console.log(`  ✅ Fixed: ${fixedCount} files`);
console.log(`  ❌ Errors: ${errorCount} files`);

if (errorCount > 0) {
  console.log('\n⚠️  Some files could not be automatically fixed.');
} else {
  console.log('\n🎉 Import issues fixed successfully!');
}