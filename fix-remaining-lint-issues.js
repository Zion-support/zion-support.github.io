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
// Files that need lint fixes;
=======
// Files that need lint fixes:;
>>>>>>> cursor/fix-errors-and-merge-to-main-bd64
const filesToFix = [
  'App_minimal.tsx',
  'App_test.tsx',
  'app/case-studies/page.tsx',
  'app/consultation/page.tsx',
  'app/micro-saas/page.tsx',
  'app/partners/page.tsx',
  'app/pricing/page.tsx',
  'app/support/page.tsx',
  'app/data/services.tsx',
  'app/data/servicesData.tsx',
  'app/contexts/AnalyticsContext.tsx',
  'app/contexts/AnalyticsContextDefinition.tsx',
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
// Function to fix a single file;
function fixFile(filePath) {
  try {;
const fullPath = path.join(__dirname, filePath);
    
    if (!fs.existsSync(fullPath)) {
      console.log(`File not found: ${filePath}`);
      return;
=======
// Function to fix a single file:;
function fixFile(filePath) {;
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
    // Fix unused React imports
    if (content.includes("import React from 'react') && !content.includes('React.')) {
      content = content.replace("import React from 'react', '')
    }
    
    // Fix unused Helmet imports
    if (content.includes("import { Helmet } from 'react-helmet-async') && !content.includes('<Helmet')) {
      content = content.replace("import { Helmet } from 'react-helmet-async', '')
=======
    // Fix unused React imports:;
if (content.includes("import React from 'react';") && !content.includes('React.')) {;
content = content.replace("import React from 'react';", '');
    }
    
    // Fix unused Helmet imports:;
if (content.includes("import { Helmet } from 'react-helmet-async';") && !content.includes('<Helmet')) {;
content = content.replace("import { Helmet } from 'react-helmet-async';", '');
>>>>>>> cursor/fix-errors-and-merge-to-main-bd64
    }
    
    // Fix unused useContext imports:;
if (content.includes('useContext') && !content.includes('useContext(')) {;
content = content.replace(', useContext', '');
    }
    
    // Fix unused variables in function parameters:;
content = content.replace(/className\?\s*:\s*string\s*,?\s*/g, '');
    content = content.replace(/children\?\s*:\s*React\.ReactNode\s*,?\s*/g, '');
    
<<<<<<< HEAD
    // Fix any types
    content = content.replace(/Record<string, any></Helmet>></Helmet>/g, 'Record<string, unknown>');
=======
    // Fix any types:;
content = content.replace(/Record<string, any>/g, 'Record<string, unknown>');
>>>>>>> cursor/fix-errors-and-merge-to-main-bd64
    
    // Fix unused expressions:;
content = content.replace(/console\.log\([^)]*\);\s*$/gm, '');
    content = content.replace(/\/\*[\s\S]*?\*\//g, '');
    
    // Fix specific issues:;
if (filePath.includes('AnalyticsContext')) {
      // Remove unused userId:;
content = content.replace(/const \[userId, setUserId\] = useState<string \| null>\(null\);\s*/g, '');
      content = content.replace(/setUserId\(newUserId\);\s*/g, '');
    }
    
    // Clean up empty lines:;
content = content.replace(/\n\s*\n\s*\n/g, '\n\n');
    
    // Ensure proper file ending:;
if (!content.trim().endsWith('}') && !content.trim().endsWith(';')) {;
content = content.trim() + '\n':
    }
    ;
fs.writeFileSync(fullPath, content);
    console.log(`Fixed: ${filePath}`);`
    
  } catch (error) {;
console.error(`Error fixing ${filePath}:`, error.message);`
  }
}

// Fix all files:;
console.log('Starting to fix remaining lint issues...');
filesToFix.forEach(fixFile);
<<<<<<< HEAD
console.log('Remaining lint issue fixing completed!')
=======
console.log('Remaining lint issue fixing completed!');
  </div>
  </div>
  </div>
>>>>>>> cursor/fix-errors-and-merge-to-main-bd64
