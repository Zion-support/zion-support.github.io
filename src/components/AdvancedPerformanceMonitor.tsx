import React, { useEffect, useState } from 'react';

interface PerformanceMetrics {
  lcp?: number;
  fid?: number;
  cls?: number;
  fcp?: number;
  ttfb?: number;
  inp?: number;
}

export const AdvancedPerformanceMonitor: React.FC = () => {
<<<<<<< HEAD

  // Resolve alert
  const resolveAlert = useCallback((alertId: string) => {
    setAlerts((prev) =>
      prev.map((alert) =>
        alert.id === alertId ? { ...alert, resolved: true } : alert,
      ),
    );
  }, []);

  // Update thresholds
  const updateThresholds = useCallback(
    (newThresholds: Partial<PerformanceThresholds>) => {
      setThresholds((prev) => ({ ...prev, ...newThresholds }));
    },
    [],
  );

  // Calculate performance score
  const performanceScore = useMemo(() => {
    if (!metrics) return 0;

    let score = 100;

    // Deduct points for exceeding thresholds
    if (metrics.loadTime > thresholds.loadTime) score -= 20;
    if (metrics.firstContentfulPaint > thresholds.firstContentfulPaint)
      score -= 15;
    if (metrics.largestContentfulPaint > thresholds.largestContentfulPaint)
      score -= 15;
    if (metrics.cumulativeLayoutShift > thresholds.cumulativeLayoutShift)
      score -= 25;
    if (metrics.firstInputDelay > thresholds.firstInputDelay) score -= 10;
    if (metrics.memoryUsage > thresholds.memoryUsage) score -= 15;

    return Math.max(0, score);
  }, [metrics, thresholds]);

  // Get performance grade
  const getPerformanceGrade = useCallback((score: number) => {
    if (score >= 90) return { grade: "A", color: "text-green-500" };
    if (score >= 80) return { grade: "B", color: "text-yellow-500" };
    if (score >= 70) return { grade: "C", color: "text-orange-500" };
    if (score >= 60) return { grade: "D", color: "text-red-500" };
    return { grade: "F", color: "text-red-700" };
  }, []);

  // Format time
  const formatTime = useCallback((ms: number) => {
    if (ms < 1000) return `${ms.toFixed(0)}ms`;
    return `${(ms / 1000).toFixed(2)}s`;
  }, []);

  // Format bytes
  const formatBytes = useCallback((bytes: number) => {
    if (bytes < 1024) return `${bytes} B`;
    if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
    return `${(bytes / 1024 / 1024).toFixed(1)} MB`;
  }, []);
=======
  const [metrics, setMetrics] = useState<PerformanceMetrics>({});
  const [isVisible, setIsVisible] = useState(false);
>>>>>>> 297cd5093a4334c73fbbc60d17002134ef3086c0

  useEffect(() => {
    // Only run in development
    if (process.env.NODE_ENV !== 'development') return;

    const observer = new PerformanceObserver(list => {
      const entries = list.getEntries();
      entries.forEach(entry => {
        if (entry.entryType === 'largest-contentful-paint') {
          setMetrics(prev => ({ ...prev, lcp: entry.startTime }));
        } else if (entry.entryType === 'first-input') {
          setMetrics(prev => ({
            ...prev,
            fid: (entry as any).processingStart - entry.startTime,
          }));
        } else if (
          entry.entryType === 'layout-shift' &&
          !(entry as any).hadRecentInput
        ) {
          setMetrics(prev => ({
            ...prev,
            cls: (prev.cls || 0) + (entry as any).value,
          }));
        }
      });
    });

    observer.observe({
      entryTypes: ['largest-contentful-paint', 'first-input', 'layout-shift'],
    });

    // Toggle visibility with Ctrl+Shift+P
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.shiftKey && e.key === 'P') {
        setIsVisible(prev => !prev);
      }
    };

    window.addEventListener('keydown', handleKeyPress);

    return () => {
      observer.disconnect();
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div
      style={{
        position: 'fixed',
        top: '10px',
        right: '10px',
        background: 'rgba(0, 0, 0, 0.8)',
        color: 'white',
        padding: '10px',
        borderRadius: '5px',
        fontSize: '12px',
        zIndex: 9999,
        fontFamily: 'monospace',
      }}
    >
      <h4>Performance Metrics</h4>
      <div>LCP: {metrics.lcp ? metrics.lcp.toFixed(2) + 'ms' : 'N/A'}</div>
      <div>FID: {metrics.fid ? metrics.fid.toFixed(2) + 'ms' : 'N/A'}</div>
      <div>CLS: {metrics.cls ? metrics.cls.toFixed(3) : 'N/A'}</div>
      <div style={{ marginTop: '10px', fontSize: '10px' }}>
        Press Ctrl+Shift+P to toggle
      </div>
    </div>
  );
};

export default AdvancedPerformanceMonitor;
