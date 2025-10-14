import React, { ReactNode, useEffect } from 'react';

interface PerformanceOptimizerProps {
  children: ReactNode;
}

const PerformanceOptimizer: React.FC<PerformanceOptimizerProps> = ({ children }) => {
  useEffect(() => {
    // Performance optimization logic
    const optimizeImages = () => {
      const images = document.querySelectorAll('img');
      images.forEach((img) => {
        if (!img.loading) {
          img.loading = 'lazy';
        }
      });
    };

    const preloadCriticalResources = () => {
      // Preload critical resources
      const criticalResources = [
        '/fonts/inter.woff2',
        '/css/critical.css'
      ];

      criticalResources.forEach((resource) => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.href = resource;
        link.as = resource.endsWith('.woff2') ? 'font' : 'style';
        document.head.appendChild(link);
      });
    };

    optimizeImages();
    preloadCriticalResources();

    // Cleanup
    return () => {
      // Cleanup logic if needed
    };
  }, []);

  return <>{children}</>;
};

export default PerformanceOptimizer;