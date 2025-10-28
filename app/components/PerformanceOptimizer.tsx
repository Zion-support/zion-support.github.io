'use client';

import React, { memo, useCallback, useEffect } from 'react';

interface PerformanceOptimizerProps {
  enableImageOptimization?: boolean;
  enableLazyLoading?: boolean;
}

const PerformanceOptimizer: React.FC<PerformanceOptimizerProps> = memo(({ 
  enableImageOptimization = true,
  enableLazyLoading = true
}) => {
  const optimizeImages = useCallback(() => {
    if (typeof window === 'undefined' || !enableImageOptimization) return;

    const images = document.querySelectorAll('img');
    images.forEach((img) => {
      if (!img.hasAttribute('loading')) {
        img.setAttribute('loading', 'lazy');
      }
      if (!img.hasAttribute('decoding')) {
        img.setAttribute('decoding', 'async');
      }
    });
  }, [enableImageOptimization]);

  const setupLazyLoading = useCallback(() => {
    if (typeof window === 'undefined' || !enableLazyLoading) return;

    const imageObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const img = entry.target as HTMLImageElement;
          img.classList.remove('lazy');
          imageObserver.unobserve(img);
        }
      });
    });

    const lazyImages = document.querySelectorAll('img[data-src]');
    lazyImages.forEach((img) => {
      imageObserver.observe(img);
    });
  }, [enableLazyLoading]);

  useEffect(() => {
    optimizeImages();
    setupLazyLoading();
  }, [optimizeImages, setupLazyLoading]);

  return null;
});

PerformanceOptimizer.displayName = 'PerformanceOptimizer';

export default PerformanceOptimizer;