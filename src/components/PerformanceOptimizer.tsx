import React, { useEffect, useState, useCallback } from 'react';
import { useInView } from 'react-intersection-observer';

interface PerformanceOptimizerProps {
  enabled?: boolean;
  children?: React.ReactNode;
}

interface PerformanceMetrics {
  fcp: number;
  lcp: number;
  fid: number;
  cls: number;
  ttfb: number;
}

export const PerformanceOptimizer: React.FC<PerformanceOptimizerProps> = ({ 
  enabled = true, 
  children 
}) => {
  const [metrics, setMetrics] = useState<PerformanceMetrics | null>(null);
  const [isOptimizing, setIsOptimizing] = useState(false);
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  // Performance monitoring
  const measurePerformance = useCallback(() => {
    if (!enabled || !('PerformanceObserver' in window)) return;

    try {
      // First Contentful Paint
      const fcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const fcpEntry = entries.find(entry => entry.name === 'first-contentful-paint');
        if (fcpEntry) {
          setMetrics(prev => ({ ...prev, fcp: fcpEntry.startTime }));
        }
      });
      fcpObserver.observe({ entryTypes: ['paint'] });

      // Largest Contentful Paint
      const lcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const lcpEntry = entries[entries.length - 1];
        if (lcpEntry) {
          setMetrics(prev => ({ ...prev, lcp: lcpEntry.startTime }));
        }
      });
      lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });

      // First Input Delay
      const fidObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const fidEntry = entries[0];
        if (fidEntry) {
          setMetrics(prev => ({ ...prev, fid: fidEntry.processingStart - fidEntry.startTime }));
        }
      });
      fidObserver.observe({ entryTypes: ['first-input'] });

      // Cumulative Layout Shift
      let clsValue = 0;
      const clsObserver = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (!entry.hadRecentInput) {
            clsValue += (entry as any).value;
          }
        }
        setMetrics(prev => ({ ...prev, cls: clsValue }));
      });
      clsObserver.observe({ entryTypes: ['layout-shift'] });

      // Time to First Byte
      const navigationEntry = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      if (navigationEntry) {
        setMetrics(prev => ({ ...prev, ttfb: navigationEntry.responseStart - navigationEntry.requestStart }));
      }

      return () => {
        fcpObserver.disconnect();
        lcpObserver.disconnect();
        fidObserver.disconnect();
        clsObserver.disconnect();
      };
    } catch (error) {
      console.warn('Performance monitoring failed:', error);
    }
  }, [enabled]);

  // Resource optimization
  const optimizeResources = useCallback(() => {
    if (!enabled) return;

    setIsOptimizing(true);

    // Preload critical resources
    const criticalResources = [
      '/fonts/inter-var.woff2',
      '/images/hero-bg.jpg',
      '/images/logo.svg'
    ];

    criticalResources.forEach(resource => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.href = resource;
      link.as = resource.includes('font') ? 'font' : 'image';
      link.crossOrigin = 'anonymous';
      document.head.appendChild(link);
    });

    // Optimize images
    const images = document.querySelectorAll('img[data-src]');
    images.forEach(img => {
      if (img instanceof HTMLImageElement) {
        img.src = img.dataset.src || '';
        img.classList.add('lazy-loaded');
      }
    });

    // Defer non-critical JavaScript
    const scripts = document.querySelectorAll('script[data-defer]');
    scripts.forEach(script => {
      if (script instanceof HTMLScriptElement) {
        script.defer = true;
      }
    });

    setIsOptimizing(false);
  }, [enabled]);

  // Intersection Observer for lazy loading
  const handleIntersection = useCallback(() => {
    if (inView) {
      // Load content when it comes into view
      const lazyElements = document.querySelectorAll('[data-lazy]');
      lazyElements.forEach(element => {
        if (element instanceof HTMLElement) {
          element.classList.add('lazy-loaded');
          element.removeAttribute('data-lazy');
        }
      });
    }
  }, [inView]);

  useEffect(() => {
    if (enabled) {
      measurePerformance();
      optimizeResources();
    }
  }, [enabled, measurePerformance, optimizeResources]);

  useEffect(() => {
    handleIntersection();
  }, [handleIntersection]);

  // Memory optimization
  useEffect(() => {
    if (!enabled) return;

    const cleanup = () => {
      // Clear any large objects or event listeners
      if (window.gc) {
        window.gc();
      }
    };

    // Cleanup on page unload
    window.addEventListener('beforeunload', cleanup);
    
    return () => {
      window.removeEventListener('beforeunload', cleanup);
      cleanup();
    };
  }, [enabled]);

  if (!enabled) {
    return <>{children}</>;
  }

  return (
    <>
      {/* Performance metrics display (development only) */}
      {process.env.NODE_ENV === 'development' && metrics && (
        <div className="fixed top-4 right-4 bg-black/80 text-white p-4 rounded-lg text-xs z-50">
          <div className="font-bold mb-2">Performance Metrics</div>
          <div>FCP: {metrics.fcp?.toFixed(2)}ms</div>
          <div>LCP: {metrics.lcp?.toFixed(2)}ms</div>
          <div>FID: {metrics.fid?.toFixed(2)}ms</div>
          <div>CLS: {metrics.cls?.toFixed(3)}</div>
          <div>TTFB: {metrics.ttfb?.toFixed(2)}ms</div>
        </div>
      )}

      {/* Optimization status indicator */}
      {isOptimizing && (
        <div className="fixed top-4 left-4 bg-blue-500 text-white px-3 py-2 rounded-lg text-sm z-50">
          Optimizing...
        </div>
      )}

      {/* Intersection observer target */}
      <div ref={ref} className="w-full" />

      {children}
    </>
  );
};

export default PerformanceOptimizer;

