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

    return () => {
      observer.disconnect();
    };
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
      score -= 20;
    }
    if (metrics.fid && metrics.fid > (threshold.fid || 100)) {
      score -= 20;
    }
    if (metrics.cls && metrics.cls > (threshold.cls || 0.1)) {
      score -= 20;
    }
    
    return Math.max(0, score);
  }, [metrics, threshold]);

  const handleKeyPress = useCallback((event: KeyboardEvent) => {
    if (event.ctrlKey && event.key === 'p') {
      setIsMonitoring(prev => !prev);
    }
  }, []);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [handleKeyPress]);

  return (
    <>
      {children}
      {isMonitoring && (
        <div
          style={{
            position: 'fixed',
            top: '20px',
            right: '20px',
            background: 'rgba(0, 0, 0, 0.8)',
            color: 'white',
            padding: '10px',
            borderRadius: '5px',
            fontSize: '12px',
            zIndex: 9999,
            fontFamily: 'monospace'
          }}
        >
          <div>Performance Score: {performanceScore}/100</div>
          {metrics.lcp && <div>LCP: {metrics.lcp.toFixed(2)}ms</div>}
          {metrics.fid && <div>FID: {metrics.fid.toFixed(2)}ms</div>}
          {metrics.cls && <div>CLS: {metrics.cls.toFixed(3)}</div>}
          <div style={{ fontSize: '10px', marginTop: '5px' }}>
            Press Ctrl+P to toggle
          </div>
        </div>
      )}
    </>
  );
};

export default AdvancedPerformanceMonitor;