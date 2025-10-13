
interface PerformanceEnhancerProps {
  enableImageOptimization?: boolean;
  enablePreloading?: boolean;
  enableCaching?: boolean;
  enableCompression?: boolean;
}

const AdvancedPerformanceEnhancer: React.FC<PerformanceEnhancerProps> = ({
  enableImageOptimization = true,
  enablePreloading = true,
  enableCaching = true,
  enableCompression = true
}) => {
  // Image optimization
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
      
      // Add fetchpriority="auto" for above-the-fold images
      if (img.getBoundingClientRect().top < window.innerHeight) {
        img.setAttribute('fetchpriority', 'high');
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

  // Implement service worker caching
  const setupCaching = useCallback(() => {
    if (!enableCaching || !('serviceWorker' in navigator)) return;

    navigator.serviceWorker.register('/sw.js')
      .then((registration) => {
        // Service worker registered successfully
        return registration.update();
      })
      .catch((error) => {
        console.error('Service worker registration failed:', error);
      });
  }, [enableCaching]);

  // Implement compression for API responses
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
    if (!enableImageOptimization) return;

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
  }, [enableImageOptimization]);

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
      onCLS((metric: any) => {
        console.log('CLS:', metric.value);
      });
      onINP((metric: any) => {
        console.log('INP:', metric.value);
      });
      onFCP((metric: any) => {
        console.log('FCP:', metric.value);
      });
      onLCP((metric: any) => {
        console.log('LCP:', metric.value);
      });
      onTTFB((metric: any) => {
        console.log('TTFB:', metric.value);
      });
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

  useEffect(() => {
    // Run optimizations after component mount
    const timer = setTimeout(() => {
      optimizeImages();
      preloadCriticalResources();
      setupCaching();
      setupCompression();
      setupIntersectionObserver();
      addResourceHints();
      setupPerformanceMonitoring();
    }, 100);

    return () => {
      clearTimeout(timer);
    };
  }, [
    optimizeImages,
    preloadCriticalResources,
    setupCaching,
    setupCompression,
    setupIntersectionObserver,
    addResourceHints,
    setupPerformanceMonitoring
  ]);

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

export default AdvancedPerformanceEnhancer;