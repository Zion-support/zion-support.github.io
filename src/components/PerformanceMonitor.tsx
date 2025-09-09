import React, { memo, useEffect, useState } from 'react';

interface PerformanceMetrics {
  fcp: number; // First Contentful Paint
  lcp: number; // Largest Contentful Paint
  fid: number; // First Input Delay
  cls: number; // Cumulative Layout Shift
  ttfb: number; // Time to First Byte
  loadTime: number;
  memoryUsage?: number;
}

interface PerformanceMonitorProps {
  enableLogging?: boolean;
  enableAlerts?: boolean;
  threshold?: {
    fcp: number;
    lcp: number;
    fid: number;
    cls: number;
  };
}

const PerformanceMonitor = memo<PerformanceMonitorProps>(({ 
  enableLogging = false, 
  enableAlerts = true,
  threshold = {
    fcp: 1800, // 1.8s
    lcp: 2500, // 2.5s
    fid: 100,  // 100ms
    cls: 0.1   // 0.1
  }
}) => {
  const [metrics, setMetrics] = useState<PerformanceMetrics | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const measurePerformance = () => {
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      const paintEntries = performance.getEntriesByType('paint');
      
      const fcp = paintEntries.find(entry => entry.name === 'first-contentful-paint')?.startTime || 0;
      const lcp = performance.getEntriesByType('largest-contentful-paint')[0]?.startTime || 0;
      
      // Get memory usage if available
      const memory = (performance as any).memory;
      
      const newMetrics: PerformanceMetrics = {
        fcp,
        lcp,
        fid: 0, // Would need to measure with PerformanceObserver
        cls: 0, // Would need to measure with PerformanceObserver
        ttfb: navigation.responseStart - navigation.requestStart,
        loadTime: navigation.loadEventEnd - navigation.navigationStart,
        memoryUsage: memory ? Math.round(memory.usedJSHeapSize / 1024 / 1024) : undefined
      };

      setMetrics(newMetrics);

      if (enableLogging) {
        console.log('Performance Metrics:', newMetrics);
      }

      // Check thresholds and show alerts
      if (enableAlerts) {
        const alerts: string[] = [];
        
        if (newMetrics.fcp > threshold.fcp) {
          alerts.push(`FCP is ${newMetrics.fcp.toFixed(0)}ms (threshold: ${threshold.fcp}ms)`);
        }
        if (newMetrics.lcp > threshold.lcp) {
          alerts.push(`LCP is ${newMetrics.lcp.toFixed(0)}ms (threshold: ${threshold.lcp}ms)`);
        }
        if (newMetrics.fid > threshold.fid) {
          alerts.push(`FID is ${newMetrics.fid.toFixed(0)}ms (threshold: ${threshold.fid}ms)`);
        }
        if (newMetrics.cls > threshold.cls) {
          alerts.push(`CLS is ${newMetrics.cls.toFixed(3)} (threshold: ${threshold.cls})`);
        }

        if (alerts.length > 0) {
          console.warn('Performance alerts:', alerts);
        }
      }
    };

    // Measure after page load
    if (document.readyState === 'complete') {
      measurePerformance();
    } else {
      window.addEventListener('load', measurePerformance);
    }

    // Set up Performance Observer for FID and CLS
    if ('PerformanceObserver' in window) {
      // First Input Delay
      const fidObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry: any) => {
          if (entry.processingStart && entry.startTime) {
            const fid = entry.processingStart - entry.startTime;
            setMetrics(prev => prev ? { ...prev, fid } : null);
          }
        });
      });
      
      try {
        fidObserver.observe({ entryTypes: ['first-input'] });
      } catch (e) {
        // FID not supported
      }

      // Cumulative Layout Shift
      let clsValue = 0;
      const clsObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry: any) => {
          if (!entry.hadRecentInput) {
            clsValue += entry.value;
            setMetrics(prev => prev ? { ...prev, cls: clsValue } : null);
          }
        });
      });
      
      try {
        clsObserver.observe({ entryTypes: ['layout-shift'] });
      } catch (e) {
        // CLS not supported
      }
    }

    return () => {
      window.removeEventListener('load', measurePerformance);
    };
  }, [enableLogging, enableAlerts, threshold]);

  if (!metrics) return null;

  const getScoreColor = (value: number, threshold: number, reverse = false) => {
    const isGood = reverse ? value <= threshold : value <= threshold;
    return isGood ? 'text-green-400' : 'text-red-400';
  };

  return (
    <>
      {/* Performance indicator */}
      <div className="fixed top-4 right-4 z-50">
        <button
          onClick={() => setIsVisible(!isVisible)}
          className="bg-white/10 backdrop-blur-sm text-white px-3 py-2 rounded-lg border border-white/20 hover:bg-white/20 transition-all"
          title="Performance Metrics"
        >
          📊
        </button>
      </div>

      {/* Performance panel */}
      {isVisible && (
        <div className="fixed top-16 right-4 z-50 bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20 text-white max-w-sm">
          <div className="flex justify-between items-center mb-3">
            <h3 className="font-semibold">Performance Metrics</h3>
            <button
              onClick={() => setIsVisible(false)}
              className="text-white/60 hover:text-white"
            >
              ✕
            </button>
          </div>
          
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span>First Contentful Paint:</span>
              <span className={getScoreColor(metrics.fcp, threshold.fcp)}>
                {metrics.fcp.toFixed(0)}ms
              </span>
            </div>
            
            <div className="flex justify-between">
              <span>Largest Contentful Paint:</span>
              <span className={getScoreColor(metrics.lcp, threshold.lcp)}>
                {metrics.lcp.toFixed(0)}ms
              </span>
            </div>
            
            <div className="flex justify-between">
              <span>First Input Delay:</span>
              <span className={getScoreColor(metrics.fid, threshold.fid)}>
                {metrics.fid.toFixed(0)}ms
              </span>
            </div>
            
            <div className="flex justify-between">
              <span>Cumulative Layout Shift:</span>
              <span className={getScoreColor(metrics.cls, threshold.cls, true)}>
                {metrics.cls.toFixed(3)}
              </span>
            </div>
            
            <div className="flex justify-between">
              <span>Time to First Byte:</span>
              <span className="text-blue-300">
                {metrics.ttfb.toFixed(0)}ms
              </span>
            </div>
            
            <div className="flex justify-between">
              <span>Total Load Time:</span>
              <span className="text-blue-300">
                {metrics.loadTime.toFixed(0)}ms
              </span>
            </div>
            
            {metrics.memoryUsage && (
              <div className="flex justify-between">
                <span>Memory Usage:</span>
                <span className="text-blue-300">
                  {metrics.memoryUsage}MB
                </span>
              </div>
            )}
          </div>
          
          <div className="mt-3 pt-3 border-t border-white/20">
            <button
              onClick={() => {
                setMetrics(null);
                window.location.reload();
              }}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-3 rounded text-sm"
            >
              Refresh Metrics
            </button>
          </div>
        </div>
      )}
    </>
  );
});

PerformanceMonitor.displayName = 'PerformanceMonitor';

export default PerformanceMonitor;