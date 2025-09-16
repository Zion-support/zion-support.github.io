<<<<<<< HEAD
import React, { useEffect, useState, useCallback } from 'react';
import { getCLS, getFID, getFCP, getLCP, getTTFB } from 'web-vitals';
=======
>>>>>>> origin/merge-pr-12271

interface PerformanceMetrics {
  cls: number | null;
  fid: number | null;
  fcp: number | null;
  lcp: number | null;
  ttfb: number | null;
  loadTime: number | null;
  renderTime: number | null;
}

interface PerformanceMonitorProps {
  onMetricsUpdate?: (metrics: PerformanceMetrics) => void;
  reportToAnalytics?: boolean;
  showMetrics?: boolean;
}

const PerformanceMonitor: React.FC<PerformanceMonitorProps> = ({
  onMetricsUpdate,
  reportToAnalytics = true,
  showMetrics = false
}) => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    cls: null,
    fid: null,
    fcp: null,
    lcp: null,
    ttfb: null,
    loadTime: null,
    renderTime: null
  });

  const [isVisible, setIsVisible] = useState(false);

  const updateMetrics = useCallback((newMetrics: Partial<PerformanceMetrics>) => {
    setMetrics(prev => {
      const updated = { ...prev, ...newMetrics };
      onMetricsUpdate?.(updated);
      return updated;
    });
  }, [onMetricsUpdate]);

  const reportMetric = useCallback((name: string, value: number) => {
    if (reportToAnalytics && typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', name, {
        event_category: 'Web Vitals',
        value: Math.round(name === 'CLS' ? value * 1000 : value),
        event_label: 'Performance',
        non_interaction: true,
      });
    }
  }, [reportToAnalytics]);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const startTime = performance.now();

    // Measure page load time
    const measureLoadTime = () => {
      const loadTime = performance.now() - startTime;
      updateMetrics({ loadTime });
    };

    // Measure render time
    const measureRenderTime = () => {
      const renderTime = performance.now() - startTime;
      updateMetrics({ renderTime });
    };

    // Web Vitals
    getCLS((metric) => {
      updateMetrics({ cls: metric.value });
      reportMetric('CLS', metric.value);
    });

    getFID((metric) => {
      updateMetrics({ fid: metric.value });
      reportMetric('FID', metric.value);
    });

    getFCP((metric) => {
      updateMetrics({ fcp: metric.value });
      reportMetric('FCP', metric.value);
    });

    getLCP((metric) => {
      updateMetrics({ lcp: metric.value });
      reportMetric('LCP', metric.value);
    });

    getTTFB((metric) => {
      updateMetrics({ ttfb: metric.value });
      reportMetric('TTFB', metric.value);
    });

    // Measure load and render times
    if (document.readyState === 'complete') {
      measureLoadTime();
      measureRenderTime();
    } else {
      window.addEventListener('load', measureLoadTime);
      window.addEventListener('DOMContentLoaded', measureRenderTime);
    }

    // Cleanup
    return () => {
      window.removeEventListener('load', measureLoadTime);
      window.removeEventListener('DOMContentLoaded', measureRenderTime);
    };
  }, [updateMetrics, reportMetric]);

  const getPerformanceGrade = (value: number | null, thresholds: { good: number; poor: number }) => {
    if (value === null) return 'N/A';
    if (value <= thresholds.good) return 'Good';
    if (value <= thresholds.poor) return 'Needs Improvement';
    return 'Poor';
<<<<<<< HEAD
  };

  const formatMetric = (value: number | null, unit: string = 'ms') => {
    if (value === null) return 'N/A';
    return `${Math.round(value)}${unit}`;
  };

  if (!showMetrics) return null;
