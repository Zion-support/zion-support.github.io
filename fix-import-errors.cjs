#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Function to check if a file exists
function fileExists(filePath) {
  return fs.existsSync(filePath);
}

// Function to check export type
function checkExportType(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const hasDefaultExport = content.includes('export default');
    const hasNamedExports = content.match(/export\s+(?:function|const|class)\s+(\w+)/g);
    
    if (hasDefaultExport) {
      return 'default';
    } else if (hasNamedExports) {
      // Get the first named export
      const match = content.match(/export\s+(?:function|const|class)\s+(\w+)/);
      return match ? match[1] : null;
    }
    return null;
  } catch (error) {
    return null;
  }
}

// Function to fix App.tsx imports
function fixAppImports() {
  const appPath = path.join(process.cwd(), 'src/App.tsx');
  
  if (!fileExists(appPath)) {
    console.log('App.tsx not found');
    return;
  }
  
  let content = fs.readFileSync(appPath, 'utf8');
  
  // Define the pages to check
  const pages = [
    { name: 'HomePage', path: 'src/pages/HomePage.tsx' },
    { name: 'ServicesPage', path: 'src/pages/ServicesPage.tsx' },
    { name: 'SolutionsPage', path: 'src/pages/SolutionsPage.tsx' },
    { name: 'AboutPage', path: 'src/pages/AboutPage.tsx' },
    { name: 'ContactPage', path: 'src/pages/ContactPage.tsx' },
    { name: 'BlogPage', path: 'src/pages/BlogPage.tsx' },
    { name: 'NotFoundPage', path: 'src/pages/NotFoundPage.tsx' },
    { name: 'ComprehensiveServicesPage', path: 'src/pages/ComprehensiveServicesPage.tsx' },
    { name: 'Sitemap', path: 'src/pages/Sitemap.tsx' },
    { name: 'ComprehensiveSitemap', path: 'src/pages/ComprehensiveSitemap.tsx' },
    { name: 'Support', path: 'src/pages/Support.tsx' },
    { name: 'Training', path: 'src/pages/Training.tsx' },
    { name: 'Helpdesk', path: 'src/pages/Helpdesk.tsx' },
    { name: 'RevolutionaryServicesPage', path: 'src/pages/RevolutionaryServicesPage.tsx' },
    { name: 'NewServicesShowcase2025', path: 'src/pages/NewServicesShowcase2025.tsx' },
    { name: 'EnhancedNewServices2025', path: 'src/pages/EnhancedNewServices2025.tsx' },
    { name: 'PricingPage', path: 'src/pages/PricingPage.tsx' }
  ];
  
  // Check each page and fix imports
  pages.forEach(page => {
    const filePath = path.join(process.cwd(), page.path);
    
    if (fileExists(filePath)) {
      const exportType = checkExportType(filePath);
      
      if (exportType === 'default') {
        // Fix to use default import
        const oldPattern = new RegExp(`const ${page.name} = lazy\\(\\(\\) => import\\('\\.\\/pages\\/${page.name}'\\)\\.then\\(module => \\(\\{ default: module\\.${page.name} \\}\\)\\)\\);`);
        const newImport = `const ${page.name} = lazy(() => import('./pages/${page.name}'));`;
        
        if (oldPattern.test(content)) {
          content = content.replace(oldPattern, newImport);
          console.log(`Fixed ${page.name} import to use default export`);
        }
      } else if (exportType) {
        // Fix to use named import
        const oldPattern = new RegExp(`const ${page.name} = lazy\\(\\(\\) => import\\('\\.\\/pages\\/${page.name}'\\)\\.then\\(module => \\(\\{ default: module\\.${page.name} \\}\\)\\)\\);`);
        const newImport = `const ${page.name} = lazy(() => import('./pages/${page.name}').then(module => ({ default: module.${exportType} })));`;
        
        if (oldPattern.test(content)) {
          content = content.replace(oldPattern, newImport);
          console.log(`Fixed ${page.name} import to use named export: ${exportType}`);
        }
      } else {
        console.log(`Warning: Could not determine export type for ${page.name}`);
      }
    } else {
      console.log(`Warning: ${page.path} not found`);
    }
  });
  
  // Write the fixed content back
  fs.writeFileSync(appPath, content);
  console.log('App.tsx imports fixed');
}

// Run the fix
fixAppImports();