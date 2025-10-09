'use client';
import React from 'react';

interface PerformanceOptimizerProps {
  enableImageOptimization?: boolean;
  enableLazyLoading?: boolean;
  enableCodeSplitting?: boolean;
  enablePrefetching?: boolean;
}

const PerformanceOptimizer: React.FC<PerformanceOptimizerProps> = ({
  enableImageOptimization = true,
  enableLazyLoading = true,
  enableCodeSplitting = true,
  enablePrefetching = true
}) => {
  React.useEffect(() => {
    if (typeof window !== 'undefined') {
      // Performance monitoring
      if ('performance' in window) {
        const observer = new PerformanceObserver((list) => {
          for (const entry of list.getEntries()) {
            if (entry.entryType === 'navigation') {
              console.log('Page load time:', entry.loadEventEnd - entry.loadEventStart);
            }
          }
        });
        observer.observe({ entryTypes: ['navigation'] });
      }

      // Preload critical resources
      if (enablePrefetching) {
        const criticalResources = [
          '/fonts/inter.woff2',
          '/images/hero-bg.jpg'
        ];
        
        criticalResources.forEach(resource => {
          const link = document.createElement('link');
          link.rel = 'preload';
          link.href = resource;
          link.as = resource.endsWith('.woff2') ? 'font' : 'image';
          document.head.appendChild(link);
        });
      }
    }
  }, [enablePrefetching]);

  return null;
};

export default PerformanceOptimizer;
