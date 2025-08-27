import React, { useEffect, useRef, useCallback, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface PerformanceMetrics {
  fcp: number;
  lcp: number;
  fid: number;
  cls: number;
  ttfb: number;
}

interface PerformanceOptimizerProps {
  enabled?: boolean;
  showMetrics?: boolean;
  optimizeImages?: boolean;
  enableLazyLoading?: boolean;
}

export const PerformanceOptimizer: React.FC<PerformanceOptimizerProps> = ({
  enabled = true,
  showMetrics = false,
  optimizeImages = true,
  enableLazyLoading = true
}) => {
  const metricsRef = useRef<PerformanceMetrics>({
    fcp: 0,
    lcp: 0,
    fid: 0,
    cls: 0,
    ttfb: 0
  });

  const observerRef = useRef<IntersectionObserver | null>(null);

  // Enhanced performance monitoring with Web Vitals
  const measurePerformance = useCallback(() => {
    if (!enabled || !('PerformanceObserver' in window)) return;

    try {
      // First Contentful Paint
      const fcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry) => {
          if (entry.name === 'first-contentful-paint') {
            metricsRef.current.fcp = entry.startTime;
            console.log('FCP:', entry.startTime);
          }
        });
      });
      fcpObserver.observe({ entryTypes: ['paint'] });

      // Largest Contentful Paint
      const lcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const lastEntry = entries[entries.length - 1];
        if (lastEntry) {
          metricsRef.current.lcp = lastEntry.startTime;
          console.log('LCP:', lastEntry.startTime);
        }
      });
      lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });

      // First Input Delay
      const fidObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry) => {
          metricsRef.current.fid = entry.processingStart - entry.startTime;
          console.log('FID:', entry.processingStart - entry.startTime);
        });
      });
      fidObserver.observe({ entryTypes: ['first-input'] });

      // Cumulative Layout Shift
      const clsObserver = new PerformanceObserver((list) => {
        let clsValue = 0;
        list.getEntries().forEach((entry: any) => {
          if (!entry.hadRecentInput) {
            clsValue += entry.value;
          }
        });
        metricsRef.current.cls = clsValue;
        console.log('CLS:', clsValue);
      });
      clsObserver.observe({ entryTypes: ['layout-shift'] });

      // Time to First Byte
      const navigationEntry = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      if (navigationEntry) {
        metricsRef.current.ttfb = navigationEntry.responseStart - navigationEntry.requestStart;
        console.log('TTFB:', navigationEntry.responseStart - navigationEntry.requestStart);
      }

    } catch (error) {
      console.warn('Performance monitoring failed:', error);
    }
  }, [enabled]);

  // Enhanced intersection observer for lazy loading
  const setupLazyLoading = useCallback(() => {
    if (!enableLazyLoading || !enabled) return;

    const lazyElements = document.querySelectorAll('[data-lazy]');
    
    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const target = entry.target as HTMLElement;
          const lazyType = target.dataset.lazy;
          
          if (lazyType === 'image') {
            const img = target as HTMLImageElement;
            if (img.dataset.src) {
              img.src = img.dataset.src;
              img.classList.remove('lazy');
              img.removeAttribute('data-lazy');
            }
          } else if (lazyType === 'component') {
            target.classList.add('loaded');
            target.removeAttribute('data-lazy');
          }
          
          observerRef.current?.unobserve(target);
        }
      });
    }, {
      rootMargin: '50px 0px',
      threshold: 0.1
    });

    lazyElements.forEach((el) => observerRef.current?.observe(el));
  }, [enableLazyLoading, enabled]);

  // Image optimization
  const optimizeImages = useCallback(() => {
    if (!optimizeImages || !enabled) return;

    const images = document.querySelectorAll('img');
    images.forEach((img) => {
      // Add loading="lazy" for images below the fold
      if (!img.loading) {
        img.loading = 'lazy';
      }
      
      // Add decoding="async" for better performance
      if (!img.decoding) {
        img.decoding = 'async';
      }
      
      // Add fetchpriority for above-the-fold images
      if (img.dataset.priority === 'high') {
        img.fetchPriority = 'high';
      }
    });
  }, [optimizeImages, enabled]);

  // Bundle size optimization
  const optimizeBundle = useCallback(() => {
    if (!enabled) return;

    // Preload critical resources
    const criticalResources = [
      '/fonts/inter-var.woff2',
      '/css/critical.css'
    ];

    criticalResources.forEach((resource) => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.href = resource;
      link.as = resource.endsWith('.woff2') ? 'font' : 'style';
      link.crossOrigin = resource.startsWith('http') ? 'anonymous' : undefined;
      document.head.appendChild(link);
    });

    // Preconnect to external domains
    const externalDomains = [
      'https://fonts.googleapis.com',
      'https://fonts.gstatic.com'
    ];

    externalDomains.forEach((domain) => {
      const link = document.createElement('link');
      link.rel = 'preconnect';
      link.href = domain;
      document.head.appendChild(link);
    });
  }, [enabled]);

  // Memory leak prevention
  const cleanup = useCallback(() => {
    if (observerRef.current) {
      observerRef.current.disconnect();
    }
  }, []);

  useEffect(() => {
    if (!enabled) return;

    measurePerformance();
    setupLazyLoading();
    optimizeImages();
    optimizeBundle();

    return cleanup;
  }, [enabled, measurePerformance, setupLazyLoading, optimizeImages, optimizeBundle, cleanup]);

  // Performance metrics display
  const PerformanceMetricsDisplay = useMemo(() => {
    if (!showMetrics) return null;

    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="fixed bottom-4 right-4 bg-black/80 text-white p-4 rounded-lg backdrop-blur-sm z-50"
      >
        <h3 className="text-sm font-semibold mb-2">Performance Metrics</h3>
        <div className="space-y-1 text-xs">
          <div>FCP: {metricsRef.current.fcp.toFixed(0)}ms</div>
          <div>LCP: {metricsRef.current.lcp.toFixed(0)}ms</div>
          <div>FID: {metricsRef.current.fid.toFixed(0)}ms</div>
          <div>CLS: {metricsRef.current.cls.toFixed(3)}</div>
          <div>TTFB: {metricsRef.current.ttfb.toFixed(0)}ms</div>
        </div>
      </motion.div>
    );
  }, [showMetrics]);

  return (
    <>
      {PerformanceMetricsDisplay}
      
      {/* Performance optimization indicators */}
      {enabled && (
        <div className="performance-optimizer-indicators" aria-hidden="true">
          <div data-lazy="component" className="lazy-component-placeholder" />
        </div>
      )}
    </>
  );
};

export default PerformanceOptimizer;
