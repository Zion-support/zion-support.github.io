#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log('🔧 Fixing ReactNode imports and remaining issues...\n');

// List of files that need specific fixes
const filesToFix = [
  'app/components/AdvancedSEOOptimizer.tsx',
  'app/components/Breadcrumb.tsx',
  'app/components/EnhancedAccessibility.tsx',
  'app/components/EnhancedAccessibilityManager.tsx',
  'app/components/EnhancedLoading.tsx',
  'app/components/ErrorHandler.tsx',
  'app/components/ImageOptimizer.tsx',
  'app/components/LazyWrapper.tsx',
  'app/components/LoadingSkeleton.tsx',
  'app/components/Navigation.tsx',
  'app/components/NotFoundPage.tsx',
  'app/components/OptimizedLoading.tsx',
  'app/components/PerformanceEnhancer.tsx',
  'app/components/PerformanceMonitoring.tsx',
  'app/components/ResponsiveContainer.tsx',
  'app/components/SEOEnhancer.tsx',
  'app/components/SEOOptimizer.tsx',
  'app/components/SearchBar.tsx',
  'app/components/SearchModal.tsx',
  'app/components/SecurityEnhancer.tsx',
  'app/components/ServiceCard.tsx',
  'app/components/ServiceCardSkeleton.tsx',
  'app/components/ServicePageTemplate.tsx',
  'app/components/ServiceWorker.tsx',
  'app/components/Sidebar.tsx',
  'app/components/StructuredData.tsx',
  'app/components/SystemMonitor.tsx',
  'app/ecommerce-analytics-pro/page.tsx',
  'app/micro-saas-services/microSaasServices.tsx',
  'app/micro-saas-services/services.tsx',
  'app/page-new.tsx',
  'app/page-optimized.tsx',
  'app/pages/AdminPage.tsx',
  'app/pages/ContactPage.tsx',
  'app/root-layout.tsx',
  'app/service-template.tsx',
  'app/types/enhanced.types.ts',
  'app/types/next.d.ts'
];

// Function to fix ReactNode imports
function fixReactNodeImports(content) {
  // Remove ReactNode from single imports
  content = content.replace(/import\s*\{\s*ReactNode\s*\}\s*from\s*['"]react['"];?\s*/g, '');
  
  // Remove ReactNode from multi-imports
  content = content.replace(/import\s*\{\s*([^}]*),\s*ReactNode\s*([^}]*)\s*\}\s*from\s*['"]react['"];?\s*/g, (match, before, after) => {
    const imports = (before + after).split(',').map(imp => imp.trim()).filter(imp => imp && imp !== 'ReactNode');
    if (imports.length === 0) {
      return '';
    }
    return `import { ${imports.join(', ')} } from 'react';\n`;
  });
  
  return content;
}

// Function to fix specific issues
function fixSpecificIssues(content, filePath) {
  // Fix Navigation component
  if (filePath.includes('Navigation.tsx')) {
    content = content.replace(/import\s*\{\s*memo\s*\}\s*from\s*['"]react['"];?\s*/g, '');
  }
  
  // Fix PerformanceMonitoring component
  if (filePath.includes('PerformanceMonitoring.tsx')) {
    content = content.replace(/const\s*\[\s*memoryUsage\s*,\s*setMemoryUsage\s*\]\s*=\s*useState[^;]+;?\s*/g, '');
  }
  
  // Fix EnhancedAccessibilityManager component
  if (filePath.includes('EnhancedAccessibilityManager.tsx')) {
    content = content.replace(/imgIndex\s*,\s*/g, '');
  }
  
  // Fix ecommerce-analytics-pro page
  if (filePath.includes('ecommerce-analytics-pro/page.tsx')) {
    content = content.replace(/const\s+EcommerceanalyticsproPage[^;]+;?\s*/g, '');
  }
  
  // Fix page-new.tsx and page-optimized.tsx
  if (filePath.includes('page-new.tsx') || filePath.includes('page-optimized.tsx')) {
    content = content.replace(/import\s+Navigation\s+from\s*['"]@\/components\/Navigation['"];?\s*/g, '');
  }
  
  return content;
}

// Function to process a single file
function processFile(filePath) {
  try {
    const fullPath = path.join(__dirname, filePath);
    if (!fs.existsSync(fullPath)) {
      console.log(`⚠️  File not found: ${filePath}`);
      return false;
    }
    
    let content = fs.readFileSync(fullPath, 'utf8');
    const originalContent = content;
    
    // Apply all fixes
    content = fixReactNodeImports(content);
    content = fixSpecificIssues(content, filePath);
    
    // Clean up multiple empty lines
    content = content.replace(/\n\s*\n\s*\n/g, '\n\n');
    
    if (content !== originalContent) {
      fs.writeFileSync(fullPath, content);
      console.log(`✅ Fixed: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`❌ Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Main execution
console.log(`Processing ${filesToFix.length} files...\n`);

let fixedCount = 0;
for (const file of filesToFix) {
  if (processFile(file)) {
    fixedCount++;
  }
}

console.log(`\n🎉 Fixed ${fixedCount} files!`);
console.log('✨ ReactNode import fixes completed!');