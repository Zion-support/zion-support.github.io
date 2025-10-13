import React, { useEffect, ReactNode } from 'react';

interface PerformanceOptimizerProps {
  children: ReactNode;
}

const PerformanceOptimizer: React.FC<PerformanceOptimizerProps> = ({ children }) => {
  useEffect(() => {
    // Performance optimization code
    const optimizeImages = () => {
      const images = document.querySelectorAll('img');
      images.forEach((img) => {
        if (!img.hasAttribute('loading')) {
          img.setAttribute('loading', 'lazy');
        }
      });
    };

    const optimizeFonts = () => {
      // Preload critical fonts
      const link = document.createElement('link');
      link.rel = 'preload';
      link.href = '/fonts/inter.woff2';
      link.as = 'font';
      link.type = 'font/woff2';
      link.crossOrigin = 'anonymous';
      document.head.appendChild(link);
    };

    const optimizeResources = () => {
      // Preload critical resources
      const criticalResources = [
        '/css/critical.css',
        '/js/critical.js'
      ];

      criticalResources.forEach((resource) => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.href = resource;
        link.as = resource.endsWith('.css') ? 'style' : 'script';
        document.head.appendChild(link);
      });
    };

    // Run optimizations
    optimizeImages();
    optimizeFonts();
    optimizeResources();

    // Cleanup function
    return () => {
      // Cleanup if needed
    };
  }, []);

  return <>{children}</>;
};

export default PerformanceOptimizer;