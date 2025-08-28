import React, { useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

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
  enableImageOptimization?: boolean;
}

export function PerformanceOptimizer({
  enableMonitoring = true,
  enableLazyLoading = true,
  enableImageOptimization = true
}: PerformanceOptimizerProps) {
  const metricsRef = useRef<PerformanceMetrics>({
    fcp: 0,
    lcp: 0,
    fid: 0,
    cls: 0,
    ttfb: 0
  });

  const observerRef = useRef<PerformanceObserver | null>(null);
  const imageObserverRef = useRef<IntersectionObserver | null>(null);

  // Performance monitoring
  const measurePerformance = useCallback(() => {
    if (!enableMonitoring) return;

    // First Contentful Paint
    new PerformanceObserver((entryList) => {
      const entries = entryList.getEntries();
      entries.forEach((entry) => {
        if (entry.name === 'first-contentful-paint') {
          metricsRef.current.fcp = entry.startTime;
          console.log('FCP:', entry.startTime);
        }
      });
    }).observe({ entryTypes: ['paint'] });

    // Largest Contentful Paint
    new PerformanceObserver((entryList) => {
      const entries = entryList.getEntries();
      const lastEntry = entries[entries.length - 1];
      if (lastEntry) {
        metricsRef.current.lcp = lastEntry.startTime;
        console.log('LCP:', lastEntry.startTime);
      }
    }).observe({ entryTypes: ['largest-contentful-paint'] });

    // First Input Delay
    new PerformanceObserver((entryList) => {
      const entries = entryList.getEntries();
      entries.forEach((entry) => {
        if (entry.entryType === 'first-input') {
          metricsRef.current.fid = entry.processingStart - entry.startTime;
          console.log('FID:', metricsRef.current.fid);
        }
      });
    }).observe({ entryTypes: ['first-input'] });

    // Cumulative Layout Shift
    new PerformanceObserver((entryList) => {
      let clsValue = 0;
      const entries = entryList.getEntries();
      entries.forEach((entry: any) => {
        if (!entry.hadRecentInput) {
          clsValue += entry.value;
        }
      });
      metricsRef.current.cls = clsValue;
      console.log('CLS:', clsValue);
    }).observe({ entryTypes: ['layout-shift'] });

    // Time to First Byte
    const navigationEntry = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
    if (navigationEntry) {
      metricsRef.current.ttfb = navigationEntry.responseStart - navigationEntry.requestStart;
      console.log('TTFB:', metricsRef.current.ttfb);
    }
  }, [enableMonitoring]);

  // Lazy loading implementation
  const setupLazyLoading = useCallback(() => {
    if (!enableLazyLoading) return;

    // Lazy load images
    imageObserverRef.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const img = entry.target as HTMLImageElement;
          if (img.dataset.src) {
            img.src = img.dataset.src;
            img.classList.remove('lazy');
            imageObserverRef.current?.unobserve(img);
          }
        }
      });
    }, {
      rootMargin: '50px 0px',
      threshold: 0.01
    });

    // Observe all lazy images
    document.querySelectorAll('img[data-src]').forEach((img) => {
      imageObserverRef.current?.observe(img);
    });

    // Lazy load components
    const componentObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const component = entry.target as HTMLElement;
          if (component.dataset.lazyComponent) {
            // Trigger component loading
            component.classList.add('loaded');
            componentObserver.unobserve(component);
          }
        }
      });
    }, {
      rootMargin: '100px 0px',
      threshold: 0.1
    });

    document.querySelectorAll('[data-lazy-component]').forEach((component) => {
      componentObserver.observe(component);
    });
  }, [enableLazyLoading]);

  // Image optimization
  const optimizeImages = useCallback(() => {
    if (!enableImageOptimization) return;

    // Add loading="lazy" to images
    document.querySelectorAll('img:not([loading])').forEach((img) => {
      if (!img.classList.contains('critical')) {
        img.setAttribute('loading', 'lazy');
      }
    });

    // Add srcset for responsive images
    document.querySelectorAll('img[data-srcset]').forEach((img) => {
      const srcset = img.getAttribute('data-srcset');
      if (srcset) {
        img.setAttribute('srcset', srcset);
      }
    });

    // Add WebP format support detection
    const webpSupported = document.createElement('canvas')
      .toDataURL('image/webp')
      .indexOf('data:image/webp') === 0;

    if (webpSupported) {
      document.querySelectorAll('img[data-webp]').forEach((img) => {
        const webpSrc = img.getAttribute('data-webp');
        if (webpSrc) {
          img.src = webpSrc;
        }
      });
    }
  }, [enableImageOptimization]);

  // Resource hints
  const addResourceHints = useCallback(() => {
    // Preconnect to external domains
    const domains = [
      'https://fonts.googleapis.com',
      'https://fonts.gstatic.com',
      'https://api.ziontechgroup.com'
    ];

    domains.forEach(domain => {
      const link = document.createElement('link');
      link.rel = 'preconnect';
      link.href = domain;
      document.head.appendChild(link);
    });

    // DNS prefetch for analytics
    const dnsPrefetch = document.createElement('link');
    dnsPrefetch.rel = 'dns-prefetch';
    dnsPrefetch.href = '//www.google-analytics.com';
    document.head.appendChild(dnsPrefetch);
  }, []);

  // Service Worker registration
  const registerServiceWorker = useCallback(async () => {
    if ('serviceWorker' in navigator) {
      try {
        const registration = await navigator.serviceWorker.register('/sw.js');
        console.log('SW registered: ', registration);
      } catch (registrationError) {
        console.log('SW registration failed: ', registrationError);
      }
    }
  }, []);

  useEffect(() => {
    // Initialize performance monitoring
    if (enableMonitoring) {
      measurePerformance();
    }

    // Setup lazy loading
    if (enableLazyLoading) {
      setupLazyLoading();
    }

    // Optimize images
    if (enableImageOptimization) {
      optimizeImages();
    }

    // Add resource hints
    addResourceHints();

    // Register service worker
    registerServiceWorker();

    // Cleanup
    return () => {
      if (imageObserverRef.current) {
        imageObserverRef.current.disconnect();
      }
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [
    enableMonitoring,
    enableLazyLoading,
    enableImageOptimization,
    measurePerformance,
    setupLazyLoading,
    optimizeImages,
    addResourceHints,
    registerServiceWorker
  ]);

  // Performance warning component
  const PerformanceWarning = () => {
    const metrics = metricsRef.current;
    const hasIssues = metrics.fcp > 2000 || metrics.lcp > 4000 || metrics.cls > 0.1;

    if (!hasIssues) return null;

    return (
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="fixed top-4 right-4 bg-yellow-500 text-black p-3 rounded-lg shadow-lg z-50 max-w-sm"
      >
        <h4 className="font-semibold mb-2">Performance Notice</h4>
        <div className="text-sm space-y-1">
          {metrics.fcp > 2000 && <p>FCP: {Math.round(metrics.fcp)}ms (Slow)</p>}
          {metrics.lcp > 4000 && <p>LCP: {Math.round(metrics.lcp)}ms (Slow)</p>}
          {metrics.cls > 0.1 && <p>CLS: {metrics.cls.toFixed(3)} (Poor)</p>}
        </div>
      </motion.div>
    );
  };

  return (
    <>
      <PerformanceWarning />
      {/* Hidden performance metrics for monitoring */}
      <div 
        id="performance-metrics" 
        data-fcp={metricsRef.current.fcp}
        data-lcp={metricsRef.current.lcp}
        data-fid={metricsRef.current.fid}
        data-cls={metricsRef.current.cls}
        data-ttfb={metricsRef.current.ttfb}
        className="hidden"
        aria-hidden="true"
      />
    </>
  );
}
