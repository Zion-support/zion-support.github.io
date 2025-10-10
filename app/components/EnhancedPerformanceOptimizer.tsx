'use client';
import React, { useEffect, memo } from 'react';

interface PerformanceOptimizerProps {
  enableImageOptimization?: boolean;
  enableLazyLoading?: boolean;
  enablePreloading?: boolean;
  enableCodeSplitting?: boolean;
}

const PerformanceOptimizer: React.FC<PerformanceOptimizerProps> = memo(({
  enableImageOptimization = true,
  enableLazyLoading = true,
  enablePreloading = true,
  enableCodeSplitting = true
}) => {
  useEffect(() => {
    // Image optimization
    if (enableImageOptimization && typeof window !== 'undefined') {
      const optimizeImages = () => {
        const images = document.querySelectorAll('img[data-src]');
        images.forEach((img) => {
          const imageElement = img as HTMLImageElement;
          if (imageElement.dataset.src) {
            imageElement.src = imageElement.dataset.src;
            imageElement.removeAttribute('data-src');
          }
        });
      };

      // Run immediately and on scroll
      optimizeImages();
      window.addEventListener('scroll', optimizeImages, { passive: true });
      
      return () => window.removeEventListener('scroll', optimizeImages);
    }
  }, [enableImageOptimization]);

  useEffect(() => {
    // Lazy loading for images
    if (enableLazyLoading && typeof window !== 'undefined') {
      const lazyImages = document.querySelectorAll('img[data-src]');
      
      const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
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

      lazyImages.forEach((img) => imageObserver.observe(img));
      
      return () => imageObserver.disconnect();
    }
  }, [enableLazyLoading]);

  useEffect(() => {
    // Preload critical resources
    if (enablePreloading && typeof window !== 'undefined') {
      const preloadCriticalResources = () => {
        // Preload critical CSS
        const criticalCSS = document.createElement('link');
        criticalCSS.rel = 'preload';
        criticalCSS.href = '/critical.css';
        criticalCSS.as = 'style';
        criticalCSS.onload = () => {
          criticalCSS.rel = 'stylesheet';
        };
        document.head.appendChild(criticalCSS);

        // Preload critical fonts
        const fontPreload = document.createElement('link');
        fontPreload.rel = 'preload';
        fontPreload.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap';
        fontPreload.as = 'style';
        fontPreload.crossOrigin = 'anonymous';
        document.head.appendChild(fontPreload);
      };

      preloadCriticalResources();
    }
  }, [enablePreloading]);

  useEffect(() => {
    // Performance monitoring
    if (typeof window !== 'undefined' && 'performance' in window) {
      const measurePerformance = () => {
        // Measure Core Web Vitals
        const observer = new PerformanceObserver((list) => {
          list.getEntries().forEach((entry) => {
            if (entry.entryType === 'largest-contentful-paint') {
              console.log('LCP:', entry.startTime);
            }
            if (entry.entryType === 'first-input') {
              console.log('FID:', entry.processingStart - entry.startTime);
            }
            if (entry.entryType === 'layout-shift') {
              console.log('CLS:', (entry as any).value);
            }
          });
        });

        observer.observe({ entryTypes: ['largest-contentful-paint', 'first-input', 'layout-shift'] });

        // Measure page load time
        window.addEventListener('load', () => {
          const loadTime = performance.timing.loadEventEnd - performance.timing.navigationStart;
          console.log('Page Load Time:', loadTime + 'ms');
        });

        return () => observer.disconnect();
      };

      measurePerformance();
    }
  }, []);

  // Resource hints for better performance
  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Add resource hints
      const addResourceHints = () => {
        const hints = [
          { rel: 'dns-prefetch', href: 'https://fonts.googleapis.com' },
          { rel: 'dns-prefetch', href: 'https://fonts.gstatic.com' },
          { rel: 'dns-prefetch', href: 'https://www.google-analytics.com' },
          { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
          { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossOrigin: 'anonymous' }
        ];

        hints.forEach((hint) => {
          const link = document.createElement('link');
          Object.entries(hint).forEach(([key, value]) => {
            if (key === 'crossOrigin') {
              link.crossOrigin = value as string;
            } else {
              (link as any)[key] = value;
            }
          });
          document.head.appendChild(link);
        });
      };

      addResourceHints();
    }
  }, []);

  return null;
});

PerformanceOptimizer.displayName = 'PerformanceOptimizer';

export default PerformanceOptimizer;