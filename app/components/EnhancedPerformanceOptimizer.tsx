'use client';
import React, { useEffect, useCallback, memo } from 'react';

interface PerformanceOptimizerProps {
  children: React.ReactNode;
  enableImageOptimization?: boolean;
  enableLazyLoading?: boolean;
  enablePreloading?: boolean;
  enableCodeSplitting?: boolean;
}

const PerformanceOptimizer: React.FC<PerformanceOptimizerProps> = memo(({
  children,
  enableImageOptimization = true,
  enableLazyLoading = true,
  enablePreloading = true,
  enableCodeSplitting = true
}) => {
  // Image optimization
  useEffect(() => {
    if (!enableImageOptimization || typeof window === 'undefined') return;

    const optimizeImages = () => {
      const images = document.querySelectorAll('img[data-src]');
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

      images.forEach((img) => imageObserver.observe(img));
    };

    // Run after DOM is ready
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', optimizeImages);
    } else {
      optimizeImages();
    }

    return () => {
      document.removeEventListener('DOMContentLoaded', optimizeImages);
    };
  }, [enableImageOptimization]);

  // Preload critical resources
  useEffect(() => {
    if (!enablePreloading || typeof window === 'undefined') return;

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

    preloadCriticalResources();
  }, [enablePreloading]);

  // Performance monitoring
  useEffect(() => {
    if (typeof window === 'undefined') return;

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

    // Only measure in development
    if (process.env.NODE_ENV === 'development') {
      measurePerformance();
    }
  }, []);

  // Resource hints
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const addResourceHints = () => {
      // DNS prefetch for external domains
      const domains = [
        'fonts.googleapis.com',
        'fonts.gstatic.com'
      ];

      domains.forEach((domain) => {
        const link = document.createElement('link');
        link.rel = 'dns-prefetch';
        link.href = `//${domain}`;
        document.head.appendChild(link);
      });
    };

    addResourceHints();
  }, []);

  return <>{children}</>;
});

PerformanceOptimizer.displayName = 'PerformanceOptimizer';

export default PerformanceOptimizer;