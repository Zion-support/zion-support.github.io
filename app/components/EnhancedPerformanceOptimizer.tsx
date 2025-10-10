'use client';
import React, { useEffect, ReactNode } from 'react';

interface PerformanceOptimizerProps {
  children: ReactNode;
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
  useEffect(() => {
    // Preload critical resources
    if (enablePreloading) {
      const preloadCriticalResources = () => {
        const criticalResources = [
          '/fonts/inter.woff2',
          '/css/critical.css',
          '/js/vendor.js'
        ];

        criticalResources.forEach(resource => {
          const link = document.createElement('link');
          link.rel = 'preload';
          link.href = resource;
          link.as = resource.endsWith('.css') ? 'style' : 'script';
          document.head.appendChild(link);
        });
      };

      preloadCriticalResources();
    }

    // Optimize images
    if (enableImageOptimization) {
      const optimizeImages = () => {
        const images = document.querySelectorAll('img[data-src]');
        const imageObserver = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              const img = entry.target as HTMLImageElement;
              img.src = img.dataset.src || '';
              img.classList.remove('lazy');
              imageObserver.unobserve(img);
            }
          });
        });

        images.forEach(img => imageObserver.observe(img));
      };

      optimizeImages();
    }

    // Enable lazy loading
    if (enableLazyLoading) {
      const enableLazyLoading = () => {
        const lazyElements = document.querySelectorAll('[data-lazy]');
        const lazyObserver = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              const element = entry.target as HTMLElement;
              element.classList.add('loaded');
              lazyObserver.unobserve(element);
            }
          });
        });

        lazyElements.forEach(element => lazyObserver.observe(element));
      };

      enableLazyLoading();
    }

    // Performance monitoring
    const monitorPerformance = () => {
      if ('performance' in window) {
        const observer = new PerformanceObserver((list) => {
          for (const entry of list.getEntries()) {
            if (entry.entryType === 'measure') {
              console.log(`Performance measure: ${entry.name} - ${entry.duration}ms`);
            }
          }
        });

        observer.observe({ entryTypes: ['measure'] });

        // Measure page load time
        window.addEventListener('load', () => {
          performance.mark('page-loaded');
          performance.measure('page-load-time', 'navigationStart', 'page-loaded');
        });
      }
    };

    monitorPerformance();

    // Cleanup
    return () => {
      // Cleanup observers if needed
    };
  }, [enableImageOptimization, enableLazyLoading, enablePreloading, enableCodeSplitting]);

  return <>{children}</>;
};

PerformanceOptimizer.displayName = 'PerformanceOptimizer';

export default PerformanceOptimizer;