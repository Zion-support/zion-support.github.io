import React, { useState, useEffect } from 'react';
import { onCLS, onINP, onFCP, onLCP, onTTFB } from 'web-vitals';
// import { logger } from '../utils/logger';

interface PerformanceMetrics {
  fcp?: number;
  lcp?: number;
  fid?: number;
  cls?: number;
  ttfb?: number;
  loadTime?: number;
  CLS?: number | null;
  INP?: number | null;
  FCP?: number | null;
  LCP?: number | null;
  TTFB?: number | null;
}

const PerformanceMonitor: React.FC = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({});
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only show in development or when debug flag is set
    const shouldShow = process.env.NODE_ENV === 'development' || 
                      localStorage.getItem('debug-performance') === 'true';
    
    if (shouldShow) {
      setIsVisible(true);
    }

    // Monitor Core Web Vitals
    onCLS((metric) => {
      console.log('CLS', metric.value, { metric: 'CLS', value: metric.value });
      setMetrics(prev => ({ ...prev, CLS: metric.value, cls: metric.value }));
      // Send to analytics service
      if (typeof window !== 'undefined' && (window as any).gtag) {
        (window as any).gtag('event', 'web_vitals', {
          event_category: 'Performance',
          event_label: 'CLS',
          value: Math.round(metric.value * 1000),
        });
      }
    });

    onINP((metric) => {
      console.log('INP', metric.value, { metric: 'INP', value: metric.value });
      setMetrics(prev => ({ ...prev, INP: metric.value }));
      if (typeof window !== 'undefined' && (window as any).gtag) {
        (window as any).gtag('event', 'web_vitals', {
          event_category: 'Performance',
          event_label: 'INP',
          value: Math.round(metric.value),
        });
      }
    });

    onFCP((metric) => {
      console.log('FCP', metric.value, { metric: 'FCP', value: metric.value });
      setMetrics(prev => ({ ...prev, FCP: metric.value, fcp: metric.value }));
      if (typeof window !== 'undefined' && (window as any).gtag) {
        (window as any).gtag('event', 'web_vitals', {
          event_category: 'Performance',
          event_label: 'FCP',
          value: Math.round(metric.value),
        });
      }
    });

    onLCP((metric) => {
      console.log('LCP', metric.value, { metric: 'LCP', value: metric.value });
      setMetrics(prev => ({ ...prev, LCP: metric.value, lcp: metric.value }));
      if (typeof window !== 'undefined' && (window as any).gtag) {
        (window as any).gtag('event', 'web_vitals', {
          event_category: 'Performance',
          event_label: 'LCP',
          value: Math.round(metric.value),
        });
      }
    });

    onTTFB((metric) => {
      console.log('TTFB', metric.value, { metric: 'TTFB', value: metric.value });
      setMetrics(prev => ({ ...prev, TTFB: metric.value, ttfb: metric.value }));
      if (typeof window !== 'undefined' && (window as any).gtag) {
        (window as any).gtag('event', 'web_vitals', {
          event_category: 'Performance',
          event_label: 'TTFB',
          value: Math.round(metric.value),
        });
      }
    });

    // Additional performance measurements
    const measurePerformance = () => {
      const newMetrics: PerformanceMetrics = {};

      // First Contentful Paint
      if ('PerformanceObserver' in window) {
        try {
          const observer = new PerformanceObserver((list) => {
            const entries = list.getEntries();
            const lastEntry = entries[entries.length - 1];
            newMetrics.fcp = lastEntry.startTime;
          });
          observer.observe({ entryTypes: ['paint'] });
        } catch (error) {
          console.warn('FCP Observer not supported:', error);
        }
      }

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

      setMetrics(prev => ({ ...prev, ...newMetrics }));
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
        {metrics.ttfb && (
          <div>TTFB: {Math.round(metrics.ttfb)}ms</div>
        )}
        {metrics.loadTime && (
          <div>Load: {Math.round(metrics.loadTime)}ms</div>
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
