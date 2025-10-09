import React, { useEffect, useState } from 'react';

interface PerformanceMetrics {
  lcp: number | null;
  fid: number | null;
  cls: number | null;
  fcp: number | null;
  ttfb: number | null;
  loadTime: number | null;
  domContentLoaded: number | null;
  firstPaint: number | null;
  firstContentfulPaint: number | null;
}

const PerformanceMonitor: React.FC = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    lcp: null,
    fid: null,
    cls: null,
    fcp: null,
    ttfb: null,
    loadTime: null,
    domContentLoaded: null,
    firstPaint: null,
    firstContentfulPaint: null
  });

  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Get basic performance metrics
    const getBasicMetrics = () => {
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      const paint = performance.getEntriesByType('paint');
      
      const firstPaint = paint.find(entry => entry.name === 'first-paint');
      const firstContentfulPaint = paint.find(entry => entry.name === 'first-contentful-paint');

      return {
        loadTime: navigation ? navigation.loadEventEnd - navigation.loadEventStart : null,
        domContentLoaded: navigation ? navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart : null,
        ttfb: navigation ? navigation.responseStart - navigation.requestStart : null,
        firstPaint: firstPaint ? firstPaint.startTime : null,
        firstContentfulPaint: firstContentfulPaint ? firstContentfulPaint.startTime : null
      };
    };

    // Monitor Core Web Vitals
    const observeWebVitals = () => {
      // LCP - Largest Contentful Paint
      const lcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const lastEntry = entries[entries.length - 1];
        setMetrics(prev => ({ ...prev, lcp: lastEntry.startTime }));
      });
      lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });

      // FID - First Input Delay
      const fidObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry) => {
          if (entry.processingStart && entry.startTime) {
            setMetrics(prev => ({ ...prev, fid: entry.processingStart - entry.startTime }));
          }
        });
      });
      fidObserver.observe({ entryTypes: ['first-input'] });

      // CLS - Cumulative Layout Shift
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

      // FCP - First Contentful Paint
      const fcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry) => {
          if (entry.name === 'first-contentful-paint') {
            setMetrics(prev => ({ ...prev, fcp: entry.startTime }));
          }
        });
      });
      fcpObserver.observe({ entryTypes: ['paint'] });
    };

    // Initialize monitoring
    const basicMetrics = getBasicMetrics();
    setMetrics(prev => ({ ...prev, ...basicMetrics }));

    // Start observing web vitals
    if ('PerformanceObserver' in window) {
      observeWebVitals();
    }

    // Report metrics to analytics
    const reportMetrics = () => {
      if (typeof window !== 'undefined' && (window as any).gtag) {
        const gtag = (window as any).gtag;
        
        // Report Core Web Vitals
        if (metrics.lcp !== null) {
          gtag('event', 'web_vitals', {
            name: 'LCP',
            value: Math.round(metrics.lcp),
            event_category: 'Performance',
            event_label: metrics.lcp < 2500 ? 'good' : metrics.lcp < 4000 ? 'needs-improvement' : 'poor'
          });
        }

        if (metrics.fid !== null) {
          gtag('event', 'web_vitals', {
            name: 'FID',
            value: Math.round(metrics.fid),
            event_category: 'Performance',
            event_label: metrics.fid < 100 ? 'good' : metrics.fid < 300 ? 'needs-improvement' : 'poor'
          });
        }

        if (metrics.cls !== null) {
          gtag('event', 'web_vitals', {
            name: 'CLS',
            value: Math.round(metrics.cls * 1000) / 1000,
            event_category: 'Performance',
            event_label: metrics.cls < 0.1 ? 'good' : metrics.cls < 0.25 ? 'needs-improvement' : 'poor'
          });
        }

        if (metrics.fcp !== null) {
          gtag('event', 'web_vitals', {
            name: 'FCP',
            value: Math.round(metrics.fcp),
            event_category: 'Performance',
            event_label: metrics.fcp < 1800 ? 'good' : metrics.fcp < 3000 ? 'needs-improvement' : 'poor'
          });
        }

        // Report page load time
        if (metrics.loadTime !== null) {
          gtag('event', 'timing_complete', {
            name: 'load',
            value: Math.round(metrics.loadTime),
            event_category: 'Performance'
          });
        }
      }
    };

    // Report metrics after a delay to ensure all metrics are collected
    const reportTimer = setTimeout(reportMetrics, 5000);

    return () => {
      clearTimeout(reportTimer);
    };
  }, [metrics.lcp, metrics.fid, metrics.cls, metrics.fcp, metrics.loadTime]);

  // Performance optimization suggestions
  const getPerformanceSuggestions = () => {
    const suggestions = [];

    if (metrics.lcp && metrics.lcp > 4000) {
      suggestions.push('Consider optimizing images and reducing server response time for better LCP');
    }

    if (metrics.fid && metrics.fid > 300) {
      suggestions.push('Reduce JavaScript execution time to improve FID');
    }

    if (metrics.cls && metrics.cls > 0.25) {
      suggestions.push('Add size attributes to images and avoid inserting content above existing content');
    }

    if (metrics.fcp && metrics.fcp > 3000) {
      suggestions.push('Optimize critical rendering path and reduce render-blocking resources');
    }

    if (metrics.loadTime && metrics.loadTime > 5000) {
      suggestions.push('Consider code splitting and lazy loading for better load times');
    }

    return suggestions;
  };

  // Don't render anything in production
  if (process.env.NODE_ENV === 'production') {
    return null;
  }

  const suggestions = getPerformanceSuggestions();

  return (
    <div className="fixed bottom-4 right-4 bg-slate-900/90 backdrop-blur-lg border border-cyan-400/20 rounded-lg p-4 max-w-sm text-xs text-white z-50">
      <h3 className="text-cyan-400 font-semibold mb-2">Performance Monitor</h3>
      
      <div className="space-y-1 text-gray-300">
        {metrics.lcp && (
          <div className="flex justify-between">
            <span>LCP:</span>
            <span className={metrics.lcp < 2500 ? 'text-green-400' : metrics.lcp < 4000 ? 'text-yellow-400' : 'text-red-400'}>
              {Math.round(metrics.lcp)}ms
            </span>
          </div>
        )}
        
        {metrics.fid && (
          <div className="flex justify-between">
            <span>FID:</span>
            <span className={metrics.fid < 100 ? 'text-green-400' : metrics.fid < 300 ? 'text-yellow-400' : 'text-red-400'}>
              {Math.round(metrics.fid)}ms
            </span>
          </div>
        )}
        
        {metrics.cls !== null && (
          <div className="flex justify-between">
            <span>CLS:</span>
            <span className={metrics.cls < 0.1 ? 'text-green-400' : metrics.cls < 0.25 ? 'text-yellow-400' : 'text-red-400'}>
              {Math.round(metrics.cls * 1000) / 1000}
            </span>
          </div>
        )}
        
        {metrics.fcp && (
          <div className="flex justify-between">
            <span>FCP:</span>
            <span className={metrics.fcp < 1800 ? 'text-green-400' : metrics.fcp < 3000 ? 'text-yellow-400' : 'text-red-400'}>
              {Math.round(metrics.fcp)}ms
            </span>
          </div>
        )}
        
        {metrics.loadTime && (
          <div className="flex justify-between">
            <span>Load:</span>
            <span className={metrics.loadTime < 3000 ? 'text-green-400' : metrics.loadTime < 5000 ? 'text-yellow-400' : 'text-red-400'}>
              {Math.round(metrics.loadTime)}ms
            </span>
          </div>
        )}
      </div>

      {suggestions.length > 0 && (
        <div className="mt-3 pt-2 border-t border-gray-700">
          <h4 className="text-yellow-400 font-semibold mb-1">Suggestions:</h4>
          <ul className="space-y-1 text-gray-400">
            {suggestions.map((suggestion, index) => (
              <li key={index} className="text-xs">• {suggestion}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default PerformanceMonitor;