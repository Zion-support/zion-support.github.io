import React, { useEffect } from 'react';

const PerformanceOptimizer: React.FC = () => {
  useEffect(() => {
    // Performance optimization logic
    if (typeof window !== 'undefined') {
      // Preload critical resources
      const preloadLink = document.createElement('link');
      preloadLink.rel = 'preload';
      preloadLink.href = '/fonts/inter.woff2';
      preloadLink.as = 'font';
      preloadLink.type = 'font/woff2';
      preloadLink.crossOrigin = 'anonymous';
      document.head.appendChild(preloadLink);

      // Optimize images
      const images = document.querySelectorAll('img');
      images.forEach((img) => {
        if (!img.loading) {
          img.loading = 'lazy';
        }
      });
    }
  }, []);

  return null;
};

export default PerformanceOptimizer;