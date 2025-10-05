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
  const [metrics, setMetrics] = useState<PerformanceMetrics>({});
  const [isVisible, setIsVisible] = useState(false);
=======
  const [metrics, setMetrics] = useState<PerformanceMetrics | null>(null);
  const [alerts, setAlerts] = useState<PerformanceAlert[]>([]);
  const [thresholds, setThresholds] =
    useState<PerformanceThresholds>(defaultThresholds);
  const [isMonitoring, setIsMonitoring] = useState(false);
  const [history, setHistory] = useState<PerformanceMetrics[]>([]);

  // Check performance against thresholds and generate alerts
<<<<<<< HEAD
  const checkPerformanceAlerts = useCallback(
    (currentMetrics: PerformanceMetrics) => {
      const newAlerts: PerformanceAlert[] = [];

      // Check load time
      if (currentMetrics.loadTime > thresholds.loadTime) {
        newAlerts.push({
          id: `load-time-${Date.now()}`,
          type: "warning",
          message: `Load time (${currentMetrics.loadTime.toFixed(0)}ms) exceeds threshold (${thresholds.loadTime}ms)`,
          timestamp: Date.now(),
          resolved: false,
        });
      }

      // Check First Contentful Paint
      if (
        currentMetrics.firstContentfulPaint > thresholds.firstContentfulPaint
      ) {
        newAlerts.push({
          id: `fcp-${Date.now()}`,
          type: "warning",
          message: `First Contentful Paint (${currentMetrics.firstContentfulPaint.toFixed(0)}ms) exceeds threshold (${thresholds.firstContentfulPaint}ms)`,
          timestamp: Date.now(),
          resolved: false,
        });
      }

      // Check Largest Contentful Paint
      if (
        currentMetrics.largestContentfulPaint >
        thresholds.largestContentfulPaint
      ) {
        newAlerts.push({
          id: `lcp-${Date.now()}`,
          type: "warning",
          message: `Largest Contentful Paint (${currentMetrics.largestContentfulPaint.toFixed(0)}ms) exceeds threshold (${thresholds.largestContentfulPaint}ms)`,
          timestamp: Date.now(),
          resolved: false,
        });
      }

      // Check Cumulative Layout Shift
      if (
        currentMetrics.cumulativeLayoutShift > thresholds.cumulativeLayoutShift
      ) {
        newAlerts.push({
          id: `cls-${Date.now()}`,
          type: "error",
          message: `Cumulative Layout Shift (${currentMetrics.cumulativeLayoutShift.toFixed(3)}) exceeds threshold (${thresholds.cumulativeLayoutShift})`,
          timestamp: Date.now(),
          resolved: false,
        });
      }

      // Check memory usage
      if (currentMetrics.memoryUsage > thresholds.memoryUsage) {
        newAlerts.push({
          id: `memory-${Date.now()}`,
          type: "warning",
          message: `Memory usage (${(currentMetrics.memoryUsage / 1024 / 1024).toFixed(2)}MB) exceeds threshold (${(thresholds.memoryUsage / 1024 / 1024).toFixed(2)}MB)`,
          timestamp: Date.now(),
          resolved: false,
        });
      }

      if (newAlerts.length > 0) {
        setAlerts((prev) => [...prev, ...newAlerts]);
      }
    },
    [thresholds],
  );

  // Performance measurement utilities
  const measurePerformance = useCallback(async () => {
    if (!("performance" in window)) {
      console.warn("Performance API not supported");
      return;
    }

    try {
      // Get navigation timing
      const navigation = performance.getEntriesByType(
        "navigation",
      )[0] as PerformanceNavigationTiming;

      // Get paint timing
      const paintEntries = performance.getEntriesByType("paint");
      const fcp =
        paintEntries.find((entry) => entry.name === "first-contentful-paint")
          ?.startTime || 0;
      const lcp =
        paintEntries.find((entry) => entry.name === "largest-contentful-paint")
          ?.startTime || 0;

      // Get layout shift
      const clsEntries = performance.getEntriesByType(
        "layout-shift",
      ) as PerformanceEntry[];
      const cls = clsEntries.reduce((sum, entry) => {
        const layoutShiftEntry = entry as PerformanceEntry & { value?: number };
        return sum + (layoutShiftEntry.value || 0);
      }, 0);

      // Get memory usage (if available)
      const memory = (
        performance as Performance & { memory?: { usedJSHeapSize: number } }
      ).memory;
      const memoryUsage = memory ? memory.usedJSHeapSize : 0;

      // Get resource timing
      const resources = performance.getEntriesByType("resource");
      const networkRequests = resources.length;

      // Calculate render time
      const renderStart = performance.now();
      await new Promise((resolve) => requestAnimationFrame(resolve));
      const renderTime = performance.now() - renderStart;

      const newMetrics: PerformanceMetrics = {
        loadTime: navigation.loadEventEnd - navigation.loadEventStart,
        firstContentfulPaint: fcp,
        largestContentfulPaint: lcp,
        cumulativeLayoutShift: cls,
        firstInputDelay: 0, // Would need to measure this separately
        timeToInteractive:
          navigation.domInteractive - navigation.fetchStart || 0,
        bundleSize: 0, // Would need to calculate from actual bundle
        memoryUsage,
        renderTime,
        networkRequests,
      };

      setMetrics(newMetrics);
      setHistory((prev) => [...prev.slice(-9), newMetrics]);

      // Check for alerts
      checkPerformanceAlerts(newMetrics);
    } catch (error) {
      console.error("Error measuring performance:", error);
    }
  }, [checkPerformanceAlerts]);

  // Start monitoring
  const startMonitoring = useCallback(() => {
    setIsMonitoring(true);
    measurePerformance();

    // Set up periodic monitoring
    const interval = setInterval(measurePerformance, 5000);
    return () => clearInterval(interval);
  }, [measurePerformance]);

  // Clear alerts
  const clearAlerts = useCallback(() => {
    setAlerts([]);
  }, []);
=======
>>>>>>> 4ba245a45fc5 (Checkpoint before follow-up message)

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
>>>>>>> origin/backup-main-20250928-214405

  useEffect(() => {
    // Only run in development
    if (process.env.NODE_ENV !== 'development') return;

    const observer = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      entries.forEach((entry) => {
        if (entry.entryType === 'largest-contentful-paint') {
          setMetrics(prev => ({ ...prev, lcp: entry.startTime }));
        } else if (entry.entryType === 'first-input') {
          setMetrics(prev => ({ ...prev, fid: (entry as any).processingStart - entry.startTime }));
        } else if (entry.entryType === 'layout-shift' && !(entry as any).hadRecentInput) {
          setMetrics(prev => ({ ...prev, cls: (prev.cls || 0) + (entry as any).value }));
        }
      });
    });

    observer.observe({ entryTypes: ['largest-contentful-paint', 'first-input', 'layout-shift'] });

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
    <div style={{
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
    }}>
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