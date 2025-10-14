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

    const optimizeFonts = () => {
      // Preload critical fonts
      const fontLink = document.createElement('link');
      fontLink.rel = 'preload';
      fontLink.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap';
      fontLink.as = 'style';
      document.head.appendChild(fontLink);
    };

    // Run optimizations
    optimizeImages();
    optimizeFonts();

    // Cleanup
    return () => {
      // Cleanup if needed
    };
  }, []);

  return null; // This component doesn't render anything
};

export default PerformanceOptimizer;