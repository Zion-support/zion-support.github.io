import React, { useEffect, useState } from 'react';

interface PerformanceMetrics {
  loadTime: number;
  domContentLoaded: number;
  firstPaint: number;
  firstContentfulPaint: number;
  largestContentfulPaint: number;
  firstInputDelay: number;
  cumulativeLayoutShift: number;
}

interface PerformanceMonitorProps {
  showInProduction?: boolean;
}

const PerformanceMonitor: React.FC<PerformanceMonitorProps> = ({ 
  showInProduction = false 
}) => {
  const [metrics, setMetrics] = useState<PerformanceMetrics | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const isDev = process.env.NODE_ENV === 'development';
    if (!isDev && !showInProduction) return;

    const collectMetrics = () => {
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      const paintEntries = performance.getEntriesByType('paint');
      
      const firstPaint = paintEntries.find(entry => entry.name === 'first-paint');
      const firstContentfulPaint = paintEntries.find(entry => entry.name === 'first-contentful-paint');

      const metrics: PerformanceMetrics = {
        loadTime: navigation.loadEventEnd - navigation.loadEventStart,
        domContentLoaded: navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart,
        firstPaint: firstPaint ? firstPaint.startTime : 0,
        firstContentfulPaint: firstContentfulPaint ? firstContentfulPaint.startTime : 0,
        largestContentfulPaint: 0,
        firstInputDelay: 0,
        cumulativeLayoutShift: 0,
      };

      // Get LCP
      const lcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const lastEntry = entries[entries.length - 1];
        setMetrics(prev => prev ? { ...prev, largestContentfulPaint: lastEntry.startTime } : null);
      });
      lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });

      // Get FID
      const fidObserver = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          setMetrics(prev => prev ? { 
            ...prev, 
            firstInputDelay: (entry as any).processingStart - entry.startTime 
          } : null);
        }
      });
      fidObserver.observe({ entryTypes: ['first-input'] });

      // Get CLS
      let clsValue = 0;
      const clsObserver = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (!(entry as any).hadRecentInput) {
            clsValue += (entry as any).value;
            setMetrics(prev => prev ? { ...prev, cumulativeLayoutShift: clsValue } : null);
          }
        }
      });
      clsObserver.observe({ entryTypes: ['layout-shift'] });

      setMetrics(metrics);
    };

    // Wait for page to load
    if (document.readyState === 'complete') {
      collectMetrics();
    } else {
      window.addEventListener('load', collectMetrics);
    }

    return () => {
      window.removeEventListener('load', collectMetrics);
    };
  }, [showInProduction]);

  if (!metrics) return null;

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <button
        onClick={() => setIsVisible(!isVisible)}
        className="bg-slate-800 text-white px-3 py-2 rounded-lg text-xs font-mono hover:bg-slate-700 transition-colors"
      >
        Perf
      </button>
      
      {isVisible && (
        <div className="absolute bottom-12 right-0 bg-slate-800 text-white p-4 rounded-lg shadow-lg min-w-64 text-xs font-mono">
          <div className="space-y-1">
            <div>Load Time: {metrics.loadTime.toFixed(2)}ms</div>
            <div>DOM Ready: {metrics.domContentLoaded.toFixed(2)}ms</div>
            <div>First Paint: {metrics.firstPaint.toFixed(2)}ms</div>
            <div>FCP: {metrics.firstContentfulPaint.toFixed(2)}ms</div>
            <div>LCP: {metrics.largestContentfulPaint.toFixed(2)}ms</div>
            <div>FID: {metrics.firstInputDelay.toFixed(2)}ms</div>
            <div>CLS: {metrics.cumulativeLayoutShift.toFixed(4)}</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PerformanceMonitor;