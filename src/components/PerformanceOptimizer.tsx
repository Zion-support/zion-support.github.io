import React, { useEffect } from 'react';

interface PerformanceOptimizerProps {
  children: React.ReactNode;
}

export const PerformanceOptimizer: React.FC<PerformanceOptimizerProps> = ({ children }) => {
  useEffect(() => {
    // Optimize images
    const optimizeImages = () => {
      const images = document.querySelectorAll('img');
      images.forEach(img => {
        if (img.getBoundingClientRect().top > window.innerHeight) {
          img.loading = 'lazy';
        }
        img.decoding = 'async';
      });
    };

    if ('requestIdleCallback' in window) {
      requestIdleCallback(optimizeImages);
    } else {
      setTimeout(optimizeImages, 100);
    }
  }, []);

  return <>{children}</>;
};

export default PerformanceOptimizer;