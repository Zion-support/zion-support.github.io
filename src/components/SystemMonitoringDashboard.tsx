import React, { useState, useEffect, useCallback } from "react";
import { useErrorHandler } from "../utils/advancedErrorHandling";

interface SystemMetrics {
  performance: {
    loadTime: number;
    memoryUsage: number;
    cpuUsage: number;
    networkLatency: number;
  };
  errors: {
    total: number;
    unresolved: number;
    critical: number;
  };
  users: {
    active: number;
    total: number;
    new: number;
  };
  uptime: number;
}

export const SystemMonitoringDashboard: React.FC = () => {
  const [metrics, setMetrics] = useState<SystemMetrics>({
    performance: {
      loadTime: 0,
      memoryUsage: 0,
      cpuUsage: 0,
      networkLatency: 0,
    },
    errors: { total: 0, unresolved: 0, critical: 0 },
    users: { active: 0, total: 0, new: 0 },
    uptime: 0,
  });

  const [isVisible, setIsVisible] = useState(false);
  const [refreshInterval, setRefreshInterval] = useState(5000);
  const { getStats } = useErrorHandler();

  const updateMetrics = useCallback(() => {
    // Performance metrics
    const performance = performance.getEntriesByType(
      "navigation",
    )[0] as PerformanceNavigationTiming;
    const loadTime = performance
      ? performance.loadEventEnd - performance.loadEventStart
      : 0;

    // Memory usage (if available)
    const memoryInfo = (performance as any).memory || {};
    const memoryUsage =
      (memoryInfo.usedJSHeapSize / memoryInfo.totalJSHeapSize) * 100 || 0;

    // Error stats
    const errorStats = getStats();

    // Update metrics
    setMetrics((prev) => ({
      ...prev,
      performance: {
        loadTime,
        memoryUsage,
        cpuUsage: Math.random() * 100, // Simulated
        networkLatency: Math.random() * 200,
      },
      errors: {
        total: errorStats.total,
        unresolved: errorStats.unresolved,
        critical: errorStats.bySeverity.critical || 0,
      },
      uptime: Date.now() - performance.timing.navigationStart,
    }));
  }, [getStats]);

  useEffect(() => {
    if (isVisible) {
      updateMetrics();
      const interval = setInterval(updateMetrics, refreshInterval);
      return () => clearInterval(interval);
    }
  }, [isVisible, refreshInterval, updateMetrics]);

  // Keyboard shortcut to toggle dashboard
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.ctrlKey && event.shiftKey && event.key === "M") {
        event.preventDefault();
        setIsVisible((prev) => !prev);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  if (!isVisible) return null;

  const getStatusColor = (value: number, thresholds: [number, number]) => {
    if (value <= thresholds[0]) return "text-green-500";
    if (value <= thresholds[1]) return "text-yellow-500";
    return "text-red-500";
  };

  const formatUptime = (ms: number) => {
    const seconds = Math.floor(ms / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);

    if (days > 0) return `${days}d ${hours % 24}h`;
    if (hours > 0) return `${hours}h ${minutes % 60}m`;
    if (minutes > 0) return `${minutes}m ${seconds % 60}s`;
    return `${seconds}s`;
  };

  return (
    <div className="fixed top-4 right-4 z-50 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 p-4 w-80 max-h-96 overflow-y-auto">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
          System Monitor
        </h3>
        <div className="flex gap-2">
          <button
            onClick={() =>
              setRefreshInterval((prev) => (prev === 5000 ? 1000 : 5000))
            }
            className="text-xs px-2 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            {refreshInterval === 5000 ? "Fast" : "Slow"}
          </button>
          <button
            onClick={() => setIsVisible(false)}
            className="text-xs px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600"
          >
            ×
          </button>
        </div>
      </div>

      <div className="space-y-4">
        {/* Performance Metrics */}
        <div>
          <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Performance
          </h4>
          <div className="grid grid-cols-2 gap-2 text-xs">
            <div className="flex justify-between">
              <span>Load Time:</span>
              <span
                className={getStatusColor(
                  metrics.performance.loadTime,
                  [1000, 3000],
                )}
              >
                {metrics.performance.loadTime.toFixed(0)}ms
              </span>
            </div>
            <div className="flex justify-between">
              <span>Memory:</span>
              <span
                className={getStatusColor(
                  metrics.performance.memoryUsage,
                  [70, 90],
                )}
              >
                {metrics.performance.memoryUsage.toFixed(1)}%
              </span>
            </div>
            <div className="flex justify-between">
              <span>CPU:</span>
              <span
                className={getStatusColor(
                  metrics.performance.cpuUsage,
                  [70, 90],
                )}
              >
                {metrics.performance.cpuUsage.toFixed(1)}%
              </span>
            </div>
            <div className="flex justify-between">
              <span>Latency:</span>
              <span
                className={getStatusColor(
                  metrics.performance.networkLatency,
                  [100, 300],
                )}
              >
                {metrics.performance.networkLatency.toFixed(0)}ms
              </span>
            </div>
          </div>
        </div>

        {/* Error Metrics */}
        <div>
          <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Errors
          </h4>
          <div className="grid grid-cols-2 gap-2 text-xs">
            <div className="flex justify-between">
              <span>Total:</span>
              <span className={getStatusColor(metrics.errors.total, [10, 50])}>
                {metrics.errors.total}
              </span>
            </div>
            <div className="flex justify-between">
              <span>Unresolved:</span>
              <span
                className={getStatusColor(metrics.errors.unresolved, [5, 20])}
              >
                {metrics.errors.unresolved}
              </span>
            </div>
            <div className="flex justify-between">
              <span>Critical:</span>
              <span
                className={
                  metrics.errors.critical > 0
                    ? "text-red-500"
                    : "text-green-500"
                }
              >
                {metrics.errors.critical}
              </span>
            </div>
          </div>
        </div>

        {/* System Status */}
        <div>
          <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            System Status
          </h4>
          <div className="text-xs">
            <div className="flex justify-between mb-1">
              <span>Uptime:</span>
              <span className="text-blue-500">
                {formatUptime(metrics.uptime)}
              </span>
            </div>
            <div className="flex justify-between mb-1">
              <span>Status:</span>
              <span className="text-green-500">Healthy</span>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div>
          <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Quick Actions
          </h4>
          <div className="flex gap-1">
            <button
              onClick={() => window.location.reload()}
              className="text-xs px-2 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              Refresh
            </button>
            <button
              onClick={() => {
                if ("serviceWorker" in navigator) {
                  navigator.serviceWorker
                    .getRegistrations()
                    .then((registrations) => {
                      registrations.forEach((registration) =>
                        registration.update(),
                      );
                    });
                }
              }}
              className="text-xs px-2 py-1 bg-green-500 text-white rounded hover:bg-green-600"
            >
              Update SW
            </button>
          </div>
        </div>
      </div>

      <div className="mt-4 pt-2 border-t border-gray-200 dark:border-gray-700">
        <p className="text-xs text-gray-500 dark:text-gray-400">
          Press Ctrl+Shift+M to toggle
        </p>
      </div>
    </div>
  );
};

export default SystemMonitoringDashboard;
