import React, { useEffect, useRef, useCallback } from 'react';

interface PerformanceMetrics {
  fcp: number;
  lcp: number;
  fid: number;
  cls: number;
  ttfb: number;
}

interface PerformanceOptimizerProps {
  children: React.ReactNode;
  enableLazyLoading?: boolean;
  enableIntersectionObserver?: boolean;
  enablePerformanceMonitoring?: boolean;
}

export const PerformanceOptimizer: React.FC<PerformanceOptimizerProps> = ({
  children,
  enableLazyLoading = true,
  enableIntersectionObserver = true,
  enablePerformanceMonitoring = true,
}) => {
  const observerRef = useRef<IntersectionObserver | null>(null);
  const performanceDataRef = useRef<PerformanceMetrics>({
    fcp: 0,
    lcp: 0,
    fid: 0,
    cls: 0,
    ttfb: 0,
  });

  // Performance monitoring
  const measurePerformance = useCallback(() => {
    if (!enablePerformanceMonitoring || !('PerformanceObserver' in window)) return;

    // First Contentful Paint
    const fcpObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      entries.forEach((entry) => {
        if (entry.name === 'first-contentful-paint') {
          performanceDataRef.current.fcp = entry.startTime;
          console.log('FCP:', entry.startTime, 'ms');
        }
      });
    });

    // Largest Contentful Paint
    const lcpObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      entries.forEach((entry) => {
        if (entry.name === 'largest-contentful-paint') {
          performanceDataRef.current.lcp = entry.startTime;
          console.log('LCP:', entry.startTime, 'ms');
        }
      });
    });

    // First Input Delay
    const fidObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      entries.forEach((entry) => {
        if (entry.name === 'first-input') {
          performanceDataRef.current.fid = entry.processingStart - entry.startTime;
          console.log('FID:', performanceDataRef.current.fid, 'ms');
        }
      });
    });

    // Cumulative Layout Shift
    const clsObserver = new PerformanceObserver((list) => {
      let clsValue = 0;
      const entries = list.getEntries();
      entries.forEach((entry: any) => {
        if (!entry.hadRecentInput) {
          clsValue += entry.value;
        }
      });
      performanceDataRef.current.cls = clsValue;
      console.log('CLS:', clsValue);
    });

    try {
      fcpObserver.observe({ entryTypes: ['paint'] });
      lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });
      fidObserver.observe({ entryTypes: ['first-input'] });
      clsObserver.observe({ entryTypes: ['layout-shift'] });
    } catch (error) {
      console.warn('Performance monitoring not supported:', error);
    }

    // Time to First Byte
    if ('performance' in window) {
      const navigationEntry = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      if (navigationEntry) {
        performanceDataRef.current.ttfb = navigationEntry.responseStart - navigationEntry.requestStart;
        console.log('TTFB:', performanceDataRef.current.ttfb, 'ms');
      }
    }
  }, [enablePerformanceMonitoring]);

  // Lazy loading with Intersection Observer
  const setupLazyLoading = useCallback(() => {
    if (!enableLazyLoading || !enableIntersectionObserver) return;

    const lazyImages = document.querySelectorAll('img[data-src]');
    const lazyIframes = document.querySelectorAll('iframe[data-src]');

    if (lazyImages.length === 0 && lazyIframes.length === 0) return;

    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const target = entry.target as HTMLImageElement | HTMLIFrameElement;
            const src = target.getAttribute('data-src');
            
            if (src) {
              if (target.tagName === 'IMG') {
                (target as HTMLImageElement).src = src;
                target.classList.add('loaded');
              } else if (target.tagName === 'IFRAME') {
                (target as HTMLIFrameElement).src = src;
                target.classList.add('loaded');
              }
              
              target.removeAttribute('data-src');
              observerRef.current?.unobserve(target);
            }
          }
        });
      },
      {
        rootMargin: '50px 0px',
        threshold: 0.01,
      }
    );

    // Observe all lazy elements
    lazyImages.forEach((img) => observerRef.current?.observe(img));
    lazyIframes.forEach((iframe) => observerRef.current?.observe(iframe));
  }, [enableLazyLoading, enableIntersectionObserver]);

  // Resource hints optimization
  const optimizeResourceHints = useCallback(() => {
    // Preload critical resources
    const criticalResources = [
      '/src/main.tsx',
      '/src/index.css',
    ];

    criticalResources.forEach((resource) => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.href = resource;
      link.as = resource.endsWith('.css') ? 'style' : 'script';
      document.head.appendChild(link);
    });

    // DNS prefetch for external domains
    const externalDomains = [
      'https://fonts.googleapis.com',
      'https://fonts.gstatic.com',
      'https://www.google-analytics.com',
    ];

    externalDomains.forEach((domain) => {
      const link = document.createElement('link');
      link.rel = 'dns-prefetch';
      link.href = domain;
      document.head.appendChild(link);
    });
  }, []);

  // Memory management
  const optimizeMemory = useCallback(() => {
    // Clean up event listeners and observers
    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  useEffect(() => {
    // Setup performance monitoring
    if (enablePerformanceMonitoring) {
      measurePerformance();
    }

    // Setup lazy loading
    if (enableLazyLoading && enableIntersectionObserver) {
      // Wait for DOM to be ready
      if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', setupLazyLoading);
      } else {
        setupLazyLoading();
      }
    }

    // Optimize resource hints
    optimizeResourceHints();

    // Cleanup function
    return optimizeMemory();
  }, [enablePerformanceMonitoring, enableLazyLoading, enableIntersectionObserver, measurePerformance, setupLazyLoading, optimizeResourceHints, optimizeMemory]);

  // Performance data for debugging
  useEffect(() => {
    if (enablePerformanceMonitoring) {
      const logPerformanceData = () => {
        console.group('🚀 Performance Metrics');
        console.log('First Contentful Paint:', performanceDataRef.current.fcp, 'ms');
        console.log('Largest Contentful Paint:', performanceDataRef.current.lcp, 'ms');
        console.log('First Input Delay:', performanceDataRef.current.fid, 'ms');
        console.log('Cumulative Layout Shift:', performanceDataRef.current.cls);
        console.log('Time to First Byte:', performanceDataRef.current.ttfb, 'ms');
        console.groupEnd();
      };

      // Log performance data after page load
      window.addEventListener('load', logPerformanceData, { once: true });
    }
  }, [enablePerformanceMonitoring]);

  return <>{children}</>;
};

// Export performance utilities
export const performanceUtils = {
  // Debounce function for performance
  debounce: <T extends (...args: any[]) => any>(
    func: T,
    wait: number
  ): ((...args: Parameters<T>) => void) => {
    let timeout: NodeJS.Timeout;
    return (...args: Parameters<T>) => {
      clearTimeout(timeout);
      timeout = setTimeout(() => func(...args), wait);
    };
  },

  // Throttle function for performance
  throttle: <T extends (...args: any[]) => any>(
    func: T,
    limit: number
  ): ((...args: Parameters<T>) => void) => {
    let inThrottle: boolean;
    return (...args: Parameters<T>) => {
      if (!inThrottle) {
        func(...args);
        inThrottle = true;
        setTimeout(() => (inThrottle = false), limit);
      }
    };
  },

  // Check if element is in viewport
  isInViewport: (element: Element): boolean => {
    const rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  },

  // Get performance metrics
  getPerformanceMetrics: (): PerformanceMetrics => {
    return performanceDataRef.current;
  },
};
