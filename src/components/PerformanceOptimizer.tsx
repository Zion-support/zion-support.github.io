import React, { useEffect, useState, useCallback, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface PerformanceMetrics {
  fcp: number;
  lcp: number;
  fid: number;
  cls: number;
  ttfb: number;
  loadTime: number;
}

interface PerformanceOptimizerProps {
  children?: React.ReactNode;
  enabled?: boolean;
  showMetrics?: boolean;
  optimizeImages?: boolean;
  lazyLoadThreshold?: number;
}

export const PerformanceOptimizer: React.FC<PerformanceOptimizerProps> = ({
  children,
  enabled = true,
  showMetrics = false,
  optimizeImages = true,
  lazyLoadThreshold = 0.1
}) => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    fcp: 0,
    lcp: 0,
    fid: 0,
    cls: 0,
    ttfb: 0,
    loadTime: 0
  });

  const [isLoading, setIsLoading] = useState(true);

  // Monitor Core Web Vitals
  const monitorCoreWebVitals = useCallback(() => {
    if (!enabled || typeof window === 'undefined') return;

    // First Contentful Paint
    const fcpObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      const fcp = entries.find(entry => entry.name === 'first-contentful-paint');
      if (fcp) {
        setMetrics(prev => ({ ...prev, fcp: fcp.startTime }));
      }
    });
    fcpObserver.observe({ entryTypes: ['paint'] });

    // Largest Contentful Paint
    const lcpObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      const lcp = entries[entries.length - 1];
      if (lcp) {
        setMetrics(prev => ({ ...prev, lcp: lcp.startTime }));
      }
    });
    lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });

    // First Input Delay
    const fidObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      entries.forEach((entry: any) => {
        if (entry.processingStart && entry.startTime) {
          const fid = entry.processingStart - entry.startTime;
          setMetrics(prev => ({ ...prev, fid }));
        }
      });
    });
    fidObserver.observe({ entryTypes: ['first-input'] });

    // Cumulative Layout Shift
    let clsValue = 0;
    const clsObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      entries.forEach((entry: any) => {
        if (!entry.hadRecentInput) {
          clsValue += entry.value;
          setMetrics(prev => ({ ...prev, cls: clsValue }));
        }
      });
    });
    clsObserver.observe({ entryTypes: ['layout-shift'] });

    // Time to First Byte
    const navigationEntry = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
    if (navigationEntry) {
      setMetrics(prev => ({ ...prev, ttfb: navigationEntry.responseStart - navigationEntry.requestStart }));
    }

    // Page Load Time
    window.addEventListener('load', () => {
      const loadTime = performance.now();
      setMetrics(prev => ({ ...prev, loadTime }));
      setIsLoading(false);
    });

    return () => {
      fcpObserver.disconnect();
      lcpObserver.disconnect();
      fidObserver.disconnect();
      clsObserver.disconnect();
    };
  }, [enabled]);

  // Optimize images
  const optimizeImagesFunction = useCallback(() => {
    if (!enabled || !optimizeImages || typeof window === 'undefined') return;

    const images = document.querySelectorAll('img');
    images.forEach((img) => {
      // Add loading="lazy" if not present
      if (!img.hasAttribute('loading')) {
        img.setAttribute('loading', 'lazy');
      }

      // Add decoding="async" for better performance
      if (!img.hasAttribute('decoding')) {
        img.setAttribute('decoding', 'async');
      }

      // Add error handling
      img.addEventListener('error', () => {
        img.style.display = 'none';
      });
    });
  }, [enabled, optimizeImages]);

  // Lazy loading implementation
  const setupLazyLoading = useCallback(() => {
    if (!enabled || typeof window === 'undefined') return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const element = entry.target as HTMLElement;
            
            // Handle lazy images
            if (element.tagName === 'IMG' && element.dataset.src) {
              element.setAttribute('src', element.dataset.src);
              element.removeAttribute('data-src');
            }

            // Handle lazy components
            if (element.dataset.lazy) {
              element.classList.add('loaded');
            }

            observer.unobserve(element);
          }
        });
      },
      { threshold: lazyLoadThreshold }
    );

    // Observe all lazy elements
    const lazyElements = document.querySelectorAll('[data-lazy], img[data-src]');
    lazyElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [enabled, lazyLoadThreshold]);

  // Add resource hints
  const addResourceHints = useCallback(() => {
    if (!enabled || typeof document === 'undefined') return;

    // Preconnect to external domains
    const domains = [
      'https://fonts.googleapis.com',
      'https://fonts.gstatic.com',
      'https://cdnjs.cloudflare.com'
    ];

    domains.forEach((domain) => {
      const link = document.createElement('link');
      link.rel = 'preconnect';
      link.href = domain;
      link.crossOrigin = 'anonymous';
      document.head.appendChild(link);
    });

    // Preload critical resources
    const criticalResources = [
      { href: '/src/index.css', as: 'style' },
      { href: '/src/main.tsx', as: 'script' }
    ];

    criticalResources.forEach((resource) => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.href = resource.href;
      link.as = resource.as;
      document.head.appendChild(link);
    });
  }, [enabled]);

  // Initialize performance monitoring
  useEffect(() => {
    const cleanup = monitorCoreWebVitals();
    optimizeImagesFunction();
    const lazyCleanup = setupLazyLoading();
    addResourceHints();

    return () => {
      if (cleanup) cleanup();
      if (lazyCleanup) lazyCleanup();
    };
  }, [monitorCoreWebVitals, optimizeImagesFunction, setupLazyLoading, addResourceHints]);

  // Performance metrics display
  const metricsDisplay = useMemo(() => {
    if (!showMetrics) return null;

    const getScoreColor = (value: number, thresholds: { good: number; poor: number }) => {
      if (value <= thresholds.good) return 'text-green-500';
      if (value <= thresholds.poor) return 'text-yellow-500';
      return 'text-red-500';
    };

    return (
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="fixed top-4 right-4 bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg z-50 max-w-sm"
      >
        <h3 className="text-lg font-semibold mb-2">Performance Metrics</h3>
        <div className="space-y-2 text-sm">
          <div className="flex justify-between">
            <span>FCP:</span>
            <span className={getScoreColor(metrics.fcp, { good: 1800, poor: 3000 })}>
              {metrics.fcp.toFixed(0)}ms
            </span>
          </div>
          <div className="flex justify-between">
            <span>LCP:</span>
            <span className={getScoreColor(metrics.lcp, { good: 2500, poor: 4000 })}>
              {metrics.lcp.toFixed(0)}ms
            </span>
          </div>
          <div className="flex justify-between">
            <span>FID:</span>
            <span className={getScoreColor(metrics.fid, { good: 100, poor: 300 })}>
              {metrics.fid.toFixed(0)}ms
            </span>
          </div>
          <div className="flex justify-between">
            <span>CLS:</span>
            <span className={getScoreColor(metrics.cls, { good: 0.1, poor: 0.25 })}>
              {metrics.cls.toFixed(3)}
            </span>
          </div>
          <div className="flex justify-between">
            <span>TTFB:</span>
            <span className={getScoreColor(metrics.ttfb, { good: 800, poor: 1800 })}>
              {metrics.ttfb.toFixed(0)}ms
            </span>
          </div>
          <div className="flex justify-between">
            <span>Load Time:</span>
            <span className={getScoreColor(metrics.loadTime, { good: 2000, poor: 4000 })}>
              {metrics.loadTime.toFixed(0)}ms
            </span>
          </div>
        </div>
      </motion.div>
    );
  }, [showMetrics, metrics]);

  return (
    <>
      <AnimatePresence>
        {isLoading && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-white dark:bg-gray-900 flex items-center justify-center z-50"
          >
            <div className="text-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto mb-4"></div>
              <p className="text-gray-600 dark:text-gray-300">Loading...</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      
      {metricsDisplay}
      {children}
    </>
  );
};