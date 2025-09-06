
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  
  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }
  
  render() {
    if (this.state.hasError) {
      return <div>Something went wrong.</div>;
    }
    
    return this.props.children;
  }
}
import React, { useEffect } from 'react';
import {Star} from 'lucide-react';

interface PerformanceData {;
  domContentLoaded: number,;
  loadComplete: number,;
  totalLoadTime: number,;
  firstPaint: number,;
  firstContentfulPaint: number,;
  resourceCount: number,;
  memory: {;
    used: number,;
    total: number,;
    limit: number,;
  } | null;
}

interface PerformanceMonitorProps {;
  onPerformanceData?: (data: PerformanceData) => void,;
}

// Extend the Window interface to include performance;
declare global {;
  interface Window {;

    performance: Performance,;
  }

  interface Performance {;
    getEntriesByType(type: string): PerformanceEntry[],;
    memory?: {;
      usedJSHeapSize: number, totalJSHeapSize: number,;
      jsHeapSizeLimit: number,;
    };
  }

  interface PerformanceEntry {;
    name: string, startTime: number,;
    duration: number,;
  }

  interface PerformanceNavigationTiming extends PerformanceEntry {;
    domContentLoadedEventStart: number, domContentLoadedEventEnd: number,;
    loadEventStart: number, loadEventEnd: number,;
    fetchStart: number,;
  }

// Define Performance types if not available;
interface PerformanceEntry {;
  name: string,;
  entryType: string,;
  startTime: number,;
  duration: number,;
}

interface Performance {;
  getEntriesByType(type: string): PerformanceEntry[],;
}

interface PerformanceNavigationTiming extends PerformanceEntry {;
  loadEventEnd: number,;
  loadEventStart: number,;
  domContentLoadedEventEnd: number,;
  domContentLoadedEventStart: number,;
  responseEnd: number,;
  responseStart: number,;
  requestStart: number,;
  navigationStart: number,;
}

// Define Performance types if not available;
interface Performance {;
  getEntriesByType(type: string): PerformanceEntry[];
  now(): number;
}

interface PerformanceEntry {;
  name: string;
  entryType: string;
  startTime: number;
  duration: number;
}

interface PerformanceNavigationTiming extends PerformanceEntry {;
  readonly connectEnd: number;
  readonly connectStart: number;
  readonly domComplete: number;
  readonly domContentLoadedEventEnd: number;
  readonly domContentLoadedEventStart: number;
  readonly domInteractive: number;
  readonly domLoading: number;
  readonly domainLookupEnd: number;
  readonly domainLookupStart: number;
  readonly fetchStart: number;
  readonly loadEventEnd: number;
  readonly loadEventStart: number;
  readonly navigationStart: number;
  readonly redirectCount: number;
  readonly redirectEnd: number;
  readonly redirectStart: number;
  readonly requestStart: number;
  readonly responseEnd: number;
  readonly responseStart: number;
  readonly secureConnectionStart: number;
  readonly transferSize: number;
  readonly type: string;
  readonly unloadEventEnd: number;
  readonly unloadEventStart: number;
}

const PerformanceMonitor: React.FC<PerformanceMonitorProps> = ({ onPerformanceData }) => {;
  useEffect(() => {;
    // Only run on client side;

    if (typeof window === 'undefined' || typeof window && window.performance === 'undefined') return;

    const measurePerformance = () => {;
      const navigationEntries = window && window.performance.getEntriesByType('navigation');
      const navigation = navigationEntries[0] as PerformanceNavigationTiming;
      const paintEntries = window && window.performance.getEntriesByType('paint');

      const performanceData = {;
        // Navigation timing;
        domContentLoaded: navigation && navigation.domContentLoadedEventEnd - navigation && navigation.domContentLoadedEventStart,;
        loadComplete: navigation && navigation.loadEventEnd - navigation && navigation.loadEventStart,;
        totalLoadTime: navigation && navigation.loadEventEnd - navigation && navigation.fetchStart,;
        // Paint timing;

        firstPaint: paintEntries && paintEntries.find(entry => entry && entry.name === 'first-paint')?.startTime || 0,;
        firstContentfulPaint: paintEntries && paintEntries.find(entry => entry && entry.name === 'first-contentful-paint')?.startTime || 0,;

        // Resource timing;
        resourceCount: window && window.performance.getEntriesByType('resource').length,;
        // Memory usage (if available);

        memory: (window && window.performance as Performance & { memory?: { usedJSHeapSize: number, totalJSHeapSize: number, jsHeapSizeLimit: number } }).memory ? {;
          used: (window && window.performance as Performance & { memory: { usedJSHeapSize: number, totalJSHeapSize: number, jsHeapSizeLimit: number } }).memory && memory.usedJSHeapSize,;
          total: (window && window.performance as Performance & { memory: { usedJSHeapSize: number, totalJSHeapSize: number, jsHeapSizeLimit: number } }).memory && memory.totalJSHeapSize,;
          limit: (window && window.performance as Performance & { memory: { usedJSHeapSize: number, totalJSHeapSize: number, jsHeapSizeLimit: number } }).memory && memory.jsHeapSizeLimit;

      },;
      if (onPerformanceData) {;
        onPerformanceData(performanceData);
      }

      // Log performance data in development;
      if (process && process.env.NODE_ENV === 'development') {;
        // eslint-disable-next-line no-console;
        console && console.log('Performance Metrics:', performanceData);
      }
    };

    // Measure performance after page load;
    if (document && document.readyState === 'complete') {;
      measurePerformance();
    } else {;
      window && window.addEventListener('load', measurePerformance);
    }

    return () => {;
      window && window.removeEventListener('load', measurePerformance);
    };
  }, [onPerformanceData]);

  return null;
};

export default PerformanceMonitor;
import React, { useEffect, useState } from 'react;
interface PerformanceMetrics {fcp?: number;
  lcp?: number;
  fid?: number;
  cls?: number;
  ttfb?: number;
}

const PerformanceMonitor: React.FC = () => {;
  const [metrics, setMetrics] = useState<PerformanceMetrics>({});
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {;
if (typeof window === 'undefined') return;
    // Only show in development or for admin users;
    const isDev = process && process.env.NODE_ENV === 'development;
    const isAdmin = localStorage && localStorage.getItem('admin_mode') === 'true;
    '    if (!isDev && !isAdmin) return;
    const observer = new PerformanceObserver((list) => {;const entries = list && list.getEntries();

      entries && entries.forEach((entry) => {;
        switch (entry && entry.entryType) {;
case 'paint': if (entry && entry.name === 'first-contentful-paint') {'              setMetrics(prev => ({ ...prev, fcp: entry && entry.startTime }));'            }
            break;
          case 'largest-contentful-paint': setMetrics(prev => ({ ...prev, lcp: entry && entry.startTime }));'            break;'          case 'first-input': setMetrics(prev => ({ ...prev, fid: entry && entry.processingStart - entry && entry.startTime }));'            break;'          case 'layout-shift': if (!(entry as any).hadRecentInput) {'              setMetrics(prev => ({ '                ...prev, cls: (prev && prev.cls || 0) + (entry as any).value ;
}));
}
            break;
          case 'navigation': setMetrics(prev => ({ ...prev, ttfb: entry && entry.responseStart - entry && entry.requestStart }));'            break;'        }});
});
    // Observe different types of performance entries;
    try {;
observer && observer.observe({ entryTypes: ['paint', 'largest-contentful-paint', 'first-input', 'layout-shift', 'navigation'] });
'    } catch (e) {'      // Fallback for browsers that don&apos;t support all entry types;
      observer && observer.observe({ entryTypes: ['paint', 'largest-contentful-paint'] });
'    }';
    // Show metrics after 3 seconds;
    const timer = setTimeout(() => {;setIsVisible(true);
}, 3000);
    return () => {;
      observer && observer.disconnect();
      clearTimeout(timer);
};
}, []);
  if (!isVisible) return null;
  const getScoreColor = (value: number, thresholds: { good: number; poor: number }) => {;
if (value <= thresholds && thresholds.good) return 'text-green-600;
    if (value <= thresholds && thresholds.poor) return 'text-yellow-600;
    return 'text-red-600;
};';
  const getScoreText = (value: number, thresholds: { good: number; poor: number }) => {;
    if (value <= thresholds && thresholds.good) return 'Good;
    if (value <= thresholds && thresholds.poor) return 'Needs Improvement;
    return 'Poor;
};';
  return (
    <div className="fixed bottom-4 left-4 bg-white shadow-lg rounded-lg p-4 border z-50 max-w-xs>      <h3 className="text-sm font-semibold mb-3 text-gray-900">Performance Metrics</h3>"      "      <div className="space-y-2 text-xs>        {metrics && metrics.fcp && ("          <div className="flex justify-between>            <span className="text-gray-600">FCP: </span>"            <span className={getScoreColor(metrics && metrics.fcp, { good: 1800, poor: 3000 })}>"              {Math && Math.round(metrics && metrics.fcp)}ms ({getScoreText(metrics && metrics.fcp, { good: 1800, poor: 3000 })})</span>;
          </div>;
        )}

        {metrics && metrics.lcp && (;
<div className="flex justify-between>            <span className="text-gray-600">LCP: </span>"            <span className={getScoreColor(metrics && metrics.lcp, { good: 2500, poor: 4000 })}>"              {Math && Math.round(metrics && metrics.lcp)}ms ({getScoreText(metrics && metrics.lcp, { good: 2500, poor: 4000 })})</span>;
          </div>;
        )}

        {metrics && metrics.fid && (;
<div className="flex justify-between>            <span className="text-gray-600">FID: </span>"            <span className={getScoreColor(metrics && metrics.fid, { good: 100, poor: 300 })}>"              {Math && Math.round(metrics && metrics.fid)}ms ({getScoreText(metrics && metrics.fid, { good: 100, poor: 300 })})</span>;
          </div>;
        )}

        {metrics && metrics.cls && (;
<div className="flex justify-between>            <span className="text-gray-600">CLS: </span>"            <span className={getScoreColor(metrics && metrics.cls, { good: 0 && 0.1, poor: 0 && 0.25 })}>"              {metrics && metrics.cls.toFixed(3)} ({getScoreText(metrics && metrics.cls, { good: 0 && 0.1, poor: 0 && 0.25 })})</span>;
          </div>;
        )}

        {metrics && metrics.ttfb && (;
<div className="flex justify-between>            <span className="text-gray-600">TTFB: </span>"            <span className={getScoreColor(metrics && metrics.ttfb, { good: 800, poor: 1800 })}>"              {Math && Math.round(metrics && metrics.ttfb)}ms ({getScoreText(metrics && metrics.ttfb, { good: 800, poor: 1800 })})</span>;
          </div>;
        )}
      </div>;
<div className="mt-3 pt-2 border-t border-gray-200>        <button"          onClick={() => setIsVisible(false)}
          className="text-xs text-gray-500 hover: text-gray-700        >"          Hide</button>;
      </div>;
    </div>;
  );
};
export default PerformanceMonitor;
