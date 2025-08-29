import React, { useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface PerformanceOptimizerProps {
  enabled: boolean;
  showMetrics?: boolean;
  enableLazyLoading?: boolean;
  enablePreloading?: boolean;
  enableCompression?: boolean;
}

interface PerformanceMetrics {
  fcp: number;
  lcp: number;
  fid: number;
  cls: number;
  ttfb: number;
  loadTime: number;
  domSize: number;
  resourceCount: number;
}

export const PerformanceOptimizer: React.FC<PerformanceOptimizerProps> = ({
  enabled = true,
  showMetrics = false,
  enableLazyLoading = true,
  enablePreloading = true,
  enableCompression = true
}) => {
  const metricsRef = useRef<PerformanceMetrics>({
    fcp: 0,
    lcp: 0,
    fid: 0,
    cls: 0,
    ttfb: 0,
    loadTime: 0,
    domSize: 0,
    resourceCount: 0
  });

  const observerRef = useRef<PerformanceObserver | null>(null);
  const [showMetricsPanel, setShowMetricsPanel] = React.useState(false);

  // Performance monitoring
  const measurePerformance = useCallback(() => {
    if (!enabled || !('performance' in window)) return;

    const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
    if (navigation) {
      metricsRef.current.loadTime = navigation.loadEventEnd - navigation.loadEventStart;
      metricsRef.current.ttfb = navigation.responseStart - navigation.requestStart;
    }

    // Measure DOM size
    metricsRef.current.domSize = document.querySelectorAll('*').length;
    
    // Count resources
    const resources = performance.getEntriesByType('resource');
    metricsRef.current.resourceCount = resources.length;

    // Calculate total resource size
    const totalSize = resources.reduce((acc, resource) => {
      const transferSize = (resource as PerformanceResourceTiming).transferSize || 0;
      return acc + transferSize;
    }, 0);

    console.log('Performance Metrics:', {
      ...metricsRef.current,
      totalResourceSize: `${(totalSize / 1024 / 1024).toFixed(2)} MB`
    });
  }, [enabled]);

  // Core Web Vitals monitoring
  const setupWebVitals = useCallback(() => {
    if (!enabled || !('PerformanceObserver' in window)) return;

    try {
      // First Contentful Paint (FCP)
      observerRef.current = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.name === 'first-contentful-paint') {
            metricsRef.current.fcp = entry.startTime;
            console.log('FCP:', entry.startTime);
          }
        }
      });
      observerRef.current.observe({ entryTypes: ['paint'] });

      // Largest Contentful Paint (LCP)
      const lcpObserver = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          metricsRef.current.lcp = entry.startTime;
          console.log('LCP:', entry.startTime);
        }
      });
      lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });

      // First Input Delay (FID)
      const fidObserver = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          metricsRef.current.fid = entry.processingStart - entry.startTime;
          console.log('FID:', metricsRef.current.fid);
        }
      });
      fidObserver.observe({ entryTypes: ['first-input'] });

      // Cumulative Layout Shift (CLS)
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

    } catch (error) {
      console.warn('Web Vitals monitoring not supported:', error);
    }
  }, [enabled]);

  // Resource optimization
  const optimizeResources = useCallback(() => {
    if (!enabled) return;

    // Lazy load images
    if (enableLazyLoading && 'IntersectionObserver' in window) {
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
      });

      document.querySelectorAll('img[data-src]').forEach((img) => {
        imageObserver.observe(img);
      });
    }

    // Preload critical resources
    if (enablePreloading) {
      const criticalResources = [
        '/fonts/orbitron-v16-latin-400.woff2',
        '/fonts/orbitron-v16-latin-600.woff2',
        '/images/hero-bg.jpg'
      ];

      criticalResources.forEach((resource) => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.href = resource;
        link.as = resource.includes('font') ? 'font' : 'image';
        if (resource.includes('font')) {
          link.type = 'font/woff2';
          link.crossOrigin = 'anonymous';
        }
        document.head.appendChild(link);
      });
    }

    // Enable compression hints
    if (enableCompression) {
      const meta = document.createElement('meta');
      meta.httpEquiv = 'Accept-Encoding';
      meta.content = 'gzip, deflate, br';
      document.head.appendChild(meta);
    }
  }, [enabled, enableLazyLoading, enablePreloading, enableCompression]);

  // Memory optimization
  const optimizeMemory = useCallback(() => {
    if (!enabled) return;

    // Clean up event listeners on unmount
    const cleanup = () => {
      // Remove any global event listeners
      window.removeEventListener('scroll', () => {});
      window.removeEventListener('resize', () => {});
    };

    // Monitor memory usage
    if ('memory' in performance) {
      const memory = (performance as any).memory;
      console.log('Memory Usage:', {
        usedJSHeapSize: `${(memory.usedJSHeapSize / 1024 / 1024).toFixed(2)} MB`,
        totalJSHeapSize: `${(memory.totalJSHeapSize / 1024 / 1024).toFixed(2)} MB`,
        jsHeapSizeLimit: `${(memory.jsHeapSizeLimit / 1024 / 1024).toFixed(2)} MB`
      });
    }

    return cleanup;
  }, [enabled]);

  // Network optimization
  const optimizeNetwork = useCallback(() => {
    if (!enabled) return;

    // DNS prefetch for external domains
    const externalDomains = [
      'https://fonts.googleapis.com',
      'https://fonts.gstatic.com',
      'https://www.google-analytics.com'
    ];

    externalDomains.forEach((domain) => {
      const link = document.createElement('link');
      link.rel = 'dns-prefetch';
      link.href = domain;
      document.head.appendChild(link);
    });

    // Preconnect to critical domains
    const criticalDomains = [
      'https://fonts.googleapis.com',
      'https://fonts.gstatic.com'
    ];

    criticalDomains.forEach((domain) => {
      const link = document.createElement('link');
      link.rel = 'preconnect';
      link.href = domain;
      link.crossOrigin = 'anonymous';
      document.head.appendChild(link);
    });
  }, [enabled]);

  useEffect(() => {
    if (!enabled) return;

    // Setup performance monitoring
    setupWebVitals();
    optimizeResources();
    optimizeMemory();
    optimizeNetwork();

    // Measure performance after page load
    const handleLoad = () => {
      setTimeout(measurePerformance, 100);
    };

    window.addEventListener('load', handleLoad);

    return () => {
      window.removeEventListener('load', handleLoad);
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [enabled, setupWebVitals, optimizeResources, optimizeMemory, optimizeNetwork, measurePerformance]);

  // Performance metrics panel
  const MetricsPanel = () => (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="fixed top-4 right-4 bg-slate-800/90 backdrop-blur-sm border border-cyan-400/30 rounded-lg p-4 text-white text-sm z-50 max-w-xs"
    >
      <div className="flex items-center justify-between mb-3">
        <h3 className="font-semibold text-cyan-400">Performance Metrics</h3>
        <button
          onClick={() => setShowMetricsPanel(false)}
          className="text-gray-400 hover:text-white"
        >
          ×
        </button>
      </div>
      
      <div className="space-y-2 text-xs">
        <div className="flex justify-between">
          <span>FCP:</span>
          <span className="text-cyan-400">{metricsRef.current.fcp.toFixed(0)}ms</span>
        </div>
        <div className="flex justify-between">
          <span>LCP:</span>
          <span className="text-cyan-400">{metricsRef.current.lcp.toFixed(0)}ms</span>
        </div>
        <div className="flex justify-between">
          <span>FID:</span>
          <span className="text-cyan-400">{metricsRef.current.fid.toFixed(0)}ms</span>
        </div>
        <div className="flex justify-between">
          <span>CLS:</span>
          <span className="text-cyan-400">{metricsRef.current.cls.toFixed(3)}</span>
        </div>
        <div className="flex justify-between">
          <span>Load Time:</span>
          <span className="text-cyan-400">{metricsRef.current.loadTime.toFixed(0)}ms</span>
        </div>
        <div className="flex justify-between">
          <span>DOM Size:</span>
          <span className="text-cyan-400">{metricsRef.current.domSize}</span>
        </div>
        <div className="flex justify-between">
          <span>Resources:</span>
          <span className="text-cyan-400">{metricsRef.current.resourceCount}</span>
        </div>
      </div>
    </motion.div>
  );

  if (!enabled) return null;

  return (
    <>
      {/* Performance toggle button */}
      {showMetrics && (
        <button
          onClick={() => setShowMetricsPanel(!showMetricsPanel)}
          className="fixed top-4 right-4 z-40 p-2 bg-slate-800/80 backdrop-blur-sm border border-cyan-400/30 rounded-lg text-cyan-400 hover:bg-slate-700/80 transition-colors"
          title="Toggle Performance Metrics"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
          </svg>
        </button>
      )}

      {/* Performance metrics panel */}
      <AnimatePresence>
        {showMetricsPanel && <MetricsPanel />}
      </AnimatePresence>
    </>
  );
};
