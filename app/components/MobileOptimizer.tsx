'use client';

import React, { useEffect } from 'react';

const MobileOptimizer: React.FC = () => {
  useEffect(() => {
    // Optimize touch interactions
    const optimizeTouchInteractions = () => {
      const buttons = document.querySelectorAll('button, a, [role="button"]');
      buttons.forEach((button) => {
        if (!button.classList.contains('touch-manipulation')) {
          button.classList.add('touch-manipulation');
        }
      });
    };

    // Optimize images for mobile
    const optimizeImages = () => {
      const images = document.querySelectorAll('img');
      images.forEach((img) => {
        const imageElement = img as HTMLImageElement;
        if (!imageElement.loading) {
          imageElement.loading = 'lazy';
        }
        if (!imageElement.decoding) {
          imageElement.decoding = 'async';
        }
      });
    };

    // Optimize viewport
    const optimizeViewport = () => {
      const viewport = document.querySelector('meta[name="viewport"]');
      if (!viewport) {
        const meta = document.createElement('meta');
        meta.name = 'viewport';
        meta.content = 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no';
        document.head.appendChild(meta);
      }
    };

    // Initialize optimizations
    optimizeTouchInteractions();
    optimizeImages();
    optimizeViewport();

    // Re-run optimizations when DOM changes
    const observer = new MutationObserver(() => {
      optimizeTouchInteractions();
      optimizeImages();
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return null;
};

export default MobileOptimizer;