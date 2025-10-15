import React, { useEffect, useState } from 'react';
import { onCLS, onINP, onFCP, onLCP, onTTFB } from 'web-vitals';

interface PerformanceMetrics {
  fcp?: number;
  lcp?: number;
  cls?: number;
  inp?: number;
  ttfb?: number;
  loadTime?: number;
}

const PerformanceMonitor: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [metrics, setMetrics] = useState<PerformanceMetrics>({});

  useEffect(() => {
    // Only show in development or when debug flag is set
    if (process.env.NODE_ENV !== 'development' && !localStorage.getItem('debug-performance')) {
      return;
    }

    // Show performance monitor
    setIsVisible(true);

    // First Contentful Paint
    onFCP((metric) => {
      setMetrics(prev => ({ ...prev, fcp: metric.value }));
    });

    // Largest Contentful Paint
    onLCP((metric) => {
      setMetrics(prev => ({ ...prev, lcp: metric.value }));
    });

    // Cumulative Layout Shift
    onCLS((metric) => {
      setMetrics(prev => ({ ...prev, cls: metric.value }));
    });

    // Interaction to Next Paint
    onINP((metric) => {
      setMetrics(prev => ({ ...prev, inp: metric.value }));
    });

    // Time to First Byte
    onTTFB((metric) => {
      setMetrics(prev => ({ ...prev, ttfb: metric.value }));
    });

    // Page load time
    const measurePerformance = () => {
      if (performance.timing) {
        const loadTime = performance.timing.loadEventEnd - performance.timing.navigationStart;
        setMetrics(prev => ({ ...prev, loadTime }));
      }
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

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 right-4 bg-slate-800 text-white p-4 rounded-lg shadow-lg text-xs font-mono z-50 max-w-xs">
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-sm font-semibold">Performance</h3>
        <button
          onClick={() => setIsVisible(false)}
          className="text-gray-400 hover:text-white"
        >
          ×
        </button>
      </div>
      
      <div className="space-y-1">
        {metrics.fcp && (
          <div>FCP: {Math.round(metrics.fcp)}ms</div>
        )}
        {metrics.lcp && (
          <div>LCP: {Math.round(metrics.lcp)}ms</div>
        )}
        {metrics.cls && (
          <div>CLS: {metrics.cls.toFixed(3)}</div>
        )}
        {metrics.inp && (
          <div>INP: {Math.round(metrics.inp)}ms</div>
        )}
        {metrics.ttfb && (
          <div>TTFB: {Math.round(metrics.ttfb)}ms</div>
        )}
        {metrics.loadTime && (
          <div>Load: {Math.round(metrics.loadTime)}ms</div>
        )}
      </div>
      
      <div className="mt-2 pt-2 border-t border-slate-600 text-xs text-gray-400">
        Press F12 for more details
      </div>
    </div>
  );
};

export default PerformanceMonitor;
