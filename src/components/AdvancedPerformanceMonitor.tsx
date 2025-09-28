import React, { useState, useEffect, useCallback, useMemo } from "react";
import {
  Activity,
  Zap,
  TrendingUp,
  AlertTriangle,
  CheckCircle,
  Clock,
  Database,
  Cpu,
} from "lucide-react";

interface PerformanceMetrics {
  loadTime: number;
  firstContentfulPaint: number;
  largestContentfulPaint: number;
  cumulativeLayoutShift: number;
  firstInputDelay: number;
  timeToInteractive: number;
  bundleSize: number;
  memoryUsage: number;
  renderTime: number;
  networkRequests: number;
}

interface PerformanceAlert {
  id: string;
  type: "warning" | "error" | "info" | "success";
  message: string;
  timestamp: number;
  resolved: boolean;
}

interface PerformanceThresholds {
  loadTime: number;
  firstContentfulPaint: number;
  largestContentfulPaint: number;
  cumulativeLayoutShift: number;
  firstInputDelay: number;
  bundleSize: number;
  memoryUsage: number;
}

const defaultThresholds: PerformanceThresholds = {
  loadTime: 3000, // 3 seconds
  firstContentfulPaint: 1800, // 1.8 seconds
  largestContentfulPaint: 2500, // 2.5 seconds
  cumulativeLayoutShift: 0.1,
  firstInputDelay: 100, // 100ms
  bundleSize: 500 * 1024, // 500KB
  memoryUsage: 50 * 1024 * 1024, // 50MB
};

