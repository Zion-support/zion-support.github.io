'use client';
import React from 'react';

interface PerformanceOptimizerProps {
  enableImageOptimization?: boolean;
  enableLazyLoading?: boolean;
  enablePreloading?: boolean;
  enableCodeSplitting?: boolean;
  children?: React.ReactNode;
}

const PerformanceOptimizer: React.FC<PerformanceOptimizerProps> = ({
  enableImageOptimization = true,
  enableLazyLoading = true,
  enablePreloading = true,
  enableCodeSplitting = true,
  children
}) => {
  React.useEffect(() => {
    // Preload critical resources
    if (enablePreloading && typeof window !== 'undefined') {
      const preloadResources = () => {
        // Preload critical fonts
        const fontLink = document.createElement('link');
        fontLink.rel = 'preload';
        fontLink.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap';
        fontLink.as = 'style';
        document.head.appendChild(fontLink);

        // Preload critical images
        const criticalImages = [
          '/images/hero-bg.jpg',
          '/images/logo.png'
        ];

        criticalImages.forEach(src => {
          const link = document.createElement('link');
          link.rel = 'preload';
          link.href = src;
          link.as = 'image';
          document.head.appendChild(link);
        });
      };

      // Run preloading after initial render
      setTimeout(preloadResources, 100);
    }

    // Enable image optimization
    if (enableImageOptimization && typeof window !== 'undefined') {
      const optimizeImages = () => {
        const images = document.querySelectorAll('img[data-src]');
        images.forEach(img => {
          const imageElement = img as HTMLImageElement;
          if (imageElement.dataset.src) {
            imageElement.src = imageElement.dataset.src;
            imageElement.removeAttribute('data-src');
          }
        });
      };

      // Use Intersection Observer for lazy loading
      if (enableLazyLoading && 'IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              const img = entry.target as HTMLImageElement;
              if (img.dataset.src) {
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                imageObserver.unobserve(img);
              }
            }
          });
        });

        const lazyImages = document.querySelectorAll('img[data-src]');
        lazyImages.forEach(img => imageObserver.observe(img));
      } else {
        // Fallback for browsers without IntersectionObserver
        optimizeImages();
      }
    }

    // Performance monitoring
    if (typeof window !== 'undefined' && 'performance' in window) {
      const measurePerformance = () => {
        // Measure Core Web Vitals
        if ('web-vitals' in window) {
          import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
            getCLS(console.log);
            getFID(console.log);
            getFCP(console.log);
            getLCP(console.log);
            getTTFB(console.log);
          });
        }

        // Measure page load time
        window.addEventListener('load', () => {
          const loadTime = performance.timing.loadEventEnd - performance.timing.navigationStart;
          console.log(`Page load time: ${loadTime}ms`);
        });
      };

      measurePerformance();
    }
  }, [enableImageOptimization, enableLazyLoading, enablePreloading, enableCodeSplitting]);

  return <>{children}</>;
};

export default PerformanceOptimizer;