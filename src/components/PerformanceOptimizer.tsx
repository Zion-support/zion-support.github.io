<<<<<<< HEAD
import React, { useEffect } from 'react';

const PerformanceOptimizer: React.FC = () => {
  useEffect(() => {
    // Performance optimization code
    const optimizePerformance = () => {
      // Preload critical resources
      const criticalResources = [
        '/src/index.css',
        '/src/styles/optimizations.css',
        '/src/styles/accessibility.css'
      ];

      criticalResources.forEach(resource => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.href = resource;
        link.as = 'style';
        document.head.appendChild(link);
      });

      // Optimize images
      const images = document.querySelectorAll('img');
      images.forEach(img => {
        if (!img.loading) {
          img.loading = 'lazy';
        }
      });

      // Add performance monitoring
      if ('performance' in window) {
        window.addEventListener('load', () => {
          const perfData = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
          console.log('Performance metrics:', {
            domContentLoaded: perfData.domContentLoadedEventEnd - perfData.domContentLoadedEventStart,
            loadComplete: perfData.loadEventEnd - perfData.loadEventStart,
            totalTime: perfData.loadEventEnd - perfData.fetchStart
          });
        });
      }
    };

    optimizePerformance();
  }, []);

  return null; // This component doesn't render anything
};

export default PerformanceOptimizer;
=======
import React from 'react';

export default function PerformanceOptimizer(): JSX.Element {
  return <></>;
}

>>>>>>> fix/netlify-build
