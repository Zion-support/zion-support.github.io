import React, { useState, useEffect } from 'react';
import { onCLS, onFCP, onLCP, onTTFB } from 'web-vitals';

interface PerformanceMetrics {
  lcp: number | null;
  cls: number | null;
  fcp: number | null;
  ttfb: number | null;
  loadTime: number | null;
}

const PerformanceMonitor: React.FC = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    lcp: null,
    cls: null,
    fcp: null,
    ttfb: null,
    loadTime: null
  });

  const [isVisible, setIsVisible] = useState(false);

  // Simple logger for performance metrics
  const logger = {
    performance: (name: string, value: number, meta?: any) => {
      console.log(`[Performance] ${name}:`, value, meta);
    }
  };

  useEffect(() => {
    const measurePerformance = () => {
      const newMetrics = { ...metrics };

      // Largest Contentful Paint
      if ('PerformanceObserver' in window) {
        try {
          const observer = new PerformanceObserver((list) => {
            const entries = list.getEntries();
            const lastEntry = entries[entries.length - 1];
            newMetrics.lcp = lastEntry.startTime;
          });
          observer.observe({ entryTypes: ['largest-contentful-paint'] });
        } catch (error) {
          console.warn('LCP Observer not supported:', error);
        }
      }

      // Time to First Byte
      if (performance.timing) {
        newMetrics.ttfb = performance.timing.responseStart - performance.timing.navigationStart;
      }

      // Page load time
      if (performance.timing) {
        newMetrics.loadTime = performance.timing.loadEventEnd - performance.timing.navigationStart;
      }

      setMetrics(newMetrics);
    };

    // Measure after page load
    if (document.readyState === 'complete') {
      measurePerformance();
    } else {
      window.addEventListener('load', measurePerformance);
    }

    return () => {
      window.removeEventListener('load', measurePerformance);
    };
  }, []);

  // Web Vitals measurement
  useEffect(() => {
    onCLS((metric) => {
      logger.performance('CLS', metric.value, { metric: 'CLS', value: metric.value });
      setMetrics(prev => ({ ...prev, cls: metric.value }));
    });


    onFCP((metric) => {
      logger.performance('FCP', metric.value, { metric: 'FCP', value: metric.value });
      setMetrics(prev => ({ ...prev, fcp: metric.value }));
    });

    onLCP((metric) => {
      logger.performance('LCP', metric.value, { metric: 'LCP', value: metric.value });
      setMetrics(prev => ({ ...prev, lcp: metric.value }));
    });

    onTTFB((metric) => {
      logger.performance('TTFB', metric.value, { metric: 'TTFB', value: metric.value });
      setMetrics(prev => ({ ...prev, ttfb: metric.value }));
    });
  }, []);

  // Keyboard shortcut to toggle visibility
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'F12' || (event.ctrlKey && event.shiftKey && event.key === 'P')) {
        event.preventDefault();
        setIsVisible(prev => !prev);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 right-4 bg-slate-800 text-white p-4 rounded-lg shadow-lg text-xs font-mono z-50 max-w-xs">
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-sm font-semibold">Performance</h3>
        <button
          onClick={() => setIsVisible(false)}
          className="text-gray-400 hover:text-white"
          aria-label="Close performance monitor"
        >
          ×
        </button>
      </div>
      
      <div className="space-y-1">
        {metrics.lcp && (
          <div>LCP: {metrics.lcp.toFixed(2)}ms</div>
        )}
        {metrics.fcp && (
          <div>FCP: {metrics.fcp.toFixed(2)}ms</div>
        )}
        {metrics.ttfb && (
          <div>TTFB: {metrics.ttfb.toFixed(2)}ms</div>
        )}
        {metrics.loadTime && (
          <div>Load: {metrics.loadTime.toFixed(2)}ms</div>
        )}
        {metrics.cls && (
          <div>CLS: {metrics.cls.toFixed(3)}</div>
        )}
      </div>
      
      <div className="mt-2 pt-2 border-t border-slate-600 text-xs text-gray-400">
        Press F12 for more details
      </div>
    </div>
  );
};

export default PerformanceMonitor;