const fs = require('fs');
const path = require('path');

const filesWithConflicts = [
  './app/5g-iot-solutions/page.tsx',
  './app/components/SEOOptimizer.tsx',
  './app/components/ContentPromotionBanner.tsx',
  './app/components/PerformanceOptimizer.tsx',
  './app/5g-network-infrastructure/page.tsx',
  './app/5g-private-networks/page.tsx',
  './app/ai-3d-generation/page.tsx',
  './app/5g-network-optimization/page.tsx',
  './app/sitemap.ts',
  './app/5g-smart-city-solutions/page.tsx',
  './app/5g-mobile-applications/page.tsx',
  './app/config/errorBoundaryConfig.tsx',
  './app/blog/ai-enterprise-transformation-2025/page.tsx',
  './app/blog/ai-innovation-labs-product-development-2025/page.tsx',
  './app/blog/ai-2025-sept-30-operational-trust-scorecards-v3/page.tsx'
];

function fixMergeConflicts(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Remove merge conflict markers and keep the newer version (after =======)
    content = content.replace(/<<<<<<< HEAD[\s\S]*?=======\n([\s\S]*?)>>>>>>> [^\n]+/g, '$1');
    
    // Clean up any remaining conflict markers
    content = content.replace(/<<<<<<< HEAD[\s\S]*?>>>>>>> [^\n]+/g, '');
    content = content.replace(/=======[\s\S]*?>>>>>>> [^\n]+/g, '');
    
    // Fix common syntax issues
    content = content.replace(/classNam e =/g, 'className=');
    content = content.replace(/targe t =/g, 'target=');
    content = content.replace(/re l =/g, 'rel=');
    content = content.replace(/placeholde r =/g, 'placeholder=');
    content = content.replace(/name =/g, 'name=');
    content = content.replace(/content =/g, 'content=');
    content = content.replace(/key =/g, 'key=');
    content = content.replace(/t o =/g, 'to=');
    content = content.replace(/w-3 h-3ml-1/g, 'w-3 h-3 ml-1');
    content = content.replace(/gridgrid-cols/g, 'grid grid-cols');
    content = content.replace(/max-w-7 xlmx-auto/g, 'max-w-7xl mx-auto');
    content = content.replace(/text-xlfont-bold/g, 'text-xl font-bold');
    content = content.replace(/rounded-lgp-6/g, 'rounded-lg p-6');
    content = content.replace(/flexitems-center/g, 'flex items-center');
    content = content.replace(/space-x-3/g, 'space-x-3');
    content = content.replace(/p-2rounded-lg/g, 'p-2 rounded-lg');
    content = content.replace(/w-5 h-5text-/g, 'w-5 h-5 text-');
    content = content.replace(/text-smtext-/g, 'text-sm text-');
    content = content.replace(/text-whitefont-medium/g, 'text-white font-medium');
    content = content.replace(/byZion/g, 'by Zion');
    content = content.replace(/Terms ofService/g, 'Terms of Service');
    
    fs.writeFileSync(filePath, content);
    console.log(`Fixed merge conflicts in ${filePath}`);
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
}

// Fix all files
filesWithConflicts.forEach(fixMergeConflicts);

console.log('Merge conflict fixing completed!');