import React, { useEffect } from 'react';

interface PerformanceData {
  domContentLoaded: number;
  loadComplete: number;
  totalLoadTime: number;
  firstPaint: number;
  firstContentfulPaint: number;
  resourceCount: number;
  memory?: {
    used: number;
    total: number;
    limit: number;
  } | null;
}

interface PerformanceMonitorProps {
  showMetrics?: boolean;
  logMetrics?: boolean;
  onThresholdExceeded?: (metrics: PerformanceMetrics) => void;
}

const PerformanceMonitor: React.FC<PerformanceMonitorProps> = ({ 
  showMetrics = false, 
  logMetrics = false, 
  onThresholdExceeded 
}) => {
  const [metrics, setMetrics] = useState<PerformanceMetrics | null>(null);

// Declare Performance and PerformanceNavigationTiming types for TypeScript
declare global {
  interface Performance {
    getEntriesByType(type: string): PerformanceEntry[];
  }
  
  interface PerformanceNavigationTiming extends PerformanceEntry {
    domContentLoadedEventStart: number;
    domContentLoadedEventEnd: number;
    loadEventStart: number;
    loadEventEnd: number;
    fetchStart: number;
  }
}

const PerformanceMonitor: React.FC<PerformanceMonitorProps> = ({ onPerformanceData }) => {
  useEffect(() => {
    // Only run on client side
    if (typeof window === 'undefined' || typeof performance === 'undefined') {
      return;
    }

    const measurePerformance = () => {
      try {
        const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
        const paint = performance.getEntriesByType('paint');
        
        if (navigationEntry) {
          const newMetrics = {
            loadTime: navigationEntry.loadEventEnd - navigationEntry.loadEventStart,
            renderTime: navigationEntry.domContentLoadedEventEnd - navigationEntry.domContentLoadedEventStart,
            memoryUsage: (window.performance as any).memory?.usedJSHeapSize || 0
          };
          
          setMetrics(newMetrics);
          
          if (logMetrics) {
            console.log('Performance metrics:', newMetrics);
          }
          
          if (onThresholdExceeded) {
            onThresholdExceeded(newMetrics);
          }
        }

        // Log performance data in development
        if (process.env.NODE_ENV === 'development') {
          console.log('Performance Metrics:', performanceData);
        }
      } catch (error) {
        console.warn('Performance monitoring failed:', error);
      }
    };

    // Measure performance after page load
    if (document.readyState === 'complete') {
      measurePerformance();
    } else {
      window.addEventListener('load', measurePerformance);
    }
  }, [logMetrics, onThresholdExceeded]);

  if (!showMetrics || !metrics) return null;

const getScoreColor = (value: number, thresholds: { good: number; poor: number }) => {
if (value <= thresholds.good) return 'text-green-600'
  ';'    if (value <= thresholds.poor) return
  'text-yellow-600';'    return'
  'text-red-600';'  };'
  const getScoreText = (value: number, thresholds: { good: number; poor: number }) => {
    if (value <= thresholds.good) return
  'Good';'    if (value <= thresholds.poor) return'
  'Needs Improvement';'    return'
  'Poor';'  };'return (
    <div className="fixed bottom-4 left-4 bg-white shadow-lg rounded-lg p-4 border z-50 max-w-xs">"      <h3 className="text-sm font-semibold mb-3 text-gray-900">Performance Metrics</h3>"      "      <div className="space-y-2 text-xs">"        {metrics.fcp && ("          <div className="flex justify-between">"            <span className="text-gray-600">FCP: </span>"            <span className={getScoreColor(metrics.fcp, { good: 1800, poor: 3000 })}>"              {Math.round(metrics.fcp)}ms ({getScoreText(metrics.fcp, { good: 1800, poor: 3000 })})</span>
          </div>
        )}
        
        {metrics.lcp && (
<div className="flex justify-between">"            <span className="text-gray-600">LCP: </span>"            <span className={getScoreColor(metrics.lcp, { good: 2500, poor: 4000 })}>"              {Math.round(metrics.lcp)}ms ({getScoreText(metrics.lcp, { good: 2500, poor: 4000 })})</span>"
          </div>
        )}
        
        {metrics.fid && (
<div className="flex justify-between">"            <span className="text-gray-600">FID: </span>"            <span className={getScoreColor(metrics.fid, { good: 100, poor: 300 })}>"              {Math.round(metrics.fid)}ms ({getScoreText(metrics.fid, { good: 100, poor: 300 })})</span>"
          </div>
        )}
        
        {metrics.cls && (
<div className="flex justify-between">"            <span className="text-gray-600">CLS: </span>"            <span className={getScoreColor(metrics.cls, { good: 0.1, poor: 0.25 })}>"              {metrics.cls.toFixed(3)} ({getScoreText(metrics.cls, { good: 0.1, poor: 0.25 })})</span>"
          </div>
        )}
        
        {metrics.ttfb && (
<div className="flex justify-between">"            <span className="text-gray-600">TTFB: </span>"            <span className={getScoreColor(metrics.ttfb, { good: 800, poor: 1800 })}>"              {Math.round(metrics.ttfb)}ms ({getScoreText(metrics.ttfb, { good: 800, poor: 1800 })})</span>"
          </div>
        )}
      </div>

      <div className="mt-3 pt-2 border-t border-gray-200">
        <button
          onClick={() => setIsVisible(false)}
          className="text-xs text-gray-500 hover:text-gray-700"
        >
          Hide
        </button>
      </div>
    </div>
  );
};
export default PerformanceMonitor;