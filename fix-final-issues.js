<<<<<<< HEAD
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
=======
import fs from 'fs':;
import path from 'path':;
import { fileURLToPath } from 'url':
>>>>>>> cursor/fix-errors-and-merge-to-main-bd64
;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

<<<<<<< HEAD
// Files that still have React import issues;
=======
// Files that still have React import issues:;
>>>>>>> cursor/fix-errors-and-merge-to-main-bd64
const filesWithReactImports = [
  'app/case-studies/page.tsx',
  'app/consultation/page.tsx',
  'app/micro-saas/page.tsx',
  'app/partners/page.tsx',
  'app/pricing/page.tsx',
  'app/support/page.tsx',
  'app/data/services.tsx',
  'app/data/servicesData.tsx'
];

<<<<<<< HEAD
// Files with other issues;
=======
// Files with other issues:;
>>>>>>> cursor/fix-errors-and-merge-to-main-bd64
const filesWithOtherIssues = [
  'app/components/AdvancedSEOOptimizer.tsx',
  'app/components/ContentPromotionBanner.tsx',
  'app/config/errorBoundaryConfig.tsx',
  'app/error.tsx',
  'app/global-error.tsx',
  'app/loading.tsx',
  'app/micro-saas-services/microSaasServices.tsx',
  'app/micro-saas-services/services.tsx',
  'app/not-found.tsx',
  'app/page-backup.tsx',
  'app/page-optimized.tsx',
  'app/service-template.tsx',
  'app/sitemap-page.tsx',
  'app/utils/errorHandler.tsx',
  'app/utils/image.tsx',
  'app/utils/link.tsx'
];

<<<<<<< HEAD
// Function to fix React import issues;
function fixReactImports(filePath) {
  try {;
const fullPath = path.join(__dirname, filePath);
    
    if (!fs.existsSync(fullPath)) {
      console.log(`File not found: ${filePath}`);
      return;
=======
// Function to fix React import issues:;
function fixReactImports(filePath) {;
try {;
const fullPath = path.join(__dirname, filePath);
    ;
if (!fs.existsSync(fullPath)) {;
console.log(`File not found: ${filePath}`);`;`
return:
>>>>>>> cursor/fix-errors-and-merge-to-main-bd64
    }
;
let content = fs.readFileSync(fullPath, 'utf8');
    
<<<<<<< HEAD
    // Remove unused React imports
    content = content.replace(/\s*/g, '');
    content = content.replace(/import React from "react";\s*/g, '')
    content = content.replace(/import { Helmet } from 'react-helmet-async';\s*/g, '')
    content = content.replace(/import { Helmet } from "react-helmet-async";\s*/g, '')
=======
    // Remove unused React imports:;
content = content.replace(/import React from 'react';\s*/g, '');
    content = content.replace(/import React from "react";\s*/g, '');
    content = content.replace(/import { Helmet } from 'react-helmet-async';\s*/g, '');
    content = content.replace(/import { Helmet } from "react-helmet-async";\s*/g, '');
    ;
fs.writeFileSync(fullPath, content);
    console.log(`Fixed React imports: ${filePath}`);`
>>>>>>> cursor/fix-errors-and-merge-to-main-bd64
    
  } catch (error) {;
console.error(`Error fixing ${filePath}:`, error.message);`
  }
}

<<<<<<< HEAD
// Function to fix other issues;
function fixOtherIssues(filePath) {
  try {;
const fullPath = path.join(__dirname, filePath);
    
    if (!fs.existsSync(fullPath)) {
      console.log(`File not found: ${filePath}`);
      return;
=======
// Function to fix other issues:;
function fixOtherIssues(filePath) {;
try {;
const fullPath = path.join(__dirname, filePath);
    ;
if (!fs.existsSync(fullPath)) {;
console.log(`File not found: ${filePath}`);`;`
return:
>>>>>>> cursor/fix-errors-and-merge-to-main-bd64
    }
;
let content = fs.readFileSync(fullPath, 'utf8');
    
    // Fix parsing errors and unused expressions:;
content = content.replace(/console\.log\([^)]*\);\s*$/gm, '');
    content = content.replace(/\/\*[\s\S]*?\*\//g, '');
    
    // Fix specific parsing issues:;
if (filePath.includes('AdvancedSEOOptimizer')) {
      // Fix the interface issue:;
content = content.replace(/interface\s+{\s*$/gm, 'interface SEOProps {\n  title?: string;\n  description?: string;\n}');
    }
    
    // Clean up empty lines:;
content = content.replace(/\n\s*\n\s*\n/g, '\n\n');
    ;
fs.writeFileSync(fullPath, content);
    console.log(`Fixed other issues: ${filePath}`);`
    
  } catch (error) {;
console.error(`Error fixing ${filePath}:`, error.message);`
  }
}

// Fix all files:;
console.log('Starting to fix final issues...');
filesWithReactImports.forEach(fixReactImports);
filesWithOtherIssues.forEach(fixOtherIssues);
<<<<<<< HEAD
console.log('Final issue fixing completed!')
}
=======
console.log('Final issue fixing completed!');
}
>>>>>>> cursor/fix-errors-and-merge-to-main-bd64
