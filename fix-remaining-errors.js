import fs from 'fs';
import path from 'path';

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
  'app/components/PerformanceOptimizer.tsx',
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
  'app/micro-saas-services/microSaasServices.tsx',
  'app/micro-saas-services/services.tsx',
  'app/page-new.tsx',
  'app/page-optimized.tsx',
  'app/pages/AdminPage.tsx',
  'app/pages/ContactPage.tsx',
  'app/root-layout.tsx',
  'app/service-template.tsx',
  'app/types/enhanced.types.ts',
  'app/utils/performanceOptimizer.ts'
];

filesToFix.forEach(filePath => {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Remove unused ReactNode imports
    if (content.includes("import { ReactNode } from 'react'") && !content.includes('ReactNode')) {
      content = content.replace(/import \{ ReactNode \} from 'react';\n?/g, '');
      modified = true;
    }
    
    // Remove unused memo imports
    if (content.includes("import { memo } from 'react'") && !content.includes('memo(')) {
      content = content.replace(/import \{ memo \} from 'react';\n?/g, '');
      modified = true;
    }
    
    // Remove unused Navigation imports
    if (content.includes("import Navigation from") && !content.includes('<Navigation')) {
      content = content.replace(/import Navigation from[^;]+;\n?/g, '');
      modified = true;
    }
    
    // Remove unused variables in destructuring
    content = content.replace(/const\s*\{([^}]*)\}\s*=/g, (match, destructured) => {
      const vars = destructured.split(',').map(v => v.trim());
      const usedVars = vars.filter(v => {
        if (!v || v.includes('=')) return true;
        return content.includes(v) && !v.includes('=');
      });
      if (usedVars.length === 0) {
        return match.replace(destructured, '');
      }
      return match.replace(destructured, usedVars.join(', '));
    });
    
    // Remove unused variables in function parameters
    content = content.replace(/\(([^)]*)\)\s*=>\s*\{[^}]*\}/g, (match, params) => {
      const vars = params.split(',').map(v => v.trim());
      const usedVars = vars.filter(v => {
        if (!v || v.includes('=')) return true;
        return content.includes(v) && !v.includes('=');
      });
      if (usedVars.length === 0) {
        return match.replace(params, '');
      }
      return match.replace(params, usedVars.join(', '));
    });
    
    // Remove unused variables in catch blocks
    content = content.replace(/catch\s*\(\s*([a-zA-Z_][a-zA-Z0-9_]*)\s*\)\s*\{[^}]*\}/g, (match, param) => {
      if (!match.includes(param)) {
        return match.replace(new RegExp(`\\(\\s*${param}\\s*\\)`, 'g'), '(_)');
      }
      return match;
    });
    
    if (modified) {
      fs.writeFileSync(filePath, content);
      console.log(`Fixed errors in: ${filePath}`);
    }
  } catch (error) {
    console.error(`Error processing file ${filePath}:`, error.message);
  }
});

console.log('Remaining error fixing completed!');