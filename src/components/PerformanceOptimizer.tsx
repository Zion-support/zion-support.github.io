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
  enabled: boolean;
}

export function PerformanceOptimizer({ enabled }: PerformanceOptimizerProps) {
  const metricsRef = useRef<PerformanceMetrics>({
    fcp: 0,
    lcp: 0,
    fid: 0,
    cls: 0,
    ttfb: 0
  });

  const observerRef = useRef<PerformanceObserver | null>(null);

  // Preload critical resources
  const preloadCriticalResources = useCallback(() => {
    if (!enabled) return;

    const criticalResources = [
      '/fonts/inter-var.woff2',
      '/images/hero-bg.jpg',
      '/images/logo.svg'
    ];

    criticalResources.forEach(resource => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = resource.endsWith('.woff2') ? 'font' : 'image';
      link.href = resource;
      link.crossOrigin = 'anonymous';
      document.head.appendChild(link);
    });
  }, [enabled]);

  // Optimize images with lazy loading and responsive images
  const optimizeImages = useCallback(() => {
    if (!enabled) return;

    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target as HTMLImageElement;
          img.src = img.dataset.src || '';
          img.classList.remove('lazy');
          imageObserver.unobserve(img);
        }
      });
    });

    images.forEach(img => imageObserver.observe(img));
  }, [enabled]);

  // Monitor Core Web Vitals
  const monitorCoreWebVitals = useCallback(() => {
    if (!enabled || !('PerformanceObserver' in window)) return;

    try {
      // First Contentful Paint
      observerRef.current = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry) => {
          if (entry.name === 'first-contentful-paint') {
            metricsRef.current.fcp = entry.startTime;
            console.log('FCP:', entry.startTime);
          }
        });
      });
      observerRef.current.observe({ entryTypes: ['paint'] });

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
          console.log('FID:', metricsRef.current.fid);
        });
      });
      fidObserver.observe({ entryTypes: ['first-input'] });

      // Cumulative Layout Shift
      const clsObserver = new PerformanceObserver((list) => {
        let clsValue = 0;
        const entries = list.getEntries();
        entries.forEach((entry: any) => {
          if (!entry.hadRecentInput) {
            clsValue += entry.value;
          }
        });
        metricsRef.current.cls = clsValue;
        console.log('CLS:', clsValue);
      });
      clsObserver.observe({ entryTypes: ['layout-shift'] });

    } catch (error) {
      console.warn('Performance monitoring not supported:', error);
    }
  }, [enabled]);

  // Optimize bundle loading
  const optimizeBundleLoading = useCallback(() => {
    if (!enabled) return;

    // Add resource hints for better loading
    const resourceHints = [
      { rel: 'dns-prefetch', href: '//fonts.googleapis.com' },
      { rel: 'dns-prefetch', href: '//cdn.jsdelivr.net' },
      { rel: 'preconnect', href: '//fonts.googleapis.com' },
      { rel: 'preconnect', href: '//cdn.jsdelivr.net' }
    ];

    resourceHints.forEach(hint => {
      const link = document.createElement('link');
      link.rel = hint.rel;
      link.href = hint.href;
      document.head.appendChild(link);
    });
  }, [enabled]);

  // Memory usage optimization
  const optimizeMemoryUsage = useCallback(() => {
    if (!enabled) return;

    // Clean up event listeners and observers
    const cleanup = () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };

    // Monitor memory usage
    if ('memory' in performance) {
      const memoryInfo = (performance as any).memory;
      console.log('Memory Usage:', {
        used: Math.round(memoryInfo.usedJSHeapSize / 1048576) + ' MB',
        total: Math.round(memoryInfo.totalJSHeapSize / 1048576) + ' MB',
        limit: Math.round(memoryInfo.jsHeapSizeLimit / 1048576) + ' MB'
      });
    }

    return cleanup;
  }, [enabled]);

  useEffect(() => {
    if (!enabled) return;

    preloadCriticalResources();
    optimizeImages();
    monitorCoreWebVitals();
    optimizeBundleLoading();
    
    const cleanup = optimizeMemoryUsage();

    // Cleanup on unmount
    return () => {
      cleanup?.();
    };
  }, [enabled, preloadCriticalResources, optimizeImages, monitorCoreWebVitals, optimizeBundleLoading, optimizeMemoryUsage]);

  // Performance metrics display (for development)
  if (!enabled || process.env.NODE_ENV === 'production') {
    return null;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="fixed top-4 right-4 bg-black/80 text-white p-4 rounded-lg text-xs z-50 backdrop-blur-sm"
    >
      <h3 className="font-semibold mb-2">Performance Metrics</h3>
      <div className="space-y-1">
        <div>FCP: {metricsRef.current.fcp.toFixed(0)}ms</div>
        <div>LCP: {metricsRef.current.lcp.toFixed(0)}ms</div>
        <div>FID: {metricsRef.current.fid.toFixed(0)}ms</div>
        <div>CLS: {metricsRef.current.cls.toFixed(3)}</div>
      </div>
    </motion.div>
  );
}
