'use client'
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

    // Run optimization after DOM is loaded
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', optimizeImages);
    } else {
      optimizeImages();
    }

    return () => {
      document.removeEventListener('DOMContentLoaded', optimizeImages);
    };
  }, [enableImageOptimization]);

  // Lazy loading
  useEffect(() => {
    if (!enableLazyLoading) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const element = entry.target as HTMLElement;
            if (element.dataset.src) {
              element.style.backgroundImage = `url(${element.dataset.src})`;
              element.removeAttribute('data-src');
            }
            observer.unobserve(element);
          }
        });
      },
      { threshold: 0.1 }
    );

    const lazyElements = document.querySelectorAll('[data-src]');
    lazyElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [enableLazyLoading]);

  // Preloading critical resources
  useEffect(() => {
    if (!enablePreloading) return;

    const preloadCriticalResources = () => {
      // Preload critical CSS
      const criticalCSS = document.createElement('link');
      criticalCSS.rel = 'preload';
      criticalCSS.href = '/critical.css';
      criticalCSS.as = 'style';
      document.head.appendChild(criticalCSS);

      // Preload critical fonts
      const criticalFont = document.createElement('link');
      criticalFont.rel = 'preload';
      criticalFont.href = '/fonts/inter.woff2';
      criticalFont.as = 'font';
      criticalFont.type = 'font/woff2';
      criticalFont.crossOrigin = 'anonymous';
      document.head.appendChild(criticalFont);
    };

    preloadCriticalResources();
  }, [enablePreloading]);

  // Code splitting optimization
  useEffect(() => {
    if (!enableCodeSplitting) return;

    const optimizeCodeSplitting = () => {
      // Prefetch next route
      const links = document.querySelectorAll('a[href^="/"]');
      links.forEach((link) => {
        link.addEventListener('mouseenter', () => {
          const href = link.getAttribute('href');
          if (href && !href.startsWith('#')) {
            // Prefetch the route - simplified for Vite
            console.log(`Prefetching route: ${href}`);
          }
        });
      });
    };

    optimizeCodeSplitting();
  }, [enableCodeSplitting]);

  // Performance monitoring
  useEffect(() => {
    const measurePerformance = () => {
      if ('performance' in window) {
        // Measure page load time
        const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
        if (navigation) {
          const loadTime = navigation.loadEventEnd - navigation.loadEventStart;
          console.log(`Page load time: ${loadTime}ms`);
        }

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
      }
    };

    // Run performance measurement after page load
    if (document.readyState === 'complete') {
      measurePerformance();
    } else {
      window.addEventListener('load', measurePerformance);
    }

    return () => {
      window.removeEventListener('load', measurePerformance);
    };
  }, []);

  return <>{children}</>;
};

export default PerformanceOptimizer;
