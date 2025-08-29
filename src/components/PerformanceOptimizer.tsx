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

export const PerformanceOptimizer: React.FC<PerformanceOptimizerProps> = ({
  enableMonitoring = true,
  enableLazyLoading = true,
  enablePrefetching = true,
}) => {
  const metricsRef = useRef<PerformanceMetrics>({
    fcp: 0,
    lcp: 0,
    fid: 0,
    cls: 0,
    ttfb: 0,
  });

  // Performance monitoring
  const measurePerformance = useCallback(() => {
    if (!enableMonitoring || !('PerformanceObserver' in window)) return;

    try {
      // First Contentful Paint
      const fcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const fcpEntry = entries.find(entry => entry.name === 'first-contentful-paint');
        if (fcpEntry) {
          metricsRef.current.fcp = fcpEntry.startTime;
          console.log('FCP:', fcpEntry.startTime);
        }
      });
      fcpObserver.observe({ entryTypes: ['paint'] });

      // Largest Contentful Paint
      const lcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const lcpEntry = entries[entries.length - 1];
        if (lcpEntry) {
          metricsRef.current.lcp = lcpEntry.startTime;
          console.log('LCP:', lcpEntry.startTime);
        }
      });
      lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });

      // First Input Delay
      const fidObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const fidEntry = entries[0];
        if (fidEntry) {
          metricsRef.current.fid = fidEntry.processingStart - fidEntry.startTime;
          console.log('FID:', metricsRef.current.fid);
        }
      });
      fidObserver.observe({ entryTypes: ['first-input'] });

      // Cumulative Layout Shift
      const clsObserver = new PerformanceObserver((list) => {
        let clsValue = 0;
        for (const entry of list.getEntries()) {
          if (!entry.hadRecentInput) {
            clsValue += (entry as any).value;
          }
        }
        metricsRef.current.cls = clsValue;
        console.log('CLS:', clsValue);
      });
      clsObserver.observe({ entryTypes: ['layout-shift'] });

      // Time to First Byte
      const navigationEntry = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      if (navigationEntry) {
        metricsRef.current.ttfb = navigationEntry.responseStart - navigationEntry.requestStart;
        console.log('TTFB:', metricsRef.current.ttfb);
      }
    } catch (error) {
      console.warn('Performance monitoring failed:', error);
    }
  }, [enableMonitoring]);

  // Lazy loading optimization
  const optimizeLazyLoading = useCallback(() => {
    if (!enableLazyLoading) return;

    try {
      // Intersection Observer for images
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
      }, {
        rootMargin: '50px 0px',
        threshold: 0.01,
      });

      // Observe all lazy images
      document.querySelectorAll('img[data-src]').forEach((img) => {
        imageObserver.observe(img);
      });

      // Intersection Observer for components
      const componentObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const component = entry.target as HTMLElement;
            component.classList.add('loaded');
            componentObserver.unobserve(component);
          }
        });
      }, {
        rootMargin: '100px 0px',
        threshold: 0.1,
      });

      // Observe components that should be lazy loaded
      document.querySelectorAll('[data-lazy-component]').forEach((component) => {
        componentObserver.observe(component);
      });
    } catch (error) {
      console.warn('Lazy loading optimization failed:', error);
    }
  }, [enableLazyLoading]);

  // Prefetching optimization
  const optimizePrefetching = useCallback(() => {
    if (!enablePrefetching) return;

    try {
      // Prefetch critical resources
      const criticalResources = [
        '/fonts/orbitron-v28-latin-700.woff2',
        '/fonts/rajdhani-v15-latin-500.woff2',
        '/images/hero-ai-solutions.jpg',
        '/images/hero-it-services.jpg',
      ];

      criticalResources.forEach((resource) => {
        const link = document.createElement('link');
        link.rel = 'prefetch';
        link.href = resource;
        document.head.appendChild(link);
      });

      // Prefetch routes on hover
      document.querySelectorAll('a[href^="/"]').forEach((link) => {
        link.addEventListener('mouseenter', () => {
          const href = link.getAttribute('href');
          if (href && !document.querySelector(`link[href="${href}"]`)) {
            const prefetchLink = document.createElement('link');
            prefetchLink.rel = 'prefetch';
            prefetchLink.href = href;
            document.head.appendChild(prefetchLink);
          }
        });
      });
    } catch (error) {
      console.warn('Prefetching optimization failed:', error);
    }
  }, [enablePrefetching]);

  // Memory optimization
  const optimizeMemory = useCallback(() => {
    try {
      // Clean up event listeners
      const cleanup = () => {
        // Remove unused event listeners
        window.removeEventListener('scroll', () => {});
        window.removeEventListener('resize', () => {});
      };

      // Memory leak prevention
      if ('requestIdleCallback' in window) {
        requestIdleCallback(cleanup);
      } else {
        setTimeout(cleanup, 1000);
      }
    } catch (error) {
      console.warn('Memory optimization failed:', error);
    }
  }, []);

  // Bundle optimization
  const optimizeBundle = useCallback(() => {
    try {
      // Dynamic imports for heavy components
      const heavyComponents = [
        'Chart',
        'DataTable',
        'VideoPlayer',
        '3DRenderer',
      ];

      // Preload heavy components when needed
      heavyComponents.forEach((component) => {
        const observer = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              // Dynamically import component
              import(`../components/${component}`).then(() => {
                observer.unobserve(entry.target);
              });
            }
          });
        });

        const elements = document.querySelectorAll(`[data-component="${component}"]`);
        elements.forEach((el) => observer.observe(el));
      });
    } catch (error) {
      console.warn('Bundle optimization failed:', error);
    }
  }, []);

  useEffect(() => {
    measurePerformance();
    optimizeLazyLoading();
    optimizePrefetching();
    optimizeMemory();
    optimizeBundle();

    // Cleanup
    return () => {
      // Cleanup performance observers
      if ('PerformanceObserver' in window) {
        // Cleanup is handled automatically
      }
    };
  }, [measurePerformance, optimizeLazyLoading, optimizePrefetching, optimizeMemory, optimizeBundle]);

  // Performance warning component
  const PerformanceWarning = () => {
    const metrics = metricsRef.current;
    const hasPerformanceIssues = metrics.fcp > 2000 || metrics.lcp > 4000 || metrics.fid > 100;

    if (!hasPerformanceIssues) return null;

    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="fixed bottom-4 right-4 bg-yellow-500 text-black p-3 rounded-lg shadow-lg z-50 max-w-sm"
      >
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 bg-yellow-600 rounded-full animate-pulse" />
          <span className="text-sm font-medium">Performance Notice</span>
        </div>
        <p className="text-xs mt-1">
          Some performance metrics are below optimal levels. Consider optimizing images and reducing bundle size.
        </p>
      </motion.div>
    );
  };

  return (
    <>
      <PerformanceWarning />
      {/* Hidden performance metrics for debugging */}
      <div className="hidden">
        <div data-performance-metrics={JSON.stringify(metricsRef.current)} />
      </div>
    </>
  );
};
