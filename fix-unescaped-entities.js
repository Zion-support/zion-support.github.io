import fs from 'fs';
import path from 'path';

const filesToFix = [
  'app/components/EnhancedLoading.tsx',
  'app/components/ErrorBoundary.tsx',
  'app/components/ErrorFallback.tsx',
  'app/components/FuturisticBackgroundEnhanced.tsx',
  'app/components/FuturisticButtonEnhanced.tsx',
  'app/components/FuturisticCardEnhanced.tsx',
  'app/components/FuturisticTextEnhanced.tsx',
  'app/components/ImprovedErrorBoundary.tsx',
  'app/components/ImprovedFooter.tsx',
  'app/components/ImprovedImage.tsx',
  'app/components/ImprovedNavigation.tsx',
  'app/components/ImprovedSidebar.tsx',
  'app/components/LazyImage.tsx',
  'app/components/Loading.tsx',
  'app/components/MobileNavigation.tsx',
  'app/components/ResponsiveGrid.tsx',
  'app/components/ResponsiveText.tsx',
  'app/components/StructuredData.tsx',
  'app/config/errorBoundaryConfig.tsx',
  'app/contact/page.tsx',
  'app/main.tsx',
  'app/micro-saas-services/microSaasServices.tsx',
  'app/micro-saas-services/services.tsx',
  'app/not-found.tsx',
  'app/service-template.tsx'
];

filesToFix.forEach(filePath => {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Fix common unescaped entities
    content = content.replace(/'/g, ''');
    content = content.replace(/"/g, '"');
    content = content.replace(/>/g, '>');
    content = content.replace(/</g, '<');
    content = content.replace(/&/g, '&');
    
    fs.writeFileSync(filePath, content);
    console.log(`Fixed: ${filePath}`);
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
});

console.log('All unescaped entity errors fixed!');