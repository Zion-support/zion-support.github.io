'use client';
import { useEffect } from 'react';

interface PerformanceOptimizerProps {
  enableImageOptimization?: boolean;
  enableLazyLoading?: boolean;
  enablePreloading?: boolean;
  enableCodeSplitting?: boolean;
}

const PerformanceOptimizer: React.FC<PerformanceOptimizerProps> = ({
  enableImageOptimization = true,
  enableLazyLoading = true,
  enablePreloading = true,
  enableCodeSplitting = true
}) => {
  useEffect(() => {
    // Image optimization
    if (enableImageOptimization && typeof window !== 'undefined') {
      // Add loading="lazy" to images that don't have it
      const images = document.querySelectorAll('img:not([loading])');
      images.forEach((img) => {
        img.setAttribute('loading', 'lazy');
      });

      // Add decoding="async" for better performance
      images.forEach((img) => {
        img.setAttribute('decoding', 'async');
      });
    }

    // Preload critical resources
    if (enablePreloading && typeof window !== 'undefined') {
      const preloadCriticalResources = () => {
        // Preload critical fonts
        const fontPreload = document.createElement('link');
        fontPreload.rel = 'preload';
        fontPreload.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap';
        fontPreload.as = 'style';
        document.head.appendChild(fontPreload);

        // Preload critical images
        const criticalImages = [
          '/og-image.jpg',
          '/logo.png',
          '/favicon.ico'
        ];

        criticalImages.forEach((src) => {
          const link = document.createElement('link');
          link.rel = 'preload';
          link.href = src;
          link.as = 'image';
          document.head.appendChild(link);
        });
      };

      // Run preloading after initial render
      setTimeout(preloadCriticalResources, 100);
    }

    // Intersection Observer for lazy loading
    if (enableLazyLoading && typeof window !== 'undefined') {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const element = entry.target as HTMLElement;
              if (element.dataset.src) {
                element.setAttribute('src', element.dataset.src);
                element.removeAttribute('data-src');
                observer.unobserve(element);
              }
            }
          });
        },
        { rootMargin: '50px' }
      );

      // Observe all elements with data-src attribute
      const lazyElements = document.querySelectorAll('[data-src]');
      lazyElements.forEach((el) => observer.observe(el));

      return () => observer.disconnect();
    }
  }, [enableImageOptimization, enableLazyLoading, enablePreloading, enableCodeSplitting]);

  return null;
};

export default PerformanceOptimizer;