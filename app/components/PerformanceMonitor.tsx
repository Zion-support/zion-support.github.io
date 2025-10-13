import React, { useEffect, useState } from 'react';

interface PerformanceMetrics {
  loadTime: number;
  domContentLoaded: number;
  firstPaint: number;
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
    // Only show in development or when debug flag is set
    const shouldShow = process.env.NODE_ENV === 'development' || 
                      localStorage.getItem('debug-performance') === 'true';
    
    if (!shouldShow) return;

    const measurePerformance = () => {
      if (typeof window === 'undefined' || !window.performance) return;

      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      const paintEntries = performance.getEntriesByType('paint');
      
      const firstPaint = paintEntries.find(entry => entry.name === 'first-paint');
      const firstContentfulPaint = paintEntries.find(entry => entry.name === 'first-contentful-paint');

      // Get LCP
      let largestContentfulPaint = 0;
      const lcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const lastEntry = entries[entries.length - 1];
        largestContentfulPaint = lastEntry.startTime;
      });
      lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });

      // Get CLS
      let cumulativeLayoutShift = 0;
      const clsObserver = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (!(entry as any).hadRecentInput) {
            cumulativeLayoutShift += (entry as any).value;
          }
        }
      });
      clsObserver.observe({ entryTypes: ['layout-shift'] });

      // Get FID
      let firstInputDelay = 0;
      const fidObserver = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          firstInputDelay = (entry as any).processingStart - entry.startTime;
        }
      });
      fidObserver.observe({ entryTypes: ['first-input'] });

      // Calculate TTI (simplified)
      const timeToInteractive = navigation.domContentLoadedEventEnd - navigation.navigationStart;

      const performanceMetrics: PerformanceMetrics = {
        loadTime: navigation.loadEventEnd - navigation.navigationStart,
        domContentLoaded: navigation.domContentLoadedEventEnd - navigation.navigationStart,
        firstPaint: firstPaint ? firstPaint.startTime : 0,
        firstContentfulPaint: firstContentfulPaint ? firstContentfulPaint.startTime : 0,
        largestContentfulPaint,
        cumulativeLayoutShift,
        firstInputDelay,
        timeToInteractive,
      };

      setMetrics(performanceMetrics);

      // Cleanup observers
      setTimeout(() => {
        lcpObserver.disconnect();
        clsObserver.disconnect();
        fidObserver.disconnect();
      }, 5000);
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
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('load', measurePerformance);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  if (!isVisible || !metrics) return null;

  const getScoreColor = (value: number, thresholds: { good: number; poor: number }) => {
    if (value <= thresholds.good) return 'text-green-400';
    if (value <= thresholds.poor) return 'text-yellow-400';
    return 'text-red-400';
  };

  return (
    <div className="fixed bottom-4 right-4 bg-slate-800/90 backdrop-blur-md border border-slate-700/50 rounded-lg p-4 text-white text-xs font-mono z-50 max-w-sm">
      <div className="flex justify-between items-center mb-2">
        <h3 className="text-sm font-semibold">Performance Monitor</h3>
        <button
          onClick={() => setIsVisible(false)}
          className="text-gray-400 hover:text-white"
        >
          ×
        </button>
      </div>
      
      <div className="space-y-1">
        <div className="flex justify-between">
          <span>Load Time:</span>
          <span className={getScoreColor(metrics.loadTime, { good: 2000, poor: 4000 })}>
            {metrics.loadTime.toFixed(0)}ms
          </span>
        </div>
        
        <div className="flex justify-between">
          <span>DOM Ready:</span>
          <span className={getScoreColor(metrics.domContentLoaded, { good: 1000, poor: 2000 })}>
            {metrics.domContentLoaded.toFixed(0)}ms
          </span>
        </div>
        
        <div className="flex justify-between">
          <span>First Paint:</span>
          <span className={getScoreColor(metrics.firstPaint, { good: 1000, poor: 2000 })}>
            {metrics.firstPaint.toFixed(0)}ms
          </span>
        </div>
        
        <div className="flex justify-between">
          <span>FCP:</span>
          <span className={getScoreColor(metrics.firstContentfulPaint, { good: 1800, poor: 3000 })}>
            {metrics.firstContentfulPaint.toFixed(0)}ms
          </span>
        </div>
        
        <div className="flex justify-between">
          <span>LCP:</span>
          <span className={getScoreColor(metrics.largestContentfulPaint, { good: 2500, poor: 4000 })}>
            {metrics.largestContentfulPaint.toFixed(0)}ms
          </span>
        </div>
        
        <div className="flex justify-between">
          <span>CLS:</span>
          <span className={getScoreColor(metrics.cumulativeLayoutShift, { good: 0.1, poor: 0.25 })}>
            {metrics.cumulativeLayoutShift.toFixed(3)}
          </span>
        </div>
        
        <div className="flex justify-between">
          <span>FID:</span>
          <span className={getScoreColor(metrics.firstInputDelay, { good: 100, poor: 300 })}>
            {metrics.firstInputDelay.toFixed(0)}ms
          </span>
        </div>
        
        <div className="flex justify-between">
          <span>TTI:</span>
          <span className={getScoreColor(metrics.timeToInteractive, { good: 3000, poor: 5000 })}>
            {metrics.timeToInteractive.toFixed(0)}ms
          </span>
        </div>
      </div>
      
      <div className="mt-2 pt-2 border-t border-slate-700/50 text-gray-400">
        Press Ctrl+Shift+P to toggle
      </div>
    </div>
  );
};

export default PerformanceMonitor;
