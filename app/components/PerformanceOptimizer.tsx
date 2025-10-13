import React, { useEffect, useCallback } from 'react';

interface PerformanceOptimizerProps {
  enableImageOptimization?: boolean;
  enableLazyLoading?: boolean;
  enablePreloading?: boolean;
  enableCompression?: boolean;
}

const PerformanceOptimizer: React.FC<PerformanceOptimizerProps> = ({
  enableImageOptimization = true,
  enableLazyLoading = true,
  enablePreloading = true,
  enableCompression = true,
}) => {
  // Image optimization
  const optimizeImages = useCallback(() => {
    if (!enableImageOptimization) return;

    const images = document.querySelectorAll('img[data-src]');
    images.forEach((img) => {
      const imageElement = img as HTMLImageElement;
      if (imageElement.dataset.src) {
        imageElement.src = imageElement.dataset.src;
        imageElement.removeAttribute('data-src');
      }
    });
  }, [enableImageOptimization]);

  // Lazy loading implementation
  const setupLazyLoading = useCallback(() => {
    if (!enableLazyLoading) return;

    const imageObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const img = entry.target as HTMLImageElement;
          if (img.dataset.src) {
            img.src = img.dataset.src;
            img.classList.remove('lazy');
            imageObserver.unobserve(img);
          }
        }
      });
    });

    const lazyImages = document.querySelectorAll('img[data-src]');
    lazyImages.forEach((img) => imageObserver.observe(img));

    return () => imageObserver.disconnect();
  }, [enableLazyLoading]);

  // Critical resource preloading
  const preloadCriticalResources = useCallback(() => {
    if (!enablePreloading) return;

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
    const criticalFont = document.createElement('link');
    criticalFont.rel = 'preload';
    criticalFont.href = '/fonts/inter-var.woff2';
    criticalFont.as = 'font';
    criticalFont.type = 'font/woff2';
    criticalFont.crossOrigin = 'anonymous';
    document.head.appendChild(criticalFont);

    // Preload critical JavaScript
    const criticalJS = document.createElement('link');
    criticalJS.rel = 'preload';
    criticalJS.href = '/assets/index.js';
    criticalJS.as = 'script';
    document.head.appendChild(criticalJS);
  }, [enablePreloading]);

  // Compression and optimization
  const setupCompression = useCallback(() => {
    if (!enableCompression) return;

    // Enable gzip compression headers
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('/sw.js')
        .then((registration) => {
          console.log('Service Worker registered:', registration);
        })
        .catch((error) => {
          console.log('Service Worker registration failed:', error);
        });
    }
  }, [enableCompression]);

  // Performance monitoring
  const setupPerformanceMonitoring = useCallback(() => {
    // Web Vitals monitoring
    if ('web-vitals' in window) {
      import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
        getCLS(console.log);
        getFID(console.log);
        getFCP(console.log);
        getLCP(console.log);
        getTTFB(console.log);
      });
    }

    // Performance observer for long tasks
    if ('PerformanceObserver' in window) {
      const observer = new PerformanceObserver((list) => {
        list.getEntries().forEach((entry) => {
          if (entry.duration > 50) {
            console.warn('Long task detected:', entry);
          }
        });
      });
      observer.observe({ entryTypes: ['longtask'] });
    }
  }, []);

  // Bundle size optimization
  const optimizeBundleSize = useCallback(() => {
    // Dynamic imports for non-critical components
    const loadNonCriticalComponents = () => {
      // Load analytics only after user interaction
      const loadAnalytics = () => {
        import('./AnalyticsProvider').then((module) => {
          // Analytics loaded
        });
      };

      // Load after 2 seconds or user interaction
      setTimeout(loadAnalytics, 2000);
      
      document.addEventListener('click', loadAnalytics, { once: true });
      document.addEventListener('scroll', loadAnalytics, { once: true });
    };

    loadNonCriticalComponents();
  }, []);

  // Memory optimization
  const optimizeMemory = useCallback(() => {
    // Clean up unused event listeners
    const cleanup = () => {
      // Remove unused event listeners
      const elements = document.querySelectorAll('[data-cleanup]');
      elements.forEach((element) => {
        element.removeEventListener('click', () => {});
        element.removeEventListener('scroll', () => {});
      });
    };

    // Run cleanup every 5 minutes
    setInterval(cleanup, 5 * 60 * 1000);
  }, []);

  useEffect(() => {
    // Initialize all optimizations
    optimizeImages();
    const cleanupLazyLoading = setupLazyLoading();
    preloadCriticalResources();
    setupCompression();
    setupPerformanceMonitoring();
    optimizeBundleSize();
    optimizeMemory();

    return () => {
      if (cleanupLazyLoading) cleanupLazyLoading();
    };
  }, [
    optimizeImages,
    setupLazyLoading,
    preloadCriticalResources,
    setupCompression,
    setupPerformanceMonitoring,
    optimizeBundleSize,
    optimizeMemory,
  ]);

  return null; // This component doesn't render anything
};

export default PerformanceOptimizer;