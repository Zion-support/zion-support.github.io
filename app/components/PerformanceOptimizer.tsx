'use client';
import React, { useEffect } from 'react';

interface PerformanceOptimizerProps {
  children: React.ReactNode;
}

const PerformanceOptimizer: React.FC<PerformanceOptimizerProps> = ({ children }) => {
  useEffect(() => {
    // Preload critical resources
    const preloadCriticalResources = () => {
      const criticalImages = document.querySelectorAll('img[data-critical]');
      criticalImages.forEach((img) => {
        const src = img.getAttribute('src');
        if (src) {
          const link = document.createElement('link');
          link.rel = 'preload';
          link.as = 'image';
          link.href = src;
          document.head.appendChild(link);
        }
      });
    };

    // Optimize images
    const optimizeImages = () => {
      const images = document.querySelectorAll('img');
      images.forEach((img) => {
        if (!img.hasAttribute('loading')) {
          img.setAttribute('loading', 'lazy');
        }
        if (!img.hasAttribute('decoding')) {
          img.setAttribute('decoding', 'async');
        }
      });
    };

    // Preload critical resources
    preloadCriticalResources();
    
    // Optimize images
    optimizeImages();

    // Cleanup function
    return () => {
      // Cleanup if needed
    };
  }, []);

  return <>{children}</>;
};

export default PerformanceOptimizer;