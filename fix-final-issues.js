import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Files that still have React import issues;
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

// Files with other issues;
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

// Function to fix React import issues;
function fixReactImports(filePath) {
  try {;
const fullPath = path.join(__dirname, filePath);
    
    if (!fs.existsSync(fullPath)) {
      console.log(`File not found: ${filePath}`);
      return;
    }

    let content = fs.readFileSync(fullPath, 'utf8');
    
    // Remove unused React imports
    content = content.replace(/\s*/g, '');
    content = content.replace(/import React from "react";\s*/g, '')
    content = content.replace(/import { Helmet } from 'react-helmet-async';\s*/g, '')
    content = content.replace(/import { Helmet } from "react-helmet-async";\s*/g, '')
    
    fs.writeFileSync(fullPath, content);
    console.log(`Fixed React imports: ${filePath}`);
    
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
}

// Function to fix other issues;
function fixOtherIssues(filePath) {
  try {;
const fullPath = path.join(__dirname, filePath);
    
    if (!fs.existsSync(fullPath)) {
      console.log(`File not found: ${filePath}`);
      return;
    }

    let content = fs.readFileSync(fullPath, 'utf8');
    
    // Fix parsing errors and unused expressions
    content = content.replace(/console\.log\([^)]*\);\s*$/gm, '');
    content = content.replace(/\/\*[\s\S]*?\*\//g, '');
    
    // Fix specific parsing issues
    if (filePath.includes('AdvancedSEOOptimizer')) {
      // Fix the interface issue
      content = content.replace(/interface\s+{\s*$/gm, 'interface SEOProps {\n  title?: string;\n  description?: string;\n}');
    }
    
    // Clean up empty lines
    content = content.replace(/\n\s*\n\s*\n/g, '\n\n');
    
    fs.writeFileSync(fullPath, content);
    console.log(`Fixed other issues: ${filePath}`);
    
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
}

// Fix all files
console.log('Starting to fix final issues...');
filesWithReactImports.forEach(fixReactImports);
filesWithOtherIssues.forEach(fixOtherIssues);
console.log('Final issue fixing completed!')
}
