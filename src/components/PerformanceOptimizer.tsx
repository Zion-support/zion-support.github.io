import React, { useEffect, useCallback, useRef } from 'react';

interface PerformanceOptimizerProps {
  enabled?: boolean;
  enableLazyLoading?: boolean;
  enableImageOptimization?: boolean;
  enablePerformanceMonitoring?: boolean;
}

export const PerformanceOptimizer: React.FC<PerformanceOptimizerProps> = ({
  enabled = true,
  enableLazyLoading = true,
  enableImageOptimization = true,
  enablePerformanceMonitoring = true,
}) => {
  const observerRef = useRef<IntersectionObserver | null>(null);

  // Performance monitoring
  const monitorPerformance = useCallback(() => {
    if (!enablePerformanceMonitoring) return;

    // Monitor Core Web Vitals
    if ('PerformanceObserver' in window) {
      try {
        const observer = new PerformanceObserver((list) => {
          for (const entry of list.getEntries()) {
            if (entry.entryType === 'largest-contentful-paint') {
              console.log('LCP:', entry.startTime);
            } else if (entry.entryType === 'first-input-delay') {
              console.log('FID:', entry.processingStart - entry.startTime);
            } else if (entry.entryType === 'layout-shift') {
              console.log('CLS:', (entry as any).value);
            }
          }
        });

        observer.observe({ entryTypes: ['largest-contentful-paint', 'first-input-delay', 'layout-shift'] });
      } catch (error) {
        console.warn('Performance monitoring failed:', error);
      }
    }

    // Monitor page load time
    window.addEventListener('load', () => {
      const loadTime = performance.now();
      console.log('Page load time:', loadTime);
    });
  }, [enablePerformanceMonitoring]);

  // Lazy loading for images
  const setupLazyLoading = useCallback(() => {
    if (!enableLazyLoading) return;

    const images = document.querySelectorAll('img[data-src]');
    
    if (images.length === 0) return;

    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const img = entry.target as HTMLImageElement;
          const src = img.getAttribute('data-src');
          
          if (src) {
            img.src = src;
            img.removeAttribute('data-src');
            img.classList.remove('lazy');
            observerRef.current?.unobserve(img);
          }
        }
      });
    }, {
      rootMargin: '50px 0px',
      threshold: 0.01
    });

    images.forEach((img) => {
      observerRef.current?.observe(img);
    });
  }, [enableLazyLoading]);

  // Image optimization
  const optimizeImages = useCallback(() => {
    if (!enableImageOptimization) return;

    const images = document.querySelectorAll('img');
    
    images.forEach((img) => {
      // Add loading="lazy" for images below the fold
      if (!img.hasAttribute('loading')) {
        img.setAttribute('loading', 'lazy');
      }

      // Add decoding="async" for better performance
      if (!img.hasAttribute('decoding')) {
        img.setAttribute('decoding', 'async');
      }

      // Add alt text if missing
      if (!img.hasAttribute('alt')) {
        img.setAttribute('alt', 'Zion Tech Group image');
      }
    });
  }, [enableImageOptimization]);

  // Preload critical resources
  const preloadCriticalResources = useCallback(() => {
    // Preload critical CSS
    const criticalCSS = document.createElement('link');
    criticalCSS.rel = 'preload';
    criticalCSS.as = 'style';
    criticalCSS.href = '/css/critical.css';
    document.head.appendChild(criticalCSS);

    // Preload critical fonts
    const fontPreload = document.createElement('link');
    fontPreload.rel = 'preload';
    fontPreload.as = 'font';
    fontPreload.href = '/fonts/inter-var.woff2';
    fontPreload.crossOrigin = 'anonymous';
    document.head.appendChild(fontPreload);
  }, []);

  // Optimize third-party scripts
  const optimizeThirdPartyScripts = useCallback(() => {
    // Defer non-critical scripts
    const scripts = document.querySelectorAll('script[data-defer]');
    scripts.forEach((script) => {
      script.setAttribute('defer', '');
    });

    // Add async to analytics scripts
    const analyticsScripts = document.querySelectorAll('script[data-analytics]');
    analyticsScripts.forEach((script) => {
      script.setAttribute('async', '');
    });
  }, []);

  // Memory management
  const optimizeMemory = useCallback(() => {
    // Clean up event listeners on unmount
    const cleanup = () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };

    // Cleanup on page unload
    window.addEventListener('beforeunload', cleanup);
    
    return cleanup;
  }, []);

  useEffect(() => {
    if (!enabled) return;

    // Initialize performance optimizations
    monitorPerformance();
    setupLazyLoading();
    optimizeImages();
    preloadCriticalResources();
    optimizeThirdPartyScripts();

    // Cleanup function
    const cleanup = optimizeMemory();
    
    return cleanup;
  }, [
    enabled,
    monitorPerformance,
    setupLazyLoading,
    optimizeImages,
    preloadCriticalResources,
    optimizeThirdPartyScripts,
    optimizeMemory
  ]);

  // Dynamic import for code splitting
  const loadComponent = useCallback(async (componentPath: string) => {
    try {
      const module = await import(componentPath);
      return module.default || module;
    } catch (error) {
      console.error('Failed to load component:', error);
      return null;
    }
  }, []);

  // Service worker registration for offline support
  useEffect(() => {
    if ('serviceWorker' in navigator && enabled) {
      navigator.serviceWorker.register('/sw.js')
        .then((registration) => {
          console.log('SW registered: ', registration);
        })
        .catch((registrationError) => {
          console.log('SW registration failed: ', registrationError);
        });
    }
  }, [enabled]);

  // Resource hints for better performance
  useEffect(() => {
    if (!enabled) return;

    // DNS prefetch for external domains
    const dnsPrefetch = document.createElement('link');
    dnsPrefetch.rel = 'dns-prefetch';
    dnsPrefetch.href = '//fonts.googleapis.com';
    document.head.appendChild(dnsPrefetch);

    // Preconnect to external domains
    const preconnect = document.createElement('link');
    preconnect.rel = 'preconnect';
    preconnect.href = 'https://fonts.googleapis.com';
    preconnect.crossOrigin = 'anonymous';
    document.head.appendChild(preconnect);
  }, [enabled]);

  if (!enabled) return null;

  return (
    <>
      {/* Performance monitoring overlay for development */}
      {process.env.NODE_ENV === 'development' && enablePerformanceMonitoring && (
        <div className="fixed bottom-4 right-4 bg-black/80 text-white p-2 rounded text-xs z-50">
          <div>Performance Monitor Active</div>
          <div>Check console for metrics</div>
        </div>
      )}
    </>
  );
};
