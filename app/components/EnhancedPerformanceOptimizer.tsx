'use client';
import React, { useEffect } from 'react';

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
            const element = entry.target as HTMLElement;
            element.classList.add('loaded');
            observer.unobserve(element);
          }
        });
      },
      { threshold: 0.1 }
    );

    const lazyElements = document.querySelectorAll('[data-lazy]');
    lazyElements.forEach((el) => observer.observe(el));

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
