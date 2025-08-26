import React, { useEffect, useState } from 'react';

interface PerformanceMetrics {
  fcp: number | null;
  lcp: number | null;
  fid: number | null;
  cls: number | null;
  ttfb: number | null;
  domLoad: number | null;
  windowLoad: number | null;
}

// Extended interfaces for specific performance entry types
interface FirstInputEntry extends PerformanceEntry {
  processingStart: number;
  target?: EventTarget;
}

interface LayoutShiftEntry extends PerformanceEntry {
  value: number;
  hadRecentInput: boolean;
  lastInputTime: number;
}

const PerformanceMonitor: React.FC = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    fcp: null,
    lcp: null,
    fid: null,
    cls: null,
    ttfb: null,
    domLoad: null,
    windowLoad: null
  });

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only show in development or when explicitly enabled
    if (process.env.NODE_ENV === 'development' || process.env.REACT_APP_SHOW_PERFORMANCE === 'true') {
      setIsVisible(true);
    }

    const measurePerformance = () => {
      // Check if PerformanceObserver is supported
      if ('PerformanceObserver' in window) {
        // First Contentful Paint (FCP)
        const fcpObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          const fcpEntry = entries.find(entry => entry.name === 'first-contentful-paint');
          if (fcpEntry) {
            setMetrics(prev => ({ ...prev, fcp: fcpEntry.startTime }));
          }
        });
        fcpObserver.observe({ entryTypes: ['paint'] });

        // Largest Contentful Paint (LCP)
        const lcpObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          const lastEntry = entries[entries.length - 1];
          if (lastEntry) {
            setMetrics(prev => ({ ...prev, lcp: lastEntry.startTime }));
          }
        });
        lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });

        // First Input Delay (FID)
        const fidObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          entries.forEach(entry => {
            if (entry.entryType === 'first-input') {
              const fidEntry = entry as FirstInputEntry;
              setMetrics(prev => ({ ...prev, fid: fidEntry.processingStart - fidEntry.startTime }));
            }
          });
        });
        fidObserver.observe({ entryTypes: ['first-input'] });

        // Cumulative Layout Shift (CLS)
        let clsValue = 0;
        const clsObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          entries.forEach(entry => {
            if (entry.entryType === 'layout-shift') {
              const layoutShiftEntry = entry as LayoutShiftEntry;
              if (!layoutShiftEntry.hadRecentInput) {
                clsValue += layoutShiftEntry.value;
                setMetrics(prev => ({ ...prev, cls: clsValue }));
              }
            }
          });
        });
        clsObserver.observe({ entryTypes: ['layout-shift'] });

        // Time to First Byte (TTFB)
        const navigationEntry = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
        if (navigationEntry) {
          setMetrics(prev => ({ ...prev, ttfb: navigationEntry.responseStart - navigationEntry.requestStart }));
        }

        // DOM Content Loaded (using legacy timing API as fallback)
        if ('timing' in performance) {
          const timing = (performance as any).timing;
          const domLoadTime = timing.domContentLoadedEventEnd - timing.navigationStart;
          setMetrics(prev => ({ ...prev, domLoad: domLoadTime }));
          
          // Window Load
          const windowLoadTime = timing.loadEventEnd - timing.navigationStart;
          setMetrics(prev => ({ ...prev, windowLoad: windowLoadTime }));
        }

        // Cleanup observers
        return () => {
          fcpObserver.disconnect();
          lcpObserver.disconnect();
          fidObserver.disconnect();
          clsObserver.disconnect();
        };
      }
    };

    // Measure performance after a short delay to ensure page is loaded
    const timer = setTimeout(measurePerformance, 1000);

    return () => clearTimeout(timer);
  }, []);

  const getPerformanceScore = (metric: keyof PerformanceMetrics): string => {
    const value = metrics[metric];
    if (value === null) return 'N/A';

    switch (metric) {
      case 'fcp':
        if (value < 1800) return '🟢 Good';
        if (value < 3000) return '🟡 Needs Improvement';
        return '🔴 Poor';
      case 'lcp':
        if (value < 2500) return '🟢 Good';
        if (value < 4000) return '🟡 Needs Improvement';
        return '🔴 Poor';
      case 'fid':
        if (value < 100) return '🟢 Good';
        if (value < 300) return '🟡 Needs Improvement';
        return '🔴 Poor';
      case 'cls':
        if (value < 0.1) return '🟢 Good';
        if (value < 0.25) return '🟡 Needs Improvement';
        return '🔴 Poor';
      case 'ttfb':
        if (value < 800) return '🟢 Good';
        if (value < 1800) return '🟡 Needs Improvement';
        return '🔴 Poor';
      default:
        return 'N/A';
    }
  };

  const getMetricValue = (metric: keyof PerformanceMetrics): string => {
    const value = metrics[metric];
    if (value === null) return 'N/A';
    
    switch (metric) {
      case 'fcp':
      case 'lcp':
      case 'fid':
      case 'ttfb':
      case 'domLoad':
      case 'windowLoad':
        return `${Math.round(value)}ms`;
      case 'cls':
        return value.toFixed(3);
      default:
        return 'N/A';
    }
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 right-4 bg-black/80 backdrop-blur-md text-white p-4 rounded-lg shadow-lg z-50 max-w-sm">
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-sm font-semibold">Performance Monitor</h3>
        <button
          onClick={() => setIsVisible(false)}
          className="text-gray-400 hover:text-white text-xs"
          aria-label="Close performance monitor"
        >
          ✕
        </button>
      </div>
      
      <div className="space-y-2 text-xs">
        <div className="flex justify-between">
          <span>FCP:</span>
          <span className="font-mono">{getMetricValue('fcp')}</span>
          <span>{getPerformanceScore('fcp')}</span>
        </div>
        
        <div className="flex justify-between">
          <span>LCP:</span>
          <span className="font-mono">{getMetricValue('lcp')}</span>
          <span>{getPerformanceScore('lcp')}</span>
        </div>
        
        <div className="flex justify-between">
          <span>FID:</span>
          <span className="font-mono">{getMetricValue('fid')}</span>
          <span>{getPerformanceScore('fid')}</span>
        </div>
        
        <div className="flex justify-between">
          <span>CLS:</span>
          <span className="font-mono">{getMetricValue('cls')}</span>
          <span>{getPerformanceScore('cls')}</span>
        </div>
        
        <div className="flex justify-between">
          <span>TTFB:</span>
          <span className="font-mono">{getMetricValue('ttfb')}</span>
          <span>{getPerformanceScore('ttfb')}</span>
        </div>
        
        <div className="flex justify-between">
          <span>DOM Load:</span>
          <span className="font-mono">{getMetricValue('domLoad')}</span>
        </div>
        
        <div className="flex justify-between">
          <span>Window Load:</span>
          <span className="font-mono">{getMetricValue('windowLoad')}</span>
        </div>
      </div>
      
      <div className="mt-3 pt-2 border-t border-gray-600">
        <button
          onClick={() => window.location.reload()}
          className="w-full bg-zion-cyan text-black text-xs py-1 px-2 rounded hover:bg-zion-cyan/80 transition-colors"
        >
          Refresh Metrics
        </button>
      </div>
    </div>
  );
};

export default PerformanceMonitor;