=======
  }
  return (<div className="fixed bottom-4 left-4 bg-white shadow-lg rounded-lg p-4 border z-50 max-w-xs">;
      <h3 className="text-sm font-semibold mb-3 text-gray-900">Performance Metrics</h3>;
      <div className="space-y-2 text-xs">;
        {metrics.fcp && (<div className="flex justify-between">;
            <span className="text-gray-600">FCP: </span>;
            <span className={getScoreColor(metrics.fcp, { good: 1800, poor: 3000 })}>;
              {Math.round(metrics.fcp)}ms ({getScoreText(metrics.fcp, { good: 1800, poor: 3000 })})</span>;
          </div>;
        )}{metrics.lcp && (<div className="flex justify-between">;
            <span className="text-gray-600">LCP: </span>;
            <span className={getScoreColor(metrics.lcp, { good: 2500, poor: 4000 })}>;
              {Math.round(metrics.lcp)}ms ({getScoreText(metrics.lcp, { good: 2500, poor: 4000 })})</span>;
          </div>;
        )}{metrics.fid && (<div className="flex justify-between">;
            <span className="text-gray-600">FID: </span>;
            <span className={getScoreColor(metrics.fid, { good: 100, poor: 300 })}>;
              {Math.round(metrics.fid)}ms ({getScoreText(metrics.fid, { good: 100, poor: 300 })})</span>;
          </div>;
        )}{metrics.cls && (<div className="flex justify-between">;
            <span className="text-gray-600">CLS: </span>;
            <span className={getScoreColor(metrics.cls, { good: 0.1, poor: 0.25 })}>;
              {metrics.cls.toFixed(3)} ({getScoreText(metrics.cls, { good: 0.1, poor: 0.25 })})</span>;
          </div>;
        )}{metrics.ttfb && (<div className="flex justify-between">;
            <span className="text-gray-600">TTFB: </span>;
            <span className={getScoreColor(metrics.ttfb, { good: 800, poor: 1800 })}>;
              {Math.round(metrics.ttfb)}ms ({getScoreText(metrics.ttfb, { good: 800, poor: 1800 })})</span>;
          </div>;
        )}
      </div>;
      <div className="mt-3 pt-2 border-t border-gray-200">;
        <button;
          onClick={() => setIsVisible(false)}
          className="text-xs text-gray-500 hover: text-gray-700";
        >;
          Hide;
        </button>;
      </div>;
    </div>;
  const getScoreColor = (value: number, thresholds: { good: number poor: number }) => {if (value <= thresholds.good) return 'text-green-600';
   if (value <= thresholds.poor) return;
  'text-yellow-600';
   return;
  'text-red-600';
 }'';
  const getScoreText = (value: number, thresholds: { good: number poor: number }) => {if (value <= thresholds.good) return;
  'Good';
   if (value <= thresholds.poor) return;
  'Needs Improvement';
   return;
  'Poor';
 }'';
  return (<div className='fixed bottom-4 left-4 bg-white shadow-lg rounded-lg p-4 border z-50 max-w-xs'>'      <h3 className='text-sm font-semibold mb-3 text-gray-900'>Performance Metrics</h3>'      '      <div className='space-y-2 text-xs'>'        {metrics.fcp && ('          <div className='flex justify-between'>'            <span className='text-gray-600'>FCP: </span>'            <span className={getScoreColor(metrics.fcp, { good: 1800, poor: 3000 })}>'              {Math.round(metrics.fcp)}ms ({getScoreText(metrics.fcp, { good: 1800, poor: 3000 })})</span>;
          </div>;
        )}{metrics.lcp && (<div className='flex justify-between'>'            <span className='text-gray-600'>LCP: </span>'            <span className={getScoreColor(metrics.lcp, { good: 2500, poor: 4000 })}>'              {Math.round(metrics.lcp)}ms ({getScoreText(metrics.lcp, { good: 2500, poor: 4000 })})</span>';
          </div>;
        )}{metrics.fid && (<div className='flex justify-between'>'            <span className='text-gray-600'>FID: </span>'            <span className={getScoreColor(metrics.fid, { good: 100, poor: 300 })}>'              {Math.round(metrics.fid)}ms ({getScoreText(metrics.fid, { good: 100, poor: 300 })})</span>';
          </div>;
        )}{metrics.cls && (<div className='flex justify-between'>'            <span className='text-gray-600'>CLS: </span>'            <span className={getScoreColor(metrics.cls, { good: 0.1, poor: 0.25 })}>'              {metrics.cls.toFixed(3)} ({getScoreText(metrics.cls, { good: 0.1, poor: 0.25 })})</span>';
          </div>;
        )}{metrics.ttfb && (<div className='flex justify-between'>'            <span className='text-gray-600'>TTFB: </span>'            <span className={getScoreColor(metrics.ttfb, { good: 800, poor: 1800 })}>'              {Math.round(metrics.ttfb)}ms ({getScoreText(metrics.ttfb, { good: 800, poor: 1800 })})</span>';
          </div>;
        )}
      </div>;
<div className='mt-3 pt-2 border-t border-gray-200'>'        <button'          onClick={() => setIsVisible(false)}
          className='text-xs text-gray-500 hover: text-gray-700''        >'          Hide</button>;
      </div>;
    </div>;
  )}
}, [])// Check condition;
if (return null) {$2;
}
  const getScoreColor = (value: number, thresholds: { good: number; poor: number }) =>: any {// Check condition;
if (return 'text - green - 600) {$2;
}
    // Check condition;
if (return 'text - yellow - 600) {$2;
}
    return 'text - red - 600;
}';
  const getScoreText = (value: number, thresholds: { good: number; poor: number }) =>: any {// Check condition;
if (return 'Good) {$2;
}
    // Check condition;
if (return 'Needs Improvement) {$2;
}
    return 'Poor;
}';
  return (<div className="fixed bottom - 4 left - 4 bg - white shadow - lg rounded - lg p - 4 border z - 50 max - w-xs>      <h3 className="text - sm font - semibold mb - 3 text - gray - 900">Performance Metrics</h3>"      "      <div className="space - y-2 text - xs>        {metrics.fcp && ("          <div className="flex justify - between>            <span className="text - gray - 600">FCP: </span>"            <span className={getScoreColor (metrics.fcp, { good: 1800, poor: 3000 })}>"              {Math.round (metrics.fcp)}ms ({getScoreText (metrics.fcp, { good: 1800, poor: 3000 })})</span>;
          </div>)}
        {metrics.lcp && (<div className="flex justify - between>            <span className="text - gray - 600">LCP: </span>"            <span className={getScoreColor (metrics.lcp, { good: 2500, poor: 4000 })}>"              {Math.round (metrics.lcp)}ms ({getScoreText (metrics.lcp, { good: 2500, poor: 4000 })})</span>;
          </div>)}
        {metrics.fid && (<div className="flex justify - between>            <span className="text - gray - 600">FID: </span>"            <span className={getScoreColor (metrics.fid, { good: 100, poor: 300 })}>"              {Math.round (metrics.fid)}ms ({getScoreText (metrics.fid, { good: 100, poor: 300 })})</span>;
          </div>)}
        {metrics.cls && (<div className="flex justify - between>            <span className="text - gray - 600">CLS: </span>"            <span className={getScoreColor (metrics.cls, { good: 0.1, poor: 0.25 })}>"              {metrics.cls.to_fixed (3)} ({getScoreText (metrics.cls, { good: 0.1, poor: 0.25 })})</span>;
          </div>)}
        {metrics.ttfb && (<div className="flex justify - between>            <span className="text - gray - 600">TTFB: </span>"            <span className={getScoreColor (metrics.ttfb, { good: 800, poor: 1800 })}>"              {Math.round (metrics.ttfb)}ms ({getScoreText (metrics.ttfb, { good: 800, poor: 1800 })})</span>;
          </div>)}
      </div>;
<div className="mt - 3 pt - 2 border - t border - gray - 200>        <button"          on_click={() => setIsVisible (false)}
          className="text - xs text - gray - 500 hover: text - gray - 700        >"          Hide</button>;
      </div>;
      window.removeEventListener('load', measurePerformance)}}, [onPerformanceData])return () => observer.disconnect()// Monitor Cumulative Layout Shift (CLS)let clsValue = 0;
      const clsObserver = new PerformanceObserver((list) => {for (const entry of list.getEntries()) {if (!(entry as any).hadRecentInput) {clsValue += (entry as any).value;
          }
        }
        metrics.cls = clsValue;
        if (process.env.NODE_ENV === 'production') {// gtag('event', 'web_vitals', {//   name: 'CLS',//   value: Math.round(clsValue * 1000),//   event_category: 'Web Vitals';
          // })}
      })try {clsObserver.observe({ entryTypes: ['layout-shift'] })} catch (e) {// Fallback for browsers that don't support CLS;
      }// Monitor First Contentful Paint (FCP)const fcpObserver = new PerformanceObserver((list) => {for (const entry of list.getEntries()) {if (entry.entryType === 'paint' && entry.name === 'first-contentful-paint') {metrics.fcp = entry.startTime;
          }
        }
      })try {fcpObserver.observe({ entryTypes: ['paint'] })} catch (e) {// Fallback for browsers that don't support FCP;
      }// Monitor Time to First Byte (TTFB)const navigationEntry = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      if (navigationEntry) {metrics.ttfb = navigationEntry.responseStart - navigationEntry.requestStart;
      }return () => {lcpObserver.disconnect()fidObserver.disconnect()clsObserver.disconnect()fcpObserver.disconnect()}}
  }, [])if (!metrics) return null;return (<div className="fixed bottom-4 right-4 bg-black bg-opacity-75 text-white p-2 rounded text-xs">;
      <div>Load: {metrics.loadTime.toFixed(2)}ms</div>;
      <div>Render: {metrics.renderTime.toFixed(2)}ms</div>;
      <div>Memory: {(metrics.memoryUsage / 1024 / 1024).toFixed(2)}MB</div>;
    </div>;
  )}export default PerformanceMonitor;
