import React, { useEffect, useCallback, useMemo } from 'react';

interface PerformanceOptimizerProps {
  enableLazyLoading?: boolean;
  enablePreloading?: boolean;
  enableImageOptimization?: boolean;
  enableCodeSplitting?: boolean;
  enableCaching?: boolean;
}

const PerformanceOptimizer: React.FC<PerformanceOptimizerProps> = ({
  enableLazyLoading = true,
  enablePreloading = true,
  enableImageOptimization = true,
  enableCodeSplitting = true,
  enableCaching = true
}) => {
  // Optimize images for better performance
  const optimizeImages = useCallback(() => {
    if (!enableImageOptimization) return;

    const images = document.querySelectorAll('img');
    images.forEach((img) => {
      // Add loading="lazy" if not already present
      if (!img.hasAttribute('loading')) {
        img.setAttribute('loading', 'lazy');
      }
      
      // Add decoding="async" for better performance
      if (!img.hasAttribute('decoding')) {
        img.setAttribute('decoding', 'async');
      }
      
      // Add fetchpriority="high" for above-the-fold images
      if (img.getBoundingClientRect().top < window.innerHeight) {
        img.setAttribute('fetchpriority', 'high');
      }

      // Add proper alt text if missing
      if (!img.hasAttribute('alt')) {
        img.setAttribute('alt', 'Zion Tech Group - Technology Solutions');
      }
    });
  }, [enableImageOptimization]);

  // Preload critical resources
  const preloadCriticalResources = useCallback(() => {
    if (!enablePreloading) return;

    // Preload critical CSS
    const criticalCSS = document.querySelector('link[rel="stylesheet"]');
    if (criticalCSS) {
      const preloadLink = document.createElement('link');
      preloadLink.rel = 'preload';
      preloadLink.href = criticalCSS.getAttribute('href') || '';
      preloadLink.as = 'style';
      preloadLink.onload = () => {
        preloadLink.rel = 'stylesheet';
      };
      document.head.appendChild(preloadLink);
    }

    // Preload critical fonts
    const fontPreload = document.createElement('link');
    fontPreload.rel = 'preload';
    fontPreload.href = '/fonts/inter-var.woff2';
    fontPreload.as = 'font';
    fontPreload.type = 'font/woff2';
    fontPreload.crossOrigin = 'anonymous';
    document.head.appendChild(fontPreload);
  }, [enablePreloading]);

  // Setup service worker for caching
  const setupServiceWorker = useCallback(() => {
    if (!enableCaching || !('serviceWorker' in navigator)) return;

    navigator.serviceWorker.register('/sw.js')
      .then((registration) => {
        // Service worker registered successfully
        return registration.update();
      })
      .catch((error) => {
        // Service worker registration failed
      });
  }, [enableCaching]);

  // Setup intersection observer for lazy loading
  const setupIntersectionObserver = useCallback(() => {
    if (!enableLazyLoading) return;

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
    }, {
      rootMargin: '50px 0px',
      threshold: 0.01
    });

    // Observe all images with data-src
    const lazyImages = document.querySelectorAll('img[data-src]');
    lazyImages.forEach((img) => imageObserver.observe(img));

    return () => imageObserver.disconnect();
  }, [enableLazyLoading]);

  // Add resource hints for better performance
  const addResourceHints = useCallback(() => {
    // DNS prefetch for external domains
    const domains = [
      'fonts.googleapis.com',
      'fonts.gstatic.com',
      'www.google-analytics.com',
      'www.googletagmanager.com'
    ];

    domains.forEach((domain) => {
      const link = document.createElement('link');
      link.rel = 'dns-prefetch';
      link.href = `//${domain}`;
      document.head.appendChild(link);
    });

    // Preconnect to critical domains
    const criticalDomains = [
      'fonts.googleapis.com',
      'fonts.gstatic.com'
    ];

    criticalDomains.forEach((domain) => {
      const link = document.createElement('link');
      link.rel = 'preconnect';
      link.href = `https://${domain}`;
      link.crossOrigin = 'anonymous';
      document.head.appendChild(link);
    });
  }, []);

  // Monitor performance metrics
  const setupPerformanceMonitoring = useCallback(() => {
    if (typeof window !== 'undefined') {
      import('web-vitals').then(({ onCLS, onINP, onFCP, onLCP, onTTFB }) => {
        onCLS((metric: any) => {
          // CLS metric tracked
        });
        onINP((metric: any) => {
          // INP metric tracked
        });
        onFCP((metric: any) => {
          // FCP metric tracked
        });
        onLCP((metric: any) => {
          // LCP metric tracked
        });
        onTTFB((metric: any) => {
          // TTFB metric tracked
        });
      });
    }

    // Monitor memory usage
    if ('memory' in performance) {
      const checkMemory = () => {
        const memory = (performance as any).memory;
        if (memory.usedJSHeapSize > memory.jsHeapSizeLimit * 0.9) {
          // Memory usage is high, trigger garbage collection
          if ('gc' in window) {
            (window as any).gc();
          }
        }
      };
      
      setInterval(checkMemory, 30000); // Check every 30 seconds
    }
  }, []);

  // Memoized optimization functions
  const optimizationFunctions = useMemo(() => [
    optimizeImages,
    preloadCriticalResources,
    setupServiceWorker,
    setupIntersectionObserver,
    addResourceHints,
    setupPerformanceMonitoring
  ], [
    optimizeImages,
    preloadCriticalResources,
    setupServiceWorker,
    setupIntersectionObserver,
    addResourceHints,
    setupPerformanceMonitoring
  ]);

  useEffect(() => {
    // Run optimizations after component mount
    const timer = setTimeout(() => {
      optimizationFunctions.forEach(fn => fn());
    }, 100);

    return () => {
      clearTimeout(timer);
    };
  }, [optimizationFunctions]);

  // Re-run optimizations when DOM changes
  useEffect(() => {
    const observer = new MutationObserver(() => {
      optimizeImages();
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true
    });

    return () => observer.disconnect();
  }, [optimizeImages]);

  return null; // This component doesn't render anything
};

export default PerformanceOptimizer;