import { useState, useEffect } from 'react';

export function useEnhancedPerformance() {
  const [isOptimized, setIsOptimized] = useState(false);

  useEffect(() => {
    const optimizePerformance = () => {
      // Enable resource hints
      const criticalResources = [
        '/app/styles/globals.css',
        '/app/styles/futuristic.css'
      ];
      
      criticalResources.forEach(href => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.as = 'style';
        link.href = href;
        document.head.appendChild(link);
      });

      // Optimize images
      const images = document.querySelectorAll('img');
      images.forEach(img => {
        if (!img.loading) {
          img.loading = 'lazy';
        }
      });

      setIsOptimized(true);
    };

    optimizePerformance();
  }, []);

  const measurePerformance = (name: string, fn: () => void) => {
    const start = performance.now();
    fn();
    const end = performance.now();
    console.log(`${name} execution time: ${end - start}ms`);
  };

  return { isOptimized, measurePerformance };
}
