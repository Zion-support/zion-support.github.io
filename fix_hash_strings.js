import fs from 'fs';
import path from 'path';

const hashString = '334a97c43c32bf9e815481016c5bf31caa46a580';

// List of files to fix (excluding .git directory)
const filesToFix = [
  './app/types/global.d.ts',
  './app/types/app.types.ts',
  './app/hooks/usePerformanceMonitor.ts',
  './app/hooks/useForm.ts',
  './app/components/SkipLink.tsx',
  './app/components/ServiceCard.tsx',
  './app/components/ServiceWorkerRegistration.tsx',
  './app/components/SystemMonitor.tsx',
  './app/components/ThemeToggle.tsx',
  './app/components/ServiceCardSkeleton.tsx',
  './app/components/Sidebar.tsx',
  './app/components/ServicePageTemplate.tsx',
  './app/components/SearchBar.tsx',
  './app/components/SEOEnhancer.tsx',
  './app/components/PerformanceOptimizer.tsx',
  './app/components/Breadcrumb.tsx',
  './app/components/EnhancedSEO.tsx',
  './app/components/EnhancedSkipLink.tsx',
  './app/components/Header.tsx',
  './app/components/EnhancedPerformanceOptimizer.tsx',
  './app/components/AdvancedPerformanceOptimizer.tsx',
  './app/components/AdvancedErrorBoundary.tsx',
  './app/components/PerformanceEnhancer.tsx',
  './app/components/ContentStatistics.tsx',
  './app/components/GlobalErrorBoundary.tsx',
  './app/components/Navigation-backup.tsx',
  './app/components/SearchModal.tsx',
  './app/components/FuturisticServiceCard.tsx',
  './app/components/AnimatedCounter.tsx',
  './app/components/SecurityEnhancer.tsx',
  './app/components/SEOOptimizer.tsx',
  './app/components/ContactForm.tsx',
  './app/components/ResponsiveContainer.tsx'
];

let fixedCount = 0;

filesToFix.forEach(filePath => {
  try {
    if (fs.existsSync(filePath)) {
      let content = fs.readFileSync(filePath, 'utf8');
      
      if (content.includes(hashString)) {
        // Remove the hash string line
        content = content.replace(new RegExp(`.*${hashString}.*\\n?`, 'g'), '');
        
        fs.writeFileSync(filePath, content);
        console.log(`Fixed: ${filePath}`);
        fixedCount++;
      }
    }
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
});

console.log(`\nFixed ${fixedCount} files`);