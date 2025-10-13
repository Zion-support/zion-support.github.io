import React, { useState, useEffect } from 'react';

interface PerformanceMetrics {
  loadTime: number | null;
  fcp: number | null;
  lcp: number | null;
  fid: number | null;
  cls: number | null;
  ttfb: number | null;
}

const PerformanceMonitor: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    loadTime: null,
    fcp: null,
    lcp: null,
    fid: null,
    cls: null,
    ttfb: null,
  });

  useEffect(() => {
    // Only show in development or when explicitly enabled
    const shouldShow = process.env.NODE_ENV === 'development' || 
                      localStorage.getItem('show-performance-monitor') === 'true';
    
    if (!shouldShow) return;

    setIsVisible(true);

    // Measure load time
    const measureLoadTime = () => {
      if (performance.timing) {
        const loadTime = performance.timing.loadEventEnd - performance.timing.navigationStart;
        setMetrics(prev => ({ ...prev, loadTime }));
      }
    };

    // Measure Core Web Vitals
    const measureWebVitals = () => {
      // First Contentful Paint (FCP)
      if ('PerformanceObserver' in window) {
        const observer = new PerformanceObserver((list) => {
          for (const entry of list.getEntries()) {
            if (entry.name === 'first-contentful-paint') {
              setMetrics(prev => ({ ...prev, fcp: entry.startTime }));
            }
          }
        });
        observer.observe({ entryTypes: ['paint'] });

        // Largest Contentful Paint (LCP)
        const lcpObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          const lastEntry = entries[entries.length - 1];
          setMetrics(prev => ({ ...prev, lcp: lastEntry.startTime }));
        });
        lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });

        // First Input Delay (FID)
        const fidObserver = new PerformanceObserver((list) => {
          for (const entry of list.getEntries()) {
            setMetrics(prev => ({ ...prev, fid: entry.processingStart - entry.startTime }));
          }
        });
        fidObserver.observe({ entryTypes: ['first-input'] });

        // Cumulative Layout Shift (CLS)
        let clsValue = 0;
        const clsObserver = new PerformanceObserver((list) => {
          for (const entry of list.getEntries()) {
            if (!(entry as any).hadRecentInput) {
              clsValue += (entry as any).value;
              setMetrics(prev => ({ ...prev, cls: clsValue }));
            }
          }
        });
        clsObserver.observe({ entryTypes: ['layout-shift'] });

        // Time to First Byte (TTFB)
        const ttfb = performance.timing.responseStart - performance.timing.navigationStart;
        setMetrics(prev => ({ ...prev, ttfb }));

        return () => {
          observer.disconnect();
          lcpObserver.disconnect();
          fidObserver.disconnect();
          clsObserver.disconnect();
        };
      }
    };

    // Measure after page load
    if (document.readyState === 'complete') {
      measureLoadTime();
      measureWebVitals();
    } else {
      window.addEventListener('load', () => {
        measureLoadTime();
        measureWebVitals();
      });
    }
  }, []);

  const getMetricColor = (value: number, thresholds: { good: number; poor: number }) => {
    if (value <= thresholds.good) return 'text-green-600';
    if (value <= thresholds.poor) return 'text-yellow-600';
    return 'text-red-600';
  };

  const getCLSColor = (value: number) => {
    if (value <= 0.1) return 'text-green-600';
    if (value <= 0.25) return 'text-yellow-600';
    return 'text-red-600';
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 left-4 z-50">
      <button
        onClick={() => setIsVisible(!isVisible)}
        className="bg-blue-600 text-white px-3 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors"
      >
        {isVisible ? 'Hide' : 'Show'} Performance
      </button>
      
      {isVisible && (
        <div className="absolute bottom-12 left-0 bg-white border border-gray-200 rounded-lg shadow-lg p-4 min-w-80">
          <h3 className="text-lg font-semibold mb-4 text-gray-800">Performance Metrics</h3>
          
          <div className="space-y-3 text-sm">
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Load Time:</span>
              <span className={`font-mono ${metrics.loadTime ? getMetricColor(metrics.loadTime, { good: 1000, poor: 3000 }) : 'text-gray-400'}`}>
                {metrics.loadTime ? `${metrics.loadTime.toFixed(0)}ms` : 'N/A'}
              </span>
            </div>
            
            <div className="flex justify-between items-center">
              <span className="text-gray-600">FCP:</span>
              <span className={`font-mono ${metrics.fcp ? getMetricColor(metrics.fcp, { good: 1800, poor: 3000 }) : 'text-gray-400'}`}>
                {metrics.fcp ? `${metrics.fcp.toFixed(0)}ms` : 'N/A'}
              </span>
            </div>
            
            <div className="flex justify-between items-center">
              <span className="text-gray-600">LCP:</span>
              <span className={`font-mono ${metrics.lcp ? getMetricColor(metrics.lcp, { good: 2500, poor: 4000 }) : 'text-gray-400'}`}>
                {metrics.lcp ? `${metrics.lcp.toFixed(0)}ms` : 'N/A'}
              </span>
            </div>
            
            <div className="flex justify-between items-center">
              <span className="text-gray-600">FID:</span>
              <span className={`font-mono ${metrics.fid ? getMetricColor(metrics.fid, { good: 100, poor: 300 }) : 'text-gray-400'}`}>
                {metrics.fid ? `${metrics.fid.toFixed(0)}ms` : 'N/A'}
              </span>
            </div>
            
            <div className="flex justify-between items-center">
              <span className="text-gray-600">CLS:</span>
              <span className={`font-mono ${metrics.cls !== null ? getCLSColor(metrics.cls) : 'text-gray-400'}`}>
                {metrics.cls !== null ? metrics.cls.toFixed(3) : 'N/A'}
              </span>
            </div>
            
            <div className="flex justify-between items-center">
              <span className="text-gray-600">TTFB:</span>
              <span className={`font-mono ${metrics.ttfb ? getMetricColor(metrics.ttfb, { good: 800, poor: 1800 }) : 'text-gray-400'}`}>
                {metrics.ttfb ? `${metrics.ttfb.toFixed(0)}ms` : 'N/A'}
              </span>
            </div>
          </div>
          
          <div className="space-y-2 mt-4">
        <div className="flex justify-between">
          <span className="text-gray-300">Load Time:</span>
          <span className={getMetricColor(metrics.loadTime, { good: 2000, needsImprovement: 4000 })}>
            {formatMetric(metrics.loadTime)}
          </span>
        </div>
        
        <div className="flex justify-between">
          <span className="text-gray-300">FCP:</span>
          <span className={getMetricColor(metrics.firstContentfulPaint, { good: 1800, needsImprovement: 3000 })}>
            {formatMetric(metrics.firstContentfulPaint)}
          </span>
        </div>
        
        <div className="flex justify-between">
          <span className="text-gray-300">LCP:</span>
          <span className={getMetricColor(metrics.largestContentfulPaint, { good: 2500, needsImprovement: 4000 })}>
            {formatMetric(metrics.largestContentfulPaint)}
          </span>
        </div>
        
        <div className="flex justify-between">
          <span className="text-gray-300">FID:</span>
          <span className={getMetricColor(metrics.firstInputDelay, { good: 100, needsImprovement: 300 })}>
            {formatMetric(metrics.firstInputDelay)}
          </span>
        </div>
        
        <div className="flex justify-between">
          <span className="text-gray-300">CLS:</span>
          <span className={getMetricColor(metrics.cumulativeLayoutShift, { good: 0.1, needsImprovement: 0.25 })}>
            {formatMetric(metrics.cumulativeLayoutShift, '')}
          </span>
        </div>
        
        <div className="flex justify-between">
          <span className="text-gray-300">TTFB:</span>
          <span className={getMetricColor(metrics.timeToFirstByte, { good: 200, needsImprovement: 600 })}>
            {formatMetric(metrics.timeToFirstByte)}
          </span>
        </div>
        
        {metrics.memoryUsage !== null && (
          <div className="flex justify-between">
            <span className="text-gray-300">Memory:</span>
            <span className={getMetricColor(metrics.memoryUsage, { good: 50, needsImprovement: 100 })}>
              {formatMetric(metrics.memoryUsage, 'MB')}
            </span>
          </div>
        )}
      </div>
      
        <div className="mt-3 pt-3 border-t border-white/20 text-xs text-gray-400">
          Press Ctrl+Shift+P to toggle
        </div>
      </div>
      )}
    </>
=======
              <span className={`font-mono ${metrics.ttfb ? getMetricColor(metrics.ttfb, { good: 200, poor: 500 }) : 'text-gray-400'}`}>
                {metrics.ttfb ? `${metrics.ttfb.toFixed(0)}ms` : 'N/A'}
              </span>
            </div>
          </div>
          
          <div className="mt-4 pt-3 border-t border-gray-200">
            <div className="text-xs text-gray-500">
              <div className="flex justify-between">
                <span>Green: Good</span>
                <span>Yellow: Needs Improvement</span>
                <span>Red: Poor</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
>>>>>>> cursor/website-audit-and-update-with-deployment-3531
  );
};

export default PerformanceMonitor;