import React, { useEffect, useState } from 'react';
import { Activity, Zap, Clock, AlertTriangle } from 'lucide-react';

interface PerformanceMetrics {
  loadTime: number;
  firstContentfulPaint: number;
  largestContentfulPaint: number;
  cumulativeLayoutShift: number;
  firstInputDelay: number;
  timeToInteractive: number;
}

const PerformanceMonitor: React.FC = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only show in development or if explicitly enabled
    const shouldShow = process.env.NODE_ENV === 'development' || 
                      localStorage.getItem('showPerformanceMonitor') === 'true';
    
    if (!shouldShow) return;

    const measurePerformance = () => {
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      const paintEntries = performance.getEntriesByType('paint');
      
      const loadTime = navigation.loadEventEnd - navigation.loadEventStart;
      const firstContentfulPaint = paintEntries.find(entry => entry.name === 'first-contentful-paint')?.startTime || 0;
      const largestContentfulPaint = paintEntries.find(entry => entry.name === 'largest-contentful-paint')?.startTime || 0;
      
      // Get Core Web Vitals
      let cumulativeLayoutShift = 0;
      let firstInputDelay = 0;
      let timeToInteractive = 0;

      if ('PerformanceObserver' in window) {
        // CLS
        const clsObserver = new PerformanceObserver((list) => {
          for (const entry of list.getEntries()) {
            if (!(entry as any).hadRecentInput) {
              cumulativeLayoutShift += (entry as any).value;
            }
          }
        });
        
        try {
          clsObserver.observe({ entryTypes: ['layout-shift'] });
        } catch (e) {
          // CLS not supported
        }

        // FID
        const fidObserver = new PerformanceObserver((list) => {
          for (const entry of list.getEntries()) {
            firstInputDelay = (entry as any).processingStart - (entry as any).startTime;
          }
        });
        
        try {
          fidObserver.observe({ entryTypes: ['first-input'] });
        } catch (e) {
          // FID not supported
        }
      }

      // TTI estimation
      timeToInteractive = navigation.domContentLoadedEventEnd - navigation.navigationStart;

      setMetrics({
        loadTime,
        firstContentfulPaint,
        largestContentfulPaint,
        cumulativeLayoutShift,
        firstInputDelay,
        timeToInteractive
      });
    };

    // Measure after page load
    if (document.readyState === 'complete') {
      measurePerformance();
    } else {
      window.addEventListener('load', measurePerformance);
    }

    // Toggle visibility with Ctrl+Shift+P
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.shiftKey && e.key === 'P') {
        e.preventDefault();
        setIsVisible(prev => !prev);
        localStorage.setItem('showPerformanceMonitor', (!isVisible).toString());
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('load', measurePerformance);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isVisible]);

  if (!isVisible || !metrics) return null;

  const getPerformanceScore = (value: number, thresholds: { good: number; poor: number }) => {
    if (value <= thresholds.good) return { score: 'Good', color: 'text-green-400' };
    if (value <= thresholds.poor) return { score: 'Needs Improvement', color: 'text-yellow-400' };
    return { score: 'Poor', color: 'text-red-400' };
  };

  const formatTime = (ms: number) => `${ms.toFixed(2)}ms`;
  const formatScore = (value: number) => value.toFixed(3);

  return (
    <div className="fixed bottom-4 right-4 z-50 bg-slate-800/90 backdrop-blur-sm border border-cyan-400/20 rounded-lg p-4 max-w-sm">
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-white font-semibold flex items-center">
          <Activity className="w-4 h-4 mr-2 text-cyan-400" />
          Performance
        </h3>
        <button
          onClick={() => setIsVisible(false)}
          className="text-gray-400 hover:text-white transition-colors"
        >
          ×
        </button>
      </div>

      <div className="space-y-2 text-sm">
        {/* Load Time */}
        <div className="flex justify-between items-center">
          <span className="text-gray-300">Load Time:</span>
          <span className="text-white">{formatTime(metrics.loadTime)}</span>
        </div>

        {/* First Contentful Paint */}
        <div className="flex justify-between items-center">
          <span className="text-gray-300">FCP:</span>
          <span className="text-white">{formatTime(metrics.firstContentfulPaint)}</span>
        </div>

        {/* Largest Contentful Paint */}
        <div className="flex justify-between items-center">
          <span className="text-gray-300">LCP:</span>
          <span className="text-white">{formatTime(metrics.largestContentfulPaint)}</span>
        </div>

        {/* Cumulative Layout Shift */}
        <div className="flex justify-between items-center">
          <span className="text-gray-300">CLS:</span>
          <span className={getPerformanceScore(metrics.cumulativeLayoutShift, { good: 0.1, poor: 0.25 }).color}>
            {formatScore(metrics.cumulativeLayoutShift)}
          </span>
        </div>

        {/* First Input Delay */}
        <div className="flex justify-between items-center">
          <span className="text-gray-300">FID:</span>
          <span className={getPerformanceScore(metrics.firstInputDelay, { good: 100, poor: 300 }).color}>
            {formatTime(metrics.firstInputDelay)}
          </span>
        </div>

        {/* Time to Interactive */}
        <div className="flex justify-between items-center">
          <span className="text-gray-300">TTI:</span>
          <span className="text-white">{formatTime(metrics.timeToInteractive)}</span>
        </div>
      </div>

      <div className="mt-3 pt-3 border-t border-gray-600">
        <div className="text-xs text-gray-400">
          Press Ctrl+Shift+P to toggle
        </div>
      </div>
    </div>
  );
};

export default PerformanceMonitor;