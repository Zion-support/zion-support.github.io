import React, { useEffect, useCallback, useState } from 'react';

interface PerformanceMetrics {
  fcp: number | null;
  lcp: number | null;
  fid: number | null;
  cls: number | null;
  ttfb: number | null;
}

interface PerformanceOptimizerProps {
  enableMonitoring?: boolean;
  enableOptimizations?: boolean;
  onMetricsUpdate?: (metrics: PerformanceMetrics) => void;
}

export const PerformanceOptimizer: React.FC<PerformanceOptimizerProps> = ({
  enableMonitoring = true,
  enableOptimizations = true,
  onMetricsUpdate
}) => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    fcp: null,
    lcp: null,
    fid: null,
    cls: null,
    ttfb: null
  });

  // Performance monitoring
  const measurePerformance = useCallback(() => {
    if (!enableMonitoring || !('PerformanceObserver' in window)) return;

    try {
      // First Contentful Paint
      const fcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const fcp = entries[entries.length - 1];
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
        const fid = entries[entries.length - 1];
        if (fid) {
          setMetrics(prev => ({ ...prev, fid: fid.processingStart - fid.startTime }));
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
  }, [enableMonitoring]);

  // Performance optimizations
  const applyOptimizations = useCallback(() => {
    if (!enableOptimizations) return;

    try {
      // Preload critical resources
      const criticalResources = [
        '/fonts/inter-var.woff2',
        '/images/hero-bg.jpg',
        '/css/critical.css'
      ];

      criticalResources.forEach(resource => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.href = resource;
        link.as = resource.endsWith('.woff2') ? 'font' : 
                  resource.endsWith('.jpg') ? 'image' : 'style';
        link.crossOrigin = resource.endsWith('.woff2') ? 'anonymous' : undefined;
        document.head.appendChild(link);
      });

      // Optimize images
      if ('loading' in HTMLImageElement.prototype) {
        const images = document.querySelectorAll('img[data-src]');
        images.forEach(img => {
          img.setAttribute('loading', 'lazy');
        });
      }

      // Optimize fonts
      if ('fonts' in document) {
        document.fonts.ready.then(() => {
          document.documentElement.classList.add('fonts-loaded');
        });
      }

    } catch (error) {
      console.warn('Performance optimizations failed:', error);
    }
  }, [enableOptimizations]);

  // Report metrics
  useEffect(() => {
    if (onMetricsUpdate && Object.values(metrics).some(m => m !== null)) {
      onMetricsUpdate(metrics);
    }
  }, [metrics, onMetricsUpdate]);

  // Initialize performance monitoring and optimizations
  useEffect(() => {
    const cleanup = measurePerformance();
    applyOptimizations();

    return cleanup;
  }, [measurePerformance, applyOptimizations]);

  // Log performance metrics in development
  useEffect(() => {
    if (process.env.NODE_ENV === 'development' && enableMonitoring) {
      const logMetrics = () => {
        const allMetrics = Object.values(metrics);
        if (allMetrics.every(m => m !== null)) {
          console.log('Performance Metrics:', {
            FCP: `${metrics.fcp?.toFixed(2)}ms`,
            LCP: `${metrics.lcp?.toFixed(2)}ms`,
            FID: `${metrics.fid?.toFixed(2)}ms`,
            CLS: metrics.cls?.toFixed(3),
            TTFB: `${metrics.ttfb?.toFixed(2)}ms`
          });
        }
      };

      const timer = setTimeout(logMetrics, 5000);
      return () => clearTimeout(timer);
    }
  }, [metrics, enableMonitoring]);

  // This component doesn't render anything visible
  return null;
};

export default PerformanceOptimizer;