export const AdvancedPerformanceMonitor: React.FC = () => {
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

  useEffect(() => {
    if (isMonitoring) {
      const cleanup = startMonitoring();
      return cleanup;
    }
  }, [isMonitoring, startMonitoring]);

  const grade = getPerformanceGrade(performanceScore);

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
          <Activity className="w-6 h-6" />
          Advanced Performance Monitor
        </h2>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setIsMonitoring(!isMonitoring)}
            className={`px-4 py-2 rounded-md font-medium transition-colors ${
              isMonitoring
                ? "bg-red-500 text-white hover:bg-red-600"
                : "bg-green-500 text-white hover:bg-green-600"
            }`}
          >
            {isMonitoring ? "Stop" : "Start"} Monitoring
          </button>
          <button
            onClick={measurePerformance}
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
          >
            Measure Now
          </button>
        </div>
      </div>

      {/* Performance Score */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-2">
          <span className="text-lg font-semibold text-gray-700 dark:text-gray-300">
            Performance Score
          </span>
          <span className={`text-3xl font-bold ${grade.color}`}>
            {performanceScore}/100
          </span>
        </div>
        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
          <div
            className={`h-3 rounded-full transition-all duration-500 ${
              performanceScore >= 80
                ? "bg-green-500"
                : performanceScore >= 60
                  ? "bg-yellow-500"
                  : "bg-red-500"
            }`}
            style={{ width: `${performanceScore}%` }}
          />
        </div>
        <div className="text-center mt-2">
          <span className={`text-2xl font-bold ${grade.color}`}>
            Grade: {grade.grade}
          </span>
        </div>
      </div>

      {/* Metrics Grid */}
      {metrics && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
          <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
            <div className="flex items-center gap-2 mb-2">
              <Clock className="w-5 h-5 text-blue-500" />
              <span className="font-semibold text-gray-700 dark:text-gray-300">
                Load Time
              </span>
            </div>
            <div className="text-2xl font-bold text-gray-900 dark:text-white">
              {formatTime(metrics.loadTime)}
            </div>
            <div className="text-sm text-gray-500">
              Threshold: {formatTime(thresholds.loadTime)}
            </div>
          </div>

          <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
            <div className="flex items-center gap-2 mb-2">
              <Zap className="w-5 h-5 text-yellow-500" />
              <span className="font-semibold text-gray-700 dark:text-gray-300">
                First Paint
              </span>
            </div>
            <div className="text-2xl font-bold text-gray-900 dark:text-white">
              {formatTime(metrics.firstContentfulPaint)}
            </div>
            <div className="text-sm text-gray-500">
              Threshold: {formatTime(thresholds.firstContentfulPaint)}
            </div>
          </div>

          <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
            <div className="flex items-center gap-2 mb-2">
              <TrendingUp className="w-5 h-5 text-green-500" />
              <span className="font-semibold text-gray-700 dark:text-gray-300">
                Largest Paint
              </span>
            </div>
            <div className="text-2xl font-bold text-gray-900 dark:text-white">
              {formatTime(metrics.largestContentfulPaint)}
            </div>
            <div className="text-sm text-gray-500">
              Threshold: {formatTime(thresholds.largestContentfulPaint)}
            </div>
          </div>

          <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
            <div className="flex items-center gap-2 mb-2">
              <AlertTriangle className="w-5 h-5 text-red-500" />
              <span className="font-semibold text-gray-700 dark:text-gray-300">
                Layout Shift
              </span>
            </div>
            <div className="text-2xl font-bold text-gray-900 dark:text-white">
              {metrics.cumulativeLayoutShift.toFixed(3)}
            </div>
            <div className="text-sm text-gray-500">
              Threshold: {thresholds.cumulativeLayoutShift}
            </div>
          </div>

          <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
            <div className="flex items-center gap-2 mb-2">
              <Database className="w-5 h-5 text-purple-500" />
              <span className="font-semibold text-gray-700 dark:text-gray-300">
                Memory Usage
              </span>
            </div>
            <div className="text-2xl font-bold text-gray-900 dark:text-white">
              {formatBytes(metrics.memoryUsage)}
            </div>
            <div className="text-sm text-gray-500">
              Threshold: {formatBytes(thresholds.memoryUsage)}
            </div>
          </div>

          <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
            <div className="flex items-center gap-2 mb-2">
              <Cpu className="w-5 h-5 text-indigo-500" />
              <span className="font-semibold text-gray-700 dark:text-gray-300">
                Render Time
              </span>
            </div>
            <div className="text-2xl font-bold text-gray-900 dark:text-white">
              {formatTime(metrics.renderTime)}
            </div>
            <div className="text-sm text-gray-500">
              Network: {metrics.networkRequests} requests
            </div>
          </div>
        </div>
      )}

      {/* Alerts */}
      {alerts.length > 0 && (
        <div className="mb-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-300">
              Performance Alerts ({alerts.filter((a) => !a.resolved).length})
            </h3>
            <button
              onClick={clearAlerts}
              className="text-sm text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
            >
              Clear All
            </button>
          </div>
          <div className="space-y-2">
            {alerts.map((alert) => (
              <div
                key={alert.id}
                className={`p-3 rounded-lg border-l-4 ${
                  alert.type === "error"
                    ? "border-red-500 bg-red-50 dark:bg-red-900/20"
                    : alert.type === "warning"
                      ? "border-yellow-500 bg-yellow-50 dark:bg-yellow-900/20"
                      : alert.type === "info"
                        ? "border-blue-500 bg-blue-50 dark:bg-blue-900/20"
                        : "border-green-500 bg-green-50 dark:bg-green-900/20"
                } ${alert.resolved ? "opacity-50" : ""}`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    {alert.type === "error" && (
                      <AlertTriangle className="w-4 h-4 text-red-500" />
                    )}
                    {alert.type === "warning" && (
                      <AlertTriangle className="w-4 h-4 text-yellow-500" />
                    )}
                    {alert.type === "info" && (
                      <CheckCircle className="w-4 h-4 text-blue-500" />
                    )}
                    {alert.type === "success" && (
                      <CheckCircle className="w-4 h-4 text-green-500" />
                    )}
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      {alert.message}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-gray-500">
                      {new Date(alert.timestamp).toLocaleTimeString()}
                    </span>
                    {!alert.resolved && (
                      <button
                        onClick={() => resolveAlert(alert.id)}
                        className="text-xs text-blue-500 hover:text-blue-700"
                      >
                        Resolve
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* History Chart Placeholder */}
      {history.length > 1 && (
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-4">
            Performance History
          </h3>
          <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
            <div className="text-sm text-gray-500 text-center">
              Performance metrics over time (last {history.length} measurements)
            </div>
            {/* In a real implementation, you would render a chart here */}
          </div>
        </div>
      )}

      {/* Threshold Configuration */}
      <div className="border-t pt-6">
        <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-4">
          Threshold Configuration
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {Object.entries(thresholds).map(([key, value]) => (
            <div key={key} className="space-y-2">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                {key
                  .replace(/([A-Z])/g, " $1")
                  .replace(/^./, (str) => str.toUpperCase())}
              </label>
              <input
                type="number"
                value={value}
                onChange={(e) =>
                  updateThresholds({ [key]: Number(e.target.value) })
                }
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdvancedPerformanceMonitor;
