import React, { useEffect, useCallback, useMemo } from 'react';

interface PerformanceOptimizerProps {
  enableImageOptimization?: boolean;
  enablePreloading?: boolean;
  enableCaching?: boolean;
  enableCompression?: boolean;
  enableLazyLoading?: boolean;
}

const PerformanceOptimizer: React.FC<PerformanceOptimizerProps> = ({
  enableImageOptimization = true,
  enablePreloading = true,
  enableCaching = true,
  enableCompression = true,
  enableLazyLoading = true
}) => {
  // Image optimization
  const optimizeImages = useCallback(() => {
    if (!enableImageOptimization) return;

    const images = document.querySelectorAll('img:not([data-optimized])');
    images.forEach((img) => {
      const image = img as HTMLImageElement;
      
      // Mark as optimized to avoid re-processing
      image.setAttribute('data-optimized', 'true');
      
      // Add loading="lazy" if not already present
      if (!image.hasAttribute('loading')) {
        image.setAttribute('loading', 'lazy');
      }
      
      // Add decoding="async" for better performance
      if (!image.hasAttribute('decoding')) {
        image.setAttribute('decoding', 'async');
      }
      
      // Add fetchpriority="high" for above-the-fold images
      if (image.getBoundingClientRect().top < window.innerHeight) {
        image.setAttribute('fetchpriority', 'high');
      }
      
      // Add error handling
      image.addEventListener('error', () => {
        image.style.display = 'none';
      });
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

  // Setup service worker caching
  const setupCaching = useCallback(() => {
    if (!enableCaching || !('serviceWorker' in navigator)) return;

    navigator.serviceWorker.register('/sw.js')
      .then((registration) => {
        // Service worker registered successfully
        return registration.update();
      })
      .catch((error) => {
        // Handle service worker registration error silently in production
        if (process.env.NODE_ENV === 'development' && 
            typeof window !== 'undefined' && 
            window.location.hostname === 'localhost') {
          console.error('Service worker registration failed:', error);
        }
      });
  }, [enableCaching]);

  // Setup compression for API responses
  const setupCompression = useCallback(() => {
    if (!enableCompression) return;

    // Override fetch to add compression headers
    const originalFetch = window.fetch;
    window.fetch = async (input, init = {}) => {
      const headers = new Headers(init.headers);
      headers.set('Accept-Encoding', 'gzip, deflate, br');
      
      return originalFetch(input, {
        ...init,
        headers
      });
    };
  }, [enableCompression]);

  // Intersection Observer for lazy loading
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

  // Resource hints for better performance
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

  // Performance monitoring
  const setupPerformanceMonitoring = useCallback(() => {
    // Monitor Core Web Vitals
    import('web-vitals').then(({ onCLS, onINP, onFCP, onLCP, onTTFB }) => {
      const logMetric = (name: string, metric: any) => {
        if (process.env.NODE_ENV === 'development' && 
            typeof window !== 'undefined' && 
            window.location.hostname === 'localhost') {
          console.log(`${name}:`, metric.value);
        }
      };
      
      onCLS((metric: any) => logMetric('CLS', metric));
      onINP((metric: any) => logMetric('INP', metric));
      onFCP((metric: any) => logMetric('FCP', metric));
      onLCP((metric: any) => logMetric('LCP', metric));
      onTTFB((metric: any) => logMetric('TTFB', metric));
    });

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
    setupCaching,
    setupCompression,
    setupIntersectionObserver,
    addResourceHints,
    setupPerformanceMonitoring
  ], [
    optimizeImages,
    preloadCriticalResources,
    setupCaching,
    setupCompression,
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