export default PerformanceMonitor;
  return null; // This component doesn't render anything;
}export default PerformanceMonitor;

interface PerformanceMonitorProps {
  onPerformanceData?: (data: any) => void;
}

const PerformanceMonitor: React.FC<PerformanceMonitorProps> = ({ onPerformanceData }) => {
  useEffect(() => {
    // Only run on client side
    if (typeof window === 'undefined' || typeof performance === 'undefined') {
      return;
    }

    const measurePerformance = () => {
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      const paint = performance.getEntriesByType('paint');
      
      const performanceData = {
        // Navigation timing
        domContentLoaded: navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart,
        loadComplete: navigation.loadEventEnd - navigation.loadEventStart,
        totalLoadTime: navigation.loadEventEnd - navigation.fetchStart,
        
        // Paint timing
        firstPaint: paint.find(entry => entry.name === 'first-paint')?.startTime || 0,
        firstContentfulPaint: paint.find(entry => entry.name === 'first-contentful-paint')?.startTime || 0,
        
        // Resource timing
        resourceCount: performance.getEntriesByType('resource').length,
        
        // Memory usage (if available)
        memory: (performance as any).memory ? {
          used: (performance as any).memory.usedJSHeapSize,
          total: (performance as any).memory.totalJSHeapSize,
          limit: (performance as any).memory.jsHeapSizeLimit
        } : null
      };

      observer.observe({ entryTypes: ['navigation'] });

      // Log performance data in development
      if (process.env.NODE_ENV === 'development') {
        console.log('Performance Metrics:', performanceData);
      }
    };

    // Measure performance after page load
    if (document.readyState === 'complete') {
      measurePerformance();
    } else {
      window.addEventListener('load', measurePerformance);
    }

    return () => {
      window.removeEventListener('load', measurePerformance);
    };
  }, [onPerformanceData]);

  if (!metrics) return null;
>>>>>>> origin/merge-pr-12271

  return (
    <div className="fixed bottom-4 right-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg p-4 max-w-sm z-50">
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-sm font-semibold text-gray-900 dark:text-white">Performance Metrics</h3>
        <button
          onClick={() => setIsVisible(!isVisible)}
          className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
        >
          {isVisible ? '▼' : '▶'}
        </button>
      </div>
      
      {isVisible && (
        <div className="space-y-2 text-xs">
          <div className="flex justify-between">
            <span className="text-gray-600 dark:text-gray-400">CLS:</span>
            <span className={`font-medium ${
              metrics.cls !== null && metrics.cls <= 0.1 ? 'text-green-600' :
              metrics.cls !== null && metrics.cls <= 0.25 ? 'text-yellow-600' : 'text-red-600'
            }`}>
              {formatMetric(metrics.cls, '')}
            </span>
          </div>
          
          <div className="flex justify-between">
            <span className="text-gray-600 dark:text-gray-400">FID:</span>
            <span className={`font-medium ${
              metrics.fid !== null && metrics.fid <= 100 ? 'text-green-600' :
              metrics.fid !== null && metrics.fid <= 300 ? 'text-yellow-600' : 'text-red-600'
            }`}>
              {formatMetric(metrics.fid)}
            </span>
          </div>
          
          <div className="flex justify-between">
            <span className="text-gray-600 dark:text-gray-400">FCP:</span>
            <span className={`font-medium ${
              metrics.fcp !== null && metrics.fcp <= 1800 ? 'text-green-600' :
              metrics.fcp !== null && metrics.fcp <= 3000 ? 'text-yellow-600' : 'text-red-600'
            }`}>
              {formatMetric(metrics.fcp)}
            </span>
          </div>
          
          <div className="flex justify-between">
            <span className="text-gray-600 dark:text-gray-400">LCP:</span>
            <span className={`font-medium ${
              metrics.lcp !== null && metrics.lcp <= 2500 ? 'text-green-600' :
              metrics.lcp !== null && metrics.lcp <= 4000 ? 'text-yellow-600' : 'text-red-600'
            }`}>
              {formatMetric(metrics.lcp)}
            </span>
          </div>
          
          <div className="flex justify-between">
            <span className="text-gray-600 dark:text-gray-400">TTFB:</span>
            <span className={`font-medium ${
              metrics.ttfb !== null && metrics.ttfb <= 800 ? 'text-green-600' :
              metrics.ttfb !== null && metrics.ttfb <= 1800 ? 'text-yellow-600' : 'text-red-600'
            }`}>
              {formatMetric(metrics.ttfb)}
            </span>
          </div>
          
          <div className="flex justify-between">
            <span className="text-gray-600 dark:text-gray-400">Load Time:</span>
            <span className="font-medium text-blue-600">
              {formatMetric(metrics.loadTime)}
            </span>
          </div>
          
          <div className="flex justify-between">
            <span className="text-gray-600 dark:text-gray-400">Render Time:</span>
            <span className="font-medium text-blue-600">
              {formatMetric(metrics.renderTime)}
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

<<<<<<< HEAD
export default PerformanceMonitor;
=======
export default PerformanceMonitor;
>>>>>>> origin/merge-pr-12271
