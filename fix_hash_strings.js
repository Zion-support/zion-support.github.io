#!/usr/bin/env node

import fs from 'fs';
import path from 'path';

// List of source files that need fixing (excluding git refs)
const sourceFiles = [
  './app/types/global.d.ts',
  './app/types/app.types.ts',
  './app/components/SearchBar.tsx',
  './app/components/SEOEnhancer.tsx',
  './app/components/SkipLink.tsx',
  './app/components/PerformanceOptimizer.tsx',
  './app/components/EnhancedSEO.tsx',
  './app/components/ServiceCard.tsx',
  './app/components/ServiceWorkerRegistration.tsx',
  './app/components/EnhancedSkipLink.tsx',
  './app/components/Header.tsx',
  './app/components/EnhancedPerformanceOptimizer.tsx',
  './app/components/SystemMonitor.tsx',
  './app/components/PerformanceEnhancer.tsx',
  './app/components/ContentStatistics.tsx',
  './app/components/ThemeToggle.tsx',
  './app/components/ServiceCardSkeleton.tsx',
  './app/components/GlobalErrorBoundary.tsx',
  './app/components/Navigation-backup.tsx',
  './app/components/SearchModal.tsx',
  './app/components/Sidebar.tsx',
  './app/components/FuturisticServiceCard.tsx',
  './app/components/ServicePageTemplate.tsx',
  './app/components/SecurityEnhancer.tsx',
  './app/components/SEOOptimizer.tsx',
  './app/components/ResponsiveContainer.tsx',
  './app/components/Breadcrumb.tsx',
  './app/components/AdvancedPerformanceOptimizer.tsx',
  './app/components/AdvancedErrorBoundary.tsx',
  './app/components/AnimatedCounter.tsx',
  './app/components/ContactForm.tsx',
  './app/hooks/usePerformanceMonitor.ts',
  './app/hooks/useForm.ts'
];

function fixHashStrings(filePath) {
  try {
    if (!fs.existsSync(filePath)) {
      console.log(`File not found: ${filePath}`);
      return;
    }

    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Remove lines that are just 40-character hex strings
    const lines = content.split('\n');
    const filteredLines = lines.filter(line => {
      const trimmed = line.trim();
      // Check if line is just a 40-character hex string
      if (/^[0-9a-f]{40}$/.test(trimmed)) {
        console.log(`Removing hash string: ${trimmed} from ${filePath}`);
        modified = true;
        return false;
      }
      return true;
    });

    if (modified) {
      const newContent = filteredLines.join('\n');
      fs.writeFileSync(filePath, newContent, 'utf8');
      console.log(`Fixed: ${filePath}`);
    } else {
      console.log(`No changes needed: ${filePath}`);
    }
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
  }
}

console.log('Fixing hash strings in source files...');
sourceFiles.forEach(fixHashStrings);
console.log('Done!');