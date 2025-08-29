import React, { useEffect, useCallback, useRef } from 'react';
import { motion } from 'framer-motion';

interface PerformanceMetrics {
  fcp: number;
  lcp: number;
  fid: number;
  cls: number;
  ttfb: number;
}

interface PerformanceOptimizerProps {
  enableMonitoring?: boolean;
  enableLazyLoading?: boolean;
  enablePrefetching?: boolean;
}

export function PerformanceOptimizer({
  enableMonitoring = true,
  enableLazyLoading = true,
  enablePrefetching = true
}: PerformanceOptimizerProps) {
  const observerRef = useRef<IntersectionObserver | null>(null);
  const performanceDataRef = useRef<PerformanceMetrics | null>(null);

  // Performance monitoring
  const measurePerformance = useCallback(() => {
    if (!enableMonitoring || !('PerformanceObserver' in window)) return;

    try {
      // First Contentful Paint
      new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const fcpEntry = entries.find(entry => entry.name === 'first-contentful-paint');
        if (fcpEntry) {
          performanceDataRef.current = {
            ...performanceDataRef.current,
            fcp: fcpEntry.startTime
          };
        }
      }).observe({ entryTypes: ['paint'] });

      // Largest Contentful Paint
      new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const lcpEntry = entries[entries.length - 1];
        if (lcpEntry) {
          performanceDataRef.current = {
            ...performanceDataRef.current,
            lcp: lcpEntry.startTime
          };
        }
      }).observe({ entryTypes: ['largest-contentful-paint'] });

      // First Input Delay
      new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach(entry => {
          if (entry.processingStart && entry.startTime) {
            const fid = entry.processingStart - entry.startTime;
            performanceDataRef.current = {
              ...performanceDataRef.current,
              fid
            };
          }
        });
      }).observe({ entryTypes: ['first-input'] });

      // Cumulative Layout Shift
      let clsValue = 0;
      new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach(entry => {
          if (!entry.hadRecentInput) {
            clsValue += (entry as any).value;
          }
        });
        performanceDataRef.current = {
          ...performanceDataRef.current,
          cls: clsValue
        };
      }).observe({ entryTypes: ['layout-shift'] });

      // Time to First Byte
      const navigationEntry = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      if (navigationEntry) {
        performanceDataRef.current = {
          ...performanceDataRef.current,
          ttfb: navigationEntry.responseStart - navigationEntry.requestStart
        };
      }
    } catch (error) {
      console.warn('Performance monitoring failed:', error);
    }
  }, [enableMonitoring]);

  // Lazy loading optimization
  const setupLazyLoading = useCallback(() => {
    if (!enableLazyLoading) return;

    const lazyImages = document.querySelectorAll('img[data-src]');
    const lazyIframes = document.querySelectorAll('iframe[data-src]');

    if (observerRef.current) {
      observerRef.current.disconnect();
    }

    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const element = entry.target as HTMLImageElement | HTMLIFrameElement;
          if (element.dataset.src) {
            element.src = element.dataset.src;
            element.removeAttribute('data-src');
            element.classList.add('loaded');
          }
        }
      });
    }, {
      rootMargin: '50px 0px',
      threshold: 0.01
    });

    lazyImages.forEach(img => observerRef.current?.observe(img));
    lazyIframes.forEach(iframe => observerRef.current?.observe(iframe));
  }, [enableLazyLoading]);

  // Prefetching optimization
  const setupPrefetching = useCallback(() => {
    if (!enablePrefetching) return;

    // Prefetch critical resources
    const criticalPaths = [
      '/services/ai-business-intelligence',
      '/services/cloud-devops',
      '/contact',
      '/about'
    ];

    const prefetchLink = (href: string) => {
      const link = document.createElement('link');
      link.rel = 'prefetch';
      link.href = href;
      document.head.appendChild(link);
    };

    // Prefetch on idle
    if ('requestIdleCallback' in window) {
      requestIdleCallback(() => {
        criticalPaths.forEach(path => prefetchLink(path));
      });
    } else {
      // Fallback for older browsers
      setTimeout(() => {
        criticalPaths.forEach(path => prefetchLink(path));
      }, 1000);
    }
  }, [enablePrefetching]);

  // Resource hints optimization
  const setupResourceHints = useCallback(() => {
    // DNS prefetch for external domains
    const externalDomains = [
      'https://fonts.googleapis.com',
      'https://fonts.gstatic.com'
    ];

    externalDomains.forEach(domain => {
      const link = document.createElement('link');
      link.rel = 'dns-prefetch';
      link.href = domain;
      document.head.appendChild(link);
    });

    // Preconnect to critical domains
    const criticalDomains = [
      'https://api.ziontechgroup.com'
    ];

    criticalDomains.forEach(domain => {
      const link = document.createElement('link');
      link.rel = 'preconnect';
      link.href = domain;
      document.head.appendChild(link);
    });
  }, []);

  // Memory optimization
  const optimizeMemory = useCallback(() => {
    // Clean up event listeners on unmount
    const cleanup = () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };

    // Monitor memory usage
    if ('memory' in performance) {
      const memoryInfo = (performance as any).memory;
      const memoryThreshold = 50 * 1024 * 1024; // 50MB

      if (memoryInfo.usedJSHeapSize > memoryThreshold) {
        console.warn('High memory usage detected');
        // Trigger garbage collection if available
        if ('gc' in window) {
          (window as any).gc();
        }
      }
    }

    return cleanup;
  }, []);

  useEffect(() => {
    measurePerformance();
    setupLazyLoading();
    setupPrefetching();
    setupResourceHints();

    const cleanup = optimizeMemory();

    return cleanup;
  }, [measurePerformance, setupLazyLoading, setupPrefetching, setupResourceHints, optimizeMemory]);

  // Performance reporting
  useEffect(() => {
    if (!enableMonitoring) return;

    const reportPerformance = () => {
      if (performanceDataRef.current) {
        // Send performance data to analytics
        console.log('Performance Metrics:', performanceDataRef.current);
        
        // You can send this data to your analytics service
        // analytics.track('performance_metrics', performanceDataRef.current);
      }
    };

    // Report performance after page load
    window.addEventListener('load', reportPerformance);
    
    return () => window.removeEventListener('load', reportPerformance);
  }, [enableMonitoring]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="fixed bottom-4 right-4 z-50"
    >
      {/* Performance indicator (only visible in development) */}
      {process.env.NODE_ENV === 'development' && (
        <div className="bg-zion-cyan/20 backdrop-blur-sm border border-zion-cyan/30 rounded-lg p-2 text-xs text-zion-cyan">
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-zion-cyan rounded-full animate-pulse"></div>
            <span>Performance Optimized</span>
          </div>
        </div>
      )}
    </motion.div>
  );
}
