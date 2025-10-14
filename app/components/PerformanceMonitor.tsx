import React, { useEffect, useState, ReactNode } from 'react';

interface PerformanceMetrics {
  fcp: number | null;
  lcp: number | null;
  fid: number | null;
  cls: number | null;
  ttfb: number | null;
}

interface PerformanceMonitorProps {
  children: ReactNode;
  showDetails?: boolean;
}

const PerformanceMonitor: React.FC<PerformanceMonitorProps> = ({ children, showDetails = false }) => {
  const [metrics, setMetrics] = useState<PerformanceMetrics | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only run in development or when explicitly enabled
    if (process.env.NODE_ENV !== 'development' && !localStorage.getItem('debug-performance')) {
      return;
    }

    const measurePerformance = () => {
      // Get Core Web Vitals
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.entryType === 'paint') {
            if (entry.name === 'first-contentful-paint') {
              setMetrics(prev => ({
                ...prev,
                fcp: entry.startTime
              }));
            }
          } else if (entry.entryType === 'largest-contentful-paint') {
            setMetrics(prev => ({
              ...prev,
              lcp: entry.startTime
            }));
          } else if (entry.entryType === 'first-input') {
            setMetrics(prev => ({
              ...prev,
              fid: (entry as any).processingStart - entry.startTime
            }));
          } else if (entry.entryType === 'layout-shift') {
            setMetrics(prev => ({
              ...prev,
              cls: (prev?.cls || 0) + (entry as any).value
            }));
          }
        }
      });

      observer.observe({ entryTypes: ['paint', 'largest-contentful-paint', 'first-input', 'layout-shift'] });

      // Get TTFB
      const navigationEntry = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      if (navigationEntry) {
        setMetrics(prev => ({
          ...prev,
          ttfb: navigationEntry.responseStart - navigationEntry.requestStart
        }));
      }

      return () => observer.disconnect();
    };

    const cleanup = measurePerformance();

    // Show performance monitor after 2 seconds
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 2000);

    return () => {
      if (cleanup) cleanup();
      clearTimeout(timer);
    };
  }, []);

  if (!isVisible || !showDetails) {
    return <>{children}</>;
  }

  return (
    <>
      {children}
      <div className="fixed bottom-4 right-4 bg-slate-800/90 backdrop-blur-sm rounded-lg p-4 text-white text-xs font-mono border border-cyan-500/20 z-50">
        <div className="flex items-center justify-between mb-2">
          <span className="text-cyan-400 font-semibold">Performance Monitor</span>
          <button
            onClick={() => setIsVisible(false)}
            className="text-gray-400 hover:text-white"
          >
            ×
          </button>
        </div>
        <div className="space-y-1">
          {metrics?.fcp && (
            <div>FCP: {metrics.fcp.toFixed(2)}ms</div>
          )}
          {metrics?.lcp && (
            <div>LCP: {metrics.lcp.toFixed(2)}ms</div>
          )}
          {metrics?.fid && (
            <div>FID: {metrics.fid.toFixed(2)}ms</div>
          )}
          {metrics?.cls && (
            <div>CLS: {metrics.cls.toFixed(4)}</div>
          )}
          {metrics?.ttfb && (
            <div>TTFB: {metrics.ttfb.toFixed(2)}ms</div>
          )}
        </div>
      </div>
    </>
  );
};

export default PerformanceMonitor;