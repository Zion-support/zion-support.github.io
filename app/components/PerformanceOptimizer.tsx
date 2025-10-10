'use client';

import React, { useEffect } from 'react';

const PerformanceOptimizer: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  useEffect(() => {
    // Preload critical resources
    const preloadResources = () => {
      const criticalImages = [
        '/images/hero-bg.jpg',
        '/images/logo.png'
      ];

      criticalImages.forEach((src) => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.as = 'image';
        link.href = src;
        document.head.appendChild(link);
      });
    };

    // Optimize images
    const optimizeImages = () => {
      const images = document.querySelectorAll('img');
      images.forEach((img) => {
        if (!img.loading) {
          img.loading = 'lazy';
        }
        if (!img.decoding) {
          img.decoding = 'async';
        }
      });
    };

    // Initialize optimizations
    preloadResources();
    optimizeImages();

    // Re-optimize on route changes
    const observer = new MutationObserver(optimizeImages);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => observer.disconnect();
  }, []);

  return <>{children}</>;
};

export default PerformanceOptimizer;
