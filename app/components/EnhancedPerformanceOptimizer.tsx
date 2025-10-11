'use client';
import React, { useEffect, useCallback } from 'react';

interface PerformanceOptimizerProps {
  children: React.ReactNode;
  enableImageOptimization?: boolean;
  enableLazyLoading?: boolean;
  enablePreloading?: boolean;
  enableCodeSplitting?: boolean;
}

const PerformanceOptimizer: React.FC<PerformanceOptimizerProps> = ({
  children,
  enableImageOptimization = true,
  enableLazyLoading = true,
  enablePreloading = true,
  enableCodeSplitting = true
}) => {
  // Image optimization
  useEffect(() => {
    if (!enableImageOptimization) return;

    const optimizeImages = () => {
      const images = document.querySelectorAll('img[data-src]');
      images.forEach((img) => {
        const image = img as HTMLImageElement;
        if (image.dataset.src) {
          image.src = image.dataset.src;
          image.removeAttribute('data-src');
        }
      });
    };

    optimizeImages();
  }, [enableImageOptimization]);

  // Lazy loading
  useEffect(() => {
    if (!enableLazyLoading) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const img = entry.target as HTMLImageElement;
            if (img.dataset.src) {
              img.src = img.dataset.src;
              img.removeAttribute('data-src');
              observer.unobserve(img);
            }
          }
        });
      },
      { threshold: 0.1 }
    );

    const lazyImages = document.querySelectorAll('img[data-src]');
    lazyImages.forEach((img) => observer.observe(img));

    return () => observer.disconnect();
  }, [enableLazyLoading]);

  // Preloading
  useEffect(() => {
    if (!enablePreloading) return;

    const preloadCriticalResources = () => {
      const criticalImages = document.querySelectorAll('img[data-preload]');
      criticalImages.forEach((img) => {
        const image = img as HTMLImageElement;
        if (image.dataset.preload) {
          const link = document.createElement('link');
          link.rel = 'preload';
          link.as = 'image';
          link.href = image.dataset.preload;
          document.head.appendChild(link);
        }
      });
    };

    preloadCriticalResources();
  }, [enablePreloading]);

  return <>{children}</>;
};

export default PerformanceOptimizer;