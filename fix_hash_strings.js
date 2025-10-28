import fs from 'fs';
import path from 'path';

const hashString = '334a97c43c32bf9e815481016c5bf31caa46a580';

const filesToFix = [
  './app/components/SearchBar.tsx',
  './app/components/SEOEnhancer.tsx',
  './app/components/PerformanceOptimizer.tsx',
  './app/components/ServiceCard.tsx',
  './app/components/PerformanceEnhancer.tsx',
  './app/components/SearchModal.tsx',
  './app/components/SecurityEnhancer.tsx',
  './app/components/SEOOptimizer.tsx',
  './app/components/ResponsiveContainer.tsx',
  './app/hooks/usePerformanceMonitor.ts',
  './app/hooks/useForm.ts',
  './app/types/global.d.ts',
  './app/types/app.types.ts',
  './app/components/SkipLink.tsx',
  './app/components/Breadcrumb.tsx',
  './app/components/EnhancedSEO.tsx',
  './app/components/ServiceWorkerRegistration.tsx',
  './app/components/EnhancedSkipLink.tsx',
  './app/components/Header.tsx',
  './app/components/EnhancedPerformanceOptimizer.tsx',
  './app/components/AdvancedPerformanceOptimizer.tsx',
  './app/components/AdvancedErrorBoundary.tsx',
  './app/components/SystemMonitor.tsx',
  './app/components/ContentStatistics.tsx',
  './app/components/ThemeToggle.tsx',
  './app/components/ServiceCardSkeleton.tsx',
  './app/components/GlobalErrorBoundary.tsx',
  './app/components/Navigation-backup.tsx',
  './app/components/Sidebar.tsx',
  './app/components/FuturisticServiceCard.tsx',
  './app/components/AnimatedCounter.tsx',
  './app/components/ServicePageTemplate.tsx',
  './app/components/ContactForm.tsx'
];

filesToFix.forEach(filePath => {
  try {
    const fullPath = path.resolve(filePath);
    if (fs.existsSync(fullPath)) {
      let content = fs.readFileSync(fullPath, 'utf8');
      const originalContent = content;
      
      // Remove the hash string (with or without newlines around it)
      content = content.replace(new RegExp(`\\s*${hashString}\\s*`, 'g'), '');
      
      if (content !== originalContent) {
        fs.writeFileSync(fullPath, content, 'utf8');
        console.log(`Fixed: ${filePath}`);
      } else {
        console.log(`No changes needed: ${filePath}`);
      }
    } else {
      console.log(`File not found: ${filePath}`);
    }
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
  }
});

console.log('Hash string removal completed!');