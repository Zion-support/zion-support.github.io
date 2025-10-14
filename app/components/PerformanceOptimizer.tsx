import React, { useEffect } from 'react';

const PerformanceOptimizer: React.FC = () => {
  useEffect(() => {
    // Performance optimization code
    const optimizeImages = () => {
      const images = document.querySelectorAll('img');
      images.forEach(img => {
        if (!img.loading) {
          img.loading = 'lazy';
        }
      });
    };

    const preloadCriticalResources = () => {
      // Preload critical CSS and fonts
      const criticalResources = [
        '/fonts/inter.woff2',
        '/css/critical.css'
      ];

      criticalResources.forEach(resource => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.href = resource;
        link.as = resource.endsWith('.css') ? 'style' : 'font';
        if (resource.endsWith('.woff2')) {
          link.crossOrigin = 'anonymous';
        }
        document.head.appendChild(link);
      });
    };

    // Run optimizations
    optimizeImages();
    preloadCriticalResources();

    // Cleanup
    return () => {
      // Any cleanup if needed
    };
  }, []);

  return null; // This component doesn't render anything
};

export default PerformanceOptimizer;