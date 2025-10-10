'use client';

import React, { useEffect } from 'react';

interface PerformanceOptimizerProps {
  children: React.ReactNode;
}

const PerformanceOptimizer: React.FC<PerformanceOptimizerProps> = ({ children }) => {
  useEffect(() => {
    // Preload critical resources
    const preloadCriticalResources = () => {
      const criticalImages = [
        '/images/hero-bg.webp',
        '/images/logo.webp'
      ];

      criticalImages.forEach(src => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.as = 'image';
        link.href = src;
        document.head.appendChild(link);
      });
    };

    // Optimize images
    const optimizeImages = () => {
      const images = document.querySelectorAll('img[data-src]');
      images.forEach(img => {
        const image = img as HTMLImageElement;
        if (image.dataset.src) {
          image.src = image.dataset.src;
          image.removeAttribute('data-src');
        }
      });
    };

    // Lazy load non-critical resources
    const lazyLoadResources = () => {
      const lazyImages = document.querySelectorAll('img[data-lazy]');
      const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const img = entry.target as HTMLImageElement;
            if (img.dataset.src) {
              img.src = img.dataset.src;
              img.removeAttribute('data-src');
              img.removeAttribute('data-lazy');
              imageObserver.unobserve(img);
            }
          }
        });
      });

      lazyImages.forEach(img => imageObserver.observe(img));
    };

    // Initialize optimizations
    preloadCriticalResources();
    optimizeImages();
    lazyLoadResources();

    // Cleanup
    return () => {
      // Cleanup if needed
    };
  }, []);

  return <>{children}</>;
};

export default PerformanceOptimizer;