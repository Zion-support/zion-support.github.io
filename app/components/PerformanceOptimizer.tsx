'use client';
import React, { useEffect, useCallback } from 'react';

interface PerformanceOptimizerProps {
  children: React.ReactNode;
}

const PerformanceOptimizer: React.FC<PerformanceOptimizerProps> = ({ children }) => {
  const optimizeMemory = useCallback(() => {
    if ('memory' in performance) {
      const memory = (performance as any).memory;
      if (memory.usedJSHeapSize > memory.jsHeapSizeLimit * 0.8) {
        // Trigger garbage collection if available
        if (window.gc) {
          window.gc();
        }
      }
    }
  }, []);

  const optimizeImages = useCallback(() => {
    const images = document.querySelectorAll('img[data-src]');
    images.forEach((img) => {
      const image = img as HTMLImageElement;
      if (image.dataset.src) {
        image.src = image.dataset.src;
        image.removeAttribute('data-src');
      }
    });
  }, []);

  useEffect(() => {
    // Optimize performance on mount
    optimizeMemory();
    optimizeImages();

    // Set up performance monitoring
    const observer = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (entry.entryType === 'measure') {
          console.log(`Performance: ${entry.name} took ${entry.duration}ms`);
        }
      }
    });

    observer.observe({ entryTypes: ['measure'] });

    // Cleanup
    return () => {
      observer.disconnect();
    };
  }, [optimizeMemory, optimizeImages]);

  return <>{children}</>;
};

export default PerformanceOptimizer;