import React, { useEffect, useState, useCallback, useMemo } from 'react';

interface PerformanceMetrics {
  lcp?: number;
  fid?: number;
  cls?: number;
  fcp?: number;
  ttfb?: number;
  tbt?: number;
}

interface AdvancedPerformanceMonitorProps {
  children: React.ReactNode;
  threshold?: {
    lcp?: number;
    fid?: number;
    cls?: number;
  };
}

const AdvancedPerformanceMonitor: React.FC<AdvancedPerformanceMonitorProps> = ({
  children,
  threshold = {
    lcp: 2500,
    fid: 100,
    cls: 0.1
  }
}) => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({});
  const [isMonitoring, setIsMonitoring] = useState(false);

  const measurePerformance = useCallback(() => {
    if (typeof window === 'undefined' || !('performance' in window)) {
      return;
    }

    const observer = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      
      entries.forEach((entry) => {
        if (entry.entryType === 'largest-contentful-paint') {
          setMetrics(prev => ({ ...prev, lcp: entry.startTime }));
        } else if (entry.entryType === 'first-input') {
          setMetrics(prev => ({ ...prev, fid: (entry as any).processingStart - entry.startTime }));
        } else if (entry.entryType === 'layout-shift') {
          if (!(entry as any).hadRecentInput) {
            setMetrics(prev => ({ 
              ...prev, 
              cls: (prev.cls || 0) + (entry as any).value 
            }));
          }
        }
      });
    });

    try {
      observer.observe({ entryTypes: ['largest-contentful-paint', 'first-input', 'layout-shift'] });
    } catch (e) {
      console.warn('Performance Observer not supported');
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isMonitoring) {
      const cleanup = measurePerformance();
      return cleanup;
    }
  }, [isMonitoring, measurePerformance]);

  const performanceScore = useMemo(() => {
    let score = 100;
    
    if (metrics.lcp && metrics.lcp > (threshold.lcp || 2500)) {
      score -= 30;
    }
    if (metrics.fid && metrics.fid > (threshold.fid || 100)) {
      score -= 20;
    }
    if (metrics.cls && metrics.cls > (threshold.cls || 0.1)) {
      score -= 20;
    }
    
    return Math.max(0, score);
  }, [metrics, threshold]);

  const startMonitoring = useCallback(() => {
    setIsMonitoring(true);
  }, []);

  const stopMonitoring = useCallback(() => {
    setIsMonitoring(false);
  }, []);

  return (
    <div>
      {children}
      {process.env.NODE_ENV === 'development' && (
        <div className="fixed bottom-4 right-4 bg-black/80 text-white p-4 rounded-lg text-sm">
          <div>Performance Score: {performanceScore}/100</div>
          <div>LCP: {metrics.lcp?.toFixed(0)}ms</div>
          <div>FID: {metrics.fid?.toFixed(0)}ms</div>
          <div>CLS: {metrics.cls?.toFixed(3)}</div>
          <div className="mt-2 space-x-2">
            <button
              onClick={isMonitoring ? stopMonitoring : startMonitoring}
              className="px-2 py-1 bg-blue-600 rounded text-xs"
            >
              {isMonitoring ? 'Stop' : 'Start'} Monitor
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdvancedPerformanceMonitor;