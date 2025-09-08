import React, { useEffect } from 'react';

interface PerformanceEntry {
  entryType: string;
  startTime: number;
  processingStart?: number;
  value?: number;
  hadRecentInput?: boolean;
}

interface PerformanceObserver {
  observe(options: { entryTypes: string[] }): void;
  disconnect(): void;
}

const PerformanceMonitor: React.FC = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({});
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Monitor Core Web Vitals
    if (typeof window !== 'undefined' && 'performance' in window) {
      // Monitor Largest Contentful Paint (LCP)
      const observer = new (window as { PerformanceObserver: new (callback: (list: { getEntries(): PerformanceEntry[] }) => void) => PerformanceObserver }).PerformanceObserver((list: { getEntries(): PerformanceEntry[] }) => {
        for (const entry of list.getEntries()) {
          if (entry.entryType === 'largest-contentful-paint') {
            // eslint-disable-next-line no-console
            console.log('LCP:', entry.startTime);
          }
        }
      });
      
      try {
        observer.observe({ entryTypes: ['largest-contentful-paint'] });
      } catch {
        // Fallback for browsers that don't support LCP
      }

      // Monitor First Input Delay (FID)
      const fidObserver = new (window as { PerformanceObserver: new (callback: (list: { getEntries(): PerformanceEntry[] }) => void) => PerformanceObserver }).PerformanceObserver((list: { getEntries(): PerformanceEntry[] }) => {
        for (const entry of list.getEntries()) {
          if (entry.entryType === 'first-input') {
            // eslint-disable-next-line no-console
            console.log('FID:', entry.processingStart - entry.startTime);
          }
        }
      });

      try {
        fidObserver.observe({ entryTypes: ['first-input'] });
      } catch {
        // Fallback for browsers that don't support FID
      }

      // Monitor Cumulative Layout Shift (CLS)
      let clsValue = 0;
      const clsObserver = new (window as { PerformanceObserver: new (callback: (list: { getEntries(): PerformanceEntry[] }) => void) => PerformanceObserver }).PerformanceObserver((list: { getEntries(): PerformanceEntry[] }) => {
        for (const entry of list.getEntries()) {
          if (!entry.hadRecentInput) {
            clsValue += entry.value || 0;
          }
        }
        // eslint-disable-next-line no-console
        console.log('CLS:', clsValue);
      });

      try {
        clsObserver.observe({ entryTypes: ['layout-shift'] });
      } catch {
        // Fallback for browsers that don't support CLS
      }

      return () => {
        observer.disconnect();
        fidObserver.disconnect();
        clsObserver.disconnect();
      };
    }
  }, []);

  if (!isVisible) return null;

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
      
<div className="mt-3 pt-2 border-t border-gray-200">"        <button"          onClick={() => setIsVisible(false)}
          className="text-xs text-gray-500 hover: text-gray-700""        >"          Hide</button>
      </div>
    </div>
  );
};
export default PerformanceMonitor;