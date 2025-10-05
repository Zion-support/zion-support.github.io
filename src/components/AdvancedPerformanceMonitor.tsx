import React, { useEffect, useState, useCallback, useMemo } from 'react';

interface PerformanceMetrics {
  lcp?: number;
  fid?: number;
  cls?: number;
  fcp?: number;
  loadTime?: number;
  memoryUsage?: number;
}

interface PerformanceThresholds {
  loadTime: number;
  firstContentfulPaint: number;
  largestContentfulPaint: number;
  cumulativeLayoutShift: number;
  firstInputDelay: number;
  memoryUsage: number;
}

interface Alert {
  id: string;
  type: 'warning' | 'error';
  message: string;
  resolved: boolean;
}

export const AdvancedPerformanceMonitor: React.FC = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({});
  const [isVisible, setIsVisible] = useState(false);
  const [alerts, setAlerts] = useState<Alert[]>([]);
  const [thresholds, setThresholds] = useState<PerformanceThresholds>({
    loadTime: 3000,
    firstContentfulPaint: 1800,
    largestContentfulPaint: 2500,
    cumulativeLayoutShift: 0.1,
    firstInputDelay: 100,
    memoryUsage: 50 * 1024 * 1024 // 50MB
  });

  // Resolve alert
  const resolveAlert = useCallback((alertId: string) => {
    setAlerts((prev) =>
      prev.map((alert) =>
        alert.id === alertId ? { ...alert, resolved: true } : alert
      )
    );
  }, []);

  // Update thresholds
  const updateThresholds = useCallback(
    (newThresholds: Partial<PerformanceThresholds>) => {
      setThresholds((prev) => ({ ...prev, ...newThresholds }));
    },
    []
  );

  // Calculate performance score
  const performanceScore = useMemo(() => {
    if (!metrics) return 0;
    
    let score = 100;
    if (metrics.loadTime && metrics.loadTime > thresholds.loadTime) score -= 20;
    if (metrics.lcp && metrics.lcp > thresholds.largestContentfulPaint) score -= 20;
    if (metrics.fcp && metrics.fcp > thresholds.firstContentfulPaint) score -= 15;
    if (metrics.cls && metrics.cls > thresholds.cumulativeLayoutShift) score -= 25;
    if (metrics.fid && metrics.fid > thresholds.firstInputDelay) score -= 10;

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

  // Monitor performance
  useEffect(() => {
    if (!isVisible) return;

    const observer = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      entries.forEach((entry) => {
        if (entry.entryType === 'largest-contentful-paint') {
          setMetrics(prev => ({ ...prev, lcp: entry.startTime }));
        } else if (entry.entryType === 'first-input') {
          setMetrics(prev => ({ ...prev, fid: (entry as any).processingStart - entry.startTime }));
        } else if (entry.entryType === 'layout-shift') {
          setMetrics(prev => ({ ...prev, cls: (entry as any).value }));
        } else if (entry.entryType === 'paint' && entry.name === 'first-contentful-paint') {
          setMetrics(prev => ({ ...prev, fcp: entry.startTime }));
        }
      });
    });

    observer.observe({ entryTypes: ['largest-contentful-paint', 'first-input', 'layout-shift', 'paint'] });

    return () => observer.disconnect();
  }, [isVisible]);

  if (!isVisible) {
    return (
      <button
        onClick={() => setIsVisible(true)}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Open Performance Monitor
      </button>
    );
  }

  const grade = getPerformanceGrade(performanceScore);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 max-w-4xl w-full mx-4 max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Performance Monitor</h2>
          <button
            onClick={() => setIsVisible(false)}
            className="text-gray-500 hover:text-gray-700"
          >
            ✕
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="text-lg font-semibold mb-4">Performance Score</h3>
            <div className="text-center">
              <div className={`text-4xl font-bold ${grade.color}`}>
                {grade.grade}
              </div>
              <div className="text-2xl font-semibold text-gray-700">
                {performanceScore}/100
              </div>
            </div>
          </div>

          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="text-lg font-semibold mb-4">Metrics</h3>
            <div className="space-y-2">
              {metrics.loadTime && (
                <div className="flex justify-between">
                  <span>Load Time:</span>
                  <span>{formatTime(metrics.loadTime)}</span>
                </div>
              )}
              {metrics.lcp && (
                <div className="flex justify-between">
                  <span>LCP:</span>
                  <span>{formatTime(metrics.lcp)}</span>
                </div>
              )}
              {metrics.fcp && (
                <div className="flex justify-between">
                  <span>FCP:</span>
                  <span>{formatTime(metrics.fcp)}</span>
                </div>
              )}
              {metrics.cls && (
                <div className="flex justify-between">
                  <span>CLS:</span>
                  <span>{metrics.cls.toFixed(3)}</span>
                </div>
              )}
            </div>
          </div>
        </div>

        {alerts.length > 0 && (
          <div className="mt-6">
            <h3 className="text-lg font-semibold mb-4">Alerts</h3>
            <div className="space-y-2">
              {alerts.map((alert) => (
                <div
                  key={alert.id}
                  className={`p-3 rounded ${
                    alert.type === 'error' ? 'bg-red-100 text-red-800' : 'bg-yellow-100 text-yellow-800'
                  }`}
                >
                  <div className="flex justify-between items-center">
                    <span>{alert.message}</span>
                    {!alert.resolved && (
                      <button
                        onClick={() => resolveAlert(alert.id)}
                        className="text-sm underline"
                      >
                        Resolve
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdvancedPerformanceMonitor;