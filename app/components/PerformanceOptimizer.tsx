'use client';

import React, { useEffect } from 'react';

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
    // Performance monitoring
    if (typeof window !== 'undefined' && 'performance' in window) {
      // Monitor Core Web Vitals
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.entryType === 'largest-contentful-paint') {
            console.log('LCP:', entry.startTime);
          }
          if (entry.entryType === 'first-input') {
            console.log('FID:', entry.processingStart - entry.startTime);
          }
          if (entry.entryType === 'layout-shift') {
            console.log('CLS:', entry.value);
          }
        }
      });

      observer.observe({ entryTypes: ['largest-contentful-paint', 'first-input', 'layout-shift'] });

      // Preload critical resources
      if (enablePreloading) {
        const preloadCriticalResources = () => {
          // Preload critical CSS
          const criticalCSS = document.createElement('link');
          criticalCSS.rel = 'preload';
          criticalCSS.href = '/styles/critical.css';
          criticalCSS.as = 'style';
          document.head.appendChild(criticalCSS);

          // Preload critical fonts
          const fontPreload = document.createElement('link');
          fontPreload.rel = 'preload';
          fontPreload.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap';
          fontPreload.as = 'style';
          document.head.appendChild(fontPreload);
        };

        preloadCriticalResources();
      }

      // Image optimization
      if (enableImageOptimization) {
        const optimizeImages = () => {
          const images = document.querySelectorAll('img[data-src]');
          const imageObserver = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                const img = entry.target as HTMLImageElement;
                img.src = img.dataset.src || '';
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
              }
            });
          });

          images.forEach((img) => imageObserver.observe(img));
        };

        optimizeImages();
      }

      // Lazy loading for non-critical content
      if (enableLazyLoading) {
        const lazyLoadContent = () => {
          const lazyElements = document.querySelectorAll('[data-lazy]');
          const lazyObserver = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                const element = entry.target as HTMLElement;
                element.classList.add('loaded');
                lazyObserver.unobserve(element);
              }
            });
          });

          lazyElements.forEach((element) => lazyObserver.observe(element));
        };

        lazyLoadContent();
      }

      // Code splitting optimization
      if (enableCodeSplitting) {
        const optimizeCodeSplitting = () => {
          // Preload next likely pages
          const links = document.querySelectorAll('a[href^="/"]');
          const linkObserver = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                const link = entry.target as HTMLAnchorElement;
                const href = link.getAttribute('href');
                if (href && !href.startsWith('#')) {
                  // Preload the page
                  const prefetchLink = document.createElement('link');
                  prefetchLink.rel = 'prefetch';
                  prefetchLink.href = href;
                  document.head.appendChild(prefetchLink);
                }
                linkObserver.unobserve(link);
              }
            });
          });

          links.forEach((link) => linkObserver.observe(link));
        };

        optimizeCodeSplitting();
      }

      // Service Worker registration for caching
      if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('/sw.js')
          .then((registration) => {
            console.log('SW registered: ', registration);
          })
          .catch((registrationError) => {
            console.log('SW registration failed: ', registrationError);
          });
      }

      // Cleanup
      return () => {
        observer.disconnect();
      };
    }
  }, [enableImageOptimization, enableLazyLoading, enablePreloading, enableCodeSplitting]);

  return null;
};

export default PerformanceOptimizer;