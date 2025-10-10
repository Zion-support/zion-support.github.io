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

    // Run optimization after DOM is ready
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

    const lazyLoadElements = () => {
      const lazyElements = document.querySelectorAll('[data-lazy]');
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const element = entry.target as HTMLElement;
            element.classList.add('loaded');
            observer.unobserve(element);
          }
        });
      });

      lazyElements.forEach((element) => observer.observe(element));
    };

    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', lazyLoadElements);
    } else {
      lazyLoadElements();
    }

    return () => {
      document.removeEventListener('DOMContentLoaded', lazyLoadElements);
    };
  }, [enableLazyLoading]);

  // Preloading
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
      criticalFont.crossOrigin = 'anonymous';
      document.head.appendChild(criticalFont);
    };

    preloadCriticalResources();
  }, [enablePreloading]);

  // Code splitting optimization
  useEffect(() => {
    if (!enableCodeSplitting) return;

    const optimizeCodeSplitting = () => {
      // Prefetch next likely routes
      const links = document.querySelectorAll('a[href]');
      links.forEach((link) => {
        const href = link.getAttribute('href');
        if (href && href.startsWith('/') && !href.startsWith('//')) {
          link.addEventListener('mouseenter', () => {
            // Prefetch the route when user hovers
            const linkElement = document.createElement('link');
            linkElement.rel = 'prefetch';
            linkElement.href = href;
            document.head.appendChild(linkElement);
          }, { once: true });
        }
      });
    };

    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', optimizeCodeSplitting);
    } else {
      optimizeCodeSplitting();
    }
  }, [enableCodeSplitting]);

  // Performance monitoring
  useEffect(() => {
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
    };

    // Run performance measurement after page load
    window.addEventListener('load', measurePerformance);
    return () => window.removeEventListener('load', measurePerformance);
  }, []);

  return <>{children}</>;
};

export default PerformanceOptimizer;