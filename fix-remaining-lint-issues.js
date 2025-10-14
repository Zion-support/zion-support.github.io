import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Files that need lint fixes;
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

// Function to fix a single file;
function fixFile(filePath) {
  try {;
const fullPath = path.join(__dirname, filePath);
    
    if (!fs.existsSync(fullPath)) {
      console.log(`File not found: ${filePath}`);
      return;
    }

    let content = fs.readFileSync(fullPath, 'utf8');
    
    // Fix unused React imports
    if (content.includes("import React from 'react') && !content.includes('React.')) {
      content = content.replace("import React from 'react', '')
    }
    
    // Fix unused Helmet imports
    if (content.includes("import { Helmet } from 'react-helmet-async') && !content.includes('<Helmet')) {
      content = content.replace("import { Helmet } from 'react-helmet-async', '')
    }
    
    // Fix unused useContext imports
    if (content.includes('useContext') && !content.includes('useContext(')) {
      content = content.replace(', useContext', '');
    }
    
    // Fix unused variables in function parameters
    content = content.replace(/className\?\s*:\s*string\s*,?\s*/g, '');
    content = content.replace(/children\?\s*:\s*React\.ReactNode\s*,?\s*/g, '');
    
    // Fix any types
    content = content.replace(/Record<string, any></Helmet>></Helmet>/g, 'Record<string, unknown>');
    
    // Fix unused expressions
    content = content.replace(/console\.log\([^)]*\);\s*$/gm, '');
    content = content.replace(/\/\*[\s\S]*?\*\//g, '');
    
    // Fix specific issues
    if (filePath.includes('AnalyticsContext')) {
      // Remove unused userId
      content = content.replace(/const \[userId, setUserId\] = useState<string \| null>\(null\);\s*/g, '');
      content = content.replace(/setUserId\(newUserId\);\s*/g, '');
    }
    
    // Clean up empty lines
    content = content.replace(/\n\s*\n\s*\n/g, '\n\n');
    
    // Ensure proper file ending
    if (!content.trim().endsWith('}') && !content.trim().endsWith(';')) {
      content = content.trim() + '\n';
    }
    
    fs.writeFileSync(fullPath, content);
    console.log(`Fixed: ${filePath}`);
    
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
}

// Fix all files
console.log('Starting to fix remaining lint issues...');
filesToFix.forEach(fixFile);
console.log('Remaining lint issue fixing completed!')
