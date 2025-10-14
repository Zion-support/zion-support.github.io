#!/usr/bin/env node

import fs from 'fs';
import path from 'path';

// List of files with git hash corruption
const corruptedFiles = [
  './temp-broken/about/page.tsx',
  './temp-broken/contact/page.tsx',
  './next.config.js',
  './fix-all-merge-conflicts.js',
  './app/sitemap-page.tsx',
  './app/partners/page.tsx',
  './app/service-template.tsx',
  './app/support/page.tsx',
  './app/pricing/page.tsx',
  './main.tsx',
  './app/micro-saas/page.tsx',
  './app/utils/link.tsx',
  './app/micro-saas-services/services.tsx',
  './app/micro-saas-services/microSaasServices.tsx',
  './app/main.tsx',
  './app/pages/DigitalTransformationPage.tsx',
  './app/pages/AIServicesPage.tsx',
  './app/pages/ITServicesPage.tsx',
  './app/pages/TeamPage.tsx',
  './app/pages/CaseStudiesPage.tsx',
  './app/pages/5GSolutionsPage.tsx',
  './app/pages/ServicesPage.tsx',
  './app/pages/CareersPage.tsx',
  './app/pages/DocumentationPage.tsx',
  './app/pages/FiveGSolutionsPage.tsx',
  './app/pages/ContactPage.tsx',
  './app/pages/CloudInfrastructurePage.tsx',
  './app/not-found.tsx',
  './app/case-studies/page.tsx',
  './app/page-optimized.tsx',
  './app/page-backup.tsx',
  './app/components/ContentPromotionBanner.tsx',
  './SidebarNavigation.tsx',
  './app/utils/image.tsx',
  './app/utils/errorHandler.tsx',
  './app/config/errorBoundaryConfig.tsx',
  './app/error.tsx',
  './app/loading.tsx',
  './app/consultation/page.tsx',
  './app/global-error.tsx',
  './App-minimal.tsx',
  './fix-remaining-issues.js'
];

function fixFile(filePath) {
  try {
    if (!fs.existsSync(filePath)) {
      console.log(`File not found: ${filePath}`);
      return;
    }

    let content = fs.readFileSync(filePath, 'utf8');
    
    // Remove git hash at the end
    content = content.replace(/\s+f7f852c0f7415181a1b362c4aa5a784585ad5828\s*$/, '');
    
    // Fix common syntax issues
    content = content.replace(/;\s*$/gm, ''); // Remove trailing semicolons
    content = content.replace(/;\s*{/g, ' {'); // Fix semicolon before opening brace
    content = content.replace(/;\s*return\s*\(/g, ' return ('); // Fix semicolon before return
    content = content.replace(/;\s*export/g, ' export'); // Fix semicolon before export
    
    // Fix JSX syntax issues
    content = content.replace(/;\s*<div/g, ' <div'); // Fix semicolon before JSX
    content = content.replace(/;\s*<\/div>/g, ' </div>'); // Fix semicolon before closing JSX
    content = content.replace(/;\s*<h1/g, ' <h1'); // Fix semicolon before h1
    content = content.replace(/;\s*<p/g, ' <p'); // Fix semicolon before p
    content = content.replace(/;\s*<span/g, ' <span'); // Fix semicolon before span
    
    // Fix string literal issues
    content = content.replace(/'([^']*)'([^']*)'/g, "'$1$2'"); // Fix broken string literals
    content = content.replace(/"([^"]*)"([^"]*)"/g, '"$1$2"'); // Fix broken string literals
    
    // Fix object syntax
    content = content.replace(/{\s*;\s*/g, '{ '); // Fix semicolon after opening brace
    content = content.replace(/;\s*}/g, ' }'); // Fix semicolon before closing brace
    
    // Fix array syntax
    content = content.replace(/\[\s*;\s*/g, '[ '); // Fix semicolon after opening bracket
    content = content.replace(/;\s*\]/g, ' ]'); // Fix semicolon before closing bracket
    
    // Fix function syntax
    content = content.replace(/\(\s*;\s*/g, '( '); // Fix semicolon after opening parenthesis
    content = content.replace(/;\s*\)/g, ' )'); // Fix semicolon before closing parenthesis
    
    // Fix import statements
    content = content.replace(/import\s+([^;]+);\s*$/gm, 'import $1;');
    
    // Fix export statements
    content = content.replace(/export\s+([^;]+);\s*$/gm, 'export $1;');
    
    // Fix React component patterns
    if (content.includes('React.FC') || content.includes('function') || content.includes('const') && content.includes('=')) {
      // Ensure proper JSX return structure
      if (content.includes('return') && !content.includes('return (')) {
        content = content.replace(/return\s+([^;]+);/g, 'return ($1);');
      }
    }
    
    // Clean up multiple empty lines
    content = content.replace(/\n\s*\n\s*\n/g, '\n\n');
    
    // Ensure file ends with newline
    if (!content.endsWith('\n')) {
      content += '\n';
    }
    
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Fixed: ${filePath}`);
    
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
}

// Fix all corrupted files
console.log('Starting to fix corrupted files...');
corruptedFiles.forEach(fixFile);
console.log('Finished fixing corrupted files.');